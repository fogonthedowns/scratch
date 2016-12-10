import sys
commands = []
myAnswer = []
for line in sys.stdin:
    commands.append(line.split())
for command in commands:
    if len(command) > 1:
        digit = int(command[1])
    if command[0].isdigit():
        continue
    if command[0] == 'insert':
        myAnswer.insert(digit,int(command[2]))
        # implement insert
    elif command[0] == 'print':
        print(myAnswer)
    elif command[0] == 'sort':
        # remove
        myAnswer.sort()
    elif command[0] == 'remove':
        # remove
        myAnswer.remove(digit)
    elif command[0] == 'append':
        # append
        myAnswer.append(digit)
    elif command[0] == 'pop':
        # pop
        myAnswer.pop()
    elif command[0] == 'reverse':
        # reverse
        myAnswer.reverse()
