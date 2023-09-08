const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

let n = parseInt(input[0]);
let timetable = input
  .slice(1)
  .map((v) => v.split(" ").map((v) => parseInt(v)))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

let answer = 0;
let availableTime = 0;

timetable.forEach((schedule) => {
  if (availableTime <= schedule[0]) {
    answer++;
    availableTime = schedule[1];
  }
});

console.log(answer);
