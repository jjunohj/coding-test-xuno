const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const [n, m] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((e) => parseInt(e));

// 최종 결과값의 약수 중 2, 5 중 적은 값의 수를 세야 함

function getTwoFive(num) {
  let two = 0;
  let five = 0;

  for (let i = 2; i <= num; i *= 2) {
    two += parseInt(num / i);
  }
  for (let i = 5; i <= num; i *= 5) {
    five += parseInt(num / i);
  }

  return [two, five];
}

// nCm = n! / ( (n-m)! * m! )

const [nTwo, nFive] = getTwoFive(n);
const [mTwo, mFive] = getTwoFive(m);
const [nmTwo, nmFive] = getTwoFive(n - m);

const two = nTwo - mTwo - nmTwo;
const five = nFive - mFive - nmFive;

console.log(Math.min(two, five));
