# Machines

> [English](machines.md) | [中文](../../zh-CN/20-engineering/machines.md)

Path: Master / Production / Machines / Definition  
URL: `<APP_BASE_URL>/Machines/Machines`

## What This Page Is For

Use Machines to review machine records that planning and production execution rely on. The page helps confirm whether the expected work area is available in the app.

## What You See

- A searchable machine list with names, identifiers, groups, line details, and status fields.
- Toolbar actions for maintaining records when available to the signed-in user.
- Filters that narrow the list by machine, line, group, or status.
- Detail forms for reviewing selected machine information.

## What You Do

1. Search for the machine or machine group used in the demo.
2. Confirm it is visible and active for production review.
3. Check whether the machine details align with the planning and queue views.
4. Escalate missing or unexpected records before scheduling work.

## What To Check

- The machine name matches the demo scenario.
- The machine belongs to the expected line or group.
- Status and visible setup support scheduling and execution.

## Common Issues

| Issue | What it means |
|---|---|
| Machine is missing | Planning cannot rely on that work area until setup is reviewed. |
| Machine appears in the wrong group | Scheduling may place work in the wrong area. |
| Machine is visible but not usable | Check status and related production setup before release. |

## Related Pages

- [Production Engineer Manual](../03-by-role/production-engineer.md)
- [Recipes](recipes.md)
- [Planning](../10-production/planning.md)
- [Queue System](../10-production/queue-system.md)

## Screenshot

![DS_ERP machines screen](../../assets/screenshots/role-production-engineer-machines.png)
