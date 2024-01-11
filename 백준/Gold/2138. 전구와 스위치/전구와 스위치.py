import sys
input = sys.stdin.readline

N = int(input())
bulb = list(map(int, list(input().rstrip())))
target = list(map(int, list(input().rstrip())))

def switch(A, B):
    A_copy = A[:]
    cnt = 0

    for i in range(1, N):
        if A_copy[i-1] == B[i-1]:
            continue
        cnt += 1
        for j in range(i-1, i+2):
            if j < N:
                A_copy[j] = 1 - A_copy[j]
    if A_copy == B:
        return cnt
    else:
        return 1e9
    
result = switch(bulb, target)
bulb[0] = 1 - bulb[0]
bulb[1] = 1 - bulb[1]

result = min(result, switch(bulb, target) + 1)
if result == 1e9:
    print(-1)
else:
    print(result)

