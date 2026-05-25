# Production Supervisor Manual

> English | [zh-CN](../../zh-CN/03-by-role/production-supervisor.md)

You are the **production supervisor or line lead**. You watch the current
shift, keep released work moving, coordinate operators, and decide when a
work order issue must be escalated to planning, engineering, quality, or
administration.

## First-Day Checklist

Use this before supervising a live or training shift.

1. **Start condition:** You are signed in before a live or training shift.
   **Screen to open:** [Admin Setup Checklist](../01-workflows/admin-setup-checklist.md).
   **Step:** Confirm the supervisor role can open queue, WO, planning, dashboard, and access-review pages needed for triage.
   **Expected result:** Required review pages and visible actions are available.
   **Stop/contact condition:** Stop if a required page or action is hidden; contact the administrator.
2. **Start condition:** Supervisor access is visible.
   **Screen to open:** [Queue System](../10-production/queue-system.md).
   **Step:** Review each machine or work area for expected jobs, visible filters, and missing/blocked rows.
   **Expected result:** Each area has expected visible jobs or a documented reason for none.
   **Stop/contact condition:** Stop if queue labels, filters, or dispatch rules are unclear; keep evidence and route through the triage walkthrough.
3. **Start condition:** The shift queue has been reviewed.
   **Screen to open:** [Planning](../10-production/planning.md) and [Production Orders](../10-production/production-orders.md).
   **Step:** Compare queue rows with released and scheduled WOs.
   **Expected result:** Queue, planning, and WO evidence agree for the shift.
   **Stop/contact condition:** Stop if the WO appears in one place but not another; contact the planner with WO, date, machine/work area, and screenshot.
4. **Start condition:** Queue and schedule evidence are collected.
   **Screen to open:** [Dashboards](../10-production/dashboards.md).
   **Step:** Use dashboards only as trend signals and compare them with WO, planning, and queue evidence.
   **Expected result:** Any dashboard observation is recorded as supporting context, not the sole action reason.
   **Stop/contact condition:** Stop if metric definition or filter meaning is unclear; record it as `needs-decision` for the business owner.
5. **Start condition:** A blocker, exception, or end-shift state needs handover.
   **Screen to open:** [Supervisor triage walkthrough](../01-workflows/supervisor-triage.md).
   **Step:** Record blocker, likely owner, evidence screenshot, action taken, and unfinished work.
   **Expected result:** The next shift can see what happened, who owns it, and what remains safe to do.
   **Stop/contact condition:** Stop if completion/handover signal is not confirmed; contact the production supervisor or owner before closing the issue.

## Shift Flow

```
Before shift
    |
    v
Review released WOs + machine queues
    |
    v
Assign attention: operators, machines, materials, quality
    |
    v
Monitor queue, dashboards, output, downtime, quality holds
    |
    v
Resolve blockers or escalate
    |
    v
End shift handover
```

## Screens You Use Most

| Screen | What you do here |
|---|---|
| [Queue System](../10-production/queue-system.md) | See what should run next by machine or line. |
| [Planning](../10-production/planning.md) | Check the scheduled load and confirm whether a late change is already reflected. |
| [Production Orders](../10-production/production-orders.md) | Inspect WO status, quantities, nested orders, and available status actions. |
| [Dashboards](../10-production/dashboards.md) | Open OEE, KPI Production, and Main Layout for high-level signals; treat metric definitions as pending owner confirmation. |
| [Manual Tasks](../10-production/manual-tasks.md) | Review task definitions and confirm where assigned manual work is tracked in the workflow. |
| [Inspection Records](../30-quality/inspection-records.md) | Check whether quality failures or pending inspections are blocking production. |

## Before-Shift Checklist

1. Open [Queue System](../10-production/queue-system.md) and confirm the
   first jobs for each machine or line.
2. Open [Planning](../10-production/planning.md) to compare schedule versus
   the queue.
3. Check [Production Orders](../10-production/production-orders.md) for any
   released WOs with missing quantity, due date, recipe, or machine assignment.
4. Check quality holds in [Inspection Records](../30-quality/inspection-records.md)
   or [NCR](../30-quality/ncr-non-conformance.md).

## When Something Blocks Production

| Blocker | First screen | Escalate to |
|---|---|---|
| WO is not released or not scheduled | [Production Orders](../10-production/production-orders.md), [Planning](../10-production/planning.md) | Planner |
| Machine capability or NC program is wrong | [Machines](../20-engineering/machines.md), [NC Programs](../20-engineering/nc-programs.md) | Production engineer |
| Inspection failed or NCR is open | [Inspection Records](../30-quality/inspection-records.md), [NCR](../30-quality/ncr-non-conformance.md) | Quality engineer |
| User cannot access a page | [Users and Roles](../40-administration/users-and-roles.md) | Administrator |

## End-Shift Handover

Record or communicate:

- WOs completed, still running, or blocked.
- Machine downtime and unresolved machine issues.
- Quality failures, NCR numbers, and inspection records that need follow-up.
- Any manual tasks that remain open.
- Any status actions performed on WOs, especially Cancel, Reset, or Force-Close.

## Screenshots

Recommended screenshots for this role:

| Capture | Suggested page |
|---|---|
| Shift queue | [Queue System](../10-production/queue-system.md) |
| Planning board | [Planning](../10-production/planning.md) |
| WO status/action area | [Production Orders](../10-production/production-orders.md) |
| Main production dashboard | [Dashboards](../10-production/dashboards.md) screenshot request |
| Manual task list | [Manual Tasks](../10-production/manual-tasks.md) |
| Inspection record lookup | [Inspection Records](../30-quality/inspection-records.md) |

![DS_ERP shift queue screen](../../assets/screenshots/role-production-supervisor-queue.png)

The queue screenshot shows the authenticated shift view used to confirm what is
waiting by station and where execution is blocked.

![DS_ERP production orders screen](../../assets/screenshots/role-planner-production-orders.png)

The production orders screenshot shows the status and action area supervisors
use when escalating WO blockers.

The [Dashboards](../10-production/dashboards.md) pages still need separate OEE, KPI Production, and Main Layout
screenshots before this role page can describe those signals in detail.

![DS_ERP manual tasks screen](../../assets/screenshots/production-manual-tasks.png)

The [Manual Tasks](../10-production/manual-tasks.md) screenshot shows the task-definition page. Use the site workflow's queue or reporting screen to confirm assigned manual work.

![DS_ERP inspection records screen](../../assets/screenshots/quality-inspection-records.png)

The inspection records screenshot shows where supervisors can check saved
inspection outcomes when quality status blocks production.

## Read Next

- [Operator manual](operator.md)
- [Planner manual](planner.md)
- [Supervisor triage walkthrough](../01-workflows/supervisor-triage.md)
- [Production Orders](../10-production/production-orders.md)
- [Inspection Records](../30-quality/inspection-records.md)


