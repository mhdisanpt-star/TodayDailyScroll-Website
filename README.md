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
│   ├── config.js       # Dashboard / OAuth backend URL (single source)
│   ├── style.css       # Site stylesheet
│   ├── logo.svg        # Brand logo
│   └── favicon.svg     # Favicon
└── README.md           # This file
```

---

## Dashboard URL configuration

The **Open Application** section on the landing page has two buttons
(**Open Dashboard** and **Connect TikTok**). Both read a single constant:

```js
// assets/config.js
var APP_BASE_URL = "https://REPLACE-WITH-YOUR-CLOUDFLARE-TUNNEL.trycloudflare.com";
```

- **Open Dashboard** → `APP_BASE_URL`
- **Connect TikTok** → `APP_BASE_URL` + `/oauth/tiktok/login`

Change `APP_BASE_URL` in `assets/config.js` only. When you migrate from the
Cloudflare Tunnel URL to a permanent domain, no other file needs editing.
The site remains fully static — `config.js` is a plain script, no backend.

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

- Support / privacy contact on public pages: `mhdisanpodcast@gmail.com` (confirmed). Custom-domain mailboxes not claimed.
- Update `og:url` in `index.html` if your GitHub Pages URL differs from the current value.

---

## Notes

- Pure static HTML + CSS — no build step, no JavaScript required.
- All paths are relative and work on GitHub Pages without extra configuration.
- This repository is intended to be **public**. The main TDS source repository remains private.

---

## v1.1.0 — TDS Podcast OAuth branding

Added `podcast.html` for Google Cloud OAuth application homepage branding.
Privacy Policy updated to describe Podcast YouTube scopes, refresh-token storage,
and Limited Use / YouTube API terms. Dead Cloudflare tunnel dashboard links removed
from the default homepage.

Live GitHub Pages (verified at audit):

```
https://mhdisanpt-star.github.io/TodayDailyScroll-Website/
```

Publish this folder to that public repository after owner approval. See
`docs/OAUTH_BRANDING_PODCAST.md` for Console field values.
