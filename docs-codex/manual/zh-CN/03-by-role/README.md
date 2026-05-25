# 按角色阅读的用户手册

> [English](../../en/03-by-role/README.md) | 中文

第一次看演示？请先读[操作指南](../00-start-here.md)，再回到本页选择与复查问题相匹配的角色。

如果您想按岗位而不是按模块阅读，请从本节开始。每个角色页面都会说明日常流程、需要打开的页面、交接前要检查的内容，以及常见问题应升级给谁处理。

## 操作流程

1. 当零件、BOM、配方、机台或 NC 程序存在疑问时，先检查工程准备情况。
2. 使用[计划员流程](../01-workflows/planner-cold-start.md)复查工单、排程、释放和队列准备情况。
3. 使用[操作员流程](../01-workflows/operator-run-next-job.md)理解如何找到、开始、报工、检验并完成作业。
4. 使用[主管排查流程](../01-workflows/supervisor-triage.md)检查阻塞和交接。
5. 当检验、NCR、SMARTQC 或校准影响作业时，使用质量流程。
6. 当访问权限、工人身份、角色、翻译或主数据前提影响用户能看到的内容时，使用[管理员设置清单](../01-workflows/admin-setup-checklist.md)。
7. 当状态或队列术语不清楚时，使用[操作词汇表](../00-glossary.md)。

| 角色 | 从这里开始 | 主要目标 |
|---|---|---|
| 车间操作员 | [操作员](operator.md) | 执行已分派作业、上报产出、完成必要检查 |
| 生产计划员 | [计划员](planner.md) | 把需求转成已排程、已释放并可跟踪的工单 |
| 生产工程师 | [生产工程师](production-engineer.md) | 维护路线、配方、机台能力与 NC 程序准备情况 |
| 生产主管 / 线长 | [生产主管](production-supervisor.md) | 监控班次、处理工单阻塞、协调交接 |
| 质量工程师 | [质量工程师](quality-engineer.md) | 定义检验计划、复查记录、管理 NCR 与校准 |
| 系统管理员 | [用户和角色](../40-administration/users-and-roles.md) | 通过可见管理页面维护用户访问 |

## 屏幕章节

| 区域 | 页面 |
|---|---|
| 生产 | [工单](../10-production/production-orders.md), [计划](../10-production/planning.md), [队列系统](../10-production/queue-system.md), [手动任务](../10-production/manual-tasks.md), [生产看板](../10-production/dashboards.md) |
| 工程 | [零件](../20-engineering/parts.md), [BOM](../20-engineering/bom.md), [配方](../20-engineering/recipes.md), [机台](../20-engineering/machines.md), [NC 程序](../20-engineering/nc-programs.md) |
| 质量 | [检验计划](../30-quality/inspection-planning.md), [检验记录](../30-quality/inspection-records.md), [NCR](../30-quality/ncr-non-conformance.md), [设备校准](../30-quality/equipment-calibration.md) |
| SMARTQC | [检验表](../35-smartqc/check-sheets.md), [检验录入](../35-smartqc/inspection-data-entry.md), [方法与方法组](../35-smartqc/methods-and-groups.md) |
| 管理 | [用户和角色](../40-administration/users-and-roles.md) |
| 操作流程 | [计划员流程](../01-workflows/planner-cold-start.md), [操作员流程](../01-workflows/operator-run-next-job.md), [主管排查](../01-workflows/supervisor-triage.md), [管理员设置清单](../01-workflows/admin-setup-checklist.md), [操作词汇表](../00-glossary.md) |

## 截图状态

![DS_ERP 登录界面](../../assets/screenshots/ds-erp-login.png)

上方引用 DS_ERP 登录页截图。各角色页面还补充了[队列系统](../10-production/queue-system.md)、[计划](../10-production/planning.md)、[配方](../20-engineering/recipes.md)、[机台](../20-engineering/machines.md)、[NC 程序](../20-engineering/nc-programs.md)、质量、SMARTQC 和[管理](../40-administration/users-and-roles.md)页面的截图。
