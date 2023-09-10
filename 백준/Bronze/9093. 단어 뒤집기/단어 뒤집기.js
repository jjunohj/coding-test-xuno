const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

let n = parseInt(input[0]);
let sentences = input.splice(1);

for (let sentence of sentences) {
  let result = [];
  for (let word of sentence.split(" ")) {
    result.push(word.split("").reverse().join(""));
  }
  console.log(result.join(" "));
}
