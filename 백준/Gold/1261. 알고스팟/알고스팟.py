from collections import deque

m, n = map(int, input().split())

maze = []
for _ in range(n):
    maze.append(list(map(int, input())))

dist = [[-1] * m for _ in range(n)]

dx = [1, 0, -1, 0] # 행 이동
dy = [0, 1, 0, -1] # 열 이동

def bfs(a, b):
    q = deque()
    q.append([a,b])
    dist[0][0] = 0

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue

            if dist[nx][ny] == -1:
                if maze[nx][ny] == 0:
                    dist[nx][ny] = dist[x][y]
                    q.appendleft([nx, ny])

                else:
                    dist[nx][ny] = dist[x][y] + 1
                    q.append([nx, ny])

bfs(0, 0)
print(dist[n-1][m-1])