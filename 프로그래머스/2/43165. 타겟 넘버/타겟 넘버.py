


def solution(numbers, target):
    l = len(numbers)
    answer = 0
    
    
    def dfs(i, cur_sum):
        nonlocal answer
        # i가 추가되서 온 시점
        if i == l: # 마지막 인덱스일 때
            if cur_sum == target:
                answer += 1
            return
        
        dfs(i+1, cur_sum + numbers[i])
        dfs(i+1, cur_sum - numbers[i])

    dfs(0, 0)
    return answer