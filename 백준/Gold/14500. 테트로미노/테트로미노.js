const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((e) => parseInt(e));

const paper = [];
for (let i = 1; i <= n; i++) {
  paper.push(input[i].split(" ").map((e) => parseInt(e)));
}

const visited = Array.from(new Array(n), () => new Array(m).fill(false));

const dx = [0, 0, 1, 0];
const dy = [1, -1, 0, 0];

const ddx = [
  [0, 0, 0, 1], //ㅏ
  [0, 1, 2, 1], //ㅗ
  [0, 0, 0, -1], //ㅓ
  [0, 1, 2, 1], //ㅜ
];

const ddy = [
  [0, 1, 2, 1], //ㅏ
  [0, 0, 0, 1], //ㅗ
  [0, 1, 2, 1], //ㅓ
  [0, 0, 0, -1], //ㅜ
];

let ans = 0;

const dfs = (x, y, cnt, sum) => {
  if (cnt === 4) {
    ans = Math.max(ans, sum);
    return;
  }
  for (let i = 0; i < 4; i++) {
    let [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

    if (!visited[nx][ny]) {
      visited[nx][ny] = true;
      dfs(nx, ny, cnt + 1, sum + paper[nx][ny]);
      visited[nx][ny] = false;
    }
  }
};

const checkFuck = (x, y) => {
  for (let i = 0; i < 4; i++) {
    let flag = false;
    let sum = 0;

    for (let j = 0; j < 4; j++) {
      let nx = x + ddx[i][j];
      let ny = y + ddy[i][j];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        flag = true;
        break;
      } else {
        sum += paper[nx][ny];
      }
    }

    if (!flag) {
      ans = Math.max(ans, sum);
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    visited[i][j] = true;
    dfs(i, j, 1, paper[i][j]);
    visited[i][j] = false;
    checkFuck(i, j);
  }
}
console.log(ans);
