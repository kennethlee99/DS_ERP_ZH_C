# 计划员冷启动流程

> [English](../../en/01-workflows/planner-cold-start.md) | 中文

当您需要从计划准备一路跟到队列确认时，请使用本流程。部分按钮和状态图标仍需要截图验证，因此本手册只命名当前截图中已经清楚显示的可见操作。

排程、释放、状态操作、队列证据和 OEE 解释的未结事项记录在[证据与待决事项登记](../00-open-decisions.md)中。

> **待确认**
>
> | 当前可安全执行 | 尚未确认 | 确认负责人 | 需要的准确答案 |
> |---|---|---|---|
> | 确认主数据、只在可见控制已确认时查找或建立指定 WO、对照计划和队列证据，并在不明确状态操作前停止。 | 准确排程、释放、保留、重置、取消、关闭和队列就绪标签。 | 计划负责人或负责人；如果操作可见性取决于角色，则由管理员共同确认。 | 每个状态/排程操作对应哪个可见控制、什么操作前状态允许使用，以及什么操作后状态证明 WO 已准备进入队列。 |

## 目标

建立或复查 WO，排程，在允许时释放，确认它出现在[队列系统](../10-production/queue-system.md)中，并打开 OEE 看板入口。

## 开始前

1. 在[零件](../20-engineering/parts.md)中确认零件存在。
2. 在 [BOM](../20-engineering/bom.md) 中确认结构存在。
3. 在[配方](../20-engineering/recipes.md)、[机台](../20-engineering/machines.md)和 [NC 程序](../20-engineering/nc-programs.md)中确认生产设置。
4. 当作业需要质量检验时，在[检验计划](../30-quality/inspection-planning.md)中确认检验准备情况。

## 操作流程

| 步骤 | 打开 | 操作 | 进入下一步前检查 |
|---|---|---|---|
| 1 | [工单](../10-production/production-orders.md) | 搜索已有 WO；如果现场流程要求新建，则使用可见的 `New Production Orders` 按钮。 | 行中显示预期零件、数量、日期和状态。 |
| 2 | [工单](../10-production/production-orders.md) | 释放前确认行状态和可见操作图标。 | 不要猜测图标含义。如果释放操作不明确，请请求带标签的工具栏截图。 |
| 3 | [计划](../10-production/planning.md) | 在所选日期、机台组或计划视图中找到 WO。 | WO 出现在预期计划区域。 |
| 4 | [计划](../10-production/planning.md) | 只有当屏幕显示明确的排程操作时，才排程或调整。 | 刷新后作业仍可见，并且仍与 WO 一致。 |
| 5 | [工单](../10-production/production-orders.md) | 只有在可见操作和角色允许时才释放。 | 状态支持进入[队列系统](../10-production/queue-system.md)。 |
| 6 | [队列系统](../10-production/queue-system.md) | 使用[计划](../10-production/planning.md)中相同的零件、工序、机台/工作区域或日期筛选。 | 有一条队列行与 WO 匹配，并映射到 `Ready` 工作术语，或映射到队列状态表中的其他已记录状态。 |
| 7 | [生产看板](../10-production/dashboards.md) | 从侧边栏打开 OEE。 | 在指标定义和看板截图确认前，只把它当作趋势信号。 |

## 计划员标准操作路径

把本表作为冷启动任务记录。它区分已确认操作和需截图确认的操作，让计划员可以在不猜测的情况下完成安全的部分。

