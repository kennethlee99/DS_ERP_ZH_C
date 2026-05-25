# Screenshot Capture Status

Maintained for the current manual review pass.

The Codex workspace app under `D:\Users\user\Downloads\DS_ERP_ZH_Codex` was not used as the screenshot source. Authenticated screenshots were captured from the working local app under `D:\Users\user\Downloads\DS_ERP_ZH_CC` at `http://localhost:5001` and saved into the Codex manual source tree.

The authenticated local sidebar still shows TMS. TMS remains excluded from the manual, so this is recorded as a live-app/sidebar scope mismatch rather than added as manual content.

During the final operating-manual pass, the in-app browser could not open `http://localhost:5001/Production/OEE` for replacement dashboard capture because the browser blocked the local page load. The remaining dashboard and action screenshots below are therefore kept as explicit requests.

## Captured or Reused Screenshots

| Manual area | Sidebar/page match | PNG |
|---|---|---|
| Login | Login page | `assets/screenshots/ds-erp-login.png` |
| [Production Orders](../en/10-production/production-orders.md) | Planner / Production Orders | `assets/screenshots/role-planner-production-orders.png` |
| [Planning](../en/10-production/planning.md) | Planner / Planning | `assets/screenshots/role-planner-planning.png` |
| [Queue System](../en/10-production/queue-system.md) | Planner / Queue System | `assets/screenshots/role-operator-queue.png` |
| [Supervisor Queue](../en/10-production/queue-system.md) | Queue System supervisor view | `assets/screenshots/role-production-supervisor-queue.png` |
| [Manual Tasks](../en/10-production/manual-tasks.md) | Master / Production / Worker / Manual Tasks | `assets/screenshots/production-manual-tasks.png` |
| [Parts](../en/20-engineering/parts.md) | Parts / Parts | `assets/screenshots/parts-list.png` |
| [BOM](../en/20-engineering/bom.md) | Parts / BOM area | `assets/screenshots/bom-master-structure.png` |
| [Recipes](../en/20-engineering/recipes.md) | Master / Production / Recipes | `assets/screenshots/role-production-engineer-recipes.png` |
| [Machines](../en/20-engineering/machines.md) | Master / Production / Machines | `assets/screenshots/role-production-engineer-machines.png` |
| [NC Programs](../en/20-engineering/nc-programs.md) | NC Programs / Definition | `assets/screenshots/role-production-engineer-nc-programs.png` |
| [Inspection Planning](../en/30-quality/inspection-planning.md) | Quality / QC / Inspection Planning | `assets/screenshots/quality-inspection-planning.png` |
| [Inspection Records](../en/30-quality/inspection-records.md) | Quality / QC / Inspection Records | `assets/screenshots/quality-inspection-records.png` |
| [NCR](../en/30-quality/ncr-non-conformance.md) | Quality / QC / NCR | `assets/screenshots/quality-ncr.png` |
| [Equipment Calibration](../en/30-quality/equipment-calibration.md) | Quality / Equipment calibration view | `assets/screenshots/quality-equipment-calibration.png` |
| [SMARTQC Check Sheets](../en/35-smartqc/check-sheets.md) | Quality / SMARTQC / Check Sheets | `assets/screenshots/smartqc-check-sheets.png` |
| [SMARTQC Inspection](../en/35-smartqc/inspection-data-entry.md) | Quality / SMARTQC / Inspection | `assets/screenshots/smartqc-inspection-data-entry.png` |
| [SMARTQC operator inspection](../en/35-smartqc/inspection-data-entry.md) | Operator SMARTQC inspection view | `assets/screenshots/role-operator-smartqc-inspection.png` |
| [SMARTQC Methods and Groups](../en/35-smartqc/methods-and-groups.md) | Quality / SMARTQC / Methods | `assets/screenshots/smartqc-methods-and-groups.png` |
| [Administration Users and Roles](../en/40-administration/users-and-roles.md) | Administration / User Management and Roles | `assets/screenshots/administration-users-roles.png` |

## Remaining Requests

## Capture Criteria

