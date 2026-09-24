---
url: https://docs.sysreptor.com/cli/projects-and-templates/findingfromtemplate.md
---
# FindingFromTemplate

Create new findings from finding templates by template ID or tag.\
Specifying a tag might create multiple findings. Tags can be comma-separated and are `and`-connected.

If a finding exists in the report that was created from a finding template, it is not newly added.

## Examples

```shell
reptor findingfromtemplate --template-id 8a6ebd7b-637f-4f38-bfdd-3e8e9a24f64e
reptor findingfromtemplate --tags web
reptor findingfromtemplate --tags web,sql  # Create findings from templates that have both tags "web" and "sql"
```

## Usage

```txt
usage: reptor findingfromtemplate [-h] [--template-id [TEMPLATE_ID]]
                                  [--tags TAGS]

Creates findings from remote finding templates

options:
  -h, --help            show this help message and exit

  --template-id [TEMPLATE_ID]
                        UUID of the template to use
  --tags TAGS           Create findings from finding templates with the specified tags; comma-separated list of tags

```
