const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

let n = parseInt(input[0]);
let strings = input.splice(1).map((el) => el.split(""));

for (let string of strings) {
  let leftP = 0;
  for (let s of string) {
    switch (s) {
      case "(":
        leftP++;
        break;
      case ")":
        if (leftP > 0) {
          leftP--;
        } else {
          leftP = -100;
          break;
        }
    }
  }

  if (leftP === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
