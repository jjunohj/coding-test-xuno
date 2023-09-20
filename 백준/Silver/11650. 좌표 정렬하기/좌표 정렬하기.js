const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const points = input.splice(1).map((e) => e.split(" ").map((v) => parseInt(v)));

const sortedPoints = points.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

result = [];

sortedPoints.forEach((point) => {
  result.push(`${point[0]} ${point[1]}`);
});

console.log(result.join("\n"));
