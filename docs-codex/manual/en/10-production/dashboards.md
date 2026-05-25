# Production Dashboards

> [English](dashboards.md) | [中文](../../zh-CN/10-production/dashboards.md)

Path: Production / OEE, KPI Production, and Main Layout  
URL: `<APP_BASE_URL>/Production/OEE`, `<APP_BASE_URL>/Production/KpiProduction`, `<APP_BASE_URL>/Production/Mainlayout`

## What This Page Is For

Use the production dashboard entries to open high-level production review views. Until dashboard screenshots and metric definitions are confirmed, treat OEE, KPI Production, and Main Layout as trend signals only, not as the sole basis for a production decision.

Dashboard interpretation remains tracked in the [Evidence And Decisions Register](../00-open-decisions.md) until the business owner confirms screenshots, filters, and metric definitions.

## Dashboard Scope For This Manual Version

Dashboard pages are **open-and-observe only** in this manual version. A planner or supervisor may open OEE, KPI Production, or Main Layout to confirm the entry exists and record a visible trend signal, but the manual does not yet define the metrics well enough for release, delay, quality, staffing, or handover decisions.

Before a dashboard becomes decision-ready, the demo owner must confirm:

| Dashboard entry | Current manual status | Needed before decision use |
|---|---|---|
| OEE | Open-and-observe only | Screenshot of the real OEE page, metric definitions, filter meanings, and how to compare with WO/queue evidence. |
| KPI Production | Open-and-observe only | Screenshot of the real KPI Production page, metric definitions, filter meanings, and owner-approved interpretation. |
| Main Layout | Open-and-observe only | Screenshot of the real Main Layout page, visible panel definitions, and owner-approved use during shift review. |

## What You See

- Sidebar entries for OEE, KPI Production, and Main Layout.
- A separate review page for each selected dashboard entry.
- Any filters, date controls, cards, charts, or status panels that are visible after the page opens.
- Production signals that supervisors may use for follow-up once the business owner confirms the metric definitions.

## What You Do

1. Open OEE, KPI Production, or Main Layout from the sidebar.
2. Confirm the page title or visible content matches the review question.
3. Set date, shift, machine, or line filters only when they are visible.
4. Compare any displayed trend signal with Production Orders, Planning, or Queue System before making a decision.
5. Treat unclear metric definitions as a follow-up item for the business owner.

## What To Check

- The selected entry is the one intended for the demo.
- The filter period matches the shift or job being discussed.
- Any visible dashboard signal agrees with the underlying work-order view.
- Any unclear metric name is recorded for clarification.

## Common Issues

| Issue | What it means |
|---|---|
| Dashboard page is blank | The selected filters may have no data for the period, or the page may need demo-owner review. |
| Metric meaning is unclear | Treat it as a trend signal only and confirm the metric definition before using it in review notes. |
| Dashboard disagrees with a work order | Recheck filters and the latest order status. |

## Related Pages

- [Planner Manual](../03-by-role/planner.md)
- [Production Supervisor Manual](../03-by-role/production-supervisor.md)
- [Production Orders](production-orders.md)
- [Planning](planning.md)

## Screenshot

Screenshot request:

| Page name | Sidebar path | URL | Suggested filename | Reason |
|---|---|---|---|---|
| [OEE dashboard](dashboards.md) | Production / OEE | `<APP_BASE_URL>/Production/OEE` | `production-oee-dashboard.png` | Current retained image shows Production Orders, not this dashboard. |
| [KPI Production dashboard](dashboards.md) | Production / KPI Production | `<APP_BASE_URL>/Production/KpiProduction` | `production-kpi-dashboard.png` | Current retained image shows Production Orders, not this dashboard. |
| [Main Layout dashboard](dashboards.md) | Production / Main Layout | `<APP_BASE_URL>/Production/Mainlayout` | `production-main-layout-dashboard.png` | Current retained image shows Production Orders, not this dashboard. |
