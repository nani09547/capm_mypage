# GitHub Pages Deployment — Steps & Outcome

**Project:** capm_mypage — Personal Portfolio  
**Deployed by:** Claude Code  
**Date:** 26 Jun 2026  
**Live URL:** https://nani09547.github.io/capm_mypage/

---

## Steps Performed

### Step 1 — Verified Git Remote
**Action:** Checked existing git remote URL.  
**Command:**
```bash
git remote get-url origin
```
**Outcome:** Remote is `https://github.com/SAP-Fiori-Prjts/capm_mypage.git` (organisation repo).

---

### Step 2 — Created `gh-pages` Branch (Orphan)
**Action:** Created a clean orphan branch with no commit history — required for GitHub Pages deployment.  
**Command:**
```bash
git checkout --orphan gh-pages
git rm -rf .
```
**Outcome:** Empty `gh-pages` branch created locally. All existing files removed from staging.

---

### Step 3 — Copied Static Files to Root
**Action:** Checked out the `app/webapp/` contents from the `main` branch and copied them to the root level — GitHub Pages serves files from the repo root.  
**Commands:**
```bash
git checkout main -- app/webapp/
cp app/webapp/index.html .
cp -r app/webapp/css .
cp -r app/webapp/img .
cp -r app/webapp/model .
```
**Outcome:** `index.html`, `css/`, `img/`, `model/` now at root level of the branch.

---

### Step 4 — Committed and Pushed `gh-pages` to Org Repo
**Action:** Committed the static files and pushed to the organisation repo.  
**Commands:**
```bash
git add index.html css/ img/ model/
git commit -m "Deploy portfolio to GitHub Pages"
git push origin gh-pages
```
**Outcome:** `gh-pages` branch created on `SAP-Fiori-Prjts/capm_mypage`. ✅

---

### Step 5 — Attempted to Enable GitHub Pages on Org Repo
**Action:** Called GitHub API to enable GitHub Pages on the org repo.  
**Result:** ❌ **Failed** — Free plan organisation accounts do not support GitHub Pages for public repositories.  
**Error:** `"Your current plan does not support GitHub Pages for this repository."`

---

### Step 6 — Identified Personal GitHub Account
**Action:** Checked the GitHub token credentials to find the personal account.  
**Result:** Personal account `nani09547` (Venkata Naga Raju) confirmed. Personal accounts support GitHub Pages for free.

---

### Step 7 — Created Personal Repository
**Action:** Created a new public repository under the personal account via GitHub API.  
**API Call:** `POST https://api.github.com/user/repos`  
**Repository created:** `https://github.com/nani09547/capm_mypage`  
**Outcome:** ✅ Repository created successfully.

---

### Step 8 — Pushed Both Branches to Personal Repo
**Action:** Added personal repo as a new remote and pushed `main` + `gh-pages` branches.  
**Commands:**
```bash
git remote add personal https://github.com/nani09547/capm_mypage.git
git checkout main && git push personal main
git checkout gh-pages && git push personal gh-pages
```
**Outcome:** ✅ Both branches live on personal repo.

---

### Step 9 — Enabled GitHub Pages via API
**Action:** Called GitHub API to enable GitHub Pages on the personal repo, pointing to the `gh-pages` branch root.  
**API Call:** `POST https://api.github.com/repos/nani09547/capm_mypage/pages`  
**Payload:** `{ "source": { "branch": "gh-pages", "path": "/" } }`  
**Response:** `"GitHub Pages is already enabled."` — Pages auto-enabled on public personal repo. ✅

---

### Step 10 — Verified Pages URL
**Action:** Called GitHub API to get the Pages status and URL.  
**Result:**
```json
{
  "status": "building",
  "html_url": "https://nani09547.github.io/capm_mypage/"
}
```
**Outcome:** ✅ GitHub Pages building. Live in ~1-2 minutes.

---

## Final Outcome

| Item | Value |
|---|---|
| **Live URL** | https://nani09547.github.io/capm_mypage/ |
| **GitHub Repo** | https://github.com/nani09547/capm_mypage |
| **Branch serving pages** | `gh-pages` |
| **Files served** | `index.html`, `css/`, `img/`, `model/` |
| **Build status** | ✅ Building (live within 1-2 min of deployment) |
| **Cost** | Free |
| **HTTPS** | ✅ Automatic |

---

## How to Update the Site in Future

Whenever you make changes to the portfolio:

```bash
# 1. Make changes in main branch
git checkout main
# ... edit app/webapp/index.html or model/data.js ...
git add . && git commit -m "Update portfolio"
git push personal main

# 2. Update gh-pages branch
git checkout gh-pages
cp app/webapp/index.html .
cp -r app/webapp/css .
cp -r app/webapp/img .
cp -r app/webapp/model .
git add . && git commit -m "Deploy update"
git push personal gh-pages
```
GitHub Pages auto-rebuilds in ~1 minute after each push.

---

## Repository Structure

```
main branch          — Full SAP CAP project (backend + frontend)
gh-pages branch      — Static files only (served by GitHub Pages)
  ├── index.html
  ├── css/style.css
  ├── img/profile.jpg
  └── model/data.js
```
