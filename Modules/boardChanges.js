import { changingCellStatus } from './CellsModifying.js';

export const boardLoop = (board) => {
    console.table(board);
    changingCellStatus(board);
};
