from pathlib import Path

my_file = Path("./flask-setup.py")

if(not my_file.is_file()):
    try:
        file = open('flask-setup.py', 'w+')
        file.write("secret = 'YOUR SECRET HERE'")
    except IOError:
        print("Error writing file")
else:
    print("File already exists")