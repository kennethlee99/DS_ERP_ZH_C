# Production Supervisor Manual

> English | [zh-CN](../../zh-CN/03-by-role/production-supervisor.md)

You are the **production supervisor or line lead**. You watch the current
shift, keep released work moving, coordinate operators, and decide when a
work order issue must be escalated to planning, engineering, quality, or
administration.

## First-Day Checklist

Use this before supervising a live or training shift.

| Check | Open | Safe result | Stop if |
|---|---|---|---|
| Access | [Admin Setup Checklist](../01-workflows/admin-setup-checklist.md) | Supervisor role can open queue, WOs, planning, and dashboards. | A required page or action is hidden. |
| Shift queue | [Queue System](../10-production/queue-system.md) | Each machine or work area has the expected visible jobs or a known reason for none. | Queue labels, filters, or dispatch rules are unclear. |
| Schedule match | [Planning](../10-production/planning.md) and [Production Orders](../10-production/production-orders.md) | Queue rows match released and scheduled WOs. | WO appears in one place but not the other. |
| Dashboard use | [Dashboards](../10-production/dashboards.md) | Dashboard is used only as a trend signal and compared with WO/queue evidence. | Metric definition or filter meaning is unclear. |
| Handover evidence | [Supervisor triage walkthrough](../01-workflows/supervisor-triage.md) | Blockers, owners, screenshots, and unfinished work are recorded. | Completion/handover signal is not confirmed. |

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


