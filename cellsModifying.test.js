import { gameOfLife } from './Modules/board.js';
import { changingCellStatus } from './Modules/CellsModifying.js';

describe('testing changingCellStatus', () => {
    test('Given a grid with dead and alive cells, result should never have all alive cells due to superpopulation rule', () => {
        let result = changingCellStatus(gameOfLife);
        expect(() => {
            result.every((item) => item === 0);
        }).toBeFalsy;
    });
});

describe('testing countingAliveNeighbours', () => {
    test('if element entered into function is not an array, it should throw an error', () => {
        const notArray = 'pepe';
        expect(() => {
            countingAliveNeighbours(notArray);
        }).toThrow();
    });
});
