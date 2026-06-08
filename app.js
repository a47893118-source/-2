const PIECE_THEME = {
    'bb': 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#000" stroke-linecap="butt"><path d="M9 36c3.4-1 10.1.4 13.5-2 3.4 2.4 10.1 1 13.5 2 0 0 1.6.5 3 2-.7 1-1.6 1-3 .5-3.4-1-10.1.5-13.5-1-3.4 1.5-10.1 0-13.5 1-1.4.5-2.3.5-3-.5 1.4-2 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke="#ececec" stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>'),
    'bk': 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.6V6"/><path fill="#000" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#000" d="M11.5 37a22.3 22.3 0 0 0 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10z"/><path stroke-linejoin="miter" d="M20 8h5"/><path stroke="#ececec" d="M32 29.5s8.5-4 6-9.7C34.1 14 25 18 22.5 24.6v2.1-2.1C20 18 9.9 14 7 19.9c-2.5 5.6 4.8 9 4.8 9"/><path stroke="#ececec" d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/></g></svg>'),
    'bn': 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#000" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#000" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.04-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-1-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-2 2.5-3c1 0 1 3 1 3"/><path fill="#ececec" stroke="#ececec" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0m5.43-9.75a.5 1.5 30 1 1-.86-.5.5 1.5 30 1 1 .86.5"/><path fill="#ececec" stroke="none" d="m24.55 10.4-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34s-5.79-6.64-9.19-7.16z"/></g></svg>'),
    'bp': 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path stroke="#000" stroke-linecap="round" stroke-width="1.5" d="M22.5 9a4 4 0 0 0-3.22 6.38 6.48 6.48 0 0 0-.87 10.65c-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47a6.46 6.46 0 0 0-.87-10.65A4.01 4.01 0 0 0 22.5 9z"/></svg>'),
    'bq': 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g stroke="none"><circle cx="6" cy="12" r="2.75"/><circle cx="14" cy="9" r="2.75"/><circle cx="22.5" cy="8" r="2.75"/><circle cx="31" cy="9" r="2.75"/><circle cx="39" cy="12" r="2.75"/></g><path stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5z"/><path stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" stroke-linecap="butt" d="M11 38.5a35 35 1 0 0 23 0"/><path fill="none" stroke="#ececec" d="M11 29a35 35 1 0 1 23 0m-21.5 2.5h20m-21 3a35 35 1 0 0 22 0m-23 3a35 35 1 0 0 24 0"/></g></svg>'),
    'br': 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linecap="butt" d="M9 39h27v-3H9zm3.5-7 1.5-2.5h17l1.5 2.5zm-.5 4v-4h21v4z"/><path stroke-linecap="butt" stroke-linejoin="miter" d="M14 29.5v-13h17v13z"/><path stroke-linecap="butt" d="M14 16.5 11 14h23l-3 2.5zM11 14V9h4v2h5V9h5v2h5V9h4v5z"/><path fill="none" stroke="#ececec" stroke-linejoin="miter" stroke-width="1" d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23"/></g></svg>'),
    'wb': 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#fff" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>'),
    'wk': 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6M20 8h5"/><path fill="#fff" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#fff" d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10z"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/></g></svg>'),
    'wn': 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#fff" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#fff" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path fill="#000" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0m5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5"/></g></svg>'),
    'wp': 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path fill="#fff" stroke="#000" stroke-linecap="round" stroke-width="1.5" d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"/></svg>'),
    'wq': 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0m16.5-4.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0M41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0M16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0M33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0"/><path stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14z"/><path stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"/></g></svg>'),
    'wr': 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linecap="butt" d="M9 39h27v-3H9zm3-3v-4h21v4zm-1-22V9h4v2h5V9h5v2h5V9h4v5"/><path d="m34 14-3 3H14l-3-3"/><path stroke-linecap="butt" stroke-linejoin="miter" d="M31 17v12.5H14V17"/><path d="m31 29.5 1.5 2.5h-20l1.5-2.5"/><path fill="none" stroke-linejoin="miter" d="M11 14h23"/></g></svg>'),
};

const STARTING_PIECES = { p: 8, n: 2, b: 2, r: 2, q: 1 };
const PIECE_SCORES = { p: 1, n: 3, b: 3, r: 5, q: 9 };
const PIECE_NAMES_KR = { p: '폰', n: '나이트', b: '비숍', r: '룩', q: '퀸', k: '킹' };

