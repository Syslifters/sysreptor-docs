---
url: https://docs.sysreptor.com/cli/projects-and-templates/createproject.md
---
# CreateProject

Create a new pentest project via CLI.

This module updates your reptor config with the newly created project ID, so you can immediately continue with other commands.\
Use `--no-update-config` to prevent this behavior.

## Examples

```shell
reptor createproject --name "New project" --design "8a6ebd7b-637f-4f38-bfdd-3e8e9a24f64e" --tags web,auto
reptor createproject --name "New project" --design "8a6ebd7b-637f-4f38-bfdd-3e8e9a24f64e" --no-update-config
```

## Usage

```txt
usage: reptor createproject [-h] [-n PROJECT NAME] -d DESIGN ID [-t TAGS]
                            [--no-update-config]

Create a new pentest project

options:
  -h, --help            show this help message and exit
  -n PROJECT NAME, --name PROJECT NAME
                        Project name
  -d DESIGN ID, --design DESIGN ID
                        Design UUID for the project
  -t TAGS, --tags TAGS  Comma-separated project tags
  --no-update-config    Do not update project ID in config file

```
