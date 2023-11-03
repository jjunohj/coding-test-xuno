from collections import deque

import sys
input = sys.stdin.readline

s = int(input())
    
def solution(s):
    q = deque([[1, 0, 0]])
    
    visited = [[False] * 1001 for _ in range(1001)]
    visited[1][0] = True

    while q:
        screen, clip, sec = q.popleft()
        
        if screen == s:
            print(sec)
            return
        
        for next in ([screen, screen, sec + 1], [screen + clip, clip, sec + 1], [screen - 1, clip, sec + 1]):
            if next[0] >= 1001 or next[0] < 0 or next[1] >= 1001 or next[1] < 0 or visited[next[0]][next[1]]:
                continue
            visited[next[0]][next[1]] = True
            q.append(next)

solution(s)