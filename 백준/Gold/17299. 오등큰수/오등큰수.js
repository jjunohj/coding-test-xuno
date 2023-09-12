const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map((e) => parseInt(e));
const result = new Array(n).fill(-1);
const stack = [];
const F = {};

arr.forEach((x) => {
  F[x] = (F[x] || 0) + 1;
});

for (let i = 0; i < arr.length; i++) {
  while (stack.length !== 0 && F[arr[stack[stack.length - 1]]] < F[arr[i]]) {
    result[stack.pop()] = arr[i]; //쌓여있던 스택의 수들을 Pop하기
  }
  stack.push(i);
}

console.log(result.join(" "));
