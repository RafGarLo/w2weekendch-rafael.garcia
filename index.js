import { gameOfLife } from './Modules/board.js';
import { boardLoop } from './Modules/boardChanges.js';

setInterval(() => {
    boardLoop(gameOfLife);
}, 1000);
