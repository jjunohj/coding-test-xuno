let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = parseInt(input[0]);
let points = input
  .slice(1)
  .map((v) =>
    v
      .split(" ")
      .map((v) => parseInt(v))
      .sort((a, b) => a - b)
  )
  .sort((a, b) => a[0] - b[0]);

let start = points[0][0];
let end = points[0][1];
let answer = 0;

for (let point of points) {
  if (point[0] <= end) {
    end = Math.max(end, point[1]);
    if (points[-1] === point) {
      answer += end - start;
    }
  } else {
    answer += end - start;
    start = point[0];
    end = point[1];
    if (points[-1] === point) {
      answer += end - start;
    }
  }
}

console.log(answer);
