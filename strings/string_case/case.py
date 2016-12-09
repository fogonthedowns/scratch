import sys
for line in sys.stdin:
    args = [line]
string = args[0]

p = 'False'
for s in range(len(string)):
    if string[s-1].isalnum():
        p = 'True'
print(p)

p = 'False'
for s in range(len(string)):
    if string[s-1].isalpha():
        p = 'True'
print(p)

p = 'False'
for s in range(len(string)):
    if string[s-1].isdigit():
        p = 'True'
print(p)

p = 'False'
for s in range(len(string)):
    if string[s-1].islower():
        p = 'True'
print(p)

p = 'False'    
for s in range(len(string)):
    if string[s-1].isupper():
        p = 'True'
print(p)
