N = int(input())
energy = list(map(int, input().split()))

def get_energy(energy, x):
    return energy[x-1] * energy[x+1]

result = []

def dfs(energy, sum):
    if len(energy) == 2:
        result.append(sum)
        return
    else:
        for i in range(1, len(energy)-1):
            mul = get_energy(energy, i)
            sum += mul
            dfs(energy[:i] + energy[i+1:], sum)
            sum -= mul

dfs(energy, 0)
print(max(result))
