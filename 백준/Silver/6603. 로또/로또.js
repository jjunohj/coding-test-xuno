const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const testCases = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (n, s) => {
  const picked = new Array(n).fill(false);
  const line = new Array(6);
  const result = [];

  const dfs = (idx, min) => {
    if (idx === 6) {
      result.push(line.join(" "));
    } else {
      for (let i = 0; i < n; i++) {
        if (!picked[i] && min < s[i]) {
          picked[i] = true;
          line[idx] = s[i];
          dfs(idx + 1, s[i]);
          picked[i] = false;
        }
      }
    }
  };

  dfs(0, 0);
  return result;
};

const ans = [];
for (let testCase of testCases) {
  if (testCase != "0") {
    const numArr = testCase.split(" ").map((e) => parseInt(e));
    console.log(solution(numArr[0], numArr.splice(1)).join("\n"));
  }
  console.log("");
}
