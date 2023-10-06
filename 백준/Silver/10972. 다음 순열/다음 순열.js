const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0]);
const arr = input[1].split(" ").map((e) => parseInt(e));

const solution = (N, arr) => {
  const arrCopy = [...arr].sort((a, b) => b - a);
  //arr.every함수는 arr의 모든 요소가 every()안에 주어진 함수를 만족하는지 여부를 boolean값으로 리턴함
  if (arr.every((v, i) => v === arrCopy[i])) {
    console.log(-1);
  } else {
    let i = N - 2;
    while (arr[i] > arr[i + 1]) {
      i--;
    }
    let j = N - 1;
    while (arr[i] > arr[j]) {
      j--;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];
    console.log(
      [...arr.slice(0, i + 1), ...arr.slice(i + 1).sort((a, b) => a - b)].join(
        " "
      )
    );
  }
};

solution(n, arr);
