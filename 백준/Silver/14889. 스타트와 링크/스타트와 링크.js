const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0]);
const powers = input
  .splice(1)
  .map((line) => line.split(" ").map((e) => parseInt(e)));

const solution = (n, powers) => {
  const picked = new Array(n).fill(false);
  const line = new Array(n / 2);
  let startTeams = [];
  let min = Infinity;

  const sumPower = (team) => {
    let sum = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = 0; j < team.length; j++) {
        sum += powers[team[i]][team[j]];
      }
    }

    return sum;
  };

  const dfs = (idx) => {
    if (idx === n / 2) {
      const startTeam = [...line];
      const linkTeam = new Array(n)
        .fill(0)
        .map((_, i) => i)
        .filter((e) => !startTeam.includes(e));
      // console.log(startTeam, linkTeam);

      const startPower = sumPower(startTeam);
      const linkPower = sumPower(linkTeam);
      // console.log(startPower, linkPower);

      min = Math.min(min, Math.abs(startPower - linkPower));
      return;
    }

    for (let i = idx; i < n; i++) {
      if (!picked[i]) {
        if (idx > 0 && line[idx - 1] > i) continue;
        picked[i] = true;
        line[idx] = i;
        dfs(idx + 1);
        picked[i] = false;
      }
    }
  };

  dfs(0);
  console.log(min);
};

solution(n, powers);
