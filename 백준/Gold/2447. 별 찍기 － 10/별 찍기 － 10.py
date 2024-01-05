N = int(input())

def append_star(LEN):
    if LEN == 1:
        return ['*']
    
    stars = append_star(LEN//3)
    L = []

    # stars = ['*']
    # LEN = 3

    # stars = ['*', '*', '*']
    #         ['*', ' ', '*']
    #         ['*', '*', '*']
    # LEN = 9

    for s in stars:
        L.append(s*3)
    for s in stars:
        L.append(s + ' '*(LEN//3) + s)
    for s in stars:
        L.append(s*3)
    return L

print('\n'.join(append_star(N)))

