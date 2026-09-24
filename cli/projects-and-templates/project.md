---
url: https://docs.sysreptor.com/cli/projects-and-templates/project.md
---
# Project

The project plugin lets you interact with your SysReptor projects.

## Render Reports

```shell
reptor project --render  # Render report to PDF and download
reptor project --render -o file.pdf  # Save to file.pdf
reptor project --render -o -  # Write to stdout
reptor project --render --upload  # Upload to notes
reptor project --render --design 0222cdf1-4208-491c-8a23-7d49d67707ff  # Render with alternative design
```

You can add the design ID of your alternative design to your `~/.sysreptor/config.yaml`:

```yaml
project:
  design: 0222cdf1-4208-491c-8a23-7d49d67707ff
```

## Export Reports

```shell
reptor project --export tar.gz  # Export your report to tar.gz
reptor project --export tar.gz -o -  # Export your report to tar.gz, write to stdout
reptor project --export json
reptor project --export toml -o -  # Write report as toml to stdout
reptor project --export yaml --upload  # Export report as yaml and upload to notes
```

## Usage

```txt
usage: reptor project [-h]
                      [--search SEARCHTERM | --export {tar.gz,json,toml,yaml} | --render | --duplicate]
                      [--finish | --reactivate] [-o FILENAME]
                      [--design DESIGN ID] [--upload] [--json]

Work with projects

options:
  -h, --help            show this help message and exit
  --search SEARCHTERM   Search for term
  --export {tar.gz,json,toml,yaml}
                        Export project
  --render              Render project
  --duplicate           Duplicate project
  --finish              Set project as finished
  --reactivate          Reactivate a finished project
  -o FILENAME, --output FILENAME
                        Filename for output
  --design DESIGN ID    Render project with alternative design
  --upload              Used with --export or --render; uploads file to note
  --json                Used with --search; output as json

```
