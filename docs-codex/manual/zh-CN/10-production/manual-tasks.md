# 手动任务

> [English](../../en/10-production/manual-tasks.md) | 中文

Path: Master / Production / Worker / Manual Tasks  
URL: `<APP_BASE_URL>/Production/ProductionManualTasks`

## 页面用途

Manual Tasks 用于复查生产执行过程中可能出现的工人任务定义。本页是任务定义的设置/参考页面；仅凭本页不能证明操作员已经被分派了实时手动工作。

## 你会看到什么

- 手动任务列表，包含名称、状态和相关生产信息。
- 用于快速找到任务的搜索和筛选条件。
- 在账号允许时显示的新建、编辑、删除、导出、刷新和列设置控制。
- 显示所选任务值的详细表单。

## 你会做什么

1. 搜索演示中使用的任务。
2. 打开行并确认屏幕上的任务名称和状态。
3. 在期望它出现在操作员流程前，确认任务处于可用状态。
4. 回到 Queue System、Production Orders 或指定报工页面，确认该任务是否作为实时工作出现在正确场景中。

## 要检查什么

- 任务标签对操作员足够清楚。
- 任务处于可用状态，并适用于预期场景。
- 任务没有与另一个可见选择重复。
- 演示负责人已经确认已分派的手动工作实际在哪里执行。

## 常见问题

| 问题 | 含义 |
|---|---|
| 任务缺失 | 筛选可能隐藏了它，或任务未处于可用状态。 |
| 任务名称不清楚 | 操作员使用前可能需要主管说明。 |
| 任务出现在错误流程中 | 演示前复查生产设置。 |
| 此处有任务但实时工作中没有 | 本页可能只定义任务；请检查 Queue System 或指定报工页面。 |

## 相关页面

- [操作员手册](../03-by-role/operator.md)
- [生产主管手册](../03-by-role/production-supervisor.md)
- [队列系统](queue-system.md)

## 截图

![DS_ERP 手动任务界面](../../assets/screenshots/production-manual-tasks.png)
