const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = parseInt(input[0]);
let index = 1;

for (let i = 0; i < t; i++) {
  const [v, e] = input[index++].split(" ").map(Number);
  const g = Array.from(new Array(v + 1), () => new Array());
  const visited = new Array(v + 1).fill(-1);

  for (let j = 0; j < e; j++) {
    const [v1, v2] = input[index++].split(" ").map(Number);
    g[v1].push(v2);
    g[v2].push(v1);
  }

  let isBipartite = true;

  for (let k = 1; k <= v; k++) {
    if (visited[k] === -1) {
      if (!checkBipartite(k, g, visited)) {
        isBipartite = false;
        break;
      }
    }
  }

  console.log(isBipartite ? "YES" : "NO");
}

function checkBipartite(start, graph, visited) {
  let queue = [start];

  visited[start] = 0;

  while (queue.length) {
    let v = queue.shift();

    for (let next of graph[v]) {
      if (visited[next] === -1) {
        visited[next] = (visited[v] + 1) % 2;
        queue.push(next);
      } else {
        if (visited[next] === (visited[v] + 1) % 2) {
          continue;
        } else {
          return false;
        }
      }
    }
  }

  return true;
}
