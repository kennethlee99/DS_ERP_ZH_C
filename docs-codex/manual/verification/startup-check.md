# Local App Startup Check

Purpose: confirm which local app was used for visual manual verification.

## Process Findings

- The Codex workspace app under `D:\Users\user\Downloads\DS_ERP_ZH_Codex` was tested on non-5001 ports but did not become a reliable local screenshot source.
- The working local app under `D:\Users\user\Downloads\DS_ERP_ZH_CC` was started and verified at `http://localhost:5001`.
- The authenticated session used the local `5001` app only. `devsvr01` and the remote demo host were not used.

## Result

Authenticated screenshot capture succeeded from `DS_ERP_ZH_CC` on `http://localhost:5001`.

During the final operating-manual pass, an additional in-app browser attempt to open `http://localhost:5001/Production/OEE` for replacement dashboard capture was blocked by the browser. No app source changes were made to work around that browser-level block; the dashboard and action-area captures remain listed as screenshot requests.

The live authenticated sidebar still shows TMS. TMS remains excluded from the manual, so this is recorded as a live-app/sidebar scope mismatch.

## Manual Impact

- Requested screenshots were saved under `assets/screenshots/`.
- English and Chinese manual pages were updated together.
- The expanded coverage pass reused the authenticated screenshot set for new Production, Engineering, and Administration screen chapters.
- ERP app source was not changed as part of this manual-only pass.
- The website was not rebuilt or republished.
