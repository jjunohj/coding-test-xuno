const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split(" ");

const [a, b] = input.map((e) => parseInt(e));
const prime = { 1: true };

for (let i = 2; i <= Math.ceil(Math.sqrt(b)); i++) {
  if (prime[i]) {
    continue;
  }

  for (let j = i ** 2; j <= b; j += i) {
    prime[j] = true;
  }
}

const results = [];

for (let i = a; i <= b; i++) {
  if (!prime[i]) {
    results.push(i);
  }
}

console.log(results.join("\n"));
