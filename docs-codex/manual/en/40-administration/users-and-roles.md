# Users and Roles

> [English](users-and-roles.md) | [中文](../../zh-CN/40-administration/users-and-roles.md)

Path: Administration / User Management and Administration / Roles  
URL: `<APP_BASE_URL>/Administration/User`, `<APP_BASE_URL>/Administration/Role`

## What This Page Is For

Use Users and Roles to review who can sign in and which visible menu actions a role can use. This chapter covers the visible administration workflow only.

User-worker relationship, permission-label meaning, and language setup remain tracked in the [Evidence and Decisions Register](../00-open-decisions.md) until the administrator or implementation owner confirms them.

> **Needs decision**
>
> | Safe now | Not confirmed | Owner | Exact answer needed |
> |---|---|---|---|
> | Confirm visible access, role assignment, sidebar visibility, and screenshots without changing access design. | User-worker relationship, permission labels, role names, and language setup. | Administrator or implementation owner. | Which role names are approved for each first-day scenario, how visible permission labels map to pages/actions, and whether operators use sign-in users, linked worker records, or separate worker records. |

## First-Day Access Checklist

Use this before asking a planner, operator, supervisor, or administrator to follow a first-day workflow.

1. **Start condition:** You have the user account that will perform the first-day scenario.
   **Screen to open:** Administration / User Management.
   **Step:** Confirm the account exists, is active, and can sign in.
   **Expected result:** The login identity is visible and usable.
   **Stop/contact condition:** Stop if the user is missing, inactive, or login identity is unclear; contact the administrator.
2. **Start condition:** The sign-in account is usable.
   **Screen to open:** Administration / Roles and the selected user detail if available.
   **Step:** Confirm the assigned role matches the intended planner, operator, supervisor, or admin scenario.
   **Expected result:** The role assignment is visible and recorded.
   **Stop/contact condition:** Stop if the role name or permission labels are `needs-decision`; contact the administrator or implementation owner.
3. **Start condition:** The role assignment is visible.
   **Screen to open:** Log in as the target user and open the required sidebar pages for the scenario.
   **Step:** Confirm each required page and visible action appears for that role.
   **Expected result:** The role can open the screens required by the first-day walkthrough.
   **Stop/contact condition:** Stop if a page, toolbar action, row action, or save control is missing or unlabeled.
4. **Start condition:** The scenario includes operator execution or machine/work-area assignment.
   **Screen to open:** User, role, and any visible worker/work-area field shown by the app.
   **Step:** Record the sign-in user, worker identity if used, machine/work area, and role.
   **Expected result:** The assignment identity is documented before work is assigned.
   **Stop/contact condition:** Stop if user-worker relationship is not confirmed; contact the administrator or implementation owner.
5. **Start condition:** The access issue or successful access check can be reproduced.
   **Screen to open:** The affected page and [Users and Roles](users-and-roles.md).
   **Step:** Capture user/role evidence and the affected page screenshot.
   **Expected result:** The screenshot set shows the visible label, page, action, or missing item clearly.
   **Stop/contact condition:** Stop if the issue cannot be reproduced with visible labels; collect owner confirmation before changing access.

## What You See

- A user-management list for reviewing accounts, names, status, and related login information.
- A roles page for reviewing role names and visible permission labels.
- Search, refresh, export, and column controls where available.
- Detail forms or dialogs for reviewing the selected user or role.

## What You Do

1. Open User Management to confirm the expected user exists and is active.
2. Open Roles to confirm the role name used for the site workflow.
3. Review visible permission labels only when explaining why a menu item or action appears.
4. Avoid changing access during the workflow unless the administrator explicitly approves it.

## What To Check

- The user is active.
- The assigned role matches the intended reviewer scenario.
- The visible sidebar and buttons are consistent with the role.
- Any missing page is treated as an access or scope question before changing data.

## Common Issues

| Issue | What it means |
|---|---|
| User cannot see a menu item | The assigned role may not include that visible page or action. |
| User is inactive | The account may need administrator review. |
| Permission label is unclear | Confirm with the administrator before changing role setup. |

## Related Pages

- [Admin Setup Checklist](../01-workflows/admin-setup-checklist.md)
- [Role-Based User Manuals](../03-by-role/README.md)
- [Planner Manual](../03-by-role/planner.md)
- [Operator Manual](../03-by-role/operator.md)
- [Quality Engineer Manual](../03-by-role/quality-engineer.md)

## Screenshot

![DS_ERP administration users and roles screen](../../assets/screenshots/administration-users-roles.png)
