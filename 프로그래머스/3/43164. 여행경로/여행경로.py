from collections import defaultdict

def solution(tickets):
    airlines = defaultdict(list)
    
    for dep, arr in tickets:
        airlines[dep].append(arr)
        
    for dep, arrs in airlines.items():
        airlines[dep] = sorted(arrs)
    
    path = []
    def dfs(airport):
        while airlines[airport]:
            next_airport = airlines[airport].pop(0)
            dfs(next_airport)
        path.append(airport)
        
    dfs("ICN")
    
    return path[::-1]