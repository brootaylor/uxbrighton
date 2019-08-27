import os
import re
import requests

INPUT_DIR = os.path.join(os.getcwd(), 'output')
ERR_OUTPUT_FILE = 'ignored-error-id-info.md'
ERR_OUTPUT_FILE_FULL = os.path.join(os.getcwd(), ERR_OUTPUT_FILE)

timestamp_folders = [
    obj for obj in os.listdir(INPUT_DIR)
    if os.path.isdir(os.path.join(INPUT_DIR, obj))
]

html_files_loc = sorted(timestamp_folders)[-1]
html_files_loc_full = os.path.join(INPUT_DIR, html_files_loc)

ERR_FORMAT = f"""

## ID %d

- **requirement**: %s
- **error**: %s
- **description**: %s
- **rationale**: %s
- **[Example audit containing error ID %d][%s]**"""

files_to_check = [
    file for file in os.listdir(html_files_loc_full)
    if os.path.isfile(os.path.join(html_files_loc_full, file)) and file.endswith('.html')
]

id_regex = re.compile(r'href="https://achecker\.ca/checker/suggestion\.php\?id=(?P<id>\d+)"')

unique_ids = {}

for i in range(len(files_to_check)):
    file = files_to_check[i]
    curr_file_ids = set()
    print(f'({i + 1}/{len(files_to_check)}): Scanning {file}')
    with open(os.path.join(html_files_loc_full, file), 'r') as file_handle:
        matches = id_regex.findall(file_handle.read())
        for match in matches:
            curr_id = int(match)
            curr_file_ids.add(curr_id)
            if curr_id not in unique_ids:
                unique_ids[curr_id] = file
    print('Found the following ids: ' + ', '.join(str(curr_id) for curr_id in sorted(curr_file_ids)))

sorted_ids = sorted(unique_ids.keys())

print('\nIDs found the directory: ' + ', '.join(str(curr_id) for curr_id in sorted_ids))

req_regex = re.compile(r'<h2>Requirement<\/h2>\s*<span class="msg">(?P<msg>.*)<\/span>')
err_regex = re.compile(r'<h2>Error<\/h2>\s*<span class="msg">(?P<msg>.*)<\/span>')
desc_regex = re.compile(r'<h2>Short Description<\/h2>\s*<span class="msg">(?P<msg>.*)<\/span>')
rat_regex = re.compile(r'<h2>Rationale<\/h2>\s*<span class="msg">(?P<msg>.*)<\/span>')

code_regex = re.compile(r'</?code>')

output = '# Ignored accessibility checker error ids'


def get_msg(regex):
    match = regex.search(content)
    if match is not None:
        raw_msg = match.group('msg')
        return code_regex.sub('', raw_msg)
    else:
        return 'Not found'


example_files = set()

for curr_id in sorted_ids:
    print(f'Getting information on ID: {curr_id}')
    response = requests.get(f'https://achecker.ca/checker/suggestion.php?id={curr_id}')
    content = str(response.content, 'utf-8')

    req = get_msg(req_regex)
    err = get_msg(err_regex)
    desc = get_msg(desc_regex)
    rat = get_msg(rat_regex)
    example = unique_ids[curr_id].replace('.html', '')
    example_files.add(example)

    output += ERR_FORMAT % (curr_id, req, err, desc, rat, curr_id, example)

if len(example_files) > 0:
    output += '\n'

for file in example_files:
    output += f'\n[{file}]: ./output/{html_files_loc}/{file}.html'


with open(ERR_OUTPUT_FILE_FULL, 'w') as file_handle:
    file_handle.write(output + '\n')

print(f'Wrote error information to {ERR_OUTPUT_FILE}')
