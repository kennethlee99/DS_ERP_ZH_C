# Visible App Coverage Matrix

Audit source: authenticated local app at `http://localhost:5001`, backed by navigation review from the local DS_ERP_ZH_CC app. The Codex manual source remains under `D:\Users\user\Downloads\DS_ERP_ZH_Codex\DS_ERP\docs-codex\manual`.

This matrix separates user-facing manual coverage from support/configuration areas. User-facing EN/ZH pages do not document hidden implementation details.

| Visible area | Status | Manual coverage | Evidence / note |
|---|---|---|---|
| Login | Documented well | `en/03-by-role/README.md`, `zh-CN/03-by-role/README.md` | Login screenshot referenced. |
| Role-based workflows and operating walkthroughs | Documented well | `en/03-by-role/*`, `zh-CN/03-by-role/*`, `en/01-workflows/*`, `zh-CN/01-workflows/*`, glossary pages | Operator, planner, production engineer, supervisor, quality engineer, admin setup, and status terminology guidance are paired. |
| Production Orders | Documented well | `en/10-production/production-orders.md`, `zh-CN/10-production/production-orders.md` | Uses authenticated production-orders screenshot. |
| Planning | Documented well | `en/10-production/planning.md`, `zh-CN/10-production/planning.md` | Uses authenticated planning screenshot. |
| Queue System | Documented well | `en/10-production/queue-system.md`, `zh-CN/10-production/queue-system.md` | Uses authenticated queue screenshot. |
| Manual Tasks | Documented with execution caveat | `en/10-production/manual-tasks.md`, `zh-CN/10-production/manual-tasks.md` | Uses authenticated manual-tasks screenshot; page is documented as task definitions/reference, not proof of assigned live work. |
| Production dashboards: OEE, KPI Production, Main Layout | Documented as trend signal, needs screenshots and metric decision | `en/10-production/dashboards.md`, `zh-CN/10-production/dashboards.md` | Entry points documented; dashboard values should be treated as trend signals only until metric definitions and screenshots are confirmed. |
| Parts | Documented well | `en/20-engineering/parts.md`, `zh-CN/20-engineering/parts.md` | Uses authenticated parts screenshot. |
| BOM Master and BOM Structure | Documented well | `en/20-engineering/bom.md`, `zh-CN/20-engineering/bom.md` | Uses authenticated BOM screenshot. |
| Recipes | Documented well | `en/20-engineering/recipes.md`, `zh-CN/20-engineering/recipes.md` | Uses authenticated recipes screenshot. |
| Machines | Documented well | `en/20-engineering/machines.md`, `zh-CN/20-engineering/machines.md` | Uses authenticated machines screenshot. |
| NC Programs | Documented well | `en/20-engineering/nc-programs.md`, `zh-CN/20-engineering/nc-programs.md` | Uses authenticated NC programs screenshot. |
| Quality: Inspection Planning | Documented, needs scope decision | `en/30-quality/inspection-planning.md`, `zh-CN/30-quality/inspection-planning.md` | Quality/QC remains in manual pending superior clarification. |
| Quality: NCR | Documented well | `en/30-quality/ncr-non-conformance.md`, `zh-CN/30-quality/ncr-non-conformance.md` | Uses authenticated NCR screenshot. |
| Quality: Equipment Calibration | Documented well | `en/30-quality/equipment-calibration.md`, `zh-CN/30-quality/equipment-calibration.md` | Uses authenticated calibration screenshot. |
| Quality: Inspection Records | Documented well | `en/30-quality/inspection-records.md`, `zh-CN/30-quality/inspection-records.md`, role workflows | Uses authenticated inspection-records screenshot and has standalone operating coverage. |
| SMARTQC Check Sheets | Documented well | `en/35-smartqc/check-sheets.md`, `zh-CN/35-smartqc/check-sheets.md` | Uses authenticated check-sheet screenshot. |
| SMARTQC Inspection | Documented well | `en/35-smartqc/inspection-data-entry.md`, `zh-CN/35-smartqc/inspection-data-entry.md` | Uses authenticated inspection screenshot. |
| SMARTQC Methods and Method Groups | Documented well | `en/35-smartqc/methods-and-groups.md`, `zh-CN/35-smartqc/methods-and-groups.md` | Uses authenticated methods screenshot. |
| SMARTQC Part No and Terminal Method Groups | Needs decision | None yet | Visible support/setup areas; not expanded until demo owner confirms they belong in reviewer walkthrough. |
| Administration: User Management and Roles | Documented well | `en/40-administration/users-and-roles.md`, `zh-CN/40-administration/users-and-roles.md`, admin setup checklist | Uses authenticated administration screenshot; users/workers and translations remain needs-decision where the UI relationship is not confirmed. |
| Administration: audit, exceptions, languages, translations, login info, devices | Needs decision | None yet | Visible support/administrator pages; not expanded for this pass. |
| ETL Monitor and ETL Config | Needs decision | None yet | Visible support pages; not expanded for this pass. |
| Master production setup pages beyond Machines, Recipes, Manual Tasks | Needs decision | None yet | Visible setup areas such as factory, terminal, worker, shift, line, process, order-type, and page-config records need demo-owner prioritization. |
| Master quality lookup/config pages | Needs decision | None yet | Visible setup areas remain outside the first reviewer walkthrough until scope is clarified. |
| TMS / tooling | Excluded | None | Visible in the live sidebar, but excluded by manual contract; recorded as a live-app/sidebar scope mismatch. |

## Coverage Decision

The manual now covers the visible areas most likely to be used by an internal demo reviewer: role workflows, production planning/execution, parts/BOM/engineering readiness, Quality/QC, SMARTQC, and user/role administration.

Remaining visible areas are not ignored: they are classified above as excluded or needs-decision rather than silently omitted.
