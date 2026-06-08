// Piece values for evaluation
const PIECE_VALUES = {
    p: 100,
    n: 320,
    b: 330,
    r: 500,
    q: 900,
    k: 20000
};

// Piece-Square Tables (PST) to guide positional play
// Row 0 is Rank 8 (Black side), Row 7 is Rank 1 (White side)

const pawnPST = [
    [0,  0,  0,  0,  0,  0,  0,  0],
    [50, 50, 50, 50, 50, 50, 50, 50],
    [10, 10, 20, 30, 30, 20, 10, 10],
    [5,  5, 10, 25, 25, 10,  5,  5],
    [0,  0,  0, 20, 20,  0,  0,  0],
    [5, -5,-10,  0,  0,-10, -5,  5],
    [5, 10, 10,-20,-20, 10, 10,  5],
    [0,  0,  0,  0,  0,  0,  0,  0]
];

const knightPST = [
    [-50,-40,-30,-30,-30,-30,-40,-50],
    [-40,-20,  0,  0,  0,  0,-20,-40],
    [-30,  0, 10, 15, 15, 10,  0,-30],
    [-30,  5, 15, 20, 20, 15,  5,-30],
    [-30,  0, 15, 20, 20, 15,  0,-30],
    [-30,  5, 10, 15, 15, 10,  5,-30],
    [-40,-20,  0,  5,  5,  0,-20,-40],
    [-50,-40,-30,-30,-30,-30,-40,-50]
];

const bishopPST = [
    [-20,-10,-10,-10,-10,-10,-10,-20],
    [-10,  0,  0,  0,  0,  0,  0,-10],
    [-10,  0,  5, 10, 10,  5,  0,-10],
    [-10,  5,  5, 10, 10,  5,  5,-10],
    [-10,  0, 10, 10, 10, 10,  0,-10],
    [-10, 10, 10, 10, 10, 10, 10,-10],
    [-10,  5,  0,  0,  0,  0,  5,-10],
    [-20,-10,-10,-10,-10,-10,-10,-20]
];

const rookPST = [
    [0,  0,  0,  0,  0,  0,  0,  0],
    [5, 10, 10, 10, 10, 10, 10,  5],
    [-5,  0,  0,  0,  0,  0,  0, -5],
    [-5,  0,  0,  0,  0,  0,  0, -5],
    [-5,  0,  0,  0,  0,  0,  0, -5],
    [-5,  0,  0,  0,  0,  0,  0, -5],
    [-5,  0,  0,  0,  0,  0,  0, -5],
    [0,  0,  0,  5,  5,  0,  0,  0]
];

const queenPST = [
    [-20,-10,-10, -5, -5,-10,-10,-20],
    [-10,  0,  0,  0,  0,  0,  0,-10],
    [-10,  0,  5,  5,  5,  5,  0,-10],
    [-5,  0,  5,  5,  5,  5,  0, -5],
    [0,  0,  5,  5,  5,  5,  0, -5],
    [-10,  5,  5,  5,  5,  5,  0,-10],
    [-10,  0,  5,  0,  0,  5,  0,-10],
    [-20,-10,-10, -5, -5,-10,-10,-20]
];

const kingPST = [
    [-30,-40,-40,-50,-50,-40,-40,-30],
    [-30,-40,-40,-50,-50,-40,-40,-30],
    [-30,-40,-40,-50,-50,-40,-40,-30],
    [-30,-40,-40,-50,-50,-40,-40,-30],
    [-20,-30,-30,-40,-40,-30,-30,-20],
    [-10,-20,-20,-20,-20,-20,-20,-10],
    [20, 20,  0,  0,  0,  0, 20, 20],
    [20, 30, 10,  0,  0, 10, 30, 20]
];

// Evaluates the board from White's perspective (White positive, Black negative)
function evaluateBoard(chess) {
    let score = 0;
    const board = chess.board();

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const piece = board[r][c];
            if (!piece) continue;

            const type = piece.type;
            const color = piece.color;
            let value = PIECE_VALUES[type];
            let pstValue = 0;

            // Flip index for Black pieces to read the table correctly from their side
            const row = (color === 'w') ? r : (7 - r);

            if (type === 'p') pstValue = pawnPST[row][c];
            else if (type === 'n') pstValue = knightPST[row][c];
            else if (type === 'b') pstValue = bishopPST[row][c];
            else if (type === 'r') pstValue = rookPST[row][c];
            else if (type === 'q') pstValue = queenPST[row][c];
            else if (type === 'k') pstValue = kingPST[row][c];

            const totalVal = value + pstValue;
            
            if (color === 'w') {
                score += totalVal;
            } else {
                score -= totalVal;
            }
        }
    }
    return score;
}

// Minimax with Alpha-Beta pruning
function minimax(chess, depth, alpha, beta, isMaximizing) {
    if (depth === 0 || chess.game_over()) {
        return evaluateBoard(chess);
    }

    const moves = chess.moves({ verbose: true });
    
    // Sort moves: put captures first to trigger earlier alpha-beta cutoffs
    moves.sort((a, b) => {
        const aScore = a.captured ? PIECE_VALUES[a.captured] : 0;
        const bScore = b.captured ? PIECE_VALUES[b.captured] : 0;
        return bScore - aScore;
    });

    if (isMaximizing) {
        let maxEval = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            chess.move(moves[i]);
            const evalResult = minimax(chess, depth - 1, alpha, beta, false);
            chess.undo();
            maxEval = Math.max(maxEval, evalResult);
            alpha = Math.max(alpha, evalResult);
            if (beta <= alpha) break; // Beta cutoff
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let i = 0; i < moves.length; i++) {
            chess.move(moves[i]);
            const evalResult = minimax(chess, depth - 1, alpha, beta, true);
            chess.undo();
            minEval = Math.min(minEval, evalResult);
            beta = Math.min(beta, evalResult);
            if (beta <= alpha) break; // Alpha cutoff
        }
        return minEval;
    }
}

// Returns the best move for the active side as a move object
function getFallbackBestMove(chess, difficulty) {
    const moves = chess.moves({ verbose: true });
    if (moves.length === 0) return null;

    const isMaximizing = (chess.turn() === 'w');

    // Easy mode: 60% chance of a random move, 40% chance of depth-1 minimax
    if (difficulty === 'easy' && Math.random() < 0.6) {
        const randomIndex = Math.floor(Math.random() * moves.length);
        return moves[randomIndex];
    }

    let searchDepth = 1;
    if (difficulty === 'easy') searchDepth = 1;
    else if (difficulty === 'medium') searchDepth = 2;
    else if (difficulty === 'hard') searchDepth = 3;

    let bestMove = null;
    let bestValue = isMaximizing ? -Infinity : Infinity;

    // Shuffle moves slightly to prevent playing the exact same move in identical positions
    moves.sort(() => Math.random() - 0.5);

    // Prioritize captures during ordering
    moves.sort((a, b) => {
        const aScore = a.captured ? PIECE_VALUES[a.captured] : 0;
        const bScore = b.captured ? PIECE_VALUES[b.captured] : 0;
        return bScore - aScore;
    });

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        chess.move(move);
        const boardValue = minimax(chess, searchDepth - 1, -Infinity, Infinity, !isMaximizing);
        chess.undo();

        if (isMaximizing) {
            if (boardValue > bestValue) {
                bestValue = boardValue;
                bestMove = move;
            }
        } else {
            if (boardValue < bestValue) {
                bestValue = boardValue;
                bestMove = move;
            }
        }
    }

    return bestMove;
}
