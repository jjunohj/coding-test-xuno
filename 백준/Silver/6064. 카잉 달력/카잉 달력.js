const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = parseInt(input[0]);

testCases = input.splice(1).map((e) => e.split(" ").map((v) => parseInt(v)));

const solution = (arr) => {
  [m, n, x, y] = [...arr];

  // ans, [m, n, x, y] = 33, [10, 12, 3, 9]
  // (ans - x) % m = 0
  // (ans - y) % n = 0, 그럼
  // (ans - x) // m = N
  // (ans - y) // n = N'
  // ans = N * m + x -> x에 m을 더해가다보면 ans
  // (ans - y) % n = 0이니까
  // x에 m을 더해가면서 y를 빼고 n으로 나누어보고 0이 되면 그 때의 값이 ans임
  // ans는 x * y보다 작거나 같아야 하니까, x는 x * y보다 작거나 같아야 함

  while (x <= m * n) {
    if ((x - y) % n === 0) return x;
    x += m;
  }

  return -1;
};

const result = [];
for (let testCase of testCases) {
  result.push(solution(testCase));
}

console.log(result.join("\n"));