// Application State
let chess = new Chess();
let stockfish = null;
let isStockfishOnline = false;
let playerColor = 'w'; // 'w', 'b', or 'random'
let actualPlayerColor = 'w'; // 'w' or 'b'
let difficulty = 'medium'; // 'easy', 'medium', 'hard'
let isFlipped = false; // whether black is at the bottom
let selectedSquare = null;
let gameInProgress = false;
let pendingPromotionMove = null;
let isAiThinking = false;

// DOM Element Selectors
const boardEl = document.getElementById('board');
const setupPanelEl = document.getElementById('setup-panel');
const gamePanelEl = document.getElementById('game-panel');
const engineStatusText = document.getElementById('engine-status-text');
const engineIndicator = document.getElementById('engine-indicator');
const turnDot = document.getElementById('turn-dot');
const statusMsg = document.getElementById('status-msg');
const moveHistoryBody = document.getElementById('move-history-body');
const historyScroll = document.getElementById('history-scroll');
const gameOverOverlay = document.getElementById('game-over-overlay');
const gameOverTitle = document.getElementById('game-over-title');
const gameOverDesc = document.getElementById('game-over-desc');
const promotionOverlay = document.getElementById('promotion-overlay');

const opponentNameEl = document.getElementById('opponent-name');
const opponentAdvantageEl = document.getElementById('opponent-advantage');
const opponentCapturedEl = document.getElementById('opponent-captured');

const userNameEl = document.getElementById('user-name');
const userAdvantageEl = document.getElementById('user-advantage');
const userCapturedEl = document.getElementById('user-captured');

// Initialize Lucide Icons
lucide.createIcons();

// Initialize Stockfish AI
function initStockfish() {
    stockfish = new StockfishAI();
    // Wait for Stockfish worker to ready up
    let checkAttempts = 0;
    const checkInterval = setInterval(() => {
        checkAttempts++;
        if (stockfish && stockfish.isReady) {
            isStockfishOnline = true;
            engineStatusText.textContent = 'Stockfish 엔진 준비 완료 (온라인)';
            engineIndicator.className = 'status-indicator online';
            clearInterval(checkInterval);
        } else if (checkAttempts > 15) {
            // If Stockfish takes too long, proceed with Local fallback warning
            engineStatusText.textContent = 'Stockfish 로딩 지연 - 로컬 AI 사용 가능';
            engineIndicator.className = 'status-indicator';
            clearInterval(checkInterval);
        }
    }, 500);
}

// Render Chessboard
function renderBoard() {
    boardEl.innerHTML = '';
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

    const currentRanks = isFlipped ? [...ranks].reverse() : ranks;
    const currentFiles = isFlipped ? [...files].reverse() : files;

    // Detect check coordinates to highlight
    let checkedKingSquare = null;
    if (chess.in_check()) {
        const turn = chess.turn();
        // Find king square
        const board = chess.board();
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                const p = board[r][c];
                if (p && p.type === 'k' && p.color === turn) {
                    // Convert row/col back to algebraic square
                    const fileSymbol = files[c];
                    const rankSymbol = 8 - r;
                    checkedKingSquare = fileSymbol + rankSymbol;
                    break;
                }
            }
        }
    }

    // Detect last move coordinates to highlight
    let lastMoveFrom = null;
    let lastMoveTo = null;
    const history = chess.history({ verbose: true });
    if (history.length > 0) {
        const lastMove = history[history.length - 1];
        lastMoveFrom = lastMove.from;
        lastMoveTo = lastMove.to;
    }

    for (let r of currentRanks) {
        for (let f of currentFiles) {
            const squareName = f + r;
            const squareDiv = document.createElement('div');
            
            const fileIndex = files.indexOf(f);
            const rankIndex = ranks.indexOf(r);
            const isDarkSquare = (fileIndex + rankIndex) % 2 === 1;

            squareDiv.className = `square ${isDarkSquare ? 'dark' : 'light'}`;
            squareDiv.dataset.square = squareName;

            // Highlight states
            if (squareName === selectedSquare) {
                squareDiv.classList.add('selected');
            }
            if (squareName === lastMoveFrom || squareName === lastMoveTo) {
                squareDiv.classList.add('highlight-last-move');
            }
            if (squareName === checkedKingSquare) {
                squareDiv.classList.add('check');
            }

            // Draw labels
            if (f === currentFiles[0]) {
                const label = document.createElement('span');
                label.className = 'coordinate-label rank';
                label.innerText = r;
                squareDiv.appendChild(label);
            }
            if (r === currentRanks[7]) {
                const label = document.createElement('span');
                label.className = 'coordinate-label file';
                label.innerText = f;
                squareDiv.appendChild(label);
            }

            // Draw pieces
            const piece = chess.get(squareName);
            if (piece) {
                const pieceKey = piece.color + piece.type;
                const img = document.createElement('img');
                img.src = PIECE_THEME[pieceKey];
                img.className = 'piece';
                img.draggable = true;
                img.dataset.piece = pieceKey;
                img.dataset.square = squareName;

                // Event Listeners for drag-and-drop
                img.addEventListener('dragstart', handleDragStart);
                squareDiv.appendChild(img);
            }

            // Setup drop zones and click selectors
            squareDiv.addEventListener('dragover', handleDragOver);
            squareDiv.addEventListener('drop', handleDrop);
            squareDiv.addEventListener('click', handleSquareClick);

            boardEl.appendChild(squareDiv);
        }
    }
}

