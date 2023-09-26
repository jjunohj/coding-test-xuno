const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
let h = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => parseInt(e));

const temp = [...h];
const result = [];

for (let i = 0; i < h.length; i++) {
  h = [...temp];
  h.splice(i, 1);
  const temp2 = [...h];
  for (let j = 0; j < temp2.length; j++) {
    h = [...temp2];
    h.splice(j, 1);
    const sum = h.reduce((acc, cur) => {
      return acc + cur;
    });
    if (sum === 100) {
      result.push(h);
      break;
    }
  }
}
console.log(result[0].sort((a, b) => a - b).join("\n"));
