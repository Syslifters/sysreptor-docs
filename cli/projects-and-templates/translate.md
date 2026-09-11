---
url: https://docs.sysreptor.com/cli/projects-and-templates/translate.md
---
# Translate

Translate pentest reports using Deepl (bring your own Deepl API token).

## Examples

```shell
reptor translate -to DE --dry-run
reptor translate --from EN -to DE
reptor translate -to DE --skip-fields recommendation,summary
```

## Installation

Make sure you installed required dependencies by using `pip install reptor[translate]` or `pip install reptor[all]`.

## Configuration

The translate module needs additional configurations, which you can add to `~/.sysreptor/config.yaml`:

```yaml
translate:
  deepl_api_token: <your-api-token>
  skip_fields:
  - description
```

`skip_fields` can be used to do not translate certain report or finding fields.

## Usage

```txt
usage: reptor translate [-h] [--conf] [--from LANGUAGE_CODE]
                        [--to LANGUAGE_CODE] [--skip-fields FIELDS]
                        [--dry-run]

Translate Projects to other languages via Deepl

options:
  -h, --help            show this help message and exit
  --conf, --config      Configure plugin settings
  --from LANGUAGE_CODE  Language code of source language
  --to LANGUAGE_CODE    Language code of dest language
  --skip-fields FIELDS  Report and Finding fields, comma-separated
  --dry-run             Do not translate, count characters to be translated and checks Deepl quota

```
