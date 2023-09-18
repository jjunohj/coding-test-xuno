const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const words = [...new Set(input.splice(1))];

console.log(
  words
    .sort((a, b) => {
      if (a.length === b.length) {
        let i = 0;
        while (a.charCodeAt(i) === b.charCodeAt(i)) {
          i++;
        }
        return a.charCodeAt(i) - b.charCodeAt(i);
      } else {
        return a.length - b.length;
      }
    })
    .join("\n")
);
