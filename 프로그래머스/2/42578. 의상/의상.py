from functools import reduce
from collections import defaultdict

def solution(clothes):
    closet = defaultdict(int)
    for clothe in clothes:
        name, clothe_type = clothe
        closet[clothe_type] += 1
    
    return reduce(lambda acc, cur: acc * (cur + 1), closet.values(), 1) - 1
