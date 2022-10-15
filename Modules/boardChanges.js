//it should have function changingcellstatus using 1st board
//it should return board2
//it should wait 1 second
//it should have function changingcellstatus using 2nd board
//it should return board3
//it should wait 1 second
//function changingcellstatus should use board3 as parameter
//it should return board2(modified from board3)
//it should wait 1 second
//function changingcellstatus should use board2 as parameter
//it should return board3(modified from board2)
//it should wait 1 second
//it should go on like this forever or until all cells die.
import { gameOfLife } from './board.js';
import { changingCellStatus } from './CellsModifying.js';
import {
    countingAliveNeighbours,
    countingDeathNeighbours,
} from './initialGrid.js';
export const boardLoop = (board) => {
    if (centinel) {
        const board3 = changingCellStatus(board);
        let dataBaseAlive = countingAliveNeighbours(board3);
        let dataBaseDead = countingDeathNeighbours(board3);
        changingCellStatus(board3, dataBaseAlive, dataBaseDead);
        centinel = false;
        console.table(changingCellStatus(board3, dataBaseAlive, dataBaseDead));
    }
    if (!centinel) {
        const board2 = changingCellStatus(board);
        let dataBaseAlive = countingAliveNeighbours(board2);
        let dataBaseDeath = countingDeathNeighbours(board2);
        changingCellStatus(board2, dataBaseAlive, dataBaseDead);
        centinel = true;
        console.table(changingCellStatus(board2, dataBaseAlive, dataBaseDead));
        setTimeout(
            console.table(
                changingCellStatus(board2, dataBaseAlive, dataBaseDead)
            ),
            500
        );
    }
};

boardLoop(gameOfLife);
