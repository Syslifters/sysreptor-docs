---
url: https://docs.sysreptor.com/cli/tools/zap.md
---
# ZAP

::: warning Deprecated
CLI importers are deprecated. Import scan results from the SysReptor web UI using the [scanimport](https://github.com/Syslifters/sysreptor/tree/main/plugins/scanimport) plugin instead.
:::

## Examples

ZAP reports can be exported as XML or JSON.

```shell
cat zap.json | reptor zap
cat zap.json | reptor zap --upload  # Upload findings as notes
cat zap.json | reptor zap --push-findings  # Create findings from scan results
```

```shell
cat zap.xml | reptor zap --xml
cat zap.xml | reptor zap --xml --upload  # Upload findings as notes
cat zap.xml | reptor zap --xml --push-findings  # Create findings from scan results
```

## Usage

```txt
usage: reptor zap [-h] [-i [INPUT]] [--format] [--upload] [--push-findings]
                  [--template-vars] [--parse] [--xml | --json]
                  [--upload-finding-templates]

Parses ZAP reports (JSON, XML)

options:
  -h, --help            show this help message and exit
  -i [INPUT], --input [INPUT]
                        Input file, if not stdin 
  --format
  --upload
  --push-findings
  --template-vars       Print template variables (needed for finding template customization).
  --parse
  --xml
  --json
  --upload-finding-templates
                        Upload local finding templates to SysReptor

```