// Highlight legal moves for the selected piece
function highlightLegalMoves(square) {
    // Clear existing highlights
    const squares = boardEl.querySelectorAll('.square');
    squares.forEach(s => {
        s.classList.remove('legal-target', 'occupied');
    });

    if (!square) return;

    // Check if it is player's turn and they clicked their own piece
    const piece = chess.get(square);
    if (!piece || piece.color !== actualPlayerColor || !gameInProgress || isAiThinking) return;

    const moves = chess.moves({ square: square, verbose: true });
    moves.forEach(m => {
        const targetSquareDiv = boardEl.querySelector(`[data-square="${m.to}"]`);
        if (targetSquareDiv) {
            targetSquareDiv.classList.add('legal-target');
            // Check if destination square is occupied to draw ring instead of dot
            const destPiece = chess.get(m.to);
            if (destPiece) {
                targetSquareDiv.classList.add('occupied');
            }
        }
    });
}

// HTML5 Drag and Drop Handlers
function handleDragStart(e) {
    if (!gameInProgress || isAiThinking) {
        e.preventDefault();
        return;
    }
    const square = e.target.dataset.square;
    const piece = chess.get(square);

    // Only allow dragging player's pieces on player's turn
    if (piece.color !== actualPlayerColor) {
        e.preventDefault();
        return;
    }

    selectedSquare = square;
    highlightLegalMoves(square);
    
    // Add selected class to drag start square
    e.target.parentElement.classList.add('selected');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', square);
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    if (!gameInProgress || isAiThinking) return;

    const fromSquare = e.dataTransfer.getData('text/plain');
    let toSquare = e.target.dataset.square;

    // If drop was on piece image, get parent square data-square
    if (e.target.tagName === 'IMG') {
        toSquare = e.target.parentElement.dataset.square;
    }

    if (fromSquare && toSquare) {
        processPlayerMoveAttempt(fromSquare, toSquare);
    }
}

// Click-to-move Handlers (mobile and alternate control)
function handleSquareClick(e) {
    if (!gameInProgress || isAiThinking) return;

    let targetSquare = e.currentTarget.dataset.square;
    const clickedPiece = chess.get(targetSquare);

    if (selectedSquare) {
        // If they click on legal destination target
        const moves = chess.moves({ square: selectedSquare, verbose: true });
        const isValidMove = moves.some(m => m.to === targetSquare);

        if (isValidMove) {
            processPlayerMoveAttempt(selectedSquare, targetSquare);
            return;
        }
    }

    // Otherwise, select piece of player's color
    if (clickedPiece && clickedPiece.color === actualPlayerColor) {
        selectedSquare = targetSquare;
        renderBoard();
        highlightLegalMoves(targetSquare);
    } else {
        selectedSquare = null;
        renderBoard();
    }
}

// Process player move, detecting promotions
function processPlayerMoveAttempt(from, to) {
    const moves = chess.moves({ square: from, verbose: true });
    const promotionMove = moves.find(m => m.to === to && m.flags.includes('p'));

    if (promotionMove) {
        pendingPromotionMove = { from, to };
        showPromotionOverlay();
    } else {
        makeMove(from, to);
    }
}

