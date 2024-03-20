def solution(name, yearning, photo):
    name_yearning = {
        n: yearning[i]
        for i, n in enumerate(name)
    }
    
    print(name_yearning)
    
    result = []
    for p in photo:
        sum = 0
        for name in p:
            if name in name_yearning:
                sum += name_yearning[name]
        result.append(sum)
        
    return result