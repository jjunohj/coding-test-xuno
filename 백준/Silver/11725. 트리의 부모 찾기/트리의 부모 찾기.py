from collections import deque
import sys
input = sys.stdin.readline

n = int(input())
tree = [[] for _ in range(n+1)]
visited = [False] * (n+1)
answer = [0] * (n+1)

for _ in range(n-1):
    left, right = map(int, input().split())
    tree[left].append(right)
    tree[right].append(left)

def bfs(tree, start, visited):
    q = deque([start])
    visited[start] = True

    while q:
        cur = q.popleft()
        for next in tree[cur]:
            if not visited[next]:
                q.append(next)
                visited[next] = True
                answer[next] = cur

bfs(tree, 1, visited)

for i in range(2, n+1):
    print(answer[i])