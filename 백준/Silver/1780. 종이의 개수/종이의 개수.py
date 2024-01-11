import sys
input = sys.stdin.readline

N = int(input().rstrip())
matrix = [list(map(int, input().split())) for _ in range(N)]

def check_same(matrix):
    N = len(matrix)
    for i in range(N):
        for j in range(N):
            if matrix[i][j] != matrix[0][0]:
                return False
    return True

result = [0, 0, 0]

def divide(matrix):
    global result
    N = len(matrix)
    if check_same(matrix):
        result[matrix[0][0]] += 1
        return
    else:
        for i in range(3):
            for j in range(3):
                divide([row[j*N//3:(j+1)*N//3] for row in matrix[i*N//3:(i+1)*N//3]])

divide(matrix)
print(result[-1])
print(result[0])
print(result[1])
