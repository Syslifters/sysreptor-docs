---
url: https://docs.sysreptor.com/cli/utils/unpackarchive.md
---
# Unpackarchive

`unpackarchive` unpacks exported tar.gz archives (like exported projects, designs, finding templates) to json or toml structures. Use `packarchive` to convert back to tar.gz.

## Examples

```shell
reptor unpackarchive --format json --output project ./project.tar.gz  # Unpack project archive as json to "project" directory
reptor unpackarchive --format toml --output design ./design.tar.gz  # Unpack design archive as toml to "design" directory
```

## Usage

```txt
usage: reptor unpackarchive [-h] [-o OUTPUT] [-f {json,toml}]
                            files [files ...]

Unpack .tar.gz exported archives

positional arguments:
  files

options:
  -h, --help            show this help message and exit
  -o OUTPUT, --output OUTPUT
  -f {json,toml}, --format {json,toml}

```
