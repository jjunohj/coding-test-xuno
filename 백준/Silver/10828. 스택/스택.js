const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

let n = parseInt(input[0]);
let commands = input.splice(1).map((v) => v.split(" "));

let stack = [];
const result = [];

for (let c of commands) {
  switch (c[0]) {
    case "push":
      stack.push(parseInt(c[1]));
      break;

    case "pop":
      result.push(stack.pop() || -1);
      break;

    case "size":
      result.push(stack.length);
      break;

    case "empty":
      result.push(stack.length === 0 ? 1 : 0);
      break;

    case "top":
      result.push(stack[stack.length - 1] || -1);
      break;
  }
}

console.log(result.join("\n"));
