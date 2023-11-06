import sys
from collections import deque

input = sys.stdin.readline

visited = [False] * 100001
dist = [-1] * 100001

n, k = map(int, input().split())

q = deque()
q.append(n)
visited[n] = True
dist[n] = 0

while q:
    cur = q.popleft()
    if cur * 2 <= 100000 and not visited[cur * 2]:
        q.appendleft(cur * 2)
        visited[cur * 2] = True
        dist[cur * 2] = dist[cur]
    if cur - 1 >= 0 and not visited[cur - 1]:
        q.append(cur - 1)
        visited[cur - 1] = True
        dist[cur - 1] = dist[cur] + 1
    if cur + 1 <= 100000 and not visited[cur + 1]:
        q.append(cur + 1)
        visited[cur + 1] = True
        dist[cur + 1] = dist[cur] + 1

print(dist[k])


