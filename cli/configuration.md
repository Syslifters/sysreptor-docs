---
url: https://docs.sysreptor.com/cli/configuration.md
---
# Configuration

```shell
reptor conf
Server [https://demo.sysre.pt]: 
API Token [Create at https://demo.sysre.pt/users/self/apitokens/]:
Project ID: 3fae023a-2632-4c88-a0ea-97ab5eb64c94
Store to config to C:\Users\user\.sysreptor\config.yaml? [y/n]:
```

Get your API token from https://{your-installation-url}/users/self/apitokens/.\
Find your project ID in the URL of your project (optional).

![Find the project ID in the URL](/cli/assets/project_id.png)

You can also add your configuration as environment variables. Environment variables override the config file.

```shell
export REPTOR_SERVER="https://demo.sysre.pt"
export REPTOR_TOKEN="sysreptor_ZDM5NmQ5<snip>"
export REPTOR_PROJECT_ID="3fae023a-2632-4c88-a0ea-97ab5eb64c94"
```

### Custom CA

If your SysReptor installation uses a self-signed certificate, you can specify the path to your CA bundle in your config file (`~/.sysreptor/config.yaml`):

```shell
requests_ca_bundle=/etc/ssl/certs/ca-certificates.crt
```

As an alternative, you can set it as environment variable:

```shell
export REQUESTS_CA_BUNDLE=/etc/ssl/certs/ca-certificates.crt
```

Environment variables override config file settings.

### API timeout

HTTP request timeout defaults to 30 seconds. Increase it for slow connections or large exports via config file, environment variable, or CLI:

```yaml
# ~/.sysreptor/config.yaml
api_timeout: 60
```

```shell
export REPTOR_API_TIMEOUT=60
reptor project --timeout 60
```

Long-running operations (report render, project/template export) use at least 300 seconds, or your configured timeout if higher.

### Usage

```txt
usage: reptor [-h] [-s SERVER] [-t TOKEN] [-k] [-p PROJECT_ID]
              [--timeout SECONDS] [--personal-note] [-v] [--debug]
              [-n NOTETITLE] [--no-timestamp] [--file FILE]

Examples:
                reptor conf
                echo "Upload this!" | reptor note
                reptor file data/*
                cat sslyze.json | reptor sslyze --json --push-findings
                reptor nmap --xml --upload -i nmap.xml

options:
  -h, --help            show this help message and exit
  -v, --verbose         increase output verbosity (> INFO)
  --debug               sets logging to DEBUG
  -n NOTETITLE, --notetitle NOTETITLE
  --no-timestamp        do not prepend timestamp to note
  --file FILE           Local file to read

subcommands:
  
  Core:
   conf                  Shows config and sets config
   mcp                   Starts the Model Context Protocol (MCP) server
   plugins               Allows plugin management & development
  
  Projects & Templates:
   ai                    Process report sections using OpenAI with dynamic skill selection
   createproject         Create a new pentest project
   deletefindings        Deletes findings by title
   deleteprojects        Deletes projects by title
   exportfindings        Export your project findings as a summary or checklist
   file                  Uploads a file
   finding               Uploads findings from JSON or TOML
   findingfromtemplate   Creates findings from remote finding templates
   note                  Uploads and lists notes
   project               Work with projects
   pushproject           Push data to project from JSON or TOML
   template              Queries Finding Templates from SysReptor
   translate             Translate Projects to other languages via Deepl
  
  Tools:
   burp                  Burp vulnerability importer
   nessus                Nessus vulnerability importer
   nmap                  format nmap output
   openvas               OpenVAS vulnerability importer
   qualys                Qualys vulnerability importer
   sslyze                format sslyze JSON output
   zap                   Parses ZAP reports (JSON, XML)
  
  Importers:
   defectdojo            Imports DefectDojo finding templates
   ghostwriter           Imports GhostWriter finding templates
   importers             Show importers to use to import finding templates
  
  Utils:
   packarchive           Pack directories into a .tar.gz file
   unpackarchive         Unpack .tar.gz exported archives

configuration:
  -s SERVER, --server SERVER
  -t TOKEN, --token TOKEN
                        SysReptor API token
  -k, --insecure        do not verify server certificate
  -p PROJECT_ID, --project-id PROJECT_ID
                        SysReptor project ID
  --timeout SECONDS     HTTP request timeout in seconds (default: 30)
  --personal-note       add notes to personal notes

```
