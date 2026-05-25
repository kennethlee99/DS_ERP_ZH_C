# Admin Setup Checklist

> English | [中文](../../zh-CN/01-workflows/admin-setup-checklist.md)

Use this checklist before a planner, operator, or supervisor workflow. It separates what the manual can confirm from what still needs owner clarification.

For open action labels, user-worker setup, permission labels, language setup, dashboard definitions, and reporting-screen evidence, use the [Evidence and Decisions Register](../00-open-decisions.md).

> **Needs decision**
>
> | Safe now | Not confirmed | Owner | Exact answer needed |
> |---|---|---|---|
> | Review visible users, roles, sidebars, menus, and screenshots without changing access design. | User-worker relationship, permission labels, role names, and language setup. | Administrator or implementation owner. | Whether operators use sign-in users, linked worker records, or separate worker records; which role names and permission labels map to each required page/action; and how language setup is controlled. |

## Setup Order

| Order | Area | Check | Page |
|---|---|---|---|
| 1 | User access | Users can sign in and have the intended role. | [Users and Roles](../40-administration/users-and-roles.md) |
| 2 | Worker identity | Confirm whether the workflow uses a worker record, a user account, or both. | `needs-decision` |
| 3 | Master data | Part exists and has the expected identity. | [Parts](../20-engineering/parts.md) |
| 4 | Structure | BOM exists for the planned parent item. | [BOM](../20-engineering/bom.md) |
| 5 | Production route | Recipe, machine, and NC program are visible and ready. | [Recipes](../20-engineering/recipes.md), [Machines](../20-engineering/machines.md), [NC Programs](../20-engineering/nc-programs.md) |
| 6 | Planning flow | WO can be reviewed, scheduled, released, and found in the queue. | [Planner Walkthrough](planner-cold-start.md) |
| 7 | Operator flow | Queue, work start, reporting, inspection, and completion signals are understood. | [Operator Walkthrough](operator-run-next-job.md) |
| 8 | Quality flow | Inspection setup, records, NCR, and calibration are ready where needed. | [Inspection Planning](../30-quality/inspection-planning.md), [Inspection Records](../30-quality/inspection-records.md), [NCR](../30-quality/ncr-non-conformance.md) |
| 9 | Language labels | The visible language and translation pages need owner confirmation before they are documented as setup steps. | `needs-decision` |

## Safe Quick Start

Use this when you only need a user ready for review and do not intend to redesign access.

1. **Start condition:** You have the training user or reviewer account to verify.
   **Screen to open:** [Users and Roles](../40-administration/users-and-roles.md).
   **Step:** Confirm the sign-in account exists and is active.
   **Expected result:** The account can be identified and is usable for the review.
   **Stop/contact condition:** Stop if the user is missing, inactive, or the login identity is unclear; contact the administrator.
2. **Start condition:** The account exists.
   **Screen to open:** [Users and Roles](../40-administration/users-and-roles.md).
   **Step:** Confirm the assigned role matches the intended planner, operator, supervisor, or admin scenario.
   **Expected result:** The assigned role is visible and recorded with the user.
   **Stop/contact condition:** Stop if the role is missing, the role name is `needs-decision`, or permission labels are not owner-confirmed.
3. **Start condition:** The scenario includes operator execution or machine/work-area assignment.
   **Screen to open:** [Users and Roles](../40-administration/users-and-roles.md), then any visible worker or work-area field if the app shows one.
   **Step:** Record whether the workflow uses the sign-in user, a linked worker, or a separate worker record.
   **Expected result:** The identity used for assignment is written down for the first-day scenario.
   **Stop/contact condition:** Stop if user-worker relationship is not confirmed; contact the administrator or implementation owner.
4. **Start condition:** The role and identity are recorded.
   **Screen to open:** Log in as the target user, then open the required sidebar pages for the role.
   **Step:** Confirm required menus and visible actions appear without changing role setup.
   **Expected result:** Required pages and actions for the role are visible, or missing items are captured as evidence.
   **Stop/contact condition:** Stop if a menu/action is hidden, unlabeled, or inconsistent with the expected scenario.
5. **Start condition:** Access is visible enough for the role to start the workflow.
   **Screen to open:** [Parts](../20-engineering/parts.md), [BOM](../20-engineering/bom.md), [Recipes](../20-engineering/recipes.md), [Machines](../20-engineering/machines.md), [NC Programs](../20-engineering/nc-programs.md), and the relevant workflow page.
   **Step:** Confirm the first-day scenario has the required master data and workflow pages visible.
   **Expected result:** The planner, operator, or supervisor can proceed to the role walkthrough using confirmed visible pages.
   **Stop/contact condition:** Stop if any prerequisite page is missing or empty for the site item; contact the owner named in Master Data Readiness.

## Workflow Readiness Matrix

Fill this matrix before the planner, operator, or supervisor starts the cold-start workflow. Use the exact labels visible in the app. If a value is not confirmed, leave it as `needs-decision` and capture the screenshot named in the evidence column.

