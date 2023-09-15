const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, s] = input[0].split(" ").map((e) => parseInt(e));
const locations = input[1].split(" ").map((e) => parseInt(e));

function getGCD(a, b) {
  while (b != 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

const stepSet = new Set();

for (let l of locations) {
  need = Math.abs(l - s);
  if (!stepSet.has(need)) {
    stepSet.add(need);
  }
}

stepArr = Array.from(stepSet).sort((a, b) => a - b);
gcd = stepArr[0];
for (let s of stepArr) {
  gcd = getGCD(gcd, s);
}

console.log(gcd);
