# NC 程序

> [English](../../en/20-engineering/nc-programs.md) | 中文

Path: NC Programs / Definition  
URL: `<APP_BASE_URL>/Ncprograms/Ncprograms`

## 页面用途

NC Programs 用于在作业到达现场前复查生产程序记录。生产工程师主要用这个页面确认预期程序是否可见且已经准备好。

## 页面显示内容

- 程序列表，包含识别字段、名称、状态和相关生产信息。
- 用于查找现场作业所需程序的搜索和筛选控制。
- 在可用时显示的新建、编辑、刷新、导出和打开记录操作。
- 复查所选程序信息的详细表单。

## 常用操作

1. 搜索与现场零件或工序相关的程序。
2. 打开记录并确认可见名称、状态和上下文。
3. 释放前把程序与配方和机台设置进行对照。
4. 缺失或不明确的程序记录联系生产工程师处理。

## 要检查什么

- 程序记录对预期零件或工序可见。
- 状态支持生产使用。
- 所选机台或配方上下文与计划作业一致。

## 常见问题

| 问题 | 含义 |
|---|---|
| 程序缺失 | 作业可能尚未准备好执行。 |
| 程序名称不明确 | 使用前操作员可能需要工程确认。 |
| 程序与机台不匹配 | 释放前工程应复查设置。 |

## 相关页面

- [生产工程师手册](../03-by-role/production-engineer.md)
- [配方](recipes.md)
- [机台](machines.md)
- [工单](../10-production/production-orders.md)

## 截图

![DS_ERP NC 程序界面](../../assets/screenshots/role-production-engineer-nc-programs.png)
