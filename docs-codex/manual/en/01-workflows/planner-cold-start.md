# Planner Cold Start Walkthrough

> English | [中文](../../zh-CN/01-workflows/planner-cold-start.md)

Use this walkthrough when you need to follow a job from planning readiness to queue verification. Some buttons and status icons still need screenshot verification, so the manual names only the visible actions already shown in current screenshots.

Open items for schedule, release, status actions, queue evidence, and OEE interpretation are tracked in the [Evidence and Decisions Register](../00-open-decisions.md).

> **Needs decision:** Exact schedule, release, hold, reset, cancel, close, and queue-ready labels are not confirmed. Use this walkthrough to complete readiness checks and evidence capture; do not turn unlabeled icons into click instructions.

## Goal

Create or review a WO, schedule it, release it when allowed, confirm it appears in [Queue System](../10-production/queue-system.md), and open the OEE dashboard entry.

## Before You Start

1. Confirm the part exists in [Parts](../20-engineering/parts.md).
2. Confirm the structure exists in [BOM](../20-engineering/bom.md).
3. Confirm the production setup in [Recipes](../20-engineering/recipes.md), [Machines](../20-engineering/machines.md), and [NC Programs](../20-engineering/nc-programs.md).
4. Confirm inspection readiness in [Inspection Planning](../30-quality/inspection-planning.md) when the job requires quality checks.

## Walkthrough

| Step | Open | Do this | Check before moving on |
|---|---|---|---|
| 1 | [Production Orders](../10-production/production-orders.md) | Search for the existing WO or use the visible `New Production Orders` button if the site procedure asks you to create one. | The row shows the expected part, quantity, date, and status. |
| 2 | [Production Orders](../10-production/production-orders.md) | Review the row status and visible action icons before release. | Do not guess icon meaning. If the release action is not clear, request a toolbar screenshot with labels. |
| 3 | [Planning](../10-production/planning.md) | Find the WO in the selected date, machine group, or planning view. | The WO appears in the expected planning area. |
| 4 | [Planning](../10-production/planning.md) | Schedule or adjust only when the screen shows a clear scheduling action for the site workflow. | The work remains visible after refresh and still matches the WO. |
| 5 | [Production Orders](../10-production/production-orders.md) | Release only when the visible action and role allow it. | The status supports moving to [Queue System](../10-production/queue-system.md). |
| 6 | [Queue System](../10-production/queue-system.md) | Filter by the same part, process, machine/work area, or date used in [Planning](../10-production/planning.md). | A queue row matches the WO and maps to the `Ready` working term, or to another documented state in the Queue Status Map. |
| 7 | [Production Dashboards](../10-production/dashboards.md) | Open [OEE](../10-production/dashboards.md) from the sidebar. | Treat it as a trend signal only until the metric definition and dashboard screenshot are confirmed. |

## Planner Standard Operating Path

Use this table as the cold-start task record. It separates confirmed actions from actions that still need screenshot confirmation, so a planner can complete the safe parts of the workflow without guessing.

