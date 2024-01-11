import sys
from collections import deque

input = sys.stdin.readline

n, k = map(int, input().split())
dist = [0] * 100001
prev = [0] * 100001

def path(n):
    arr = []
    cur = n
    for _ in range(dist[n] + 1):
        arr.append(cur)
        cur = prev[cur]
    print(' '.join(map(str, arr[::-1])))

def bfs(n):
    q = deque()
    q.append(n)

    while q:
        cur = q.popleft()
        if cur == k:
            print(dist[cur])
            path(cur)
            return cur
        for next in (cur-1, cur+1, cur*2):
            if 0<=next<=100000 and dist[next] == 0:
                q.append(next)
                dist[next] = dist[cur] + 1
                prev[next] = cur

bfs(n)
