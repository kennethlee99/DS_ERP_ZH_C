# BOM

> [English](bom.md) | [中文](../../zh-CN/20-engineering/bom.md)

Path: Parts / BOM Master and BOM Structure  
URL: `<APP_BASE_URL>/BOM/BomMaster`, `<APP_BASE_URL>/BOM/BOMStructure/BOMStructureDiagram`

## What This Page Is For

Use BOM pages to review parent and child material relationships before work is planned. The reviewer should be able to confirm whether the planned item has the expected structure.

## What You See

- BOM master records for parent items.
- Structure or diagram views that show child items and quantities.
- Search and filter controls for finding the parent item.
- Toolbar actions for opening, refreshing, exporting, and reviewing records when available.

## What You Do

1. Search for the parent item used in the demo.
2. Open the BOM or structure view.
3. Confirm the visible child items and quantities match the intended build.
4. Escalate missing or unexpected structure before releasing production work.

## What To Check

- The parent item is the expected part.
- Child items and quantities are visible and reasonable.
- The displayed structure matches the planned production route.
- Planning does not proceed until the structure is understood.

## Common Issues

| Issue | What it means |
|---|---|
| Parent item has no structure | The BOM may not be ready for the demo scenario. |
| Child quantity looks wrong | Ask engineering or planning to review before release. |
| Structure differs from recipe expectations | Confirm which setup should drive the demo workflow. |

## Related Pages

- [Parts](parts.md)
- [Recipes](recipes.md)
- [Planner Manual](../03-by-role/planner.md)
- [Production Engineer Manual](../03-by-role/production-engineer.md)

## Screenshot

![DS_ERP BOM structure screen](../../assets/screenshots/bom-master-structure.png)
