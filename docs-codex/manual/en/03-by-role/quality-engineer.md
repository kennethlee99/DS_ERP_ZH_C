# Quality Engineer Manual

> [English](quality-engineer.md) | [中文](../../zh-CN/03-by-role/quality-engineer.md)

Use this role guide when reviewing the quality screens during the internal workflow. Quality/QC and Inspection Planning are still pending owner confirmation, so this manual keeps them visible and includes captured screens for review instead of hiding the area.

## First-Day Checklist

Use this before confirming that a first sample WO or training scenario is quality-ready.

1. **Start condition:** You are signed in as the quality reviewer for the first sample WO or training scenario.
   **Screen to open:** [Admin Setup Checklist](../01-workflows/admin-setup-checklist.md).
   **Step:** Confirm the quality role can open Inspection Planning, SMARTQC, Inspection Records, NCR, and Equipment Calibration pages needed for the scenario.
   **Expected result:** Required quality pages are visible before production depends on them.
   **Stop/contact condition:** Stop if a required page or save action is hidden; contact the administrator or quality owner.
2. **Start condition:** Quality access is visible.
   **Screen to open:** [Inspection Planning](../30-quality/inspection-planning.md).
   **Step:** Confirm whether the selected WO, process, or stage is expected to require inspection.
   **Expected result:** The inspection requirement is visible or the missing requirement is recorded as a decision item.
   **Stop/contact condition:** Stop if the customer workflow scope for Inspection Planning is unclear; contact the quality owner.
3. **Start condition:** Inspection requirement is known.
   **Screen to open:** [SMARTQC Check Sheets](../35-smartqc/check-sheets.md) and [SMARTQC Methods and Groups](../35-smartqc/methods-and-groups.md).
   **Step:** Confirm the check sheet, visible methods, and method groups are ready for the scenario.
   **Expected result:** The inspection form can be found and understood before data entry.
   **Stop/contact condition:** Stop if check-sheet version, method meaning, or required fields are unclear; contact the quality owner.
4. **Start condition:** Check-sheet readiness is visible.
   **Screen to open:** [SMARTQC Inspection Data Entry](../35-smartqc/inspection-data-entry.md).
   **Step:** Open or search the inspection record by job, stage, lot, or date; review required fields and save behavior.
   **Expected result:** The user knows what evidence proves an inspection was saved.
   **Stop/contact condition:** Stop if the exact route, save signal, or result meaning is not confirmed.
5. **Start condition:** Inspection result affects production release, continuation, or handover.
   **Screen to open:** [Inspection Records](../30-quality/inspection-records.md), [NCR](../30-quality/ncr-non-conformance.md), and [Equipment Calibration](../30-quality/equipment-calibration.md) when relevant.
   **Step:** Confirm the saved result, any NCR follow-up, and calibration readiness before production uses the quality decision.
   **Expected result:** Quality evidence is tied to the same WO/job, part, process, lot, or measurement device.
   **Stop/contact condition:** Stop if result status, NCR disposition, or calibration status is unclear; keep it as `needs-decision`.

## Daily Flow

1. Confirm which production stages require inspection.
2. Check that the SMARTQC check sheet is ready before the job reaches the shop floor.
3. Review inspection entries and follow up on failed or incomplete results.
4. Open an NCR when a defect needs formal review.
5. Check calibration readiness before a measuring device is used for inspection.

## Screens You Use Most

| Screen | What you do here | Visual status |
|---|---|---|
| [Inspection Planning](../30-quality/inspection-planning.md) | Attach inspection requirements to production stages. | Captured |
| [SMARTQC Check Sheets](../35-smartqc/check-sheets.md) | Review check-sheet versions and inspection items. | Captured |
| [SMARTQC Inspection Data Entry](../35-smartqc/inspection-data-entry.md) | Review or enter inspection results. | Captured |
| [SMARTQC Methods and Groups](../35-smartqc/methods-and-groups.md) | Maintain visible method names and groups used by check sheets. | Captured |
| [NCR](../30-quality/ncr-non-conformance.md) | Record and review non-conformance details. | Captured |
| [Equipment Calibration](../30-quality/equipment-calibration.md) | Check whether measuring equipment is ready for use. | Captured |

## What To Check During Review

- The sidebar names in this guide match the local app after login.
- Each screen opens to the expected list or form.
- Required fields are visible before the user saves.
- Failed or blocked work is explained as an on-screen condition, not as hidden system behavior.

## Common Questions

| Question | Likely cause | Next step |
|---|---|---|
| An inspection is missing | The job may not have reached the planned inspection stage, or the check sheet may not be selected. | Review Inspection Planning and the relevant SMARTQC check sheet. |
| A user can open the page but cannot save | A required field may be empty, or the role may not allow edits. | Check visible required fields, then ask Administration to review the role. |
| A measurement cannot be edited | Some measurement rows may be controlled by machine or CMM collection. | Confirm whether manual entry is expected for that row. |
| Calibration status looks wrong | The calibration record or equipment master data may be out of date. | Review Equipment Calibration before using the device. |

## Screenshots

![DS_ERP inspection planning screen](../../assets/screenshots/quality-inspection-planning.png)

![DS_ERP SMARTQC check sheets screen](../../assets/screenshots/smartqc-check-sheets.png)

![DS_ERP SMARTQC inspection screen](../../assets/screenshots/smartqc-inspection-data-entry.png)

![DS_ERP SMARTQC methods screen](../../assets/screenshots/smartqc-methods-and-groups.png)

![DS_ERP NCR screen](../../assets/screenshots/quality-ncr.png)

![DS_ERP equipment calibration screen](../../assets/screenshots/quality-equipment-calibration.png)

![DS_ERP administration roles screen](../../assets/screenshots/administration-users-roles.png)

The Administration screenshot is included only to show where role access is reviewed when a user can open a page but cannot perform the expected action.

## Related Pages

- [Inspection Planning](../30-quality/inspection-planning.md)
- [NCR Non-Conformance](../30-quality/ncr-non-conformance.md)
- [Equipment Calibration](../30-quality/equipment-calibration.md)
- [SMARTQC Check Sheets](../35-smartqc/check-sheets.md)
- [SMARTQC Inspection Data Entry](../35-smartqc/inspection-data-entry.md)
- [SMARTQC Methods and Groups](../35-smartqc/methods-and-groups.md)


