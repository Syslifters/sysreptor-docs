---
url: https://docs.sysreptor.com/cli/utils/packarchive.md
---
# Packarchive

`packarchive` packs unpacked toml and json data structures back to tar.gz archives. Use `unpackarchive` to unpack tar.gz archives (like exported projects, designs, finding templates).

## Examples

```shell
reptor packarchive --output project.tar.gz ./project  # Pack contents of "project" directory to project.tar.gz
```

## Usage

```txt
usage: reptor packarchive [-h] [-o OUTPUT] directories [directories ...]

Pack directories into a .tar.gz file

positional arguments:
  directories

options:
  -h, --help            show this help message and exit
  -o OUTPUT, --output OUTPUT

```
