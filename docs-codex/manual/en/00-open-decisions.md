# Evidence and Decisions Register

> English | [中文](../zh-CN/00-open-decisions.md)

Use this page before running a customer walkthrough or first-user training. It records the items that still need visible evidence or owner confirmation before the manual can give exact click-by-click instructions.

## How To Use This Register

1. Start with [Start Here](00-start-here.md) and the role walkthrough.
2. When a page says a control, status, dashboard, permission, or route is not confirmed, check this register.
3. Capture the named evidence in the approved DS_ERP environment.
4. Update the matching role and screen page only after the label, path, and result are visible.

## Decision Status

| Status | Meaning | Manual behavior |
|---|---|---|
| Open | The manual cannot yet name the exact click, field, metric, or setup relationship safely. | Keep the instruction conservative and route the user to the evidence request. |
| Evidence needed | A screenshot or owner note is required before the step can become exact. | Do not replace it with a guessed label. |
| Confirmed | The visible label and result have been captured. | Update the role walkthrough and the screen chapter together in English and Chinese. |

## High-Confidence Open Items

| Item | Affects | Current safe instruction | Evidence needed | Owner to confirm |
|---|---|---|---|---|
| Production Orders status actions | [Planner Walkthrough](01-workflows/planner-cold-start.md), [Production Orders](10-production/production-orders.md) | Use only clearly visible actions. Do not guess release, hold, cancel, reset, close, or schedule icons. | Screenshot of toolbar/action area before and after status change, with WO row and signed-in role visible. | Planner lead or owner |
| Planning schedule action | [Planner Walkthrough](01-workflows/planner-cold-start.md), [Planning](10-production/planning.md) | Confirm the WO is visible in Planning; adjust only when the scheduling action and save/result signal are clear. | Screenshot before and after scheduling, including date, machine/work area, WO, action, and result. | Planner lead |
| Queue dispatch rule | [Operator Walkthrough](01-workflows/operator-run-next-job.md), [Queue System](10-production/queue-system.md), [Supervisor Triage](01-workflows/supervisor-triage.md) | Choose a job only by confirmed dispatch rule, assigned work area, or supervisor instruction. Do not use row order alone. | Queue screenshot with filters, candidate rows, WO/job, part/process, visible status or priority indicators, and owner note stating the row-selection rule when multiple rows are visible. | Production supervisor |
| Queue start action | [Operator Walkthrough](01-workflows/operator-run-next-job.md), [Queue System](10-production/queue-system.md), [Supervisor Triage](01-workflows/supervisor-triage.md) | After the correct row is selected, stop before opening or starting work unless the visible row action and after-action result are confirmed. | Queue screenshot before and after the row action, visible open/start action label, same WO/job identity, signed-in role, and the status, page, or confirmation that proves work opened or started. | Production supervisor |
| Production reporting screen | [Operator Walkthrough](01-workflows/operator-run-next-job.md), [Manual Tasks](10-production/manual-tasks.md) | Record output, downtime, and notes only in the reporting screen assigned for the deployment. | Exact sidebar path or URL, required fields, save action, save confirmation, and same WO/job identity. | Production supervisor or planner lead |
| Completion and handover signal | [Operator Walkthrough](01-workflows/operator-run-next-job.md), [Queue System](10-production/queue-system.md), [Production Orders](10-production/production-orders.md) | Treat disappearance from a queue filter as not enough proof. Confirm the same WO/job and process after refresh. | Queue/WO status after completion or handover, output evidence, inspection result where required, and unfinished-work note if not complete. | Production supervisor |
| Dashboard metric meaning | [Production Dashboards](10-production/dashboards.md), [Supervisor Triage](01-workflows/supervisor-triage.md), [Planner Walkthrough](01-workflows/planner-cold-start.md) | Use OEE, KPI Production, and Main Layout as view-only trend pages in this manual version. Do not use them as the sole reason for a production decision. | Real dashboard screenshot, filter meanings, metric definitions, and approved interpretation. | Business owner or owner |
| User and worker relationship | [Admin Setup Checklist](01-workflows/admin-setup-checklist.md), [Users and Roles](40-administration/users-and-roles.md), [Operator Walkthrough](01-workflows/operator-run-next-job.md) | Confirm whether the operator uses the sign-in user, a linked worker, or a separate worker record before assigning work. | User page screenshot, worker/setup page if separate, role assignment, visible worker/work-area field, and user identity. | Administrator or implementation owner |
| Permission labels and visible actions | [Admin Setup Checklist](01-workflows/admin-setup-checklist.md), [Users and Roles](40-administration/users-and-roles.md) | Use the visible role only to explain what the user can see. Do not translate technical permission labels into rules without owner confirmation. | Role page screenshot with permission labels and a confirmed mapping to sidebar pages/actions. | Administrator |
| Language and translation setup | [Admin Setup Checklist](01-workflows/admin-setup-checklist.md), [Start Here](00-start-here.md) | Lower priority than production-execution decisions. The manual is bilingual, but the app language setup process remains unconfirmed and does not block operator or planner first-day production execution when live UI labels are used as shown. | Confirmed sidebar path for language/translation setup, visible fields, save action, and expected language behavior. | Implementation owner |
| Quality and Inspection Planning workflow scope | [Quality Engineer Manual](03-by-role/quality-engineer.md), [Inspection Planning](30-quality/inspection-planning.md), [Inspection Records](30-quality/inspection-records.md) | Keep Quality/QC and Inspection Planning visible, but confirm scope before treating them as required customer workflow steps. | Workflow scope decision, required inspection example, saved record, and NCR/calibration handling where relevant. | Quality owner or owner |

## Evidence Capture Standard

Each screenshot or owner note should include:

- Signed-in role or user when visible.
- Sidebar path or page title.
- Toolbar, row action, field, or filter being confirmed.
- Before state and after state for actions that change status.
- WO/job, part, process, machine/work area, date, or inspection identity when relevant.
- Save, confirmation, status, timestamp, or refreshed row that proves the result.

## After Evidence Is Confirmed

Update both language versions in the same pass:

- The workflow page that tells the user what to do.
- The screen chapter that explains the page.
- The screenshot request or this register, changing the item from open to confirmed or removing it when no longer needed.
