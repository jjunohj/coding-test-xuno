import sys

input = sys.stdin.readline

n, m = map(int, input().split())

board = [list(map(int, input().rstrip())) for _ in range(n)]
ans = []


# 비트마스크로 풀 경우 2^(4*4) = 2^16 = 65536
def solve():
    for i in range(1 << n * m):  # pow(2, n*m)만큼 반복
        sum = 0
        for row in range(n):  # row 방향으로 탐색
            row_sum = 0  # 각 행마다 합
            for col in range(m):  # 각 행에서 col 방향으로 탐색
                idx = row * m + col
                if (i & (1 << idx)) != 0:  # i와 1 << idx AND 연산이 0이 아니면 (1이면) 가로로 더하기
                    row_sum = row_sum * 10 + board[row][col]  # 이어져 있을 경우 10씩 곱해서 더하기
                else:  # 이어져 있지 않을 경우
                    sum += row_sum
                    row_sum = 0  # 다시 row_sum 초기화
            sum += row_sum  # 마지막 열에 안끊겼을 경우

        for col in range(m):  # col 방향으로 탐색
            col_sum = 0
            for row in range(n):
                idx = row * m + col
                if (i & (1 << idx)) == 0:
                    col_sum = col_sum * 10 + board[row][col]
                else:
                    sum += col_sum
                    col_sum = 0
            sum += col_sum
        ans.append(sum)
    return max(ans)


print(solve())
