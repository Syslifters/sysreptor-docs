---
url: https://docs.sysreptor.com/cli/projects-and-templates/file.md
---
# File

`file` uploads files from your system into a SysReptor note.

## Examples

```shell
reptor file archive.zip
reptor file *  # Upload all files
```

![Uploaded files](/cli/assets/uploaded-files.png)

## Usage

```txt
usage: reptor file [-h] [-fn FILENAME] [--no-link] [file ...]

Uploads a file

positional arguments:
  file                  files to upload; leave empty for stdin

options:
  -h, --help            show this help message and exit
  -fn FILENAME, --filename FILENAME
                        filename if file provided via stdin
  --no-link             upload file to project without adding markdown link to note (note that unreferenced files are deleted during regular cleanup jobs)

```
