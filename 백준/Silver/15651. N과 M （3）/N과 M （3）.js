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

  const line = new Array(m);
  let result = "";

  const dfs = (k) => {
    if (k === m) {
      return (result += `${line.join(" ")}\n`);
    } else {
      for (let i = 1; i <= n; i++) {
        line[k] = i;
        dfs(k + 1);
      }
    }
  };

  dfs(0);
  return result;
};

console.log(solution(n, m));
