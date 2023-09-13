const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const nums = input.splice(1).map((e) => e.split(" ").map((v) => parseInt(v)));

function getLCM(num1, num2) {
  let lcm = 0;
  let smallerNum = 0;
  let biggerNum = 0;

  if (num1 < num2) {
    smallerNum = num1;
    biggerNum = num2;
    lcm = biggerNum;
  } else {
    smallerNum = num2;
    biggerNum = num1;
    lcm = biggerNum;
  }

  while (lcm % smallerNum !== 0) {
    lcm += biggerNum;
  }
  return lcm;
}

for (let num of nums) {
  [a, b] = [...num];
  console.log(getLCM(a, b));
}
