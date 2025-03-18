n, m = map(int, input().split())

numbers = [i for i in range(1, n+1)]

def rec(list):
    if len(list) == m:
        return print(*list)
    else:
        for i in numbers:
            if i not in list:
                list.append(i)
                rec(list)
                list.pop()


rec([])