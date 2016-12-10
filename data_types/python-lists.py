import sys
commands = []
for line in sys.stdin:
    commands.append(line.split())
for command in commands:
    if command[0] == 'insert':
        print('I')
        # implement insert
    elif command[0] == 'print':
        # print
        print('p')
    elif command[0] == 'remove':
        # remove
        print('D')
    elif command[0] == 'append':
        # append
        print('A')
    elif command[0] == 'pop':
        # pop
        print('P')
    elif command[0] == 'reverse':
        # reverse
        print('r')
print(commands)