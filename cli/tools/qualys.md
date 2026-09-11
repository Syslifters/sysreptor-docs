---
url: https://docs.sysreptor.com/cli/tools/qualys.md
---
# Qualys

::: warning Deprecated
CLI importers are deprecated. Import scan results from the SysReptor web UI using the [scanimport](https://github.com/Syslifters/sysreptor/tree/main/plugins/scanimport) plugin instead.
:::

## Examples

This importer supports both, Qualys *Web Application Scans* and *Vulnerability Management Scans*.

*Limitations*: The Qualys XML exports don't include CVSS vectors, which is why CVSS scores are not populated to the findings. It, however, populates the "severity" field if your design uses it as a finding field.

```shell
cat qualys.xml | reptor qualys
cat qualys.xml | reptor qualys --upload  # Upload findings as notes
cat qualys.xml | reptor qualys --push-findings  # Create findings from scan results
```

![Pushed Qualys findings](/cli/assets/qualys_uploaded_findings.png)

![Qualys findings as notes](/cli/assets/qualys_uploaded_notes.png)

Filter your Qualys results:

```shell
cat qualys.xml | reptor qualys --severity-filter medium-critical --push-findings
cat qualys.xml | reptor qualys --include-plugins 150158 --push-findings
cat qualys.xml | reptor qualys --exclude-plugins 150158 --push-findings
reptor qualys -i qualys_1.xml qualys_2.xml --push-findings  # Use multiple input files
```

You can add those filter settings to your config by running:

```shell
reptor qualys --conf
```

## Usage

```txt
usage: reptor qualys [-h] [--conf] [-i [INPUT ...]]
                     [--format | --upload | --push-findings | --template-vars | --parse | --upload-finding-templates]
                     [--severity-filter SEVERITY_FILTER]
                     [--exclude EXCLUDED_PLUGINS] [--include INCLUDED_PLUGINS]

Qualys vulnerability importer

options:
  -h, --help            show this help message and exit
  --conf, --config      Configure plugin settings
  -i [INPUT ...], --input [INPUT ...]
                        Input file, if not stdin (multiple files allowed)
  --format
  --upload
  --push-findings
  --template-vars       Print template variables (needed for finding template customization).
  --parse
  --upload-finding-templates
                        Upload local finding templates to SysReptor
  --severity-filter SEVERITY_FILTER
                        Filter findings by severity comma-separated ("high,medium") or as range ("medium-critical")
  --exclude EXCLUDED_PLUGINS
                        Exclude plugin IDs, comma-separated
  --include INCLUDED_PLUGINS
                        Include plugin IDs, comma-separated; default: all are included

```
