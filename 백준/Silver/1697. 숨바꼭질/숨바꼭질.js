const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map((e) => parseInt(e));
const visited = new Array(100001).fill(0);

const solution = (n, k) => {
  const bfs = (n) => {
    const queue = [[n, 0]];
    visited[n] = 1;

    while (queue.length) {
      const [curPoint, cnt] = queue.shift();
      if (curPoint === k) {
        return cnt;
      }

      for (let nextPoint of [curPoint - 1, curPoint + 1, 2 * curPoint]) {
        if (!visited[nextPoint] && nextPoint >= 0 && nextPoint <= 100000) {
          visited[nextPoint] = 1;
          queue.push([nextPoint, cnt + 1]);
        }
      }
    }
  };
  console.log(bfs(n));
};

solution(n, k);
