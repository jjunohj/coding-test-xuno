const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

n = parseInt(input[0]);
let dq = [];
const commands = input.splice(1).map((e) => e.split(" "));
let result = "";

for (let command of commands) {
  switch (command[0]) {
    case "push_front":
      dq = [parseInt(command[1])].concat(dq);
      break;

    case "push_back":
      dq.push(parseInt(command[1]));
      break;

    case "pop_front":
      result += dq.length > 0 ? dq.shift().toString() + "\n" : -1 + "\n";
      break;

    case "pop_back":
      result += dq.length > 0 ? dq.pop().toString() + "\n" : -1 + "\n";
      break;

    case "size":
      result += dq.length + "\n";
      break;

    case "empty":
      result += dq.length === 0 ? 1 + "\n" : 0 + "\n";
      break;

    case "front":
      result += dq.length > 0 ? dq[0] + "\n" : -1 + "\n";
      break;

    case "back":
      result += dq.length > 0 ? dq[dq.length - 1] + "\n" : -1 + "\n";
      break;
  }
}

console.log(result);
