import { gameOfLife } from './Modules/board.js';

import { AliveItems, countingAliveNeightbours } from './Modules/initialGrid.js';
import { DeathItems, countingDeathNeightbours } from './Modules/initialGrid.js';

console.log(countingAliveNeightbours(gameOfLife));
console.log(countingDeathNeightbours(gameOfLife));
console.table(gameOfLife);
