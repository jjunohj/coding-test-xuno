import sys
input = sys.stdin.readline

N = int(input())

tree = dict([])
parent = [i for i in range(N + 1)]

def find_parent(parent, x):
    # 루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
    if parent[x] != x:
        return find_parent(parent, parent[x])
    return x

# 두 원소가 속한 집합을 합치기
def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    parent[b] = a

for i in range(N):
    node, left, right = map(int, input().split())
    tree[node] = [left, right]
    if left != -1:
        union_parent(parent, node, left)
    if right != -1:
        union_parent(parent, node, right)

# print(tree)

root = find_parent(parent, 1)

cols = [[0, 0] for _ in range(N + 1)] # [col, depth]
col = 1

def inorder(node, depth):
    global col
    if node == -1:
        return
    inorder(tree[node][0], depth + 1)
    cols[node] = [col, depth]
    col += 1
    inorder(tree[node][1], depth + 1)

inorder(root, 1)

# print(cols)

depth_tree = dict([])

for i in range(1, N + 1):
    if cols[i][1] in depth_tree:
        depth_tree[cols[i][1]].append(cols[i][0])
    else:
        depth_tree[cols[i][1]] = [cols[i][0]]

# print(depth_tree)

for depth, cols in depth_tree.items():
    depth_tree[depth] = max(cols) - min(cols) + 1

# print(depth_tree)

result = []

for depth in depth_tree.keys():
    if depth_tree[depth] == max(depth_tree.values()):
        result.append(depth)

print(min(result), max(depth_tree.values()))
