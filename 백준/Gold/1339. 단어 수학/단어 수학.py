import sys
input = sys.stdin.readline

N = int(input())
arr = [[0] * 8 for _ in range(N)]

for i in range(N):
    letters = input().rstrip()
    arr[i] = [0] * (8 - len(letters)) + list(letters)

def solution(arr):
    letter_to_num = {}

    for letters in arr:
        for i in range(8):
            if letters[i] == 0:
                continue
            else:
                if letters[i] in letter_to_num:
                    letter_to_num[letters[i]] += pow(10, 7-i)
                else:
                    letter_to_num[letters[i]] = pow(10, 7-i)

    num = 9
    sum = 0
    sorted_letter_to_num = dict(sorted(letter_to_num.items(), key=lambda x: x[1], reverse=True))
    
    for value in sorted_letter_to_num.values():
        sum += value * num
        num -= 1

    print(sum)

solution(arr)