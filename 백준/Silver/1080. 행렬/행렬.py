import sys
input = sys.stdin.readline

N, M = map(int, input().split())

original_graph = []
aim_graph=[]
for _ in range(N):
    original_graph.append(list(map(int, list(input().rstrip()))))

for _ in range(N):
    aim_graph.append(list(map(int, list(input().rstrip()))))


def flip(x, y, graph):
    for i in range(x, x+3):
        for j in range(y, y+3):
            graph[i][j] = 1 - graph[i][j]

def check(graph1, graph2):
    for i in range(N):
        for j in range(M):
            if graph1[i][j] != graph2[i][j]:
                return False
    return True

cnt = 0
if (N < 3 or M < 3) and not check(original_graph, aim_graph):
    cnt = -1
else:
    for i in range(N-2):
        for j in range(M-2):
            if original_graph[i][j] != aim_graph[i][j]:
                cnt += 1
                flip(i, j, original_graph)
    if not check(original_graph, aim_graph):
        cnt = -1

print(cnt)
    
        



            