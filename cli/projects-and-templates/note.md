---
url: https://docs.sysreptor.com/cli/projects-and-templates/note.md
---
# Note

`note` creates a new note in SysReptor.

## Examples

```shell
echo "*Upload me*" | reptor note  # Appends to "Uploads" note
echo "*Upload me*" | reptor note --notetitle "My Note"  # Custom notetitle
```

## Usage

```txt
usage: reptor note [-h] [--list] [--json]

Uploads and lists notes

options:
  -h, --help  show this help message and exit
  --list      list available notes
  --json

```
