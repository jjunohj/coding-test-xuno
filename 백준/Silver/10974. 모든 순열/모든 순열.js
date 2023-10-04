const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0]);

const solution = (n) => {
  const picked = new Array(n + 1).fill(false);
  const line = new Array(n);
  const ans = [];

  const dfs = (k) => {
    if (k === n) {
      return ans.push(line.join(" "));
    } else {
      for (let i = 1; i <= n; i++) {
        if (!picked[i]) {
          picked[i] = true;
          line[k] = i;
          dfs(k + 1);
          picked[i] = false;
        }
      }
    }
  };

  dfs(0);
  console.log(ans.join("\n"));
};

solution(n);
