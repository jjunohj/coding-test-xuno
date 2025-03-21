from collections import deque

def solution(maps):
    n = len(maps)
    m = len(maps[0])
    
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]
    
    def bfs():
        queue = deque([(0, 0)])
        visited = [[0] * m for _ in range(n)]
        visited[0][0] = 1
        
        while queue:
            x, y = queue.popleft()
            
            if x == n-1 and y == m-1:
                return visited[x][y]
            
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                
                if 0 <= nx < n and 0 <= ny < m:
                    if maps[nx][ny] == 1 and visited[nx][ny] == 0:
                        visited[nx][ny] = visited[x][y] + 1
                        queue.append((nx, ny))
        return -1
        
    return bfs()
        