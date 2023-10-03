const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, m] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((e) => parseInt(e));

const solution = (n, m) => {
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  const picked = new Array(n).fill(false);
  const seq = new Array(m).fill(0);
  let result = "";

  const dfs = (k) => {
    if (k === m) {
      // 최종 도달 시
      return (result += `${seq.join(" ")}\n`);
    }
    for (let i = 1; i <= n; i++) {
      if (!picked[i]) {
        if (k > 0 && i < seq[k - 1]) continue; // 무시조건 추가
        seq[k] = i; // 백트래킹
        picked[i] = true;
        dfs(k + 1);
        picked[i] = false;
      }
    }
  };

  dfs(0);
  return result;
};

console.log(solution(n, m));
