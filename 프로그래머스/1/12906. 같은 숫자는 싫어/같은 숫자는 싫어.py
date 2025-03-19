def solution(arr):
    s = [arr[0]]

    for num in arr:
        if s[-1] != num:
                s.append(num)
        
    return s