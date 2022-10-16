import { gameOfLife } from './board.js';
import { changingCellStatus } from './CellsModifying.js';

export const boardLoop = (board) => {
    console.table(board);
    let board2 = changingCellStatus(board);
    let centinel = true;
    for (let i = 0; i < 15; i++) {
        if (centinel) {
            console.table(board);
            board2 = changingCellStatus(board);
            centinel = false;
            continue;
        }
        if (!centinel) {
            console.table(board2);
            board = changingCellStatus(board2);
            centinel = true;
        }
    }
};
boardLoop(gameOfLife);
