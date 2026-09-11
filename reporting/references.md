---
url: https://docs.sysreptor.com/reporting/references.md
---

# References

Use the `id`-attributes of HTML elements for referencing items in your report.
This allows you to reference for example:

* Headings
* Figures
* Tables
* Findings
* and everything that has an `id`

## Reference Images

```md title="Markdown"
![SQL Injection](/assets/name/image.png){#sqli}
As you see in [](#sqli) (e.g. rendered as "Figure 3")
```

```html title="HTML"
<figure id="sqli"><img src="/assets/name/image.png"><figcaption>SQL Injection</figcaption></figure>
As you see in <ref to="sqli" /> (e.g. rendered as "Figure 3")
```

## Reference Findings

You need the finding ID of the finding you want to reference.
The markdown editor toolbar in projects provides a button to insert finding references.

![Insert finding reference](/images/reference-finding.png)

```md title="Markdown"
See [](#00000000-0000-0000-0000-000000000000)... (e.g. rendered as "1.3 SQL injection")
```

```html title="HTML"
See <ref to="#00000000-0000-0000-0000-000000000000" />... (e.g. rendered as "1.3 SQL injection")
```

## Reference Headings

You can reference headings if your [design supports it](/designer/headings-and-table-of-contents#referencing-sections-in-text-outside-of-toc).

```md title="Markdown"
# Findings {#findings .in-toc.numbered}
Find details in [](#findings) (rendered as "1 Findings").
```

```html title="HTML"
<h1 id="findings" class="in-toc numbered">Findings</h1>
Find details in <ref to="findings" /> (rendered as "1 Findings").
```
