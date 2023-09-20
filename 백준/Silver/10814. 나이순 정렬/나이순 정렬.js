const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const members = input
  .splice(1)
  .map((e) => e.split(" "))
  .map((v) => (v[0] = [parseInt(v[0]), v[1]]));

sortedMembers = members.sort((a, b) => a[0] - b[0]);

sortedMembers.forEach((el) => {
  console.log(`${el[0]} ${el[1]}`);
});