// Execute movement
function makeMove(from, to, promotion = null) {
    const moveConfig = { from, to };
    if (promotion) moveConfig.promotion = promotion;

    const move = chess.move(moveConfig);

    if (move) {
        // Play audio
        playMoveSound(move);
        
        selectedSquare = null;
        renderBoard();
        updateGameStatus();
        updateMoveHistory();
        updateCapturedPieces();

        // Trigger AI move if game continues
        if (gameInProgress && chess.turn() !== actualPlayerColor) {
            triggerAIMove();
        }
    } else {
        // Illegal move click/reset
        selectedSquare = null;
        renderBoard();
    }
}

// Sound trigger helper
function playMoveSound(move) {
    if (chess.in_check()) {
        playSound('check');
    } else if (move.flags.includes('c') || move.captured) {
        playSound('capture');
    } else if (move.flags.includes('k') || move.flags.includes('q')) {
        playSound('castle');
    } else {
        playSound('move');
    }
}

// Promotion Selection Popup
function showPromotionOverlay() {
    // Draw pieces for choices
    document.getElementById('promo-q').src = PIECE_THEME[actualPlayerColor + 'q'];
    document.getElementById('promo-r').src = PIECE_THEME[actualPlayerColor + 'r'];
    document.getElementById('promo-b').src = PIECE_THEME[actualPlayerColor + 'b'];
    document.getElementById('promo-n').src = PIECE_THEME[actualPlayerColor + 'n'];

    promotionOverlay.classList.remove('hidden');
}

// Add listeners to promotion choice items
document.querySelectorAll('.promo-choice').forEach(choice => {
    choice.addEventListener('click', (e) => {
        const pieceType = e.currentTarget.dataset.piece;
        promotionOverlay.classList.add('hidden');
        if (pendingPromotionMove) {
            makeMove(pendingPromotionMove.from, pendingPromotionMove.to, pieceType);
            pendingPromotionMove = null;
        }
    });
});

// Trigger Computer (AI) Move
function triggerAIMove() {
    isAiThinking = true;
    turnDot.className = 'status-dot active';
    statusMsg.innerText = '컴퓨터가 생각 중...';

    const fen = chess.fen();
    
    // Add a natural delay so the move isn't instantaneous (which looks mechanical/jarring)
    const startTime = Date.now();

    const applyAIMove = (bestMove) => {
        const elapsed = Date.now() - startTime;
        const delay = Math.max(500 - elapsed, 0); // minimum 500ms think time

        setTimeout(() => {
            let moveResult = null;
            if (typeof bestMove === 'string') {
                const from = bestMove.substring(0, 2);
                const to = bestMove.substring(2, 4);
                const promo = bestMove.length > 4 ? bestMove.substring(4, 5) : undefined;
                moveResult = chess.move({ from, to, promotion: promo });
            } else {
                moveResult = chess.move({
                    from: bestMove.from,
                    to: bestMove.to,
                    promotion: bestMove.promotion
                });
            }

            if (moveResult) {
                playMoveSound(moveResult);
            }

            isAiThinking = false;
            renderBoard();
            updateGameStatus();
            updateMoveHistory();
            updateCapturedPieces();
        }, delay);
    };

    // Attempt Stockfish Web Worker
    let success = false;
    if (isStockfishOnline && stockfish) {
        success = stockfish.getBestMove(fen, difficulty, (bestMoveLan) => {
            applyAIMove(bestMoveLan);
        });
    }

    // Fallback locally if worker unavailable or fails
    if (!success) {
        // Run minimax calculation asynchronously to avoid blocking the main thread
        setTimeout(() => {
            const fallbackMove = getFallbackBestMove(chess, difficulty);
            if (fallbackMove) {
                applyAIMove(fallbackMove);
            } else {
                // Game over or no moves
                isAiThinking = false;
                updateGameStatus();
            }
        }, 50);
    }
}

