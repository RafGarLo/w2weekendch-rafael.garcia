import { gameOfLife } from './board.js';

import {
    countingAliveNeighbours,
    countingDeathNeighbours,
} from './initialGrid.js';

export const changingCellStatus = (board) => {
    const dataDeadItems = countingDeathNeighbours(board);
    const dataAliveItems = countingAliveNeighbours(board);
    let board2 = board;
    dataDeadItems.forEach((deathItem) => {
        if (deathItem.countN === 3) {
            board2[deathItem.r][deathItem.c] = 1;
        }
    });
    dataAliveItems.forEach((aliveItem) => {
        if (aliveItem.countN < 2) {
            board2[aliveItem.r][aliveItem.c] = 0;
        }
        if (aliveItem.countN > 3) {
            board2[aliveItem.r][aliveItem.c] = 0;
        }
    });
    return board2;
};
console.table(changingCellStatus(gameOfLife));
