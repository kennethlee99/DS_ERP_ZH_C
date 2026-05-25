# 生产工程师手册

> [English](../../en/03-by-role/production-engineer.md) | 中文

您是**生产工程师**。您负责确保制造基础数据可用于生产执行：零件、BOM、配方、工序、机台能力、
NC 程序、节拍假设，以及计划、生产、质量之间的交接规则。

## 工作流程

```
新零件 / 新修订
      |
      v
核对零件 + BOM ──► 建配方/工序 ──► 确认机台
      |                    |                  |
      v                    v                  v
准备 NC 程序          验证节拍              移交计划员
      |                                      |
      v                                      v
支持首件生产  ──►  复盘问题  ──►  更新配方/设置数据
```

## 最常用的屏幕

| 屏幕 | 您在这里做什么 |
|---|---|
| [零件](../20-engineering/parts.md) | 确认生产零件、修订、图纸、材料与质量链接已准备好。 |
| [BOM 主档 与 BOM 结构](../20-engineering/bom.md) | 在计划生成工单前检查父子物料结构。 |
| [配方](../20-engineering/recipes.md) | 维护零件或产品族的路线框架。 |
| [配方工序](../20-engineering/recipes.md) | 定义制造工序顺序、预估节拍与工序关系。 |
| [机台 与 机台组/线别](../20-engineering/machines.md) | 确认目标机台与机台组存在，且能力匹配工序。 |
| [NC 程序](../20-engineering/nc-programs.md) | 维护 CNC 程序引用，确认正确修订已可用于生产。 |
| [工单](../10-production/production-orders.md) | 检查已生成工单，诊断路线、数量或状态问题。 |
| [检验计划](../30-quality/inspection-planning.md) | 与 QA 协调，确认正确检验阶段已挂到工序。 |

## 首件 / 新修订检查清单

1. 确认零件的修订、描述、图纸引用与启用状态正确。
2. 检查 BOM 主档是否缺料或有异常子件。
3. 新建或更新配方。
4. 按真实车间顺序加入每道配方工序。
5. 分配有能力执行的机台或机台组。
6. 在计划员释放工单前，确认 NC 程序记录与修订可用。
7. 请 QA 确认[检验计划](../30-quality/inspection-planning.md)与 SMARTQC 设置。
8. 支持首件生产；如果实际表现与配方假设不同，更新节拍或设置数据。

## 生产中要检查什么

| 情况 | 检查内容 |
|---|---|
| 计划员无法生成预期工单 | [配方](../20-engineering/recipes.md)工序列表、[BOM](../20-engineering/bom.md) 链接、[零件](../20-engineering/parts.md)修订设置 |
| 工单到了错误机台组 | [配方](../20-engineering/recipes.md)工序的[机台](../20-engineering/machines.md)分配与机台组映射 |
| 现场 NC 程序不匹配 | [NC 程序](../20-engineering/nc-programs.md)记录、零件修订、机台兼容性 |
| 节拍不现实 | [配方](../20-engineering/recipes.md)工序节拍字段与近期生产记录 |
| 质量检验出现在错误阶段 | [检验计划](../30-quality/inspection-planning.md)与检验表到零件/工序的链接 |

## 交接规则

- 只有当零件、BOM、配方、机台能力与 NC 程序准备好后，才移交给**计划员**。
- 当检验阶段、CMM 程序或 SMARTQC 检验表需要定义或修订时，移交给[质量工程师](quality-engineer.md)。
- 如果所需页面因权限隐藏，或主数据设置被权限阻塞，移交给**管理员**。

## 截图

建议为本角色补充以下截图：

| 截图 | 建议页面 |
|---|---|
| 生产准备状态下的零件设置 | [零件](../20-engineering/parts.md) |
| 配方工序路线 | [配方工序](../20-engineering/recipes.md) |
| 机台能力列表 | [机台](../20-engineering/machines.md) |
| NC 程序列表 | [NC 程序](../20-engineering/nc-programs.md) |
| BOM 结构复查 | [BOM](../20-engineering/bom.md) |

![DS_ERP 配方界面](../../assets/screenshots/role-production-engineer-recipes.png)

配方截图展示已登录后的配方维护页面，用于查看生产路线和工序定义。

![DS_ERP 机台界面](../../assets/screenshots/role-production-engineer-machines.png)

机台截图展示用于确认机台能力和分组的主数据列表。

![DS_ERP NC 程序界面](../../assets/screenshots/role-production-engineer-nc-programs.png)

NC 程序截图展示程序目录，用于生产放行前确认 CNC 程序准备状态。

![DS_ERP 零件列表界面](../../assets/screenshots/parts-list.png)

零件截图展示已登录后的零件列表，用于在路线和 BOM 复查前确认生产零件准备状态。

![DS_ERP BOM 结构界面](../../assets/screenshots/bom-master-structure.png)

BOM 截图展示已登录后的结构页面，用于复查父件与子件关系。

## 接下来读

- [计划员手册](planner.md)
- [质量工程师手册](quality-engineer.md)
