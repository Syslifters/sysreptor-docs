---
url: https://docs.sysreptor.com/cli/importers/defectdojo.md
---
# Defect Dojo

Import finding templates from DefectDojo to SysReptor.

## Examples

```shell
reptor defectdojo --url http://localhost/
```

## Configuration

This module needs additional configurations, which you can add to your config file by running:

```shell
$ reptor defectdojo --conf
DefectDojo URL: https://localhost
DefectDojo API key v2: your-api-key
```

## Usage

```txt
usage: reptor defectdojo [-h] [--conf] [--tags TAGS] [--url [URL]]

Imports DefectDojo finding templates

options:
  -h, --help        show this help message and exit
  --conf, --config  Configure plugin settings

Global Importer Settings:
  --tags TAGS       Comma-separated tags for new templates

  --url [URL]       DefectDojo API

```