| Workflow role | Sign-in user | Worker identity | Role name | Required sidebar pages | Required visible actions | Permission labels as displayed | Language expectation | Required master data | Evidence to keep |
|---|---|---|---|---|---|---|---|---|---|
| Planner | `needs-decision` | Not normally needed unless the planner also executes work. | `needs-decision` | [Production Orders](../10-production/production-orders.md), [Planning](../10-production/planning.md), [Queue System](../10-production/queue-system.md), [OEE](../10-production/dashboards.md) | `New Production Orders`; schedule action; release/status action; queue filter; OEE open | `needs-decision` until [Users and Roles](../40-administration/users-and-roles.md) page labels are captured | Use live UI labels exactly as displayed; translated manual pages keep live labels in parentheses. | [Part](../20-engineering/parts.md), [BOM](../20-engineering/bom.md), [recipe](../20-engineering/recipes.md), [machine](../20-engineering/machines.md), [NC program](../20-engineering/nc-programs.md), inspection setup when required | User/role screenshot, [Production Orders](../10-production/production-orders.md) toolbar screenshot, [Planning](../10-production/planning.md) schedule-action screenshot |
| Operator | `needs-decision` | `needs-decision`: confirm whether the operator uses the sign-in user, a linked worker, or a separate worker record. | `needs-decision` | [Queue System](../10-production/queue-system.md), assigned production reporting screen, [SMARTQC Inspection](../35-smartqc/inspection-data-entry.md), [Inspection Records](../30-quality/inspection-records.md) | Queue filter; row open/start action; save/report action; inspection save; completion/handover status | `needs-decision` until role labels and action visibility are captured | Use the live labels shown on [Queue System](../10-production/queue-system.md), reporting, and inspection screens. | Released WO, assigned machine/work area, inspection plan/check sheet if required | User-worker evidence, queue row action screenshot, reporting screen screenshot |
| Supervisor | `needs-decision` | Not normally needed unless the supervisor also records work. | `needs-decision` | [Queue System](../10-production/queue-system.md), [Production Orders](../10-production/production-orders.md), [Planning](../10-production/planning.md), [Dashboards](../10-production/dashboards.md), [Inspection Records](../30-quality/inspection-records.md), [NCR](../30-quality/ncr-non-conformance.md), [Users and Roles](../40-administration/users-and-roles.md) when access blocks triage | Queue filters; blocked/delayed status review; [Production Orders](../10-production/production-orders.md) status view; dashboard open; quality record lookup | `needs-decision` until role labels and action visibility are captured | Use live labels for statuses, dashboards, and escalation evidence. | Released/scheduled WO, queue row, inspection/NCR data when quality blocks work | Supervisor queue screenshot, delayed-work evidence screenshot, quality-stop screenshot |

## Users And Workers

The current manual does not confirm whether users and workers are the same record, linked records, or separate setup. Treat this as a required implementation decision before an operator workflow. Record the user's sign-in account, worker identity if shown, machine/work area, and role.

## Roles And Permissions

Use [Users and Roles](../40-administration/users-and-roles.md) to confirm visible access. Do not interpret technical-looking permission labels unless the administrator or owner confirms their meaning. If a page or action is missing, capture the user, role, expected page/action, and current screenshot.

| Term | Practical meaning |
|---|---|
| User | The sign-in account used to access the web app. |
| Worker | A shop-floor identity or assignment record if the workflow uses one; the user-to-worker relationship is still needs-decision until confirmed. |
| Role | The visible access grouping assigned to a user. |
| Permission label | A visible label on the Roles page that may explain why a menu or action appears. Do not translate it into a technical rule unless the owner confirms it. |
| Visible action | A button, icon, row action, menu item, or dialog action the signed-in user can see. |

## Generic Example: Admin Role Assignment

This example describes the evidence shape only. Replace the placeholder values with visible values from the site environment.

| Field | Example evidence to capture |
|---|---|
| User identity | Sign-in account, display name if visible, account status, and intended scenario role. |
| Role assignment | Visible role name assigned to the user, plus screenshot of the role page or user detail showing the assignment. |
| Access check | Sidebar pages and visible actions required by the scenario after logging in as that user. |
| Permission evidence | Permission labels exactly as displayed, without interpreting them into rules until the administrator confirms the mapping. |
| Stop/contact | If role names, permission labels, user-worker relationship, or language setup are unclear, keep the item as `needs-decision` and contact the administrator or implementation owner. |

## Translations

The manual is bilingual, but the visible language and translation administration pages are still needs-decision. Do not claim a complete translation setup process until the owner confirms the intended language workflow.

## Master Data Readiness

| If this is missing | Workflow affected | Escalate to |
|---|---|---|
| [Part](../20-engineering/parts.md) | Planner cannot create or verify the WO confidently. | Production engineer or planner lead |
| [BOM](../20-engineering/bom.md) | Planner cannot confirm build structure. | Production engineer |
| [Recipe](../20-engineering/recipes.md) | Planner may generate or release the wrong work. | Production engineer |
| [Machine](../20-engineering/machines.md) | Planning and queue assignment may be wrong. | Production engineer |
| [NC program](../20-engineering/nc-programs.md) | Operator may not have the expected execution program. | Production engineer |
| [Inspection plan](../30-quality/inspection-planning.md) or [check sheet](../35-smartqc/check-sheets.md) | Work may not be quality-ready. | Quality engineer |

## Screenshot Requests

This checklist needs screenshots for user-to-worker relationship, role permission labels with owner explanation, language/translation setup, and a confirmed user login showing the expected sidebar before it can become a full implementation guide. Track those items in the [Evidence and Decisions Register](../00-open-decisions.md).
