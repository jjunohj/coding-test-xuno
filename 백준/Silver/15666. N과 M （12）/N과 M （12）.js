const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map((e) => parseInt(e));
const numbers = input[1]
  .split(" ")
  .map((e) => parseInt(e))
  .sort((a, b) => a - b);

const solution = (n, m) => {
  // const picked = new Array(n).fill(false);
  const line = new Array(m);
  let result = "";

  const dfs = (k) => {
    if (k === m) {
      return (result += `${line.join(" ")}\n`);
    } else {
      for (let i = 0; i < n; i++) {
        // if (!picked[i]) {
        if (k > 0 && line[k - 1] > numbers[i]) continue;
        // picked[i] = true;
        line[k] = numbers[i];
        dfs(k + 1);
        // picked[i] = false;
        // }
      }
    }
  };

  dfs(0);
  return Array.from(new Set(result.split("\n"))).join("\n");
};

console.log(solution(n, m));
