const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, w] = [
  parseInt(input[0]),
  [...input.splice(1).map((e) => e.split(" ").map((v) => parseInt(v)))],
];

const visited = new Array(n).fill(false);
const line = new Array(n);
let ans = Infinity;

const dfs = (d, s, cost) => {
  if (d === n - 1 && w[s][0] !== 0) {
    ans = Math.min(ans, cost + w[s][0]);
    return;
  } else {
    for (let i = 0; i < n; i++) {
      if (!visited[i] && w[s][i] !== 0) {
        visited[i] = true;
        dfs(d + 1, i, cost + w[s][i]);
        visited[i] = false;
      }
    }
  }
};

visited[0] = true;
// 어느 도시에서 출발을 하던지 모든 경우의 수를 탐색했을 때 총 이동 비용은 결국 같다.
dfs(0, 0, 0); //0번째, 0번에서 시작, 비용 = 0

console.log(ans);