| Step | Screen | Before status | Exact action / control | After status | Evidence to capture |
|---|---|---|---|---|---|
| Create or review WO | [Production Orders](../10-production/production-orders.md) | Existing row visible, or site procedure requests a new WO. | Use `New Production Orders` only when creating the specified WO; otherwise search and open the existing row. | Row shows expected part, quantity, date, and visible status. | [Production Orders](../10-production/production-orders.md) row with part, quantity, date, status, and signed-in role. |
| Schedule or adjust | [Planning](../10-production/planning.md) | WO is visible in the selected date, machine group, or planning view. | Needs screenshot confirmation: exact schedule control, drag/drop behavior, save/commit signal, and allowed before-status still need labeled capture. | WO remains visible after refresh and matches expected machine/work area. | [Planning](../10-production/planning.md) screenshot before and after schedule, with WO, date, work area, and any save/status signal visible. |
| Release to execution | [Production Orders](../10-production/production-orders.md) | WO setup, quality readiness, and role access are checked. | Needs screenshot confirmation: exact release/status action icon or button still needs labeled capture. | WO status supports queue visibility. The exact queue-ready status label still needs confirmation against the [Queue Status Map](../10-production/queue-system.md#queue-status-map). | [Production Orders](../10-production/production-orders.md) toolbar/status screenshot before release and row/status screenshot after release. |
| Verify [Queue System](../10-production/queue-system.md) | [Queue System](../10-production/queue-system.md) | WO is expected to be released and scheduled. | Filter by the same part, process, machine/work area, or date from [Planning](../10-production/planning.md). | Matching queue row maps to the `Ready` working term or another documented queue state. | Queue row screenshot with filters, WO/job, part/process, status, and row action visible. |
| Open [OEE](../10-production/dashboards.md) | [Production Dashboards](../10-production/dashboards.md) | Queue verification is complete or the workflow calls for a high-level trend check. | Open `Production / OEE` from the sidebar. | OEE page is open, but this manual version treats dashboards as view-only. | OEE URL/page screenshot and note that metric definitions remain owner-confirmed, not manual-confirmed. |

## Planner Action And Status Matrix

Use this matrix before changing a WO. It is intentionally conservative: only the visible `New Production Orders` button is named as a confirmed action. Other release, schedule, reset, hold, cancel, or close controls need labeled screenshots before the manual can give exact clicks.

| Planner intent | Screen | Visible action status | Before you act | After you act |
|---|---|---|---|---|
| Create a specified WO | [Production Orders](../10-production/production-orders.md) | `New Production Orders` is visible in the current screenshot. | [Part](../20-engineering/parts.md), [BOM](../20-engineering/bom.md), [recipe](../20-engineering/recipes.md), [machine](../20-engineering/machines.md), [NC program](../20-engineering/nc-programs.md), and inspection readiness are checked. | The new row shows expected part, quantity, date, and status. |
| Schedule or adjust work | [Planning](../10-production/planning.md) | Exact scheduling action still needs a labeled screenshot. | WO is visible in the selected date, machine group, or planning view. | WO remains visible after refresh and still matches the expected machine/work area. |
| Release to execution | [Production Orders](../10-production/production-orders.md) | Release/status icon still needs a labeled screenshot. | WO status, setup readiness, quality readiness, and role access are checked. | Status supports queue visibility, then [Queue System](../10-production/queue-system.md) shows a matching row. |
| Hold, cancel, reset, or close | [Production Orders](../10-production/production-orders.md) | Exact status action still needs a labeled screenshot and owner approval. | Reason is known and supervisor or planner lead agrees. | Status change is visible and handover notes explain why it was changed. |

## Record Before And After

| Field | Before action | After action |
|---|---|---|
| WO / row ID |  |  |
| Part / process |  |  |
| Visible status |  |  |
| Planned date / machine or work area |  |  |
| Queue row visible? |  |  |

## Stop And Escalate

| If you see... | Escalate to | What to provide |
|---|---|---|
| Required part, BOM, recipe, machine, or NC program is missing | Production engineer | Part number, WO, and missing setup page |
| Release action is unclear or unavailable | Administrator or planner lead | Screenshot of the toolbar and current WO status |
| WO appears in [Planning](../10-production/planning.md) but not [Queue System](../10-production/queue-system.md) | Production supervisor | WO, part, machine/work area, planning date, and queue filters |
| [OEE](../10-production/dashboards.md) page is blank or unclear | Owner | Dashboard URL, filter period, and screenshot request |

## Screenshot Requests

The toolbar icons for release, schedule, hold, cancel, reset, close, and other status actions need labeled screenshots before this walkthrough can name exact icon clicks safely. Track those screenshots in the [Evidence and Decisions Register](../00-open-decisions.md).
