from collections import defaultdict

def solution(participant, completion):
    runners = defaultdict(int)
    
    for p in participant:
        runners[p] += 1
    
    for c in completion:
        runners[c] -= 1
        
    for name, count in runners.items():
        if count: return name
    
    
    
    