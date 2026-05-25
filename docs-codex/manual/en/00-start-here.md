# Start Here: Demo Operating Guide

> English | [中文](../zh-CN/00-start-here.md)

Use this page first if you are new to DS_ERP. It explains the normal demo reading order and how the main roles connect from login through planning, production execution, engineering readiness, quality checks, and access review.

## What DS_ERP Is For

DS_ERP is used to prepare, release, execute, and review factory work. In the demo, you will usually follow one production job across these areas:

1. Engineering confirms the part, BOM, recipe, machine, and NC program are ready.
2. Planning creates or reviews the work order, schedules it, and checks queue readiness.
3. Operators and supervisors use the queue to execute and monitor the work.
4. Quality and SMARTQC confirm inspection setup, inspection entry, NCR follow-up, and calibration readiness.
5. Administration confirms users and roles when access affects what a reviewer can see.

## What To Read First

| If you are... | Start with | Then read |
|---|---|---|
| Reviewing the whole demo | This page | Planner, Production Engineer, Operator, Production Supervisor, Quality Engineer |
| Checking how work reaches the floor | [Planner Walkthrough](01-workflows/planner-cold-start.md) | [Production Orders](10-production/production-orders.md), [Planning](10-production/planning.md), [Queue System](10-production/queue-system.md) |
| Checking production setup readiness | [Production Engineer Manual](03-by-role/production-engineer.md) | [Parts](20-engineering/parts.md), [BOM](20-engineering/bom.md), [Recipes](20-engineering/recipes.md), [Machines](20-engineering/machines.md), [NC Programs](20-engineering/nc-programs.md) |
| Checking shop-floor execution | [Operator Walkthrough](01-workflows/operator-run-next-job.md) | [Queue System](10-production/queue-system.md), [Manual Tasks](10-production/manual-tasks.md), [SMARTQC Inspection](35-smartqc/inspection-data-entry.md) |
| Checking shift control | [Supervisor Triage](01-workflows/supervisor-triage.md) | [Production Orders](10-production/production-orders.md), [Queue System](10-production/queue-system.md), [Inspection Records](30-quality/inspection-records.md) |
| Checking inspection and quality follow-up | [Quality Engineer Manual](03-by-role/quality-engineer.md) | [Inspection Planning](30-quality/inspection-planning.md), [Inspection Records](30-quality/inspection-records.md), [NCR](30-quality/ncr-non-conformance.md), [SMARTQC Check Sheets](35-smartqc/check-sheets.md) |
| Checking access | [Admin Setup Checklist](01-workflows/admin-setup-checklist.md) | [Users and Roles](40-administration/users-and-roles.md), then return to the role page that cannot see the expected menu or action |
| Checking status words | [Operating Glossary](00-glossary.md) | Return to the workflow page that uses the term |

## Login To Daily Workflow

1. Sign in to DS_ERP at the address used for your review environment.
2. Start from the role that matches your review question.
3. Use the role page to understand the daily flow.
4. Open the linked screen chapters when you need page-level detail.
5. After each page action, use the "What To Check" section before moving to the next role.

## URL Convention

Screen chapters use `<APP_BASE_URL>` for the deployed DS_ERP web address. Replace it with the address used at your site, such as the factory server URL. Do not assume a local developer address; ask the demo owner for the temporary review address when reviewing outside the factory deployment.

## UI Label Convention

This manual keeps live web-app labels in English when the screen shows them that way. A translated page may introduce the Chinese meaning first and keep the live label in parentheses, such as 队列系统 (Queue System). When you search the app, use the live label shown in the sidebar, toolbar, grid, or dialog.

## Normal Demo Flow

```
Engineering readiness
        |
        v
Planner creates or reviews the work order
        |
        v
Planner schedules and releases work
        |
        v
Operator or supervisor finds work in Queue System
        |
        v
Operator records work, tasks, and inspections
        |
        v
Quality reviews inspection results, NCR, and calibration
        |
        v
Supervisor and planner review status before handover
```

## How Roles Connect

- Production engineers make sure the job can be planned.
- Planners make sure the job can be scheduled and released.
- Operators use the queue and visible work steps to execute the job.
- Supervisors watch blocked work and coordinate handover.
- Quality engineers confirm inspection readiness and review quality follow-up.
- Administrators handle access when the expected menu or action is not visible.

## What To Do When Something Does Not Match

| What you see | What to do next |
|---|---|
| A page is missing from the sidebar | Check the user's role in [Users and Roles](40-administration/users-and-roles.md). |
| A work order is missing | Recheck [Production Orders](10-production/production-orders.md), then [Planning](10-production/planning.md), then [Queue System](10-production/queue-system.md). |
| A job cannot be released | Check [Parts](20-engineering/parts.md), [BOM](20-engineering/bom.md), [Recipes](20-engineering/recipes.md), [Machines](20-engineering/machines.md), [NC Programs](20-engineering/nc-programs.md), and Quality readiness. |
| A quality step is unclear | Start with [Inspection Planning](30-quality/inspection-planning.md), then [SMARTQC Inspection](35-smartqc/inspection-data-entry.md). |
| A dashboard metric is unclear | Treat it as a needs-decision item until the business owner confirms the metric definition. |

## Demo Scope Notes

Quality/QC and Inspection Planning remain included, but their final demo scope still needs demo-owner confirmation. Other excluded or support-only areas are tracked in the scope notes, not in the operating guide.
