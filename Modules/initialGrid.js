import { gameOfLife } from './board.js';

export function AliveItems(r, c, countN) {
    this.r = r;
    this.c = c;
    this.countN = countN;
}

export const countingAliveNeighbours = (array) => {
    let arrayAliveObjects = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[i][j] === 1) {
                let count = 0;
                if (array[i - 1][j] === 1) count++;
                if (array[i + 1][j] === 1) count++;
                if (array[i][j - 1] === 1) count++;
                if (array[i][j + 1] === 1) count++;
                if (array[i - 1][j - 1] === 1) count++;
                arrayAliveObjects.push(new AliveItems(i, j, count));
            }
        }
    }
    return arrayAliveObjects;
};

export function DeathItems(r, c, countN) {
    this.r = r;
    this.c = c;
    this.countN = countN;
}

export const countingDeathNeighbours = (array) => {
    let arrayDeathObjects = [];
    for (let i = 1; i < array.length - 1; i++) {
        for (let j = 1; j < array.length - 1; j++) {
            if (array[i][j] === 0) {
                let count = 0;
                if (array[i - 1][j] === 1) count++;
                if (array[i + 1][j] === 1) count++;
                if (array[i][j - 1] === 1) count++;
                if (array[i][j + 1] === 1) count++;
                if (array[i - 1][j - 1] === 1) count++;
                if (array[i + 1][j - 1] === 1) count++;
                if (array[i - 1][j + 1] === 1) count++;
                if (array[i + 1][j + 1] === 1) count++;
                arrayDeathObjects.push(new DeathItems(i, j, count));
            }
        }
    }
    return arrayDeathObjects;
};
