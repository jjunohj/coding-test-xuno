const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

let lStack = input[0].split("");
const n = Number(input[1]);
const rStack = [];

const commands = input.splice(2, n).map((el) => el.split(" "));

for (let command of commands) {
  switch (command[0]) {
    case "L":
      if (lStack.length > 0) {
        rStack.push(lStack.pop());
      }
      break;

    case "D":
      if (rStack.length > 0) {
        lStack.push(rStack.pop());
      }
      break;

    case "B":
      lStack.pop();
      break;

    case "P":
      lStack.push(command[1]);
      break;
  }
}
console.log(lStack.concat(rStack.reverse()).join(""));
