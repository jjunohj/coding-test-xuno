import math

def solution(progresses, speeds):
    days_left = []
    answer = []
    
    for p, s in zip(progresses, speeds):
        days = math.ceil((100 - p) / s)
        days_left.append(days)
    
    next_deploy_day = days_left[0]
    cnt = 1
    
    for day in days_left[1:]:
        if day <= next_deploy_day:
            cnt += 1
        else:
            answer.append(cnt)
            cnt = 1
            next_deploy_day = day
    
    answer.append(cnt)
    
    return answer
    