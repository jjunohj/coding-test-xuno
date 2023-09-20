const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const points = input.splice(1).map((e) => e.split(" ").map((e) => parseInt(e)));

const sortedPoints = points.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let ans = [];

sortedPoints.forEach((point) => {
  ans.push(`${point[0]} ${point[1]}`);
});

console.log(ans.join("\n"));