Use these criteria for every remaining screenshot request:

- Use the authenticated app for the target environment. Replace `<APP_BASE_URL>` with the deployed DS_ERP address for that site.
- Capture with a role/login that matches the page purpose, such as planner for Production Orders and Queue System, supervisor for triage, and administrator for Users/Roles.
- Keep the live UI language exactly as shown. If the page is English, preserve English labels; do not translate labels inside the screenshot.
- Use a desktop viewport wide enough to show the sidebar, page title, toolbar, filters, and the relevant grid row or dashboard panel.
- Set filters/date ranges so at least one relevant row, status, or signal is visible.
- Redact or avoid secrets, tokens, personal contact details, and unrelated customer data.
- A screenshot is acceptable only if the page title/sidebar path, relevant toolbar or row action, and success/status signal are visible without relying on memory.

| Page name | Sidebar path | URL | Suggested filename | Reason |
|---|---|---|---|---|
| [OEE dashboard](../en/10-production/dashboards.md) | Production / OEE | `<APP_BASE_URL>/Production/OEE` | `assets/screenshots/production-oee-dashboard.png` | Current retained dashboard image shows Production Orders, not OEE. |
| [KPI Production dashboard](../en/10-production/dashboards.md) | Production / KPI Production | `<APP_BASE_URL>/Production/KpiProduction` | `assets/screenshots/production-kpi-dashboard.png` | Current retained dashboard image shows Production Orders, not KPI Production. |
| [Main Layout dashboard](../en/10-production/dashboards.md) | Production / Main Layout | `<APP_BASE_URL>/Production/Mainlayout` | `assets/screenshots/production-main-layout-dashboard.png` | Current retained dashboard image shows Production Orders, not Main Layout. |
| [Production Orders status toolbar](../en/10-production/production-orders.md) | Planner / Production Orders | `<APP_BASE_URL>/Production/ProductionOrders` | `assets/screenshots/production-orders-status-toolbar.png` | Release, schedule, hold, cancel, reset, close, and status action icons need labels before exact click steps can be documented. |
| [Queue row start/progress actions](../en/10-production/queue-system.md) | Planner / Queue System | `<APP_BASE_URL>/Production/QueuePage` | `assets/screenshots/queue-row-actions.png` | Operator dispatch rule, start, progress/output, and completion actions need labeled confirmation for click-by-click guidance. |
| [Supervisor delayed-work evidence](../en/01-workflows/supervisor-triage.md) | Planner / Queue System and Planner / Planning | `<APP_BASE_URL>/Production/QueuePage`, `<APP_BASE_URL>/Production/Planning` | `assets/screenshots/supervisor-delayed-work-evidence.png` | Delayed-work triage needs visible due time, planned start/end or area, queue state, last update, output versus target, downtime reason, and owner where available. |
| [Admin user-worker relationship](../en/40-administration/users-and-roles.md) | Administration / User Management and worker setup page if confirmed | `<APP_BASE_URL>/Administration/User` | `assets/screenshots/admin-user-worker-relationship.png` | Demo user setup needs confirmation of whether user and worker are the same, linked, or separate records. |
| [Admin permission labels](../en/40-administration/users-and-roles.md) | Administration / Roles | `<APP_BASE_URL>/Administration/Role` | `assets/screenshots/admin-role-permission-labels.png` | Permission labels need owner explanation before the manual can document setup beyond visible access review. |
| Language and translation setup (`needs-decision`) | Administration language/translation pages if confirmed in scope | To be confirmed from sidebar | `assets/screenshots/admin-language-translation-setup.png` | Translation setup remains needs-decision until the intended workflow is confirmed. |

Visible areas that are not yet expanded are listed in `visible-app-coverage.md` and `excluded-needs-decision.md` as excluded or needs-decision.

## Capture Rules

- Use authenticated DS_ERP screenshots from the approved review environment only.
- Do not use `devsvr01` or the off-limits remote demo host.
- Save approved PNGs under `assets/screenshots/`.
- Update English and Chinese manual pages together.
- Do not add TMS pages even though TMS is visible in the live sidebar.
