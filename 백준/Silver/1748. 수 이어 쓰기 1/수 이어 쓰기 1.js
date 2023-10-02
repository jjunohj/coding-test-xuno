const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];
let sum = 0;

const solution = (n) => {
  if (n.length === 1) {
    sum += parseInt(n);
    return sum;
  } else {
    const nextDigitNum = new Array(n.length - 1).fill("9").join("");
    sum += n.length * (n - parseInt(nextDigitNum));
    n = nextDigitNum;
    return solution(n);
  }
};

console.log(solution(n));
