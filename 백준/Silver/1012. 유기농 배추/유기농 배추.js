const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const tc = parseInt(input.shift());
let index = 0;

const solution = (field) => {
  const n = field.length;
  const m = field[0].length;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let cnt = 0;

  const putWorm = (field, start) => {
    const startX = start[0];
    const startY = start[1];
    const queue = [];
    queue.push([startX, startY]);
    field[startX][startY] = 0;

    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
          let tmpX = x + dx[i];
          let tmpY = y + dy[i];

          if (
            tmpX < 0 ||
            tmpY < 0 ||
            tmpX >= n ||
            tmpY >= m ||
            field[tmpX][tmpY] === 0
          ) {
            continue;
          }

          queue.push([tmpX, tmpY]);
          field[tmpX][tmpY] = 0;
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (field[i][j] === 1) {
        cnt++;
        putWorm(field, [i, j]);
      }
    }
  }

  console.log(cnt);
};

for (let i = 0; i < tc; i++) {
  const [m, n, k] = input[index++].split(" ").map((e) => parseInt(e));
  const field = Array.from(new Array(n), () => new Array(m).fill(0));
  for (let i = 0; i < k; i++) {
    const [y, x] = input[index++].split(" ").map((e) => parseInt(e));
    field[x][y] = 1;
  }
  solution(field);
}
