const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const points = input[1].split(" ").map((e) => parseInt(e));

const solution = (n, points) => {
  const findFromLeft = (x) => {
    const cur_point = [x, points[x]];
    if (x == 0) {
      return 0;
    }
    let gradient = 1000000000;
    let sum = 0;
    for (let i = x - 1; i >= 0; i--) {
      if (gradient > (cur_point[1] - points[i]) / (cur_point[0] - i)) {
        gradient = (cur_point[1] - points[i]) / (cur_point[0] - i);
        sum += 1;
      }
    }

    return sum;
  };

  const findFromRight = (x) => {
    const cur_point = [x, points[x]];
    if (x == n - 1) {
      return 0;
    }
    let gradient = -1000000000;
    let sum = 0;
    for (let i = x + 1; i < n; i++) {
      if (gradient < (points[i] - cur_point[1]) / (i - cur_point[0])) {
        gradient = (points[i] - cur_point[1]) / (i - cur_point[0]);
        sum += 1;
      }
    }

    return sum;
  };

  result = [];
  for (let i = 0; i < n; i++) {
    result.push(findFromLeft(i) + findFromRight(i));
  }

  console.log(Math.max(...result));
};

solution(n, points);
