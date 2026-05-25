# Parts

> [English](parts.md) | [中文](../../zh-CN/20-engineering/parts.md)

Path: Parts / Parts  
URL: `<APP_BASE_URL>/Parts/Parts`

## What This Page Is For

Use Parts to confirm that an item exists before planning, engineering, or quality review continues. This is the shared reference point for item identity in the workflow.

## What You See

- A searchable list of parts with identifying fields and status information.
- Toolbar controls for adding, editing, exporting, refreshing, and choosing visible columns when available.
- Filters for narrowing the list by part, description, type, or status.
- Detail forms for reviewing the selected part.

## What You Do

1. Search for the part used in the site scenario.
2. Confirm the displayed item identity before checking BOM or recipe setup.
3. Open the row and review visible fields that affect planning or engineering review.
4. Use related pages to confirm BOM, recipe, machine, or quality readiness.

## What To Check

- The correct part appears in the list.
- The part name, number, and status are consistent with the site scenario.
- The part is ready before the planner creates or releases work.

## Common Issues

| Issue | What it means |
|---|---|
| Part cannot be found | Search criteria may be too narrow, or the item may not be prepared for the site workflow. |
| Similar parts appear | Confirm the exact item before planning or quality review. |
| Part exists but work cannot proceed | BOM, recipe, machine, or inspection setup may still need review. |

## Related Pages

- [BOM](bom.md)
- [Recipes](recipes.md)
- [Planner Manual](../03-by-role/planner.md)
- [Production Engineer Manual](../03-by-role/production-engineer.md)

## Screenshot

![DS_ERP parts list screen](../../assets/screenshots/parts-list.png)
