# Operator Manual

> English | [zh-CN](../../zh-CN/03-by-role/operator.md)

You are a **shop-floor operator**. Your job is to run assigned work, report
what happened on the floor, complete required checks, and escalate blockers
quickly. Depending on deployment, routine execution may happen on a dedicated
terminal/kiosk workflow, while the web manual pages document the matching
records, queues, work orders, manual tasks, and quality entries.

## First-Day Checklist

Use this before running the first assigned job.

1. **Start condition:** You are signed in for the first assigned job.
   **Screen to open:** [Admin Setup Checklist](../01-workflows/admin-setup-checklist.md).
   **Step:** Confirm your sign-in user, role, and worker identity if the site workflow uses one.
   **Expected result:** Your identity for assignment is known before selecting work.
   **Stop/contact condition:** Stop if user-worker relationship is `needs-decision`; contact the supervisor or administrator.
2. **Start condition:** Your identity is known.
   **Screen to open:** [Queue System](../10-production/queue-system.md).
   **Step:** Select only the machine, line, work area, date, or status filter assigned by the supervisor or site procedure.
   **Expected result:** The queue view matches your assigned machine or work area.
   **Stop/contact condition:** Stop if the queue filter or work area is unclear; contact the supervisor.
3. **Start condition:** The assigned queue view is visible.
   **Screen to open:** [Operator Walkthrough](../01-workflows/operator-run-next-job.md).
   **Step:** Match the queue row to the assigned WO/job, part, process, and visible status.
   **Expected result:** The row can be documented as the assigned work without relying on row order alone.
   **Stop/contact condition:** Stop if the dispatch rule, priority, or row identity is not confirmed; contact the supervisor.
4. **Start condition:** The queue row is confirmed.
   **Screen to open:** [Queue System](../10-production/queue-system.md).
   **Step:** Use a row open/start action only when it is labeled or supervisor-confirmed.
   **Expected result:** The job opens, starts, or shows an owner-confirmed status change.
   **Stop/contact condition:** Stop if the action is unlabeled, hidden, or different from the site procedure; contact the supervisor.
5. **Start condition:** The job has started or is ready for reporting.
   **Screen to open:** The assigned production reporting screen.
   **Step:** Record output, downtime, or issue notes only in the assigned reporting path.
   **Expected result:** Required fields, save action, and confirmation signal are known before leaving the page.
   **Stop/contact condition:** Stop if reporting path, fields, save action, or confirmation signal is `needs-decision`; contact the supervisor or planner.
6. **Start condition:** Work is complete enough to hand over or stop for the shift.
   **Screen to open:** [Queue System](../10-production/queue-system.md), [Production Orders](../10-production/production-orders.md), or the assigned reporting screen.
   **Step:** Verify the same WO/job after refresh and record unfinished work, saved output, or supervisor confirmation.
   **Expected result:** Handover evidence explains what changed and what remains open.
   **Stop/contact condition:** Stop if queue disappearance is the only completion signal; contact the supervisor before assuming completion.

## Daily Flow

```
Start shift
    |
    v
Confirm assigned work and machine
    |
    v
Run job, report output, downtime, and issues
    |
    v
Complete required inspection or SMARTQC entry
    |
    v
Hand over unfinished work
    |
    v
End shift
```

## Screens You Use Most

| Screen | What you do here |
|---|---|
| [Queue System](../10-production/queue-system.md) | Check what is waiting for the machine or line. |
| [Production Orders](../10-production/production-orders.md) | Look up WO status, part, quantity, due date, and related process details. |
| [Manual Tasks](../10-production/manual-tasks.md) | Review task definitions that may appear in the assigned workflow; use the assigned queue or reporting screen for live work. |
| [Inspection Data Entry](../35-smartqc/inspection-data-entry.md) | Enter measurement values into the active SMARTQC inspection workflow. |
| [Inspection Records](../30-quality/inspection-records.md) | Confirm whether a completed inspection was saved and whether it passed. |

## Before You Start Work

1. Confirm you are working under the correct user or worker identity.
2. Confirm the machine or line matches the work assigned to you.
3. Check the next job in [Queue System](../10-production/queue-system.md).
4. Open the [Production Orders](../10-production/production-orders.md) page if you
   need part, quantity, due-date, process, or family details.
5. Confirm any required inspection instructions before starting the job.

## During The Job

| Event | What to do |
|---|---|
| Machine starts work | Follow the deployed terminal or shop-floor process for start confirmation. |
| Quantity is produced | Record the output through the terminal or the authorized production reporting flow. |
| Machine stops unexpectedly | Report downtime or alert the production supervisor. |
| Inspection is required | Use [Inspection Data Entry](../35-smartqc/inspection-data-entry.md) or the assigned quality screen. |
| Work cannot continue | Tell the production supervisor and keep the WO, machine, part, and reason ready. |

## What You Usually Do Not Do

- Create or edit parts, BOM, recipes, machines, or NC programs. That is owned
  by the [production engineer](production-engineer.md), [planner](planner.md),
  or administrator.
- Define inspection check sheets. That is owned by the
  [quality engineer](quality-engineer.md).
- Change user permissions or master configuration. That is owned by the
  administrator.

## Common Questions

| Question | Likely cause | Next step |
|---|---|---|
| I cannot see the WO assigned to me | WO is not released, queue filter is different, or user/machine assignment is wrong | Ask the [production supervisor](production-supervisor.md) or planner to check the queue and WO status |
| Save is disabled on an inspection entry | Required field is empty or the role lacks permission | Check required fields, then escalate to QA or admin |
| The WO details look wrong | Recipe, BOM, part revision, or NC program may be wrong | Escalate to the production supervisor or production engineer |

## Screenshots

Recommended screenshots for this role:

| Capture | Suggested page |
|---|---|
| Machine queue | [Queue System](../10-production/queue-system.md) |
| WO lookup | [Production Orders](../10-production/production-orders.md) |
| Manual task list | [Manual Tasks](../10-production/manual-tasks.md) |
| Inspection record lookup | [Inspection Records](../30-quality/inspection-records.md) |
| SMARTQC data entry | [Inspection Data Entry](../35-smartqc/inspection-data-entry.md) |

![DS_ERP operator queue screen](../../assets/screenshots/role-operator-queue.png)

The queue screenshot shows the authenticated [Queue System](../10-production/queue-system.md) page used to see
work waiting by station and process.

![DS_ERP SMARTQC inspection screen](../../assets/screenshots/role-operator-smartqc-inspection.png)

The SMARTQC screenshot shows the authenticated inspection entry page operators
open when a measurement or quality checkpoint is required.

![DS_ERP manual tasks screen](../../assets/screenshots/production-manual-tasks.png)

The manual tasks screenshot shows the [Manual Tasks](../10-production/manual-tasks.md) task-definition page. Assigned manual work still needs confirmation in the queue or reporting screen used by the site workflow.

![DS_ERP inspection records screen](../../assets/screenshots/quality-inspection-records.png)

The [Inspection Records](../30-quality/inspection-records.md) screenshot shows where saved inspection outcomes can be
checked after production or quality review.

## Read Next

- [Operator next-job walkthrough](../01-workflows/operator-run-next-job.md)
- [Production supervisor manual](production-supervisor.md)
- [Inspection Data Entry](../35-smartqc/inspection-data-entry.md)
- [Inspection Records](../30-quality/inspection-records.md)
- [Operating Glossary](../00-glossary.md)


