from collections import deque

n = int(input())
m = int(input())

adj_list = [[] for _ in range(n+1)]

for _ in range(m):
    v1, v2 = map(int, input().split())
    adj_list[v1].append(v2)
    adj_list[v2].append(v1)

infected = [0] * (n + 1)

def solution(start):
    cnt = 0
    q = deque()

    infected[start] = 1
    q.append(start)

    while len(q):
        cur = q.popleft()
        for com in adj_list[cur]:
            if infected[com] == 0:
                infected[com] = 1
                q.append(com)
                cnt += 1

    return cnt


print(solution(1))



