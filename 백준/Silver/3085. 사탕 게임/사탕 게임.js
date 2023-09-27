const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
let input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const originBoard = input.splice(1).map((e) => e.split(""));

let tempBoard = [];
[...originBoard].forEach((row) => {
  tempBoard.push([...row]);
});

let result = checkMax(tempBoard);

function checkMax(board) {
  const n = board.length;
  let sum = 1;
  let max = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (board[i][j - 1] === board[i][j]) {
        sum += 1;
        max = Math.max(sum, max);
      } else {
        sum = 1;
      }
    }
    sum = 1;
  }

  sum = 1;
  for (let j = 0; j < n; j++) {
    for (let i = 1; i < n; i++) {
      if (board[i - 1][j] === board[i][j]) {
        sum += 1;
        max = Math.max(sum, max);
      } else {
        sum = 1;
      }
    }
    sum = 1;
  }

  return max;
}

let temp = "";

for (let i = 0; i < n; i++) {
  for (let j = 1; j < n; j++) {
    tempBoard = [];
    [...originBoard].forEach((row) => {
      tempBoard.push([...row]);
    });
    if (tempBoard[i][j - 1] !== tempBoard[i][j]) {
      temp = tempBoard[i][j];
      tempBoard[i][j] = tempBoard[i][j - 1];
      tempBoard[i][j - 1] = temp;
      result = Math.max(result, checkMax(tempBoard));
    }
  }
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < n; j++) {
    tempBoard = [];
    [...originBoard].forEach((row) => {
      tempBoard.push([...row]);
    });
    if (tempBoard[i - 1][j] !== tempBoard[i][j]) {
      temp = tempBoard[i - 1][j];
      tempBoard[i - 1][j] = tempBoard[i][j];
      tempBoard[i][j] = temp;
      result = Math.max(result, checkMax(tempBoard));
    }
  }
}

console.log(result);
