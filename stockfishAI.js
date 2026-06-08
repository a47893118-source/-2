class StockfishAI {
    constructor() {
        this.worker = null;
        this.isReady = false;
        this.onBestMoveCallback = null;
        this.stockfishUrl = 'https://cdnjs.cloudflare.com/ajax/libs/stockfish.js/10.0.2/stockfish.js';
        this.init();
    }

    async init() {
        try {
            // Fetch Stockfish from CDN and load it as a Blob URL to avoid local file CORS restrictions
            const response = await fetch(this.stockfishUrl);
            if (!response.ok) throw new Error('CDN response not ok');
            const scriptText = await response.text();
            const blob = new Blob([scriptText], { type: 'application/javascript' });
            this.worker = new Worker(URL.createObjectURL(blob));

            this.worker.onmessage = (event) => {
                const line = event.data;
                // Log commands for debugging in developer console
                // console.log('Stockfish:', line);
                if (line === 'readyok') {
                    this.isReady = true;
                } else if (line.startsWith('bestmove')) {
                    const parts = line.split(' ');
                    const move = parts[1];
                    if (this.onBestMoveCallback && move && move !== '(none)') {
                        // Stockfish sends moves in LAN format, e.g., "e2e4", "e7e8q" (for pawn promotion to queen)
                        this.onBestMoveCallback(move);
                    }
                }
            };

            this.send('uci');
            this.send('isready');
        } catch (e) {
            console.error('Failed to initialize Stockfish worker. Falling back to local minimax.', e);
        }
    }

    send(cmd) {
        if (this.worker) {
            this.worker.postMessage(cmd);
        }
    }

    getBestMove(fen, difficulty, callback) {
        if (!this.worker || !this.isReady) {
            console.warn('Stockfish not ready, cannot get best move. Make sure fallback is used.');
            return false;
        }
        
        this.onBestMoveCallback = callback;
        
        // Map difficulty levels to Stockfish skill levels (0-20) and depths
        let skillLevel = 0;
        let depth = 1;
        
        if (difficulty === 'easy') {
            skillLevel = 0;
            depth = 1;
        } else if (difficulty === 'medium') {
            skillLevel = 8;
            depth = 3;
        } else if (difficulty === 'hard') {
            skillLevel = 20;
            depth = 8;
        }
        
        this.send('ucinewgame');
        this.send(`setoption name Skill Level value ${skillLevel}`);
        this.send('isready');
        this.send(`position fen ${fen}`);
        this.send(`go depth ${depth}`);
        return true;
    }

    terminate() {
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
        }
    }
}
