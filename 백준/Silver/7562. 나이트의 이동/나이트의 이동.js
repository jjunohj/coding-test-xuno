const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const t = parseInt(input.shift());
let index = 0;

const solution = (w, current, dest) => {
  let [destX, destY] = [...dest];
  let [curX, curY] = [...current];

  const dx = [2, 2, -2, -2, 1, 1, -1, -1];
  const dy = [1, -1, 1, -1, 2, -2, 2, -2];

  let queue = [];
  let visited = Array.from(new Array(w), () => new Array(w).fill(false));
  queue.push([curX, curY]);
  visited[curX][curY] = true;
  let cnt = 0;

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      if (cur[0] === destX && cur[1] === destY) {
        return cnt;
      }
      for (let i = 0; i < 8; i++) {
        let tmpX = cur[0] + dx[i];
        let tmpY = cur[1] + dy[i];

        if (
          tmpX < 0 ||
          tmpX >= w ||
          tmpY < 0 ||
          tmpY >= w ||
          visited[tmpX][tmpY]
        ) {
          continue;
        }
        visited[tmpX][tmpY] = true;
        queue.push([tmpX, tmpY]);
      }
    }
    cnt++;
  }
};

for (let i = 0; i < t; i++) {
  let w = parseInt(input[index++]);
  let current = input[index++].split(" ").map((e) => parseInt(e));
  let dest = input[index++].split(" ").map((e) => parseInt(e));
  console.log(solution(w, current, dest));
}
