---
url: https://docs.sysreptor.com/cli/projects-and-templates/deletefindings.md
---
# DeleteFindings

Delete findings from your project.\
Dry run is default: No findings are deleted unless you specify `--no-dry-run`.

## Example

```shell
reptor deletefindings --title-contains "delete me"  # Delete findings matching the search query
reptor deletefindings --exclude-title-contains "leave me"  # Exclude findings with search query
reptor deletefindings --no-dry-run  # Delete all findings, no dry run
```

## Usage

```txt
usage: reptor deletefindings [-h] [--title-contains SEARCHTERM]
                             [--exclude-title-contains SEARCHTERM]
                             [--no-dry-run]

Deletes findings by title

options:
  -h, --help            show this help message and exit
  --title-contains SEARCHTERM
                        Match string in title
  --exclude-title-contains SEARCHTERM
                        Matched strings in title are not deleted
  --no-dry-run          Do delete findings, default is dry-run

```
