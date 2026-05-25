# Queue System

> [English](queue-system.md) | [中文](../../zh-CN/10-production/queue-system.md)

Path: Planner / Queue System  
URL: `<APP_BASE_URL>/Production/QueuePage`

The current captured sidebar path is `Planner / Queue System`. Operators and supervisors also use this same page when their role exposes it.

## What This Page Is For

Use Queue System to confirm which released work is visible for execution. Operators use it to find work, while supervisors use it to check whether the shift has the expected jobs available.

Dispatch rules, row actions, and exact status labels remain tracked in the [Evidence and Decisions Register](../00-open-decisions.md) until they are confirmed with visible screenshots.

> **Needs decision:** Queue dispatch rule, row open/start action, exact status labels, and completion signal are not confirmed. Operators should stop and ask the supervisor when those values are not visible or locally confirmed.

## What You See

- A queue of available work with job, part, process, status, and timing information.
- Filters for work area, machine, date, or status.
- Row actions that open the job or move the user into the next visible work step.
- Status indicators that must be read through the shared queue status map below until exact app labels are screenshot-confirmed.

## Queue Status Map

Use the manual working terms below whenever planner, operator, or supervisor pages discuss queue state. The exact visible app labels still need screenshot confirmation; until then, do not invent a label that is not shown on screen.

| Manual working term | Visible status or condition | Meaning | Operator action | Supervisor action | Escalate to |
|---|---|---|---|---|---|
| Ready | Confirmed visible label or status still needs screenshot capture. | The job appears available for the selected machine, line, work area, date, or status filter. | Open or start only if the dispatch rule and row action are confirmed. | Confirm the job matches Planning and the WO before telling an operator to run it. | Supervisor if multiple ready jobs compete; planner if the job should not be visible. |
| Active | Confirmed visible label or status still needs screenshot capture. | Work appears to be in progress or already started. | Continue only in the assigned reporting flow. | Check output, downtime, last update, and whether the active job matches the shift plan. | Supervisor for production issues; quality engineer if inspection blocks progress. |
| Paused / blocked | Confirmed visible label or blocked condition still needs screenshot capture. | Work cannot safely continue because a status, quality step, machine issue, missing setup, or access issue is blocking it. | Do not bypass the block; capture the row and current page. | Route by evidence: planning/release to planner, setup to production engineer, quality/NCR to quality engineer, access to administrator. | Planner, production engineer, quality engineer, or administrator based on the missing condition. |
| Complete | Confirmed visible label or finished condition still needs screenshot capture. | The current operation may be complete, but queue disappearance alone is not proof. | Verify the same WO/job and process in Queue System, Production Orders, or Inspection Records before handover. | Confirm output, quality result, and handover notes before treating the job as closed for the shift. | Planner or quality engineer if status and records disagree. |
| Hidden / missing | No row appears under the selected filters. | The job may be unreleased, unscheduled, filtered out, assigned elsewhere, or not created for the site workflow. | Do not choose a substitute job without supervisor instruction. | Compare Queue System with Production Orders and Planning before escalating. | Planner if unreleased/unscheduled; administrator if access hides the page/action. |

## What You Do

1. Select the work area or machine used in the workflow.
2. Find the released job and confirm the part and process.
3. Open the job only after checking that the visible status maps to the `Ready` working term and the dispatch rule is confirmed.
4. Escalate missing or blocked jobs to the planner or supervisor.

## What To Check

- The queue row matches the planned order and operation.
- The operator sees only work that is ready for execution.
- The selected filter is not hiding the work.
- Required inspection or manual task steps are visible when expected.

## Common Issues

| Issue | What it means |
|---|---|
| Job is not shown | The order may not be released, or the queue filter may be wrong. |
| Job is shown but cannot start | The current status or required step may block execution. |
| Operator sees unexpected work | Recheck planning, release status, and work-area filters. |

## Related Pages

- [Operator Manual](../03-by-role/operator.md)
- [Production Supervisor Manual](../03-by-role/production-supervisor.md)
- [Production Orders](production-orders.md)
- [Manual Tasks](manual-tasks.md)

## Screenshot

![DS_ERP queue system screen](../../assets/screenshots/role-operator-queue.png)
