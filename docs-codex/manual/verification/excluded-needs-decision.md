# Excluded and Needs-Decision Modules

## Excluded

| Area | Reason | Manual action |
|---|---|---|
| TMS / tooling | The manual contract excludes TMS/tooling content even though the authenticated local sidebar still shows it. | Do not add TMS pages. Keep the mismatch recorded in verification artifacts. |

## Needs Decision

| Area | Why it needs a decision | Current action |
|---|---|---|
| Quality/QC and Inspection Planning scope | The user explicitly said not to remove Quality/QC or Inspection Planning while superior clarification is pending. | Keep current pages and mark scope uncertainty in the relevant coverage notes. |
| Production dashboard metric definitions | OEE, KPI Production, and Main Layout are visible, but the precise metric definitions require business-owner confirmation. | Document dashboard navigation and reviewer checks without inventing metric definitions. |
| SMARTQC Part No and Terminal Method Groups | Visible setup/support pages, but not yet confirmed as reviewer-demo walkthrough pages. | Record as needs-decision. |
| Administration support pages | Audit, exception, language, translation, login info, device, and ETL pages are visible but support-focused. | Record as needs-decision unless demo owner asks for administrator deep-dive coverage. |
| Master production setup pages | Factory, terminal, line, group, shift, process, order-type, worker, and page-config pages are visible setup pages. | Core demo setup pages are documented; remaining setup pages need prioritization. |
| Master quality lookup/config pages | Visible setup/config pages exist under Quality master data. | Keep Quality/QC transaction pages documented; leave lookup/config pages as needs-decision. |

## Current Rule

Do not remove, hide, or restore major modules from the manual without explicit confirmation. Add future pages only when the visible page is confirmed as in-scope for the reviewer walkthrough.
