const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const [m, n] = input
  .shift()
  .split(" ")
  .map((e) => parseInt(e));

const box = new Array(n);

for (let i = 0; i < n; i++) {
  box[i] = input
    .shift()
    .split(" ")
    .map((e) => parseInt(e));
}

// console.log(m, n);
// console.log(box);

const solution = (m, n, box) => {
  const queue = [];

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  // 익은 토마토 위치 찾아서 큐에 삽입
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (box[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  // 익은 토마토 없으면 -1
  if (queue.length === 0) {
    console.log(-1);
    return;
  }

  // shift()의 시간초과 이슈로 인해 index로 접근
  let index = 0;
  // 1회 반복마다 index + 1
  while (index < queue.length) {
    const [x, y] = queue[index++];

    for (let j = 0; j < 4; j++) {
      const tmpX = x + dx[j];
      const tmpY = y + dy[j];

      if (
        tmpX < 0 ||
        tmpX >= n ||
        tmpY < 0 ||
        tmpY >= m ||
        box[tmpX][tmpY] !== 0
      ) {
        continue;
      }

      box[tmpX][tmpY] = box[x][y] + 1;
      queue.push([tmpX, tmpY]);
    }
  }

  // 토마토가 모두 익었는지 확인
  checkDay(box);
};

// 토마토가 모두 익었는지 확인
const checkDay = (box) => {
  let day = 0;
  for (let i = 0; i < box.length; i++) {
    for (let j = 0; j < box[0].length; j++) {
      if (box[i][j] === 0) {
        console.log(-1);
        return false;
      }
      day = Math.max(day, box[i][j]);
    }
  }

  console.log(day - 1);
};

solution(m, n, box);
