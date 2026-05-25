# Users and Roles

> [English](users-and-roles.md) | [中文](../../zh-CN/40-administration/users-and-roles.md)

Path: Administration / User Management and Administration / Roles  
URL: `<APP_BASE_URL>/Administration/User`, `<APP_BASE_URL>/Administration/Role`

## What This Page Is For

Use Users and Roles to review who can sign in and which visible menu actions a role can use. This chapter covers the visible administration workflow only.

User-worker relationship, permission-label meaning, and language setup remain tracked in the [Evidence and Decisions Register](../00-open-decisions.md) until the administrator or implementation owner confirms them.

> **Needs decision:** This page confirms visible access only. Do not treat user-worker relationship, permission labels, role names, or language setup as finalized until the administrator or implementation owner confirms them.

## First-Day Access Checklist

Use this before asking a planner, operator, supervisor, or quality user to follow a workflow.

| Check | Safe result | Stop if |
|---|---|---|
| Sign-in account | User exists, is active, and can log in. | User is missing, inactive, or login identity is unclear. |
| Role assignment | Assigned role matches the intended training scenario. | Role name or permission labels are `needs-decision`. |
| Sidebar visibility | Required pages for the role are visible after login. | Production, Quality, SMARTQC, or Administration pages are hidden unexpectedly. |
| Action visibility | Expected buttons, icons, row actions, and save controls are visible where needed. | An action is missing or unlabeled. |
| Worker identity | Operator identity, worker record if used, machine/work area, and role are recorded. | User-worker relationship is not confirmed. |
| Evidence | User/role screenshot and affected page screenshot are captured. | The issue cannot be reproduced with visible labels. |

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
