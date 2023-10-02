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
      return (result += `${seq.join(" ")}\n`);
    }
    for (let i = 1; i <= n; i++) {
      if (!picked[i]) {
        seq[k] = i;
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
