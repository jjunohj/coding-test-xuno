const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let fs = require("fs");
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input
  .shift()
  .split(" ")
  .map((e) => parseInt(e));

const gameBoard = input.map((e) => e.split(""));

const solution = (gameBoard, n, m) => {
  const visited = Array.from(Array(n), () => Array(m).fill(false));
  let flag = 0;
  let startLocation = [];
  let startColor = "";

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const dfs = (x, y, cnt) => {
    if (flag) return;

    for (let i = 0; i < 4; i++) {
      const [tmpX, tmpY] = [x + dx[i], y + dy[i]];

      if (tmpX < 0 || tmpY < 0 || tmpX >= n || tmpY >= m) continue; // 범위 벗어나면 continue
      if (gameBoard[tmpX][tmpY] !== startColor) continue; // 같은 색 아니면 continue
      /* 같은 색 */
      if (!visited[tmpX][tmpY]) {
        // 방문하지 않았다면
        visited[tmpX][tmpY] = true;
        dfs(tmpX, tmpY, cnt + 1);
        visited[tmpX][tmpY] = false;
        continue; // 4가지 경우의 방향 모두 탐색
      } else {
        // 방문한 노드일 경우
        if (
          tmpX === startLocation[0] &&
          tmpY === startLocation[1] &&
          cnt >= 4
        ) {
          flag = 1; // 시작점으로 돌아왔을 경우 && cnt가 4 이상일 경우
          return;
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      visited[i][j] = true;
      startLocation = [i, j];
      startColor = gameBoard[i][j];
      dfs(i, j, 1);
      visited[i][j] = false;
      if (flag) break;
    }
  }

  console.log(flag ? "Yes" : "No");
};

solution(gameBoard, n, m);
