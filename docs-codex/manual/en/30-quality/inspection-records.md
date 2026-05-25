# Inspection Records

> [English](inspection-records.md) | [中文](../../zh-CN/30-quality/inspection-records.md)

Path: Quality / QC / Inspection Records  
URL: `<APP_BASE_URL>/Production/InspectionRecord`

## What This Page Is For

Use Inspection Records to confirm whether inspection work has been saved and whether the result supports the next production decision. Operators and supervisors use it for confirmation; quality engineers use it for review and follow-up.

## What You See

- A list of saved inspection records.
- Filters for narrowing records by job, part, stage, result, date, or related production details.
- Result and status fields that show whether the inspection passed, failed, or still needs follow-up.
- Row details for reviewing the selected inspection record.

## What You Do

1. Search using the WO, job, part, stage, lot, or date from the production flow.
2. Open the matching record.
3. Confirm the record belongs to the same job or process being reviewed.
4. Check the visible result before releasing, continuing, or handing over work.
5. If the result is unclear or failed, escalate to the quality engineer.

## What To Check

- The record matches the WO/job and inspection stage.
- The saved result is visible.
- The result supports the next production decision.
- A failed or unclear result is not treated as production-ready without quality review.

## Common Issues

| Issue | What it means |
|---|---|
| No record appears | The inspection may not have been saved, or filters may be too narrow. |
| Record does not match the job | The wrong WO, part, stage, or date may be selected. |
| Result is failed or unclear | Quality must confirm the next action before production proceeds. |

## Related Pages

- [Operator Walkthrough](../01-workflows/operator-run-next-job.md)
- [Supervisor Triage](../01-workflows/supervisor-triage.md)
- [SMARTQC Inspection](../35-smartqc/inspection-data-entry.md)
- [NCR](ncr-non-conformance.md)

## Screenshot

![DS_ERP inspection records screen](../../assets/screenshots/quality-inspection-records.png)
