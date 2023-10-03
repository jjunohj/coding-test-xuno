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
  const line = new Array(m);
  let result = "";

  const dfs = (k) => {
    if (k === m) {
      return (result += `${line.join(" ")}\n`);
    } else {
      for (let i = 1; i <= n; i++) {
        if (!picked[k]) {
          if (k > 0 && line[k - 1] > i) {
            continue;
          }
          picked[k] = true;
          line[k] = i;
          dfs(k + 1);
          picked[k] = false;
        }
      }
    }
  };

  dfs(0);
  return result;
};

console.log(solution(n, m));
