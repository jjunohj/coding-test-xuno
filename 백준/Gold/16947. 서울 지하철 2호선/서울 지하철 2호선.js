const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const n = parseInt(input.shift());
const graph = Array.from(Array(n + 1), () => Array());

for (let i = 0; i < n; i++) {
  const [a, b] = input[i].split(" ").map((v) => parseInt(v));
  graph[a].push(b);
  graph[b].push(a);
}

graph.map((v) => v.sort((a, b) => a - b));

const solution = (n, graph) => {
  const visited = Array(n + 1).fill(0);
  let cycle;
  let flag = 0;

  const dfs = (v, cnt) => {
    if (flag) return;

    // v노드와 인접 노드 탐색
    for (let tmpNode of graph[v]) {
      /* 인접노드에 방문하지 않았다면 */
      if (!visited[tmpNode]) {
        visited[tmpNode] = 1;
        dfs(tmpNode, cnt + 1);
        visited[tmpNode] = 0;
      } else if (tmpNode === startNode && cnt >= 2) {
        /* 인접 노드에 방문했고, 사이클이 형성되었다면 */
        flag = 1;
        cycle = visited.slice(); // 배열 복사
        return;
      }
    }
  };

  let startNode;
  for (let i = 1; i <= n; i++) {
    startNode = i;
    visited[i] = 1;
    dfs(i, 0);
    visited[i] = 0;
    if (flag) break;
  }

  // 최단 거리는 BFS로
  const bfs = (node) => {
    const visited2 = new Array(n + 1).fill(0);
    const queue = [];
    queue.push(node);
    let dist = 0;
    visited2[node] = 1;

    while (queue.length) {
      dist++;
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const curNode = queue.shift();

        for (let tmpNode2 of graph[curNode]) {
          if (cycle[tmpNode2]) return dist;

          if (!visited2[tmpNode2]) {
            visited2[tmpNode2] = 1;
            queue.push(tmpNode2);
          }
        }
      }
    }
  };

  let result = [];
  for (let i = 1; i <= n; i++) {
    if (cycle[i]) {
      result.push(0);
    } else {
      result.push(bfs(i));
    }
  }

  console.log(result.join(" "));
};

solution(n, graph);
