const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const numbers = input.splice(1).map((e) => parseInt(e));

console.log(numbers.sort((a, b) => a - b).join("\n"));
