# import sys
# input = sys.stdin.readline

V = int(input().rstrip())
adjList = [[] for _ in range(V+1)]
visited = [-1] * (V+1)

for _ in range(V):
    row = list(map(int, input().split()))
    for i in range(1, len(row), 2):
        if row[i] == -1:
            break
        adjList[row[0]].append((row[i], row[i+1]))

def dfs(start, dist):
    for next, next_dist in adjList[start]:
        if visited[next] == -1:
            visited[next] = dist + next_dist
            dfs(next, dist + next_dist)

start_node = 1
visited[start_node] = 0
dfs(1, 0)
far_node = visited.index(max(visited))

visited = [-1] * (V + 1)
visited[far_node] = 0
dfs(far_node, 0)
print(max(visited))