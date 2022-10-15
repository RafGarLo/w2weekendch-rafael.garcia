import { gameOfLife } from './Modules/board.js';

import {
    countingAliveNeighbours,
    countingDeathNeighbours,
} from './Modules/initialGrid.js';

console.log(countingAliveNeighbours(gameOfLife));
console.log(countingDeathNeighbours(gameOfLife));
console.table(gameOfLife);
