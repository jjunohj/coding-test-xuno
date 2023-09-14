const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const numbers = input.slice(0, -1).map((e) => parseInt(e));

const n = 1000001; // 주어진 수 중 가장 큰 수까지의 소수 미리 구해놓기
const table = Array(n).fill(1);
const result = [];

for (let i = 3; i <= Math.ceil(Math.sqrt(n)); i += 2) {
  if (table[i]) {
    for (let j = i ** 2; j <= n; j += i) {
      table[j] = 0;
    }
  }
}

for (let num of numbers) {
  let isExist = false;
  for (let i = 3; i <= parseInt(num / 2); i += 2) {
    if (table[i] && table[num - i]) {
      result.push(`${num} = ${i} + ${num - i}`);
      isExist = true;
      break;
    }
  }
  if (!isExist) {
    result.push("Goldbach's conjecture is wrong.");
  }
}

console.log(result.join("\n"));
