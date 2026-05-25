# Supervisor Delayed Production Triage

> English | [中文](../../zh-CN/01-workflows/supervisor-triage.md)

Use this page when released work is missing, delayed, blocked, or unclear during a shift.

Open items for delayed-work evidence, queue blocked status, quality-stop evidence, dashboard interpretation, and role visibility are tracked in the [Evidence and Decisions Register](../00-open-decisions.md).

## Triage Order

1. Start with [Queue System](../10-production/queue-system.md).
2. Compare with [Production Orders](../10-production/production-orders.md).
3. Confirm the schedule in [Planning](../10-production/planning.md).
4. Check quality status in [Inspection Records](../30-quality/inspection-records.md) and [NCR](../30-quality/ncr-non-conformance.md).
5. Open [Dashboards](../10-production/dashboards.md) only for high-level signals; OEE definitions still need business-owner confirmation.

## If You See This, Do This

| Situation | First screen | What to check | Action / escalation |
|---|---|---|---|
| Job missing from queue | [Queue System](../10-production/queue-system.md) | Filters, machine/work area, part, process, status | Compare with [Production Orders](../10-production/production-orders.md); escalate to planner if WO is not released. |
| WO exists but is not scheduled | [Planning](../10-production/planning.md) | Date range, machine group, planning view | Escalate to planner with WO and expected machine/work area. |
| Queue row exists but cannot start | [Queue System](../10-production/queue-system.md) | Visible status, required inspection, blocked step | Escalate to planner, quality, or production engineer based on missing condition. |
| Machine or program mismatch | [Machines](../20-engineering/machines.md) / [NC Programs](../20-engineering/nc-programs.md) | Machine group, NC program readiness | Escalate to production engineer. |
| Inspection failed or not saved | [Inspection Records](../30-quality/inspection-records.md) | WO/job, result, saved record | Escalate to quality engineer. |
| NCR is open | [NCR](../30-quality/ncr-non-conformance.md) | Status, affected WO/part, required follow-up | Hold production decision until quality confirms next action. |
| OEE or dashboard signal is unclear | [Dashboards](../10-production/dashboards.md) | Page, filters, metric name | Record as needs-decision; do not use unclear metric as the only reason for action. |
| User cannot see a page or action | [Users and Roles](../40-administration/users-and-roles.md) | User, role, visible menu/action | Escalate to administrator. |

## Delay Decision Table

Use this table after collecting the visible evidence. It is written for safe routing: do not use unconfirmed icons, unclear dashboard metrics, or guessed queue states as the only reason for action.

| Symptom | Visible evidence | Likely owner | Next safe action | Do not do |
|---|---|---|---|---|
| Missing queue row | Queue filters, WO/job, part/process, machine/work area, date, and no matching row. | Planner if the WO is unreleased or unscheduled; administrator if access hides [Queue System](../10-production/queue-system.md). | Compare [Production Orders](../10-production/production-orders.md) and [Planning](../10-production/planning.md), then send WO/job, filters, and screenshot to the owner. | Do not tell the operator to run a different row because it is first in the list. |
| WO exists but is not scheduled | [Production Orders](../10-production/production-orders.md) row exists; [Planning](../10-production/planning.md) has no matching scheduled work for date/area. | Planner | Send WO, part/process, expected date, and expected machine/work area. | Do not release, reset, or close the WO from an unclear status action. |
| Queue row cannot start | Queue row exists but status maps to `Paused / blocked`, the row action is missing, or required inspection/setup is unclear. | Planner, production engineer, quality engineer, or administrator based on missing condition. | Use the [Queue Status Map](../10-production/queue-system.md#queue-status-map), capture the row/action area, and route by the missing evidence. | Do not bypass a blocked row or infer a hidden start action. |
| Quality stop | [Inspection Records](../30-quality/inspection-records.md) or [SMARTQC Inspection](../35-smartqc/inspection-data-entry.md) shows missing, failed, unclear, or unsaved inspection evidence. | Quality engineer | Hold production decision until quality confirms inspection result, disposition, or required rework. | Do not continue or complete production based only on a saved-but-unclear result. |
| NCR open | [NCR](../30-quality/ncr-non-conformance.md) row/status affects the same WO, part, lot, or process. | Quality engineer | Record NCR number/status and wait for quality disposition before production action. | Do not close, release, or continue based on dashboard or queue status alone. |
| Dashboard unclear | [OEE, KPI Production, or Main Layout](../10-production/dashboards.md) metric has unclear definition, blank page, or mismatched filters. | Owner or business owner | Treat dashboard as view-only in this manual version; compare with [Production Orders](../10-production/production-orders.md), [Planning](../10-production/planning.md), and [Queue System](../10-production/queue-system.md). | Do not use OEE/KPI as the sole reason for delay ownership or production action. |
| Access missing | User cannot see expected sidebar page, toolbar action, row action, or save button. | Administrator | Capture user, role, expected page/action, and current screenshot; verify [Users and Roles](../40-administration/users-and-roles.md). | Do not change role setup without administrator or owner approval. |

## Delayed Work Evidence

When work is late or appears stuck, collect these visible fields before deciding who owns the issue.

| Evidence | Where to look first | Why it matters |
|---|---|---|
| Due time or production date | [Production Orders](../10-production/production-orders.md), [Planning](../10-production/planning.md) | Confirms whether the job is actually late for the current review window. |
| Planned start/end or planned area | [Planning](../10-production/planning.md) | Shows the expected machine, group, line, or date. |
| Queue state | [Queue System](../10-production/queue-system.md) | Map the visible row or missing-row condition to `Ready`, `Active`, `Paused / blocked`, `Complete`, or `Hidden / missing`. |
| Last visible update | [Queue System](../10-production/queue-system.md), [Production Orders](../10-production/production-orders.md) | Helps separate a stale queue row from a newly changed job. |
| Output versus target | [Production Orders](../10-production/production-orders.md) or assigned reporting screen | Shows whether delay is caused by quantity still open. |
| Downtime or stop reason | Assigned reporting screen or supervisor note | Helps route the issue to production, engineering, or maintenance. |
| Owner or current role | [Production Orders](../10-production/production-orders.md), [Queue System](../10-production/queue-system.md), [Users and Roles](../40-administration/users-and-roles.md) | Shows who can take the next visible action. |

## Quality Stop Checks

| Stop condition | Check | Next action |
|---|---|---|
| Required inspection is missing | [Inspection Planning](../30-quality/inspection-planning.md), [SMARTQC Inspection](../35-smartqc/inspection-data-entry.md) | Ask quality engineer to confirm required check sheet or inspection step. |
| Inspection was entered but result is unclear | [Inspection Records](../30-quality/inspection-records.md) | Do not release or continue based on an unclear result. |
| Inspection failed | [Inspection Records](../30-quality/inspection-records.md), [NCR](../30-quality/ncr-non-conformance.md) | Hold production decision until quality confirms disposition. |
| Equipment or calibration affects the result | [Equipment Calibration](../30-quality/equipment-calibration.md) | Escalate to quality before accepting the measurement. |

## What To Record For Handover

- WO or queue row.
- Machine/work area.
- Current visible status.
- The screen where the issue was found.
- Screenshot when a button, icon, or status is unclear.
- Person or role escalated to.

## Screenshot Requests

This triage flow needs labeled screenshots for blocked queue rows, delayed work indicators, quality-stop evidence, and OEE/KPI trend signals before the manual can give exact click-by-click instructions. Track those items in the [Evidence and Decisions Register](../00-open-decisions.md).
