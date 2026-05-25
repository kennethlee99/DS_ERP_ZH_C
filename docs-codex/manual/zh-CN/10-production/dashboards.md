# 生产看板

> [English](../../en/10-production/dashboards.md) | 中文

Path: Production / OEE, KPI Production, and Main Layout  
URL: `<APP_BASE_URL>/Production/OEE`, `<APP_BASE_URL>/Production/KpiProduction`, `<APP_BASE_URL>/Production/Mainlayout`

## 页面用途

生产看板入口用于打开较高层级的生产复查页面。在看板截图和指标定义确认前，只把 OEE、KPI Production 和 Main Layout 当作趋势信号，不要把它作为生产决定的唯一依据。

在业务负责人确认截图、筛选和指标定义前，看板解释仍记录在[证据与待决事项登记](../00-open-decisions.md)中。

## 本手册版本的看板范围

在本手册版本中，看板页面只用于**打开观察**。计划员或主管可以打开 OEE、KPI Production 或 Main Layout，确认入口存在并记录可见趋势信号，但手册尚未把指标定义到足以支持释放、延误、质量、人员配置或交接决策的程度。

看板成为可决策依据前，演示负责人必须确认：

| 看板入口 | 当前手册状态 | 用于决策前需要补充 |
|---|---|---|
| OEE | 只用于打开观察 | 真实 OEE 页面截图、指标定义、筛选含义，以及如何与 WO/队列证据对照。 |
| KPI Production | 只用于打开观察 | 真实 KPI Production 页面截图、指标定义、筛选含义，以及负责人批准的解释方式。 |
| Main Layout | 只用于打开观察 | 真实 Main Layout 页面截图、可见面板定义，以及负责人批准的班次复查用途。 |

## 你会看到什么

- OEE、KPI Production 和 Main Layout 等侧边栏入口。
- 每个入口打开的独立复查页面。
- 页面打开后可见的筛选、日期控制、卡片、图表或状态面板。
- 业务负责人确认指标定义后，主管可用于跟进的生产信号。

## 你会做什么

1. 从侧边栏打开 OEE、KPI Production 或 Main Layout。
2. 确认页面标题或可见内容与复查问题相匹配。
3. 只有在屏幕上可见时，才设置日期、班次、机台或产线筛选。
4. 做决定前，把任何可见趋势信号与工单、计划或队列系统进行对照。
5. 指标含义不清时，记录为业务负责人后续确认事项。

## 要检查什么

- 所选入口就是演示计划使用的入口。
- 筛选期间与正在讨论的班次或作业一致。
- 任何可见看板信号与底层工单视图一致。
- 不清楚的指标名称已经记录待确认。

## 常见问题

| 问题 | 含义 |
|---|---|
| 看板页面为空 | 所选筛选期间可能没有数据，或该页面需要演示负责人复查。 |
| 指标含义不清楚 | 只把它当作趋势信号，并在写入复查记录前确认指标定义。 |
| 看板与工单不一致 | 重新检查筛选条件和最新工单状态。 |

## 相关页面

- [计划员手册](../03-by-role/planner.md)
- [生产主管手册](../03-by-role/production-supervisor.md)
- [工单](production-orders.md)
- [计划](planning.md)

## 截图

截图请求：

| 页面名称              | 侧边栏路径                       | URL                                              | 建议文件名                                  | 原因                    |
| ----------------- | --------------------------- | ------------------------------------------------ | -------------------------------------- | --------------------- |
| [OEE 看板](dashboards.md)            | Production / OEE            | `<APP_BASE_URL>/Production/OEE`           | `production-oee-dashboard.png`         | 当前保留图片显示的是工单页面，不是该看板。 |
| [KPI Production 看板](dashboards.md) | Production / KPI Production | `<APP_BASE_URL>/Production/KpiProduction` | `production-kpi-dashboard.png`         | 当前保留图片显示的是工单页面，不是该看板。 |
| [Main Layout 看板](dashboards.md)    | Production / Main Layout    | `<APP_BASE_URL>/Production/Mainlayout`    | `production-main-layout-dashboard.png` | 当前保留图片显示的是工单页面，不是该看板。 |
