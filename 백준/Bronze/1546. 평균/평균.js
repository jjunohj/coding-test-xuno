const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const scores = input[1].split(" ").map((e) => parseInt(e));

const highest = Math.max(...scores);

const fixedScores = scores.map((score) => (score / highest) * 100);

let ans = 0;

fixedScores.forEach((score) => {
  ans += score;
});

ans = ans / fixedScores.length;

console.log(ans);
