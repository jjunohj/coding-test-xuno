const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0]);
const queue = [];
let result = "";

const commands = input.slice(1).map((e) => e.split(" "));

for (let command of commands) {
  switch (command[0]) {
    case "push":
      queue.push(parseInt(command[1]));
      break;
    case "pop":
      result += queue.length === 0 ? -1 + "\n" : queue.shift() + "\n";
      break;
    case "size":
      result += queue.length + "\n";
      break;
    case "empty":
      result += queue.length === 0 ? 1 + "\n" : 0 + "\n";
      break;
    case "front":
      result += queue.length === 0 ? -1 + "\n" : queue[0] + "\n";
      break;
    case "back":
      result += queue.length === 0 ? -1 + "\n" : queue[queue.length - 1] + "\n";
      break;
  }
}

console.log(result.trim());
