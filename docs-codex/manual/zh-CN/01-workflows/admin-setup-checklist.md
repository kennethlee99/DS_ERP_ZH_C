# 管理员设置检查清单

> [English](../../en/01-workflows/admin-setup-checklist.md) | 中文

在计划员、操作员或主管开始现场流程前，请使用本检查清单。本页区分手册可以确认的内容，以及仍需要负责人澄清的内容。

动作标签、用户-工人设置、权限标签、语言设置、看板定义和报工页面证据等未结事项，请查看[证据与待决事项登记](../00-open-decisions.md)。

## 设置顺序

| 顺序  | 区域    | 检查                           | 页面                                                                                                                                   |
| --- | ----- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | 用户访问  | 指定用户可以登录，并具有预期角色。            | [用户和角色](../40-administration/users-and-roles.md)                                                                                     |
| 2   | 工人身份  | 确认现场使用工人记录、用户账号，还是两者都用。      | `needs-decision`                                                                                                                       |
| 3   | 主数据   | 零件存在，并且身份信息符合预期。             | [零件](../20-engineering/parts.md)                                                                                                     |
| 4   | 结构    | 计划父件存在 BOM。                  | [BOM](../20-engineering/bom.md)                                                                                                      |
| 5   | 生产路线  | 配方、机台和 NC 程序可见且准备好。          | [配方](../20-engineering/recipes.md)、[机台](../20-engineering/machines.md)、[NC 程序](../20-engineering/nc-programs.md)                     |
| 6   | 计划流程  | WO 可以复查、排程、释放，并能在队列中找到。      | [计划员流程](planner-cold-start.md)                                                                                                       |
| 7   | 操作员流程 | 队列、开始作业、报工、检验和完成信号已经明确。      | [操作员流程](operator-run-next-job.md)                                                                                                    |
| 8   | 质量流程  | 在需要时，检验设置、记录、NCR 和校准已经准备好。   | [检验计划](../30-quality/inspection-planning.md)、[检验记录](../30-quality/inspection-records.md)、[NCR](../30-quality/ncr-non-conformance.md) |
| 9   | 语言标签  | 可见语言和翻译页面需负责人确认后，才能写成设置步骤。 | `needs-decision`                                                                                                                       |

## 安全快速开始

当您只需要让指定用户可以确认流程，而不是重新设计访问权限时，使用本表。

| 步骤 | 操作 | 遇到以下情况就停止 |
|---|---|---|
| 1 | 在[用户和角色](../40-administration/users-and-roles.md)中确认登录账号存在且可用。 | 用户缺失或不可用。 |
| 2 | 确认用户拥有现场场景预期角色。 | 角色缺失，或侧边栏与场景不匹配。 |
| 3 | 确认操作员场景是否需要独立于登录账号的工人身份。 | 应用显示不明确的工人或工作区域字段。 |
| 4 | 登录后确认预期菜单项和可见动作出现。 | 菜单或动作缺失。 |
| 5 | 计划流程前确认[零件](../20-engineering/parts.md)、[BOM](../20-engineering/bom.md)、[配方](../20-engineering/recipes.md)、[机台](../20-engineering/machines.md)、[NC 程序](../20-engineering/nc-programs.md)和检验设置可见。 | 指定物料的任何前提页面缺失或为空。 |

## 流程准备矩阵

在计划员、操作员或主管开始冷启动流程前填写本矩阵。请使用应用中实际可见的标签。未确认的值保留为 `needs-decision`，并按证据列要求补充截图。

