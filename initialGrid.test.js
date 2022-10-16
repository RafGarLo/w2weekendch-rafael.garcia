import {
    countingAliveNeighbours,
    countingDeathNeighbours,
} from './Modules/initialGrid.js';

describe('testing countingAliveNeighbours', () => {
    test('if element entered into function is not an array, it should throw an error', () => {
        const notArray = 'pepe';
        expect(() => {
            countingAliveNeighbours(notArray);
        }).toThrow();
    });
});
describe('testing countingDeadNeighbours', () => {
    test('if element entered into function is not an array, it should throw an error', () => {
        const notArray = 'pepe';
        expect(() => {
            countingDeathNeighbours(notArray);
        }).toThrow();
    });
});
