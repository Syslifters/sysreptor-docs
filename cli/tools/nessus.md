---
url: https://docs.sysreptor.com/cli/tools/nessus.md
---
# Nessus

::: warning Deprecated
CLI importers are deprecated. Import scan results from the SysReptor web UI using the [scanimport](https://github.com/Syslifters/sysreptor/tree/main/plugins/scanimport) plugin instead.
:::

## Examples

```shell
cat nessus.xml | reptor nessus
cat nessus.xml | reptor nessus --upload  # Upload findings as notes
cat nessus.xml | reptor nessus --push-findings  # Create findings from scan results
```

![Pushed Nessus findings](/cli/assets/nessus_uploaded_findings.png)

![Nessus findings as notes](/cli/assets/nessus_uploaded_notes.png)

Filter your Nessus results:

```shell
cat nessus.xml | reptor nessus --severity-filter medium-critical --push-findings
cat nessus.xml | reptor nessus --include-plugins 11219,25216 --push-findings  # Include only plugin IDs 11219, 25216
cat nessus.xml | reptor nessus --exclude-plugins 11219,25216 --push-findings  # Exclude plugin IDs 11219, 25216
reptor nessus -i nessus_1.xml nessus_2.xml --push-findings  # Use multiple input files
```

You can add those filter settings to your config by running:

```shell
reptor nessus --conf
```

## Advanced usage

Check out our [video for advanced usage](https://www.youtube.com/watch?v=gVgsV_nx7D0).

## Usage

```txt
usage: reptor nessus [-h] [--conf] [-i [INPUT ...]]
                     [--format | --upload | --push-findings | --template-vars | --parse | --upload-finding-templates]
                     [--severity-filter SEVERITY_FILTER] [--snoozed-filter]
                     [--exclude EXCLUDED_PLUGINS] [--include INCLUDED_PLUGINS]

Nessus vulnerability importer

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
                        Filter findings by severity comma-separated ("info,low,medium,high,critical") or as range ("medium-critical")
  --snoozed-filter      Exclude snoozed vulnerabilities
  --exclude EXCLUDED_PLUGINS
                        Exclude plugin IDs, comma-separated
  --include INCLUDED_PLUGINS
                        Include plugin IDs, comma-separated; default: all are included

```
