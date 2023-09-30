
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, s] = input[0].split(" ").map((e) => parseInt(e));
let graph = new Array(n + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map((e) => parseInt(e));
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((e) => {
  e.sort((a, b) => a - b);
});

const bfs = (g, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const curNode = needVisit.shift();
    if (!visited.includes(curNode)) {
      visited.push(curNode);
      needVisit = [...needVisit, ...g[curNode]]; //needVisit부터 다 하고 (너비 탐색)
    }
  }
  return visited.join(" ");
};

const dfs = (g, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const curNode = needVisit.shift();
    if (!visited.includes(curNode)) {
      visited.push(curNode);
      needVisit = [...g[curNode], ...needVisit]; //needVisit이 후순위로 밀려난다 (깊이 탐색)
    }
  }
  return visited.join(" ");
};

console.log(dfs(graph, s));
console.log(bfs(graph, s));
