# Today Daily Scroll — Public Website

Static public website for **Today Daily Scroll (TDS)**.  
Version **1.0.0** — ready for GitHub Pages.

---

## File Structure

```
TodayDailyScroll-Website/
├── index.html          # Landing page
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Service
├── assets/
│   ├── style.css       # Site stylesheet
│   ├── logo.svg        # Brand logo
│   └── favicon.svg     # Favicon
└── README.md           # This file
```

---

## Upload to TodayDailyScroll-Website

### Option A — New repository

1. Create a public repository on GitHub named **TodayDailyScroll-Website**.
2. Clone the empty repository:

   ```bash
   git clone https://github.com/<your-username>/TodayDailyScroll-Website.git
   cd TodayDailyScroll-Website
   ```

3. Copy all files from this folder into the repository root:

   ```
   index.html
   privacy.html
   terms.html
   assets/
   README.md
   ```

4. Commit and push:

   ```bash
   git add index.html privacy.html terms.html assets/ README.md
   git commit -m "Release public website v1.0.0"
   git push origin main
   ```

### Option B — Existing repository

1. Clone **TodayDailyScroll-Website** if you have not already.
2. Replace the repository contents with the files from this folder.
3. Commit and push to `main`.

> Upload the HTML, assets, and README only. Do not include internal TDS pipeline or dashboard files.

---

## Enable GitHub Pages

1. Open the **TodayDailyScroll-Website** repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **Save**.
5. Wait 1–3 minutes for deployment.

Your site will be available at:

```
https://<your-username>.github.io/TodayDailyScroll-Website/
```

### Important URLs for API verification

| Page | URL |
|------|-----|
| Home | `https://<your-username>.github.io/TodayDailyScroll-Website/` |
| Privacy Policy | `https://<your-username>.github.io/TodayDailyScroll-Website/privacy.html` |
| Terms of Service | `https://<your-username>.github.io/TodayDailyScroll-Website/terms.html` |

Use these full HTTPS URLs when submitting to Google Cloud Console, YouTube API verification, or TikTok Developer Portal.

---

## Local Preview

```bash
python -m http.server 8080
```

Open `http://localhost:8080` in your browser.

---

## Before Production

- Replace `contact@todaydailyscroll.com` in `index.html` (see TODO comment).
- Update `og:url` in `index.html` if your GitHub Pages URL differs from the current value.

---

## Notes

- Pure static HTML + CSS — no build step, no JavaScript required.
- All paths are relative and work on GitHub Pages without extra configuration.
- This repository is intended to be **public**. The main TDS source repository remains private.