// Update game status alerts
function updateGameStatus() {
    if (chess.game_over()) {
        gameInProgress = false;
        turnDot.className = 'status-dot';
        playSound('game-over');
        
        let titleText = '게임 종료';
        let descText = '';

        if (chess.in_checkmate()) {
            const winner = chess.turn() === 'w' ? '흑(Black)' : '백(White)';
            titleText = '체크메이트!';
            descText = `${winner}의 승리입니다.`;
            statusMsg.innerText = `체크메이트! ${winner} 승리`;
        } else if (chess.in_draw()) {
            titleText = '무승부 (Draw)';
            statusMsg.innerText = '무승부 대국입니다.';
            if (chess.in_stalemate()) {
                descText = '스테일메이트(Stalemate)로 비겼습니다.';
            } else if (chess.in_threefold_repetition()) {
                descText = '3회 동형반복으로 비겼습니다.';
            } else if (chess.insufficient_material()) {
                descText = '기물 부족으로 비겼습니다.';
            } else {
                descText = '50수 규칙 또는 합의에 의해 비겼습니다.';
            }
        }
        
        showGameOver(titleText, descText);
    } else {
        const turn = chess.turn();
        const activeSideName = turn === 'w' ? '백' : '흑';
        
        if (turn === actualPlayerColor) {
            turnDot.className = 'status-dot active';
            statusMsg.innerText = '당신의 차례입니다.';
        } else {
            turnDot.className = 'status-dot active';
            statusMsg.innerText = '컴퓨터가 생각 중...';
        }
    }
}

// Show GameOver Overlay
function showGameOver(title, desc) {
    gameOverTitle.innerText = title;
    gameOverDesc.innerText = desc;
    gameOverOverlay.classList.remove('hidden');
}

// Hide GameOver Overlay
function hideGameOver() {
    gameOverOverlay.classList.add('hidden');
}

// Update scrollable move log history
function updateMoveHistory() {
    moveHistoryBody.innerHTML = '';
    const history = chess.history({ verbose: true });

    for (let i = 0; i < history.length; i += 2) {
        const moveNum = Math.floor(i / 2) + 1;
        const whiteMove = history[i] ? history[i].san : '';
        const blackMove = history[i + 1] ? history[i + 1].san : '';

        const tr = document.createElement('tr');

        const tdNum = document.createElement('td');
        tdNum.className = 'move-num';
        tdNum.innerText = moveNum + '.';
        tr.appendChild(tdNum);

        const tdWhite = document.createElement('td');
        tdWhite.className = 'move-white';
        tdWhite.innerText = whiteMove;
        tr.appendChild(tdWhite);

        const tdBlack = document.createElement('td');
        tdBlack.className = 'move-black';
        tdBlack.innerText = blackMove;
        tr.appendChild(tdBlack);

        moveHistoryBody.appendChild(tr);
    }

    // Scroll to bottom
    historyScroll.scrollTop = historyScroll.scrollHeight;
}

// Evaluate captured pieces and point indicators
function updateCapturedPieces() {
    const active = { w: { p:0, n:0, b:0, r:0, q:0 }, b: { p:0, n:0, b:0, r:0, q:0 } };
    
    // Count active pieces on board
    const board = chess.board();
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const piece = board[r][c];
            if (piece && piece.type !== 'k') {
                active[piece.color][piece.type]++;
            }
        }
    }
    
    // Captured counts: starting quantity minus active quantity
    const captured = {
        w: {}, // White pieces captured by Black
        b: {}  // Black pieces captured by White
    };
    
    let whiteValue = 0;
    let blackValue = 0;
    
    for (let type in STARTING_PIECES) {
        captured.w[type] = Math.max(0, STARTING_PIECES[type] - active.w[type]);
        captured.b[type] = Math.max(0, STARTING_PIECES[type] - active.b[type]);
        
        whiteValue += active.w[type] * PIECE_SCORES[type];
        blackValue += active.b[type] * PIECE_SCORES[type];
    }

    // Material difference
    const advantage = whiteValue - blackValue; // positive means White leads, negative means Black leads

    // Render list helper
    const renderCapturedList = (listEl, capturedCounts, colorPrefix) => {
        listEl.innerHTML = '';
        const typesOrder = ['q', 'r', 'b', 'n', 'p'];
        
        typesOrder.forEach(type => {
            const count = capturedCounts[type];
            for (let i = 0; i < count; i++) {
                const img = document.createElement('img');
                img.className = 'captured-img';
                img.src = PIECE_THEME[colorPrefix + type];
                img.alt = colorPrefix + type;
                listEl.appendChild(img);
            }
        });
    };

    // Match player colors to render panels correctly
    if (actualPlayerColor === 'w') {
        // User is White, Opponent is Black
        // White panel (User) displays Black pieces captured by White
        renderCapturedList(userCapturedEl, captured.b, 'b');
        // Black panel (AI) displays White pieces captured by Black
        renderCapturedList(opponentCapturedEl, captured.w, 'w');

        if (advantage > 0) {
            userAdvantageEl.innerText = `+${advantage}`;
            opponentAdvantageEl.innerText = '';
        } else if (advantage < 0) {
            userAdvantageEl.innerText = '';
            opponentAdvantageEl.innerText = `+${Math.abs(advantage)}`;
        } else {
            userAdvantageEl.innerText = '';
            opponentAdvantageEl.innerText = '';
        }
    } else {
        // User is Black, Opponent is White
        // User panel (Black) displays White pieces captured by Black
        renderCapturedList(userCapturedEl, captured.w, 'w');
        // Opponent panel (White) displays Black pieces captured by White
        renderCapturedList(opponentCapturedEl, captured.b, 'b');

        if (advantage < 0) {
            userAdvantageEl.innerText = `+${Math.abs(advantage)}`;
            opponentAdvantageEl.innerText = '';
        } else if (advantage > 0) {
            userAdvantageEl.innerText = '';
            opponentAdvantageEl.innerText = `+${advantage}`;
        } else {
            userAdvantageEl.innerText = '';
            opponentAdvantageEl.innerText = '';
        }
    }
}

