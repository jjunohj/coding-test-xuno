const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map((e) => parseInt(e));
const stack = [];
const result = new Array(n).fill(-1);

for (let i = 0; i < arr.length; i++) {
  // 스택에 수가 존재하고, 스택의 맨 위 값의 배열 값이 현재 비교 수보다 작을 때
  while (stack.length !== 0 && arr[stack[stack.length - 1]] < arr[i]) {
    result[stack.pop()] = arr[i]; //쌓여있던 스택의 수들을 Pop하기
  }
  stack.push(i);
}

console.log(result.join(" "));
