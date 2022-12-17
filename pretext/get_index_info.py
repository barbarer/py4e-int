RST_BASE = '../_sources/'
file_list = open('files_with_index.txt')
for file_name in file_list:
    rst_file = open(RST_BASE + file_name.rstrip())
    in_index = False
    print(RST_BASE + file_name.rstrip())
    for line in rst_file:
        line = line.rstrip()
        if '.. index' in line:
            print(line)
            in_index = True
        else:
            if in_index:
                print(line)
                if line.strip() == '':
                    in_index = False
    print("#=======================")
print("Finito la commedia")
