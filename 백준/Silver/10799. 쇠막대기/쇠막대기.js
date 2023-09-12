const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const { Console } = require("console");
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim();

const pipes = input.split("()").map((e) => e.split(""));
let h = 0;
let answer = 0;

for (let p of pipes) {
  for (let i of p) {
    if (i === "(") {
      h += 1;
    } else if (i === ")") {
      answer += 1; // 꽁다리
      h -= 1;
    }
  }
  answer += h;
}

console.log(answer);
