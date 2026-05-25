# 生产主管延误作业排查

> [English](../../en/01-workflows/supervisor-triage.md) | 中文

当班次中已释放作业缺失、延误、阻塞或不明确时，请使用本页。

延误作业证据、队列阻塞状态、质量停止证据、看板解释和角色可见性的未结事项记录在[证据与待决事项登记](../00-open-decisions.md)中。

## 排查顺序

1. 先看[队列系统](../10-production/queue-system.md)。
2. 与[工单](../10-production/production-orders.md)对照。
3. 在[计划](../10-production/planning.md)中确认排程。
4. 在[检验记录](../30-quality/inspection-records.md)和 [NCR](../30-quality/ncr-non-conformance.md) 中检查质量状态。
5. 只把[生产看板](../10-production/dashboards.md)作为高层级信号；OEE 定义仍需业务负责人确认。

## 看到这种情况时这样处理

| 情况 | 先看页面 | 检查内容 | 操作 / 升级 |
|---|---|---|---|
| 队列中缺少作业 | [Queue System](../10-production/queue-system.md) | 筛选、机台/工作区域、零件、工序、状态 | 与[工单](../10-production/production-orders.md)对照；如果 WO 未释放，联系计划员处理。 |
| WO 存在但未排程 | [Planning](../10-production/planning.md) | 日期范围、机台组、计划视图 | 带 WO 和预期机台/工作区域联系计划员处理。 |
| 队列行存在但无法开始 | [Queue System](../10-production/queue-system.md) | 可见状态、必要检验、阻塞步骤 | 根据缺失条件联系计划员、质量或生产工程师处理。 |
| 机台或程序不匹配 | [Machines](../20-engineering/machines.md) / [NC Programs](../20-engineering/nc-programs.md) | 机台组、NC 程序准备情况 | 联系生产工程师处理。 |
| 检验失败或未保存 | [Inspection Records](../30-quality/inspection-records.md) | WO/作业、结果、已保存记录 | 联系质量工程师处理。 |
| NCR 未关闭 | [NCR](../30-quality/ncr-non-conformance.md) | 状态、受影响 WO/零件、必要跟进 | 等质量确认下一步后再做生产决定。 |
| OEE 或看板信号不明确 | [Dashboards](../10-production/dashboards.md) | 页面、筛选、指标名称 | 记录为待决事项；不要只凭不明确指标采取行动。 |
| 用户看不到页面或操作 | [Users and Roles](../40-administration/users-and-roles.md) | 用户、角色、可见菜单/操作 | 联系管理员处理。 |

## 延误决策表

收集可见证据后使用本表。本表用于安全分派：不要把未确认图标、不明确看板指标或猜测的队列状态作为唯一行动依据。

