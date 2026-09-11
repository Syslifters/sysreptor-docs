---
url: https://docs.sysreptor.com/cli/projects-and-templates/deleteprojects.md
---
# DeleteProjects

Delete SysReptor projects.\
Dry run is default: No projects are deleted unless you specify `--no-dry-run`.

## Example

```shell
reptor deleteprojects --title-contains "delete me"  # Delete projects matching the search query
reptor deleteprojects --exclude-title-contains "leave me"  # Exclude projects with search query
reptor deleteprojects --no-dry-run  # Delete all projects, no dry run
```

## Usage

```txt
usage: reptor deleteprojects [-h] [--title-contains SEARCHTERM]
                             [--exclude-title-contains SEARCHTERM]
                             [--no-dry-run]

Deletes projects by title

options:
  -h, --help            show this help message and exit
  --title-contains SEARCHTERM
                        Match string in title
  --exclude-title-contains SEARCHTERM
                        Matched strings in title are not deleted
  --no-dry-run          Do delete projects, default is dry-run

```
