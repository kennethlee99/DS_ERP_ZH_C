# 生产主管手册

> [English](../../en/03-by-role/production-supervisor.md) | 中文

您是**生产主管或线长**。您负责盯住当前班次，让已释放工单持续推进，协调操作员，
并判断工单问题应联系计划、工程、质量还是系统管理处理。

## 第一天检查清单

监督现场班次或培训班次前，先完成本清单。

1. **开始条件：** 您在现场班次或培训班次前已登录。
   **打开屏幕：** [管理员设置清单](../01-workflows/admin-setup-checklist.md)。
   **步骤：** 确认主管角色可打开队列、工单、计划、看板和访问复查页面。
   **预期结果：** 必需复查页面和可见操作可用。
   **停止/联系条件：** 如果必需页面或操作被隐藏，请停止并联系管理员。
2. **开始条件：** 主管访问权限可见。
   **打开屏幕：** [队列系统](../10-production/queue-system.md)。
   **步骤：** 逐台机台或工作区域复查预期作业、可见筛选和缺失/阻塞行。
   **预期结果：** 每个区域都有预期作业，或没有作业的原因已记录。
   **停止/联系条件：** 如果队列标签、筛选或派工规则不明确，请保留证据并使用主管排查流程分派。
3. **开始条件：** 班次队列已复查。
   **打开屏幕：** [计划](../10-production/planning.md)和[工单](../10-production/production-orders.md)。
   **步骤：** 对照队列行与已释放、已排程 WO。
   **预期结果：** 队列、计划和 WO 证据对当前班次一致。
   **停止/联系条件：** 如果 WO 只出现在其中一个页面，请带 WO、日期、机台/工作区域和截图联系计划员处理。
4. **开始条件：** 队列和排程证据已收集。
   **打开屏幕：** [生产看板](../10-production/dashboards.md)。
   **步骤：** 只把看板作为趋势信号，并与 WO、计划和队列证据对照。
   **预期结果：** 看板观察只作为辅助上下文记录，不作为唯一行动依据。
   **停止/联系条件：** 如果指标定义或筛选含义不明确，请记录为 `待确认` 并交给业务负责人确认。
5. **开始条件：** 有阻塞、异常或班末状态需要交接。
   **打开屏幕：** [主管排查流程](../01-workflows/supervisor-triage.md)。
   **步骤：** 记录阻塞、可能负责人、证据截图、已采取操作和未完成工作。
   **预期结果：** 下一班能看到发生了什么、谁负责，以及下一步能安全做什么。
   **停止/联系条件：** 如果完成/交接信号尚未确认，请联系生产主管或负责人确认后再关闭事项。

## 班次流程

```
班前
    |
    v
查看已释放工单 + 机台队列
    |
    v
安排关注点：人员、机台、材料、质量
    |
    v
监控队列、看板、产出、停机、质量保留
    |
    v
处理阻塞或联系负责人
    |
    v
班末交接
```

## 最常用的屏幕

| 屏幕 | 您在这里做什么 |
|---|---|
| [队列系统](../10-production/queue-system.md) | 查看每台机台或产线下一步应运行什么。 |
| [计划](../10-production/planning.md) | 检查排程负载，并确认临时变更是否已反映。 |
| [工单](../10-production/production-orders.md) | 检查工单状态、数量、嵌套工单与可用状态操作。 |
| [看板](../10-production/dashboards.md) | 打开 OEE、KPI Production 和 Main Layout 查看高层级信号；指标定义仍以业务负责人确认为准。 |
| [手动任务](../10-production/manual-tasks.md) | 确认任务定义，并确认现场流程中已分派手动工作在哪里跟踪。 |
| [检验记录](../30-quality/inspection-records.md) | 检查是否有质量失败或待检阻塞生产。 |

## 班前检查清单

1. 打开[队列系统](../10-production/queue-system.md)，确认每台机台或产线的首批作业。
2. 打开[计划](../10-production/planning.md)，比较排程与队列是否一致。
3. 在[工单](../10-production/production-orders.md)检查已释放工单是否缺数量、交期、配方或机台分配。
4. 在[检验记录](../30-quality/inspection-records.md)或 [NCR](../30-quality/ncr-non-conformance.md)
   检查质量保留。

## 生产被阻塞时

| 阻塞 | 先看页面 | 联系对象 |
|---|---|---|
| 工单未释放或未排程 | [工单](../10-production/production-orders.md)、[计划](../10-production/planning.md) | 计划员 |
| 机台能力或 NC 程序错误 | [机台](../20-engineering/machines.md)、[NC 程序](../20-engineering/nc-programs.md) | 生产工程师 |
| 检验失败或 NCR 未关闭 | [检验记录](../30-quality/inspection-records.md)、[NCR](../30-quality/ncr-non-conformance.md) | 质量工程师 |
| 用户无法访问页面 | [用户和角色](../40-administration/users-and-roles.md) | 管理员 |

## 班末交接

记录或交代：

- 已完成、仍在运行、或被阻塞的工单。
- 机台停机与未解决的机台问题。
- 质量失败、NCR 编号，以及需要跟进的检验记录。
- 仍未关闭的手动任务。
- 对工单执行过的状态操作，尤其是取消、重置、强制结束。

## 截图

建议为本角色补充以下截图：

| 截图 | 建议页面 |
|---|---|
| 班次队列 | [队列系统](../10-production/queue-system.md) |
| 计划板 | [计划](../10-production/planning.md) |
| 工单状态/操作区域 | [工单](../10-production/production-orders.md) |
| 生产主看板 | [看板](../10-production/dashboards.md)截图请求 |
| 手动任务列表 | [手动任务](../10-production/manual-tasks.md) |
| 检验记录查询 | [检验记录](../30-quality/inspection-records.md) |

![DS_ERP 班次队列界面](../../assets/screenshots/role-production-supervisor-queue.png)

队列截图展示已登录后的班次视图，用于确认各工位等待执行的工作和阻塞位置。

![DS_ERP 工单界面](../../assets/screenshots/role-planner-production-orders.png)

工单截图展示主管处理或上报工单阻塞时查看的状态和操作区域。

[看板](../10-production/dashboards.md)页面仍需要单独的 OEE、KPI Production 和 Main Layout 截图，然后本角色页才能详细说明这些信号。

![DS_ERP 手动任务界面](../../assets/screenshots/production-manual-tasks.png)

[手动任务](../10-production/manual-tasks.md)截图展示任务定义页面。请使用现场流程指定的队列或报工页面确认已分派手动工作。

![DS_ERP 检验记录界面](../../assets/screenshots/quality-inspection-records.png)

检验记录截图展示当质量状态阻塞生产时，主管查看已保存检验结果的位置。

## 接下来读

- [操作员手册](operator.md)
- [计划员手册](planner.md)
- [主管排查流程](../01-workflows/supervisor-triage.md)
- [工单](../10-production/production-orders.md)
- [检验记录](../30-quality/inspection-records.md)
