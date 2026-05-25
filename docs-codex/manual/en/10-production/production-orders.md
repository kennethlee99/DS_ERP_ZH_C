# Production Orders

> [English](production-orders.md) | [中文](../../zh-CN/10-production/production-orders.md)

Path: Planner / Production Orders  
URL: `<APP_BASE_URL>/Production/ProductionOrders`

## What This Page Is For

Use Production Orders to find and check production work. Use status actions only when the visible action label and result have been confirmed. This is the planner and supervisor starting point for checking whether work is ready for the floor.

Release, hold, cancel, reset, close, and other status actions remain tracked in the [Evidence and Decisions Register](../00-open-decisions.md) until their visible labels and results are confirmed.

## What You See

- A searchable work-order grid with status, quantity, item, date, and owner fields.
- The visible `New Production Orders` button for creating a work order when the site procedure calls for one.
- Toolbar actions for editing, exporting, refreshing, and changing status when allowed.
- Filters that narrow the list by work order, date, part, status, or related production details.
- Row actions that open the selected work order for review.

## What You Do

1. Filter to the order or date range under review.
2. Open the row and confirm the item, quantity, due date, and status.
3. Use the visible status actions only after checking planning, queue, and quality readiness. If an action is an unlabeled icon, treat it as needing screenshot verification before documenting the exact click.
4. Reopen the grid after changes and confirm the row shows the expected state.

## What To Check

- The order belongs to the correct part and revision.
- The planned quantity and dates match the site scenario.
- The status supports the next step before users look for it in Planning or Queue System.
- Child work, inspection, or engineering readiness is not blocking release.

## Common Issues

| Issue | What it means |
|---|---|
| Order does not appear | Filters may be too narrow, or the order may not be created for this scenario. |
| Status action is unavailable | The order may not be in a state where that action is allowed. |
| Released order is not in the queue | Recheck order status, queue filters, and the planned work area. |
| Action icon meaning is unclear | Request a labeled toolbar screenshot before using it as a documented release or status step. |

## Related Pages

- [Planner Manual](../03-by-role/planner.md)
- [Planning](planning.md)
- [Queue System](queue-system.md)
- [Parts](../20-engineering/parts.md)

## Screenshot

![DS_ERP production orders screen](../../assets/screenshots/role-planner-production-orders.png)
