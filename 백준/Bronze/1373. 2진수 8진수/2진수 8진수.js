const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
let input = fs.readFileSync(file).toString().trim();

let numEight = [];
while (input.length >= 3) {
  const lastThree = input.slice(-3);
  input = input.substring(0, input.length - 3);
  numEight.push(parseInt(lastThree, 2).toString(8));
}
if (input !== "") {
  numEight.push(parseInt(input, 2).toString(8));
}

console.log(numEight.reverse().join(""));
