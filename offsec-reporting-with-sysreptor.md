---
url: https://docs.sysreptor.com/offsec-reporting-with-sysreptor.md
---
# OffSec Reporting

Our free cloud service to write your OffSec OSCP+, OSEP, OSWP, OSWA, OSWE, OSED, OSMR, OSEE, OSDA, OSIR, OSTH, OSAI reports.

💲 Free.\
💎 Including Pro features.\
✍️ Write it in Markdown.\
📄 Render the report for your certifiation.\
👌 Zero setup required.

[🚀 Sign Up (it's free)](https://offsec.sysreptor.com/offsec/signup/){ .md-button }

Already have an account? [Login here.](https://labs.sysre.pt)

Questions about labs.sysre.pt, account recovery, or data retention? See the [exam report FAQs](/faq/exam-reports).

## Prefer self-hosting?

1. [Install](/setup/installation) SysReptor
2. Import OffSec Designs and demo projects:

```shell
cd sysreptor/deploy
curl -s "https://docs.sysreptor.com/assets/offsec-designs.tar.gz" | docker compose exec --no-TTY app python3 manage.py importdemodata --type=design
curl -s "https://docs.sysreptor.com/assets/offsec-demo-projects.tar.gz" | docker compose exec --no-TTY app python3 manage.py importdemodata --type=project
```

## OffSec Reports

### Penetration Testing

### Web Application Security

### Exploit Development

### Artificial Intelligence

### Defensive Security

The structure follows the official OffSec reports (with kind permission by OffSec).

## Creating an OSCP Exam Report

![OSCP Reporting Procedure](/images/oscp-reporting.gif)

Not happy with our solution?

{ .md-button }
