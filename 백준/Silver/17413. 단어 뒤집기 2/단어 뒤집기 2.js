const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const { Console } = require("console");
let fs = require("fs");
const str = fs.readFileSync(file).toString().trim().split("");

let parsedStr = [];
let inAngle = false;
let word = "";
let result = "";

for (let s of str) {
  if (inAngle) {
    word += s;
    if (s === ">") {
      parsedStr.push(word);
      word = "";
      inAngle = false;
      continue;
    }
  } else {
    if (s === "<") {
      parsedStr.push(word);
      word = "";
      inAngle = true;
      word += s;
      continue;
    }
    if (s === " ") {
      parsedStr.push(word);
      word = "";
      continue;
    }
    word += s;
  }
}
parsedStr.push(word);

let filteredStr = parsedStr
  .filter((e) => e !== "")
  .map((e) => {
    return e[0] === "<" ? e : e.split("").reverse().join("");
  });
for (let i = 0; i < filteredStr.length; i++) {
  if (i === filteredStr.length - 1 || filteredStr[i + 1][0] === "<") {
    result += filteredStr[i];
  } else if (filteredStr[i][0] === "<") {
    result += filteredStr[i];
  } else {
    result += filteredStr[i] + " ";
  }
}

console.log(result);
