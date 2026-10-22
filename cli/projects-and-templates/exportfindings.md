---
url: https://docs.sysreptor.com/cli/projects-and-templates/exportfindings.md
---
# ExportFindings

Export your project findings as a summary or checklist.

```shell
reptor exportfindings  # csv to stdout
reptor exportfindings --format json --output "findings.json"  # json to file
reptor exportfindings --format toml --fieldnames title,cvss  # export custom fieldnames
```

## Usage

```txt
usage: reptor exportfindings [-h] [--format {csv,json,toml,yaml}]
                             [--fieldnames FIELDNAMES] [-o FILENAME]
                             [--upload]

Export your project findings as a summary or checklist

options:
  -h, --help            show this help message and exit
  --format {csv,json,toml,yaml}
                        Output format
  --fieldnames FIELDNAMES
                        Fieldnames to be included, comma-separated
  -o FILENAME, --output FILENAME
                        Filename to store output, empty for stdout
  --upload              Used with --export or --render; uploads file to note

```
