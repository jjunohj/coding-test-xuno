def solution(nums):
    answer = []
    
    for num in nums:
        if num not in answer:
            answer.append(num)
        if len(answer) == len(nums) // 2:
            break
    
    return len(answer)
            