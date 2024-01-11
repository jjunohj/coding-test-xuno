N = int(input())
N_list = list(map(int, input().split()))
M = int(input())
M_list = list(map(int, input().split()))

cards = {x: 1 for x in N_list}
result = []

for m in M_list:
    if m in cards:
        result.append('1')
    else:
        result.append('0')

print(' '.join(result))