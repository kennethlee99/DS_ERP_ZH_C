# Operating Glossary

> English | [中文](../zh-CN/00-glossary.md)

Use this glossary when a page uses production words that are easy to confuse.

| Term | Meaning in the manual | What to check next |
|---|---|---|
| WO | Work order. A production job record that planners and supervisors review. | Open [Production Orders](10-production/production-orders.md). |
| Job | The work an operator or supervisor expects to see in Queue System. | Match the queue row to the WO, part, process, and machine. |
| Queue row | One visible row of executable or reviewable work in Queue System. | Check part, process, machine/work area, and status. |
| Scheduled | Work has been placed on the Planning page for a date, machine, group, or view. | Compare [Planning](10-production/planning.md) with [Queue System](10-production/queue-system.md). |
| Released | Work is intended to become available for execution. | Confirm it appears in [Queue System](10-production/queue-system.md). |
| Ready | A visible status or condition showing the work can move to the next step. | Confirm required setup and inspection are not blocking the work. |
| Active | Work appears to be in progress or selected for current work. | Check Queue System and the related WO before changing anything. |
| Blocked | Work cannot continue until another role resolves a missing setup, status, access, or quality issue. | Use the role-specific escalation table. |
| Complete | The work or inspection shows a saved finished state on the relevant page. | Check the queue row, WO status, or inspection record. |
| Inspection trigger | A visible sign that quality entry or review is required before work continues. | Open [SMARTQC Inspection](35-smartqc/inspection-data-entry.md) or [Inspection Records](30-quality/inspection-records.md). |
| User | The account used to sign in to the web app. | Check [Users and Roles](40-administration/users-and-roles.md). |
| Worker | A shop-floor identity or assignment record if the demo uses one. | Confirm the user-to-worker relationship with the demo owner. |
| Role | A visible access grouping assigned to a user. | Compare the role with the sidebar and visible actions. |
| Permission label | A label visible on the Roles page that may explain menu or action access. | Do not interpret it as a technical rule unless the owner confirms it. |
| Visible action | A button, icon, row action, menu item, or dialog action shown to the signed-in user. | If unlabeled, request a screenshot before documenting exact clicks. |

## If A Term Is Still Unclear

Do not guess. Record the page, row, status, and action you were trying to use, then escalate to the role named in the workflow page.
