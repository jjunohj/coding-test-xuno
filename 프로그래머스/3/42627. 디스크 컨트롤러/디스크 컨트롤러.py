def solution(jobs):
    print(jobs)
    sorted_jobs = sorted(jobs, key=lambda x: (x[0], x[1]))
    print(sorted_jobs)
    
    answer = 0
    return answer