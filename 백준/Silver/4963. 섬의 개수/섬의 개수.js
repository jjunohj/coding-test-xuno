const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");

// 12시부터 시계방향
const dx = [0, 1, 1, 1, 0, -1, -1, -1];
const dy = [1, 1, 0, -1, -1, -1, 0, 1];
let visited;
let worldMap;

const bfs = (startNode) => {
  // 방문 안한 노드가 첫번째로
  let queue = [startNode];

  while (queue.length) {
    let [x, y] = queue.shift();
    if (!visited[x][y]) {
      visited[x][y] = true;

      for (let i = 0; i < 8; i++) {
        let tmpX = x + dx[i];
        let tmpY = y + dy[i];
        if (
          tmpX < 0 ||
          tmpX >= worldMap.length ||
          tmpY < 0 ||
          tmpY >= worldMap[0].length ||
          visited[tmpX][tmpY]
        ) {
          continue;
        }
        if (worldMap[tmpX][tmpY]) {
          queue.push([tmpX, tmpY]);
        }
      }
    }
  }
};

const solution = (dim2arr) => {
  const h = dim2arr.length;
  const w = dim2arr[0].length;

  let ans = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      // 방문 안했고, 땅일 경우
      if (!visited[i][j] && dim2arr[i][j] !== 0) {
        ans += 1;
        // BFS로 뻗어나가며 방문
        bfs([i, j]);
      }
    }
  }

  console.log(ans);
};

while (input.length) {
  [w, h] = input
    .shift()
    .split(" ")
    .map((e) => parseInt(e));

  visited = Array.from(new Array(h), () => new Array(w).fill(false));

  if ((w, h) === (0, 0)) {
    break;
  } else {
    worldMap = new Array(h);
    for (let i = 0; i < h; i++) {
      worldMap[i] = [
        ...input
          .shift()
          .split(" ")
          .map((e) => parseInt(e)),
      ];
    }

    solution(worldMap);
  }
}
