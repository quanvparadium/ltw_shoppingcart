import os

directory_path = './src'  # Change this to the directory you want to convert

for root, directories, files in os.walk(directory_path):
    for filename in files:
        if filename.endswith('.js'):
            file_path = os.path.join(root, filename)
            new_file_path = os.path.join(root, filename[:-2] + 'jsx')
            with open(file_path, 'r') as file:
                file_contents = file.read()
                new_file_contents = file_contents.replace('.js', '.jsx')
            with open(new_file_path, 'w') as new_file:
                new_file.write(new_file_contents)

            print(f"File {filename} converted to {filename[:-2] + 'jsx'}")
