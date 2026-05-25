# 机台

> [English](../../en/20-engineering/machines.md) | 中文

Path: Master / Production / Machines / Definition  
URL: `<APP_BASE_URL>/Machines/Machines`

## 页面用途

Machines 用于复查计划和生产执行依赖的机台记录。这个页面帮助确认应用中是否存在预期工作区域。

## 页面显示内容

- 可搜索的机台列表，包含名称、识别信息、组别、产线信息和状态字段。
- 在登录账号允许时用于维护记录的工具栏操作。
- 按机台、产线、组别或状态缩小范围的筛选条件。
- 复查所选机台信息的详细表单。

## 常用操作

1. 搜索现场流程使用的机台或机台组。
2. 确认它在生产复查中可见且可用。
3. 检查机台信息是否与计划和队列视图一致。
4. 排程前升级处理缺失或异常记录。

## 要检查什么

- 机台名称与现场场景一致。
- 机台属于预期产线或组别。
- 状态和可见设置支持排程与执行。

## 常见问题

| 问题 | 含义 |
|---|---|
| 找不到机台 | 设置复查完成前，计划不能依赖该工作区域。 |
| 机台出现在错误组别 | 排程可能把作业放到错误区域。 |
| 机台可见但不可用 | 释放前检查状态和相关生产设置。 |

## 相关页面

- [生产工程师手册](../03-by-role/production-engineer.md)
- [配方](recipes.md)
- [计划](../10-production/planning.md)
- [队列系统](../10-production/queue-system.md)

## 截图

![DS_ERP 机台界面](../../assets/screenshots/role-production-engineer-machines.png)