| 症状 | 可见证据 | 可能负责人 | 下一步安全动作 | 不要做 |
|---|---|---|---|---|
| 队列行缺失 | 队列筛选、WO/作业、零件/工序、机台/工作区域、日期，以及没有匹配行。 | 如果 WO 未释放或未排程，负责人是计划员；如果访问隐藏 [Queue System](../10-production/queue-system.md)，负责人是管理员。 | 对照 [Production Orders](../10-production/production-orders.md) 和 [Planning](../10-production/planning.md)，然后把 WO/作业、筛选和截图发给负责人。 | 不要因为另一行排在第一位，就让操作员运行替代行。 |
| WO 存在但未排程 | [Production Orders](../10-production/production-orders.md) 行存在；[Planning](../10-production/planning.md) 中没有匹配日期/区域的排程作业。 | 计划员 | 发送 WO、零件/工序、预期日期和预期机台/工作区域。 | 不要从不明确的状态动作释放、重置或关闭 WO。 |
| 队列行无法开始 | 队列行存在，但状态映射到 `Paused / blocked`，行操作缺失，或必要检验/设置不明确。 | 根据缺失条件，可能是计划员、生产工程师、质量工程师或管理员。 | 使用[队列状态表](../10-production/queue-system.md#队列状态表)，保留行/动作区域截图，并按缺失证据分派。 | 不要绕过被阻塞的行，也不要推测隐藏的开始动作。 |
| 质量停止 | [Inspection Records](../30-quality/inspection-records.md) 或 [SMARTQC 检验](../35-smartqc/inspection-data-entry.md)显示检验缺失、失败、不明确或未保存。 | 质量工程师 | 暂停生产决定，直到质量确认检验结果、处置或返工要求。 | 不要只凭已保存但不明确的结果继续或完成生产。 |
| NCR 未关闭 | [NCR](../30-quality/ncr-non-conformance.md) 行/状态影响同一 WO、零件、批次或工序。 | 质量工程师 | 记录 NCR 编号/状态，等待质量处置后再做生产动作。 | 不要只凭看板或队列状态关闭、释放或继续。 |
| 看板不明确 | [OEE、KPI Production 或 Main Layout](../10-production/dashboards.md) 指标定义不清、页面为空或筛选不匹配。 | 负责人或业务负责人 | 只把看板作为查看项；与 [Production Orders](../10-production/production-orders.md)、[Planning](../10-production/planning.md) 和 [Queue System](../10-production/queue-system.md) 对照。 | 不要把 OEE/KPI 作为延误归属或生产动作的唯一原因。 |
| 访问缺失 | 用户看不到预期侧边栏页面、工具栏动作、行操作或保存按钮。 | 管理员 | 保留用户、角色、预期页面/动作和当前截图；检查 [Users and Roles](../40-administration/users-and-roles.md)。 | 未经管理员或负责人批准，不要更改角色设置。 |

## 延误作业证据

当作业延误或看起来卡住时，请先收集以下可见字段，再判断责任归属。

| 证据 | 先看哪里 | 为什么重要 |
|---|---|---|
| 到期时间或生产日期 | [工单](../10-production/production-orders.md)、[Planning](../10-production/planning.md) | 确认该作业在当前复查窗口中是否真的延误。 |
| 计划开始/结束或计划区域 | [Planning](../10-production/planning.md) | 显示预期机台、组别、产线或日期。 |
| 队列状态 | [Queue System](../10-production/queue-system.md) | 把可见行或缺失行条件映射到 `Ready`、`Active`、`Paused / blocked`、`Complete` 或 `Hidden / missing`。 |
| 最后可见更新 | [Queue System](../10-production/queue-system.md)、[工单](../10-production/production-orders.md) | 帮助区分过期队列行和刚变更的作业。 |
| 产出与目标对比 | [工单](../10-production/production-orders.md)或指定报工页面 | 显示延误是否因为数量仍未完成。 |
| 停机或停止原因 | 指定报工页面或主管记录 | 帮助把问题分派给生产、工程或维护。 |
| 负责人或当前角色 | [工单](../10-production/production-orders.md)、[Queue System](../10-production/queue-system.md)、[Users and Roles](../40-administration/users-and-roles.md) | 显示谁可以执行下一步可见动作。 |

## 质量停止检查

| 停止条件 | 检查内容 | 下一步 |
|---|---|---|
| 缺少必要检验 | [检验计划](../30-quality/inspection-planning.md)、[SMARTQC 检验](../35-smartqc/inspection-data-entry.md) | 请质量工程师确认所需检验表或检验步骤。 |
| 已录入检验但结果不明确 | [检验记录](../30-quality/inspection-records.md) | 不要根据不明确结果释放或继续生产。 |
| 检验失败 | [检验记录](../30-quality/inspection-records.md)、[NCR](../30-quality/ncr-non-conformance.md) | 等质量确认处置后再做生产决定。 |
| 设备或校准影响结果 | [设备校准](../30-quality/equipment-calibration.md) | 接受测量前先升级给质量。 |

## 交接时记录什么

- WO 或队列行。
- 机台/工作区域。
- 当前可见状态。
- 发现问题的页面。
- 当按钮、图标或状态不明确时附截图。
- 已升级给的人员或角色。

## 截图请求

在手册给出逐步点击说明前，本排查流程还需要阻塞队列行、延误作业标识、质量停止证据和 OEE/KPI 趋势信号的带标签截图。这些事项记录在[证据与待决事项登记](../00-open-decisions.md)中。
