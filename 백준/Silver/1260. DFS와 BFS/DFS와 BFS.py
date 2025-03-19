import sys
from collections import deque

input = sys.stdin.readline

n, m, v = map(int, input().split())

g = [[0 for i in range(n+1)] for j in range(n+1)]

for _ in range(m):
    a, b = map(int, input().split())
    g[a][b] = 1
    g[b][a] = 1

def bfs(v):
    visited = [0 for _ in range(n + 1)]
    result = []

    q = deque()

    visited[v] = 1
    q.append(v)

    while len(q):
        cur = q.popleft()
        result.append(cur)

        for i in range(1,n+1):
            if visited[i] == 0 and g[cur][i] == 1:
                visited[i] = 1
                q.append(i)

    return print(*result)

def dfs(v):
    visited = [0] * (n+1)
    result = []

    def dfs_recursive(node):
        visited[node] = 1
        result.append(node)

        for i in range(1, n+1):
            if visited[i] == 0 and g[node][i] == 1:
                dfs_recursive(i)

    dfs_recursive(v)
    return print(*result)

dfs(v)
bfs(v)


