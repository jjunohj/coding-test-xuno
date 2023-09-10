const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const aim = input.splice(1).map((v) => parseInt(v)); //목표 수열
const stack = []; //수가 담길 스택
const arr = new Array(n).fill(0).map((_, i) => i + 1); //1부터 n까지의 수가 담긴 배열

// console.log(aim);
// console.log(arr);
let result = "";
let target = aim.shift(); // 목표 수열의 첫번째 수

while (true) {
  // console.log(`target: ${target}`);
  if (stack[stack.length - 1] === target) {
    // 스택 뚜껑이 목표 수열의 첫번째 수와 같다면
    stack.pop(); // 스택에서 빼고
    // console.log(`stack: ${stack}`);
    target = aim.shift(); // 목표 수열의 다음 수를 target으로
    result += "-\n"; // 결과에 - 추가
    if (target === undefined) {
      // 목표 수열의 다음 수가 없다면
      console.log(result); // 결과 출력
      break;
    }
  } else {
    // 스택 뚜껑이 목표 수열의 첫번째 수와 다르다면
    if (arr.length === 0) {
      // 근데 이미 모든 N까지의 수를 다 넣었다면
      console.log("NO");
      break;
    }
    stack.push(arr.shift()); // N까지의 수 중 다음 수를 스택에 push
    // console.log(`stack: ${stack}`);
    result += "+\n"; // 결과에 + 추가
  }
}
