# 证据与待决事项登记

> [English](../en/00-open-decisions.md) | 中文

在客户培训或首次用户 walkthrough 前使用本页。本页记录哪些内容还需要可见证据或负责人确认，手册才能写成准确的逐步点击说明。

## 如何使用本登记表

1. 先阅读[从这里开始](00-start-here.md)和对应角色流程。
2. 当页面说明某个控件、状态、看板、权限或路径尚未确认时，回到本登记表。
3. 在批准的 DS_ERP 环境中截取指定证据。
4. 只有当标签、路径和结果都可见时，才更新对应角色页和屏幕页。

## 决定状态

| 状态 | 含义 | 手册处理方式 |
|---|---|---|
| 未结 | 手册还不能安全写出准确点击、字段、指标或设置关系。 | 保持保守说明，并把用户引导到证据请求。 |
| 需要证据 | 需要截图或负责人说明后，步骤才能变成准确说明。 | 不要用猜测标签替代。 |
| 已确认 | 可见标签和结果已经捕捉。 | 同步更新中英文角色流程和屏幕章节。 |

## 高置信度待决事项

| 事项 | 影响范围 | 当前安全说明 | 需要的证据 | 确认负责人 |
|---|---|---|---|---|
| 工单状态操作 | [计划员流程](01-workflows/planner-cold-start.md)、[工单](10-production/production-orders.md) | 只使用清楚可见的操作。不要猜测 release、hold、cancel、reset、close 或 schedule 图标。 | 状态变更前后的工具栏/操作区截图，包含 WO 行和登录角色。 | 计划负责人或负责人 |
| 计划排程操作 | [计划员流程](01-workflows/planner-cold-start.md)、[计划](10-production/planning.md) | 确认 WO 在 Planning 中可见；只有排程操作和保存/结果信号清楚时才调整。 | 排程前后截图，包含日期、机台/工作区域、WO、操作和结果。 | 计划负责人 |
| 队列派工规则和行操作 | [操作员流程](01-workflows/operator-run-next-job.md)、[队列系统](10-production/queue-system.md)、[主管排查](01-workflows/supervisor-triage.md) | 只按已确认派工规则、指定工作区域或主管指示选择作业。不要只按行顺序选择。 | 队列截图，包含筛选、WO/job、零件/工序、状态、行操作标签，以及打开/开始后的结果。 | 生产主管 |
| 生产报工页面 | [操作员流程](01-workflows/operator-run-next-job.md)、[手动任务](10-production/manual-tasks.md) | 只在本部署指定的报工页面记录产出、停机和备注。 | 准确侧边栏路径或 URL、必填字段、保存操作、保存确认，以及同一个 WO/job 身份。 | 生产主管或计划负责人 |
| 完成和交接信号 | [操作员流程](01-workflows/operator-run-next-job.md)、[队列系统](10-production/queue-system.md)、[工单](10-production/production-orders.md) | 仅从队列筛选中消失不足以证明完成。刷新后确认同一 WO/job 和工序。 | 完成或交接后的队列/WO 状态、产出证据、需要时的检验结果，以及未完成工作备注。 | 生产主管 |
| 看板指标含义 | [生产看板](10-production/dashboards.md)、[主管排查](01-workflows/supervisor-triage.md)、[计划员流程](01-workflows/planner-cold-start.md) | OEE、KPI Production 和 Main Layout 在本手册版本中只作为查看趋势的页面。不要把它作为生产决定的唯一依据。 | 真实看板截图、筛选含义、指标定义和批准解释。 | 业务负责人或负责人 |
| 用户与工人关系 | [管理员设置清单](01-workflows/admin-setup-checklist.md)、[用户和角色](40-administration/users-and-roles.md)、[操作员流程](01-workflows/operator-run-next-job.md) | 分派作业前确认操作员使用登录用户、关联工人还是独立工人记录。 | 用户页面截图、若分开则需要工人/设置页、角色分配、可见工人/工作区域字段和用户身份。 | 管理员或实施负责人 |
| 权限标签和可见操作 | [管理员设置清单](01-workflows/admin-setup-checklist.md)、[用户和角色](40-administration/users-and-roles.md) | 只用可见角色解释用户能看到什么。未经负责人确认，不要把技术权限标签翻译成规则。 | 角色页面截图，包含权限标签，并确认到侧边栏页面/操作的映射。 | 管理员 |
| 语言和翻译设置 | [管理员设置清单](01-workflows/admin-setup-checklist.md)、[从这里开始](00-start-here.md) | 手册是双语的，但应用语言设置流程仍未确认。 | 语言/翻译设置的确认侧边栏路径、可见字段、保存操作和预期语言行为。 | 实施负责人 |
| 质量和检验计划使用范围 | [质量工程师手册](03-by-role/quality-engineer.md)、[检验计划](30-quality/inspection-planning.md)、[检验记录](30-quality/inspection-records.md) | 保留 Quality/QC 和 Inspection Planning，但在把它们作为客户流程必需步骤前先确认范围。 | 使用范围决定、必需检验示例、已保存记录，以及相关 NCR/校准处理。 | 质量负责人或负责人 |

## 证据捕捉标准

每张截图或负责人说明应包含：

- 可见时包含登录角色或用户。
- 侧边栏路径或页面标题。
- 正在确认的工具栏、行操作、字段或筛选。
- 会改变状态的操作应包含前后状态。
- 相关 WO/job、零件、工序、机台/工作区域、日期或检验身份。
- 能证明结果的保存、确认、状态、时间戳或刷新后行记录。

## 证据确认后

同一轮同步更新两个语言版本：

- 告诉用户怎么做的流程页。
- 解释页面的屏幕章节。
- 截图请求或本登记表；把事项改为已确认，或在不再需要时删除。