| 流程角色 | 登录用户 | 工人身份 | 角色名称 | 必需侧边栏页面 | 必需可见动作 | 权限标签原文 | 语言预期 | 必需主数据 | 保留证据 |
|---|---|---|---|---|---|---|---|---|---|
| 计划员 | `needs-decision` | 通常不需要，除非计划员也执行车间作业。 | `needs-decision` | [Production Orders](../10-production/production-orders.md)、[Planning](../10-production/planning.md)、[Queue System](../10-production/queue-system.md)、[OEE](../10-production/dashboards.md) | `New Production Orders`、排程动作、释放/状态动作、队列筛选、打开 OEE | `needs-decision`，直到 [Roles](../40-administration/users-and-roles.md) 页面标签已截图 | 保留屏幕上显示的实时 UI 标签；中文手册在必要时把实时标签放在括号中。 | [零件](../20-engineering/parts.md)、[BOM](../20-engineering/bom.md)、[配方](../20-engineering/recipes.md)、[机台](../20-engineering/machines.md)、[NC 程序](../20-engineering/nc-programs.md)、需要时的检验设置 | 用户/角色截图、[Production Orders](../10-production/production-orders.md) 工具栏截图、[Planning](../10-production/planning.md) 排程动作截图 |
| 操作员 | `needs-decision` | `needs-decision`：确认操作员使用登录用户、关联工人，还是独立工人记录。 | `needs-decision` | [Queue System](../10-production/queue-system.md)、指定生产报工页面、[SMARTQC Inspection](../35-smartqc/inspection-data-entry.md)、[Inspection Records](../30-quality/inspection-records.md) | 队列筛选、行打开/开始动作、保存/报工动作、检验保存、完成/交接状态 | `needs-decision`，直到角色标签和动作可见性已截图 | 使用 [Queue System](../10-production/queue-system.md)、报工和检验页面上显示的实时标签。 | 已释放 WO、指定机台/工作区域、需要时的检验计划/检验表 | 用户-工人证据、队列行操作截图、报工页面截图 |
| 主管 | `needs-decision` | 通常不需要，除非主管也记录作业。 | `needs-decision` | [Queue System](../10-production/queue-system.md)、[Production Orders](../10-production/production-orders.md)、[Planning](../10-production/planning.md)、[Dashboards](../10-production/dashboards.md)、[Inspection Records](../30-quality/inspection-records.md)、[NCR](../30-quality/ncr-non-conformance.md)、访问受阻时的 [Users and Roles](../40-administration/users-and-roles.md) | 队列筛选、阻塞/延误状态复查、[Production Orders](../10-production/production-orders.md) 状态查看、打开看板、质量记录查询 | `needs-decision`，直到角色标签和动作可见性已截图 | 对状态、看板和升级证据使用实时标签。 | 已释放/已排程 WO、队列行、质量阻塞时的检验/NCR 数据 | 主管队列截图、延误作业证据截图、质量停止截图 |

## 用户和工人

当前手册无法证明 Users 和 Workers 是同一记录、关联记录还是分开设置。操作员流程开始前必须把这点作为实施决定。请记录用户登录账号、屏幕上显示的工人身份、机台/工作区域和角色。

## 角色和权限

使用[用户和角色](../40-administration/users-and-roles.md)确认可见访问。除非管理员或负责人确认含义，否则不要自行解释看起来像技术标签的权限文字。如果页面或操作缺失，请记录用户、角色、预期页面/操作和当前截图。

| 术语 | 实际含义 |
|---|---|
| 用户 | 用于登录网页应用的账号。 |
| 工人 | 如果现场流程使用，则表示车间身份或分派记录；在确认前，用户与工人的关系仍是待决事项。 |
| 角色 | 分配给用户的可见访问分组。 |
| 权限标签 | Roles 页面上可见的标签，可能解释为什么某个菜单或动作出现。除非负责人确认，不要把它翻译成技术规则。 |
| 可见动作 | 登录用户能看到的按钮、图标、行操作、菜单项或弹窗动作。 |

## 翻译

手册本身是双语的，但可见语言和翻译管理页面仍是待决事项。在负责人确认预期语言流程前，不要声称已有完整翻译设置流程。

## 主数据准备

| 如果缺少 | 受影响流程 | 升级给 |
|---|---|---|
| [零件](../20-engineering/parts.md) | 计划员无法可靠建立或确认 WO。 | 生产工程师或计划负责人 |
| [BOM](../20-engineering/bom.md) | 计划员无法确认生产结构。 | 生产工程师 |
| [配方](../20-engineering/recipes.md) | 计划员可能生成或释放错误作业。 | 生产工程师 |
| [机台](../20-engineering/machines.md) | 计划和队列分配可能错误。 | 生产工程师 |
| [NC 程序](../20-engineering/nc-programs.md) | 操作员可能没有预期执行程序。 | 生产工程师 |
| [检验计划](../30-quality/inspection-planning.md)或[检验表](../35-smartqc/check-sheets.md) | 作业可能尚未具备质量准备。 | 质量工程师 |

## 截图请求

在本页成为完整实施指南前，还需要用户与工人关系、带负责人解释的角色权限标签、语言/翻译设置，以及显示预期侧边栏的已确认用户登录截图。这些事项记录在[证据与待决事项登记](../00-open-decisions.md)中。
