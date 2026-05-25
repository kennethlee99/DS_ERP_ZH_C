# 从这里开始：演示操作指南

> [English](../en/00-start-here.md) | 中文

如果您第一次使用 DS_ERP，请先读本页。本页说明演示的正常阅读顺序，以及主要角色如何从登录、计划、生产执行、工程准备、质量检查到访问权限复查连接起来。

## DS_ERP 用来做什么

DS_ERP 用于准备、释放、执行和复查工厂作业。在演示中，通常会沿着一个生产作业查看以下区域：

1. 工程确认零件、BOM、配方、机台和 NC 程序已经准备好。
2. 计划员建立或复查工单，安排计划，并检查队列准备情况。
3. 操作员和主管通过队列执行并监控作业。
4. 质量和 SMARTQC 确认检验设置、检验录入、NCR 跟进和校准准备情况。
5. 当访问权限影响复查人员能看到的内容时，管理页面用于确认用户和角色。

## 先读什么

| 如果您要... | 先读 | 接着读 |
|---|---|---|
| 复查完整演示 | 本页 | 计划员、生产工程师、操作员、生产主管、质量工程师 |
| 检查作业如何到达现场 | [计划员流程](01-workflows/planner-cold-start.md) | [工单](10-production/production-orders.md)、[计划](10-production/planning.md)、[队列系统](10-production/queue-system.md) |
| 检查生产设置是否准备好 | [生产工程师手册](03-by-role/production-engineer.md) | [零件](20-engineering/parts.md)、[BOM](20-engineering/bom.md)、[配方](20-engineering/recipes.md)、[机台](20-engineering/machines.md)、[NC 程序](20-engineering/nc-programs.md) |
| 检查车间执行 | [操作员流程](01-workflows/operator-run-next-job.md) | [队列系统](10-production/queue-system.md)、[手动任务](10-production/manual-tasks.md)、[SMARTQC 检验](35-smartqc/inspection-data-entry.md) |
| 检查班次管控 | [主管排查](01-workflows/supervisor-triage.md) | [工单](10-production/production-orders.md)、[队列系统](10-production/queue-system.md)、[检验记录](30-quality/inspection-records.md) |
| 检查检验和质量跟进 | [质量工程师手册](03-by-role/quality-engineer.md) | [检验计划](30-quality/inspection-planning.md)、[检验记录](30-quality/inspection-records.md)、[NCR](30-quality/ncr-non-conformance.md)、[SMARTQC 检验表](35-smartqc/check-sheets.md) |
| 检查访问权限 | [管理员设置清单](01-workflows/admin-setup-checklist.md) | [用户和角色](40-administration/users-and-roles.md)，然后回到看不到预期菜单或操作的角色页面 |
| 检查状态词 | [操作词汇表](00-glossary.md) | 回到使用该术语的流程页面 |

## 从登录到日常流程

1. 登录复查环境所使用地址上的 DS_ERP。
2. 从与复查问题相匹配的角色开始。
3. 使用角色页面理解日常流程。
4. 需要页面级细节时，打开链接的屏幕章节。
5. 每完成一个页面操作，先看“要检查什么”，再进入下一个角色或页面。

## URL 约定

屏幕章节使用 `<APP_BASE_URL>` 表示已部署的 DS_ERP Web 地址。请把它替换为现场使用的地址，例如工厂服务器 URL。不要假设本地开发地址；如果不在工厂部署环境中复查，请向演示负责人确认临时复查地址。

## UI 标签约定

当网页本身显示英文标签时，本手册保留真实网页标签。中文页面首次说明时可先写中文含义，并把真实标签放在括号中，例如队列系统 (Queue System)。在应用中搜索或核对时，请以侧边栏、工具栏、表格或弹窗中显示的真实标签为准。

## 正常演示流程

```
工程准备
        |
        v
计划员建立或复查工单
        |
        v
计划员排程并释放作业
        |
        v
操作员或主管在队列系统中找到作业
        |
        v
操作员记录作业、任务和检验
        |
        v
质量复查检验结果、NCR 和校准
        |
        v
主管和计划员在交接前复查状态
```

## 角色如何连接

- 生产工程师确保作业可以被计划。
- 计划员确保作业可以排程并释放。
- 操作员使用队列和可见作业步骤执行作业。
- 主管关注阻塞作业并协调交接。
- 质量工程师确认检验准备情况并复查质量跟进。
- 当预期菜单或操作不可见时，管理员处理访问问题。

## 内容不一致时怎么办

| 看到的情况 | 下一步 |
|---|---|
| 侧边栏缺少页面 | 在[用户和角色](40-administration/users-and-roles.md)中检查用户角色。 |
| 找不到工单 | 先复查[工单](10-production/production-orders.md)，再复查[计划](10-production/planning.md)，然后检查[队列系统](10-production/queue-system.md)。 |
| 作业无法释放 | 检查[零件](20-engineering/parts.md)、[BOM](20-engineering/bom.md)、[配方](20-engineering/recipes.md)、[机台](20-engineering/machines.md)、[NC 程序](20-engineering/nc-programs.md)和质量准备情况。 |
| 质量步骤不清楚 | 先看[检验计划](30-quality/inspection-planning.md)，再看[SMARTQC 检验](35-smartqc/inspection-data-entry.md)。 |
| 看板指标不清楚 | 在业务负责人确认指标定义前，作为待决事项处理。 |

## 演示范围说明

Quality/QC 和 Inspection Planning 保留在手册中，但最终演示范围仍需要演示负责人确认。其他排除或仅支持用途的区域记录在范围说明中，不写入操作指南。
