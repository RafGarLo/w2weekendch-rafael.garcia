import { gameOfLife } from './Modules/board.js';

import { AliveItems, countingAliveNeighbours } from './Modules/initialGrid.js';
import { DeathItems, countingDeathNeighbours } from './Modules/initialGrid.js';

console.log(countingAliveNeighbours(gameOfLife));
console.log(countingDeathNeighbours(gameOfLife));
console.table(gameOfLife);
