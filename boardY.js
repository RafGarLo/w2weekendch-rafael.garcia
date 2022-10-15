const gameOfLife = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];
const killTheCell = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 1) {
                if (
                    (array[i - 1][j] === 0 && array[i + 1][j] === 0) ||
                    (array[i][j - 1] === 0 && array[i][j + 1] === 0)
                ) {
                    array[i][j] = 0;
                }
            }
            // if (array[i][j] === 0) {
            //    if (
            //      array[i - 1][j] === 1 ||
            //       array[i + 1][j] === 1 ||
            //     (array[i][j - 1] === 1 && array[i][j + 1] === 1)
            //) {
            //   array[i][j] = 1;
            //   }
            //  }
        }
        return array;
    }
};

console.log(killTheCell(gameOfLife));
//setInterval(function () {
// console.log(killTheCell(gameOfLife));
//}, 500);
