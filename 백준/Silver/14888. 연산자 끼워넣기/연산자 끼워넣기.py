import sys
input = sys.stdin.readline
from collections import deque

def divide(a, b):
    if a < 0:
        return -((-a)//b)
    return a//b

N = int(input())
nums = list(map(int, input().split()))
num_operators = list(map(int, input().split()))

min_sum = 1000000000
max_sum = -1000000000

def dfs(num_arr, num_operators, idx, sum):
    global min_sum, max_sum
    if idx >= N:
        min_sum = min(min_sum, sum)
        max_sum = max(max_sum, sum)
        return
    else: 
        for i in range(4):
            if num_operators[i] == 0:
                continue
            else:
                if i == 0:
                    num_operators[i] -= 1
                    dfs(num_arr, num_operators, idx+1, sum + num_arr[idx])
                    num_operators[i] += 1
                if i == 1:
                    num_operators[i] -= 1
                    dfs(num_arr, num_operators, idx+1, sum - num_arr[idx])
                    num_operators[i] += 1
                if i == 2:
                    num_operators[i] -= 1
                    dfs(num_arr, num_operators, idx+1, sum * num_arr[idx])
                    num_operators[i] += 1
                if i == 3:
                    num_operators[i] -= 1
                    dfs(num_arr, num_operators, idx+1, divide(sum, num_arr[idx]))
                    num_operators[i] += 1

dfs(nums, num_operators, 1, nums[0])
print(max_sum)
print(min_sum)