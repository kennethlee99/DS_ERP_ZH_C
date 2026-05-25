# Planner Manual

> English | [zh-CN](../../zh-CN/03-by-role/planner.md)

You are the **production planner**. You turn demand into scheduled,
released, and monitorable work orders. You depend on production engineering
for valid recipes and routings, and quality engineering for inspection readiness.

## First-Day Checklist

Use this before releasing a first sample WO or training scenario.

| Check | Open | Safe result | Stop if |
|---|---|---|---|
| Access | [Admin Setup Checklist](../01-workflows/admin-setup-checklist.md) | Planner role can open Production Orders, Planning, Queue System, and Dashboards. | Role or permission labels are `needs-decision`. |
| Item readiness | [Parts](../20-engineering/parts.md), [BOM](../20-engineering/bom.md) | The part revision and BOM structure match the training WO. | Part or structure is missing. |
| Route readiness | [Recipes](../20-engineering/recipes.md), [Machines](../20-engineering/machines.md), [NC Programs](../20-engineering/nc-programs.md) | Recipe, machine/work area, and NC program are visible for the selected work. | Route or machine capability is unclear. |
| Golden sample WO | [Planner cold-start walkthrough](../01-workflows/planner-cold-start.md) | The WO can be searched or created using confirmed controls. | Release, schedule, or status action is unlabeled. |
| Queue verification | [Queue System](../10-production/queue-system.md) | The WO/job appears under the expected filter and maps to a documented queue state. | Dispatch or queue-ready label is unclear. |

## Planning Flow

```
Demand arrives
      |
      v
Check part, BOM, recipe, machine readiness
      |
      v
Create or generate WOs
      |
      v
Schedule WOs on Planning page
      |
      v
Release to shop floor
      |
      v
Monitor queue, dashboards, and exceptions
```

## Screens You Use Most

| Screen | What you do here |
|---|---|
| [Parts](../20-engineering/parts.md) and [BOM Master](../20-engineering/bom.md) | Confirm the item being planned exists and has the expected structure. |
| [Recipes](../20-engineering/recipes.md) | Confirm the selected recipe/routing is valid before generating WOs. |
| [Production Orders](../10-production/production-orders.md) | Create WOs, inspect generated child orders, set quantities and dates, and use allowed status actions. |
| [Planning](../10-production/planning.md) | Schedule WOs across dates, machine groups, and planning views. |
| [Queue System](../10-production/queue-system.md) | Confirm released work appears in the execution queue. |
| [Dashboards](../10-production/dashboards.md) | Open OEE, KPI Production, and Main Layout as entry points; treat metric definitions as pending owner confirmation. |
| [Status actions](../10-production/production-orders.md) | Review visible status/action icons only when they are labeled or confirmed by the owner. |

## Before Creating A Work Order

1. Confirm the [Part](../20-engineering/parts.md) and revision are correct.
2. Confirm the [BOM](../20-engineering/bom.md) is ready for the planned
   quantity.
3. Confirm a [Recipe](../20-engineering/recipes.md) exists for the
   planned production route.
4. Confirm the required machine groups and shifts are available.
5. Confirm QA is ready if the work requires inspection.

## Daily Planning Routine

| Time | Action |
|---|---|
| Start of day | Review open demand, WOs due today, and blocked WOs. |
| Before release | Check part, BOM, recipe, quantity, due date, and machine group. |
| During shift | Watch [Queue System](../10-production/queue-system.md) and respond to supervisor escalations. |
| After changes | Recheck [Planning](../10-production/planning.md) so the schedule matches the floor. |
| End of day | Review [Dashboards](../10-production/dashboards.md) and WOs that need rescheduling, cancellation, or force-close review. |

## Escalation Rules

- Escalate recipe, route, machine capability, cycle-time, or NC program issues
  to the [production engineer](production-engineer.md).
- Escalate failed or missing inspection setup to the
  [quality engineer](quality-engineer.md).
- Escalate user access or missing permissions to the
  administrator.

## Common Questions

| Question | Likely cause | Next step |
|---|---|---|
| Generated WOs are missing expected child orders | Recipe or process definition is incomplete | Ask production engineering to review recipe/process setup |
| Planning board is empty | Date range, machine group, or planning page filter excludes the work | Widen filters and check the WO status |
| WO appears in planning but not queue | WO may not be released or queue page filter differs | Check status and queue filters |
| WO is stuck in progress | Child work may still be open or quantity is incomplete | Check the visible status and escalate to the supervisor before using any unclear action icon |

## Screenshots

Recommended screenshots for this role:

| Capture | Suggested page |
|---|---|
| Work order list and action toolbar | [Production Orders](../10-production/production-orders.md) |
| Planning board | [Planning](../10-production/planning.md) |
| Machine queue | [Queue System](../10-production/queue-system.md) |
| OEE/KPI review | [Dashboards](../10-production/dashboards.md) screenshot request |
| Part readiness | [Parts](../20-engineering/parts.md) |
| BOM structure | [BOM](../20-engineering/bom.md) |

![DS_ERP production orders screen](../../assets/screenshots/role-planner-production-orders.png)

The production orders screenshot shows the authenticated work-order list,
filters, action toolbar, and row status indicators.

![DS_ERP planning board screen](../../assets/screenshots/role-planner-planning.png)

The planning screenshot shows the authenticated planning workspace used to review
scheduled load and planning views.

![DS_ERP parts list screen](../../assets/screenshots/parts-list.png)

The parts screenshot shows the authenticated list used to confirm that the item
being planned exists and is ready for production review.

![DS_ERP BOM structure screen](../../assets/screenshots/bom-master-structure.png)

The BOM screenshot shows the authenticated structure page used to confirm
parent and child material relationships.

The [Dashboards](../10-production/dashboards.md) pages still need separate OEE, KPI Production, and Main Layout
screenshots before this role page can describe those metrics in detail.

## Read Next

- [Production engineer manual](production-engineer.md)
- [Production supervisor manual](production-supervisor.md)
- [Planner cold-start walkthrough](../01-workflows/planner-cold-start.md)
- [Production Orders](../10-production/production-orders.md)
- [Operating Glossary](../00-glossary.md)


