# Operator Run The Next Job Walkthrough

> English | [中文](../../zh-CN/01-workflows/operator-run-next-job.md)

Use this walkthrough when an operator needs to understand what to run next and how to confirm the work is complete enough to hand over.

Open items for dispatch rule, row start action, production reporting, inspection confirmation, and handover signal are tracked in the [Evidence And Decisions Register](../00-open-decisions.md).

## Goal

Find the next job, confirm it is ready, start through the visible local workflow, report progress through the assigned reporting screen, complete required inspection, and verify the result was saved.

## Walkthrough

| Step | Open | Do this | Check before moving on |
|---|---|---|---|
| 1 | [Queue System](../10-production/queue-system.md) | Select the machine, line, work area, date, or status filter used by the demo. | The row belongs to your machine/work area and matches the part/process you were assigned. |
| 2 | [Queue System](../10-production/queue-system.md) | Choose the first row only when the demo owner or supervisor has confirmed the dispatch rule. | Do not assume priority from row order unless the rule is stated. |
| 3 | [Production Orders](../10-production/production-orders.md) | If the row is unclear, look up the WO and compare part, quantity, due date, and process. | The WO status supports shop-floor execution. |
| 4 | [Queue System](../10-production/queue-system.md) | Use the visible row action that opens the job or next work step. | If the start action is unlabeled, request a screenshot with the action name. |
| 5 | Assigned production reporting screen | Record output, downtime, or issue notes only in the screen assigned for this deployment. | The save or confirmation signal is visible before leaving the page. |
| 6 | [SMARTQC Inspection](../35-smartqc/inspection-data-entry.md) | If inspection is required, search using the job, stage, lot, or date shown in the work row. | Required measurements are saved and the result is visible. |
| 7 | [Inspection Records](../30-quality/inspection-records.md) | Confirm the saved inspection record if quality status affects release or handover. | The record belongs to the same WO/job and shows the expected result. |

## Operator Golden Path

Use this table before treating a job as started, reported, inspected, or complete. Unknown local controls remain explicit blockers until the demo owner provides labeled screenshots.

| Step | Exact screen / path | What to select | Exact action / control | Save signal | Completion / handover signal |
|---|---|---|---|---|---|
| Filter queue | [Queue System](../10-production/queue-system.md) (`Planner / Queue System`, `<APP_BASE_URL>/Production/QueuePage`) | Assigned machine, line, work area, date, and status filter from the demo script or supervisor. | Use visible filters only; do not choose by row order alone. | Filtered row list remains visible after refresh. | A row matching the assigned WO/job, part, process, and work area maps to the `Ready` working term in the [Queue Status Map](../10-production/queue-system.md#queue-status-map). |
| Apply dispatch rule | [Queue System](../10-production/queue-system.md) | The row named by supervisor/demo script, or the row matching the confirmed dispatch rule. | Screenshot-blocked if the rule depends on row order, priority, or an unlabeled status. | Supervisor or demo script confirms the selected WO/job. | Selected row is documented with WO/job, part/process, work area, and visible status. |
| Open or start job | [Queue System](../10-production/queue-system.md) | The confirmed queue row. | Screenshot-blocked: exact row open/start action label still needs capture. | Start confirmation or status change is visible after action. | Queue row or job page shows `Active` working state, or the supervisor confirms the current visible state. |
| Report progress/output/downtime | Assigned production reporting screen | Same WO/job, operation, machine/work area, output quantity, downtime reason, and issue notes if used. | Screenshot-blocked: reporting screen path/URL, fields, and save action still need capture. | Save/confirmation message, updated row, or timestamp is visible. | Output, downtime, or note evidence is captured for supervisor handover. |
| Complete inspection | [SMARTQC Inspection](../35-smartqc/inspection-data-entry.md) | Job, stage, lot, or date from the queue/work row. | Enter required measurements and use the visible save action. | Result or update time is visible after save. | [Inspection Records](../30-quality/inspection-records.md) shows the same WO/job/stage with expected result. |
| Complete or hand over | [Queue System](../10-production/queue-system.md), [Production Orders](../10-production/production-orders.md), or assigned reporting screen | Same WO/job and process after refresh. | Use only confirmed completion/handover action; otherwise escalate. | Status change, saved record, or supervisor confirmation is visible. | Queue/WO status maps to `Complete`, `Active`, or `Paused / blocked`; record unfinished work before handover. |

## How To Choose The Next Job

Do not choose work from row order alone unless the supervisor or demo owner says row order is the dispatch rule.

| Selection rule | Use when | What to check |
|---|---|---|
| Assigned machine or work area | The operator is responsible for one machine, line, or cell. | Queue row machine/work area matches the assignment. |
| Planned date or shift | The shift plan is the dispatch rule. | Row date or planning period matches the current shift. |
| Supervisor instruction | Multiple ready jobs are visible. | Supervisor names the WO, part, process, or machine to run. |
| Quality hold cleared | Work was blocked by inspection or NCR. | [Inspection Records](../30-quality/inspection-records.md) or [NCR](../30-quality/ncr-non-conformance.md) shows the issue is no longer blocking the job. |
| Demo script order | The internal demo has a fixed scenario. | Use the WO or part number from the demo script, not row position alone. |

## Action Record

Fill this before treating work as started, reported, or complete.

| Stage | Visible action used | Save/confirmation signal | Evidence to keep |
|---|---|---|---|
| Start |  |  | Queue row screenshot with action label |
| Progress / output |  |  | Reporting page, quantity, downtime, or note screenshot |
| Inspection |  |  | [SMARTQC Inspection](../35-smartqc/inspection-data-entry.md) result or [Inspection Records](../30-quality/inspection-records.md) screenshot |
| Complete / handover |  |  | Queue or WO status after refresh |

## Completion Signals

| Signal | What it means |
|---|---|
| Queue row no longer appears in the ready list | The job may have moved to another state or filter. Confirm with supervisor before assuming completion. |
| WO or queue status shows a finished state | The work may be complete for the current step. Match it to the WO and process. |
| Inspection result is saved | Quality entry is recorded, but production completion still depends on the WO or queue status. |
| Save is disabled | A required field may be empty, or the role may not allow the action. Check visible required fields first, then escalate. |

## Stop And Escalate

| If you see... | Escalate to | What to provide |
|---|---|---|
| Multiple ready jobs and no dispatch rule | Supervisor | Work area, visible rows, and current filters |
| No start action is clear | Supervisor | Screenshot of the queue row and toolbar |
| Progress/output screen is not identified | Supervisor or planner | WO, machine/work area, and current page |
| Inspection is required but not found | Quality engineer | WO, job/stage, lot/date, and screenshot |

## Screenshot Requests

This walkthrough still needs screenshots for the exact queue row action, start confirmation, progress/output reporting, and completion confirmation used in the review environment. Each screenshot should show the signed-in role, [Queue System](../10-production/queue-system.md) filters, WO/job row, visible action label, and the save or status signal after the action. Track the missing evidence in the [Evidence And Decisions Register](../00-open-decisions.md).
