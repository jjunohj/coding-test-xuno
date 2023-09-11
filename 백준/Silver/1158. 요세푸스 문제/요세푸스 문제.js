const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split(" ");

n = parseInt(input[0]);
k = parseInt(input[1]);

let circle = new Array(n).fill(0).map((_, i) => i + 1);
let result = [];
let cursor = k - 1;

while (circle.length) {
  result.push(circle[cursor]);
  circle.splice(cursor, 1);
  cursor -= 1;
  if (cursor < 0) {
    cursor += circle.length;
  }
  cursor += k;
  if (cursor > circle.length - 1) {
    cursor %= circle.length;
  }
}
console.log("<" + result.join(", ") + ">");
