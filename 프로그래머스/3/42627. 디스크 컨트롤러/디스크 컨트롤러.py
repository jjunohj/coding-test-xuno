import heapq

def solution(jobs):
    jobs.sort() # 시작 시간이 빠른 순서대로 정렬되어있음이 보장되어있음.
    i = 0 # 시작 시간이 가장 빠른 놈임
    n = len(jobs) # 전체 잡 개수인데, 이건 인덱스 방지용, 분기 마침용.
    cur_time = 0
    total_time = 0
    waiting = []
    
    while i < n or waiting:
        # 가장 빨리 들어올 작업부터
        while i < n:
            # 내가 보고있는 작업이 현재 시간보다 이전에 혹은 지금 들어왔어야 하는 작업인 경우
            if jobs[i][0] <= cur_time:
                # 대기 큐에 넣겠다.
                # 어떻게? 소요 시간, 시작 시간, 인덱스 순서로.
                heapq.heappush(waiting, (jobs[i][1], jobs[i][0], i))
                i += 1
            # 내가 보고있는 작업이 아직 안온 경우
            else:
                break

        if waiting:
            duration, start, id = heapq.heappop(waiting)
            cur_time += duration
            total_time += (cur_time - start)
        else:
            # i는 지금 내 시간보다 다음임
            if i < n:
                cur_time = jobs[i][0]
    
    return total_time // n
            