// New game setups
function startNewGame() {
    chess = new Chess();
    selectedSquare = null;
    pendingPromotionMove = null;
    isAiThinking = false;
    hideGameOver();

    // Resolve color configuration
    if (playerColor === 'random') {
        actualPlayerColor = Math.random() < 0.5 ? 'w' : 'b';
    } else {
        actualPlayerColor = playerColor;
    }

    // Set flip state based on player selection (Player always at the bottom)
    isFlipped = (actualPlayerColor === 'b');

    // Update player panel labels
    userNameEl.innerText = actualPlayerColor === 'w' ? '플레이어 (White)' : '플레이어 (Black)';
    
    const diffLabel = difficulty === 'easy' ? '쉬움' : difficulty === 'medium' ? '보통' : '어려움';
    opponentNameEl.innerText = `컴퓨터 AI (${diffLabel})`;

    gameInProgress = true;

    // Toggle Sidebar Panels
    setupPanelEl.classList.add('hidden');
    gamePanelEl.classList.remove('hidden');

    renderBoard();
    updateGameStatus();
    updateMoveHistory();
    updateCapturedPieces();

    // Play start game sound
    playSound('move');

    // Trigger AI turn first if player selected Black
    if (actualPlayerColor === 'b') {
        triggerAIMove();
    }
}

// Exit back to config screen
function resetToSetup() {
    gameInProgress = false;
    hideGameOver();
    setupPanelEl.classList.remove('hidden');
    gamePanelEl.classList.add('hidden');
}

// User-facing Event Listeners for controls
document.getElementById('start-game-btn').addEventListener('click', startNewGame);
document.getElementById('new-game-btn').addEventListener('click', resetToSetup);
document.getElementById('restart-btn-modal').addEventListener('click', resetToSetup);

document.getElementById('undo-btn').addEventListener('click', () => {
    if (!gameInProgress || isAiThinking) return;
    
    const history = chess.history();
    if (history.length === 0) return;

    // Rollback 2 moves (Player + AI) or 1 move if only Player has moved
    if (actualPlayerColor === 'w' && history.length >= 2) {
        chess.undo();
        chess.undo();
    } else if (actualPlayerColor === 'b' && history.length >= 2) {
        chess.undo();
        chess.undo();
    } else {
        chess.undo();
    }

    selectedSquare = null;
    renderBoard();
    updateGameStatus();
    updateMoveHistory();
    updateCapturedPieces();
    playSound('move');
});

document.getElementById('flip-btn').addEventListener('click', () => {
    isFlipped = !isFlipped;
    renderBoard();
});

document.getElementById('resign-btn').addEventListener('click', () => {
    if (!gameInProgress) return;
    if (confirm('정말 기권하시겠습니까?')) {
        gameInProgress = false;
        playSound('game-over');
        const winner = actualPlayerColor === 'w' ? '흑(Black)' : '백(White)';
        statusMsg.innerText = `기권하셨습니다. 컴퓨터가 승리했습니다.`;
        showGameOver('기권 종료', `당신이 기권하셨습니다. ${winner} 승리!`);
    }
});

// Color button selections
document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
        const targetBtn = e.currentTarget;
        targetBtn.classList.add('active');
        playerColor = targetBtn.dataset.color;
    });
});

// Difficulty selections
document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        const targetBtn = e.currentTarget;
        targetBtn.classList.add('active');
        difficulty = targetBtn.dataset.diff;
    });
});

// Start up routines
initStockfish();
renderBoard();
