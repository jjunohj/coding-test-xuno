import sys
from collections import deque
input = sys.stdin.readline

chess_board = []

for _ in range(8):
    chess_board.append(list(input().rstrip()))

dy = [0, 1, 1, 1, 0, -1, -1, -1, 0]
dx = [-1, -1, 0, 1, 1, 1, 0, -1, 0]

start = [7, 0, 0]
queue = deque()
queue.append(start)

def move_board():
    for i in range(7, 0, -1):
        for j in range(8):
            chess_board[i][j] = chess_board[i - 1][j]
    for i in range(8):
        chess_board[0][i] = '.'
    return

def solution():
    while queue:
        q_len = len(queue)
        for _ in range(q_len):
            x, y, time = queue.popleft()
            # print("x, y, time = " , x, y, time)
            # print('\n'.join([''.join([str(i) for i in row]) for row in chess_board]))
            if x == 0 and y == 7:
                return 1
            if chess_board[x][y] == '#':
                continue
            if time >= 8:
                return 1
            for i in range(9):
                nx = x + dx[i]
                ny = y + dy[i]
                if 0 <= nx < 8 and 0 <= ny < 8 and chess_board[nx][ny] == '.':
                    queue.append([nx, ny, time + 1])
        move_board()
    return 0

print(solution())