| 步骤 | 页面 | 操作前状态 | 精确操作 / 控制 | 操作后状态 | 需要保留的证据 |
|---|---|---|---|---|---|
| 建立或确认 WO | [Production Orders](../10-production/production-orders.md) | 已有行可见，或现场流程要求新建 WO。 | 只有在建立指定 WO 时使用 `New Production Orders`；否则搜索并打开已有行。 | 行显示预期零件、数量、日期和可见状态。 | 带零件、数量、日期、状态和登录角色的 [Production Orders](../10-production/production-orders.md) 行截图。 |
| 排程或调整 | [Planning](../10-production/planning.md) | WO 在所选日期、机台组或计划视图中可见。 | 需截图确认：精确排程控制、拖放行为、保存/提交信号和允许的操作前状态仍需带标签截图。 | 刷新后 WO 仍可见，并匹配预期机台/工作区域。 | 排程前后 [Planning](../10-production/planning.md) 截图，显示 WO、日期、工作区域和任何保存/状态信号。 |
| 释放到执行 | [Production Orders](../10-production/production-orders.md) | 已检查 WO 设置、质量准备和角色访问。 | 需截图确认：精确释放/状态操作图标或按钮仍需带标签截图。 | WO 状态支持队列可见。精确队列就绪状态标签仍需对照[队列状态表](../10-production/queue-system.md#队列状态表)确认。 | 释放前 [Production Orders](../10-production/production-orders.md) 工具栏/状态截图，以及释放后行/状态截图。 |
| 确认 [Queue System](../10-production/queue-system.md) | [Queue System](../10-production/queue-system.md) | WO 预期已经释放并排程。 | 使用 [Planning](../10-production/planning.md) 中相同的零件、工序、机台/工作区域或日期筛选。 | 匹配队列行映射到 `Ready` 工作术语或其他已记录队列状态。 | 带筛选、WO/作业、零件/工序、状态和行操作的队列行截图。 |
| 打开 [OEE](../10-production/dashboards.md) | [Production Dashboards](../10-production/dashboards.md) | 队列确认已完成，或现场流程要求查看高层级趋势。 | 从侧边栏打开 `Production / OEE`。 | OEE 页面已打开，但本手册版本只把看板作为查看项。 | OEE URL/页面截图，并记录指标定义仍由负责人确认，而非手册确认。 |

## 计划员操作和状态矩阵

变更 WO 前请先使用本矩阵。本表刻意保守：只有当前截图中可见的 `New Production Orders` 按钮被写成已确认操作。其他释放、排程、重置、保留、取消或关闭控制，都需要带标签截图后才能写成明确点击步骤。

| 计划意图 | 页面 | 可见操作状态 | 操作前 | 操作后 |
|---|---|---|---|---|
| 新建指定 WO | [工单](../10-production/production-orders.md) | 当前截图中可见 `New Production Orders`。 | 已检查[零件](../20-engineering/parts.md)、[BOM](../20-engineering/bom.md)、[配方](../20-engineering/recipes.md)、[机台](../20-engineering/machines.md)、[NC 程序](../20-engineering/nc-programs.md)和检验准备情况。 | 新行显示预期零件、数量、日期和状态。 |
| 排程或调整作业 | [Planning](../10-production/planning.md) | 准确排程操作仍需要带标签截图。 | WO 在所选日期、机台组或计划视图中可见。 | 刷新后 WO 仍可见，并且仍匹配预期机台/工作区域。 |
| 释放到执行 | [工单](../10-production/production-orders.md) | 释放/状态图标仍需要带标签截图。 | 已检查 WO 状态、设置准备、质量准备和角色访问。 | 状态支持队列可见，然后 [Queue System](../10-production/queue-system.md) 显示匹配行。 |
| 保留、取消、重置或关闭 | [工单](../10-production/production-orders.md) | 准确状态操作仍需要带标签截图和负责人批准。 | 原因明确，主管或计划负责人同意。 | 状态变更可见，交接记录说明变更原因。 |

## 操作前后记录

| 字段 | 操作前 | 操作后 |
|---|---|---|
| WO / 行 ID |  |  |
| 零件 / 工序 |  |  |
| 可见状态 |  |  |
| 计划日期 / 机台或工作区域 |  |  |
| 队列行是否可见 |  |  |

## 通用示例：已释放工单

本示例只说明应保留什么类型的证据。请用部署环境中真实可见的值替换占位内容。

| 字段 | 应保留的示例证据 |
|---|---|
| WO 身份 | WO/作业号、零件、如可见则包含修订、数量、到期日和登录计划员角色。 |
| 设置准备 | 释放前已检查零件、BOM、配方、机台/工作区域、NC 程序和必要检验准备。 |
| 释放证据 | 释放前的可见状态/操作区域、负责人确认的释放操作，以及刷新后的可见状态。 |
| 队列证据 | 匹配的[队列系统](../10-production/queue-system.md)行，包含筛选、WO/作业、零件/工序、机台/工作区域和队列状态。 |
| 停止/联系条件 | 如果释放/状态操作没有标签、行消失但没有队列证据，或队列就绪状态不明确，请联系计划负责人或生产主管处理。 |

## 停止并上报

| 如果看到... | 联系对象 | 提供信息 |
|---|---|---|
| 缺少必要零件、BOM、配方、机台或 NC 程序 | 生产工程师 | 零件号、WO 和缺失设置页面 |
| 释放操作不明确或不可用 | 管理员或计划负责人 | 工具栏截图和当前 WO 状态 |
| WO 出现在 [Planning](../10-production/planning.md) 但不在 [Queue System](../10-production/queue-system.md) 中 | 生产主管 | WO、零件、机台/工作区域、计划日期和队列筛选 |
| [OEE](../10-production/dashboards.md) 页面为空或不明确 | 负责人 | 看板 URL、筛选期间和截图请求 |

## 截图请求

在安全命名具体图标点击前，需要释放、排程、保留、取消、重置、关闭和其他状态操作的带标签截图。请在[证据与待决事项登记](../00-open-decisions.md)中跟踪这些截图。
