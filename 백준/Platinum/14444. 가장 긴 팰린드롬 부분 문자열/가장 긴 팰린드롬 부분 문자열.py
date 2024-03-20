S = input()

def solution(s: str):
    if len(s) < 2:
        return 1
    elif s[:] == s[::-1]:
        return len(s)
    
    def expand(left:int, right:int):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right-left-1
    
    max_len = 0
    for i in range(0, len(s) - 1):
        max_len = max(
            max_len,
            expand(i, i+1),
            expand(i, i+2),    
        )
    return max_len

print(solution(S))