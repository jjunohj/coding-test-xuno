const file = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const solution = (input) => {
  console.log(input[0] === "" ? 0 : input[0].split(" ").length);
};

solution(input);
