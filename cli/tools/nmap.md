---
url: https://docs.sysreptor.com/cli/tools/nmap.md
---
# nmap

::: warning Deprecated
CLI importers are deprecated. Import scan results from the SysReptor web UI using the [scanimport](https://github.com/Syslifters/sysreptor/tree/main/plugins/scanimport) plugin instead.
:::

## Examples

```shell
sudo -n nmap -Pn -n -sV -oX - -p 0-65535 $target | tee nmap-output.xml
```

```shell
cat nmap-output.xml | reptor nmap -oX
| Hostname | IP | Port | Service | Version |
| ------- | ------- | ------- | ------- | ------- |
| www.google.com | 142.250.180.228 | 80/tcp | http | gws |
| www.google.com | 142.250.180.228 | 443/tcp | https | gws |
| www.syslifters.com | 34.249.200.254 | 80/tcp | http | n/a |
| www.syslifters.com | 34.249.200.254 | 443/tcp | https | n/a |
```

```shell
cat nmap-output.xml | reptor nmap -oX --upload  # Upload table to notes
reptor nmap -oX -i nmap_1.xml nmap_2.xml --upload  # Use multiple input files
```

![Uploaded nmap notes](/cli/assets/nmap-notes.png)

## Usage

```txt
usage: reptor nmap [-h] [-i [INPUT ...]] [--format | --upload | --parse]
                   [--xml | -oX | -oG]

format nmap output

options:
  -h, --help            show this help message and exit
  -i [INPUT ...], --input [INPUT ...]
                        Input file, if not stdin (multiple files allowed)
  --format
  --upload
  --parse
  --xml
  -oX                   nmap XML output format, same as --xml (recommended)
  -oG, --grepable       nmap Grepable output format

```
