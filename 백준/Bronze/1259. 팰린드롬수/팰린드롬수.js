const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
input.pop();

for (let numStr of input) {
  let reverseStr = numStr.split("").reverse().join("");
  console.log(numStr === reverseStr ? "yes" : "no");
}
