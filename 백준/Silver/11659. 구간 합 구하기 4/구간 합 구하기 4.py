from collections import deque

import sys
input = sys.stdin.readline

n, m = map(int, input().split())

arr = list(map(int, input().split()))

dp = [0] * (n + 1)

for i in range(1, n + 1):
    dp[i] = dp[i - 1] + arr[i - 1]

for _ in range(m):
    i, j = map(int, input().split())
    print(dp[j] - dp[i - 1])