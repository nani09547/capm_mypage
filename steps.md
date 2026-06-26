# steps.md — capm_mypage Personal Portfolio
## Complete Build & Deployment Steps from Beginning

**Project:** capm_mypage — Personal Portfolio Website  
**Owner:** Venkata Naga Raju T — SAP BTP Consultant  
**Live URL:** https://nani09547.github.io/capm_mypage/  
**Repository:** https://github.com/nani09547/capm_mypage

---

## PHASE 1 — Project Setup

### Step 1 — Chose Project Location
**Decision:** Use existing empty repo `capm_mypage` at `C:\Users\I344101\sap_vibe_dev\capm_mypage`  
**Outcome:** Project folder ready.

### Step 2 — Decided Tech Stack
**Options explored:** Next.js, Vue, plain HTML  
**Decision:** SAP CAP (Node.js) backend + Pure HTML/CSS/JS frontend — same stack as capm_proj3  
**Reason:** No new tools to learn, CAP serves static files easily  
**Outcome:** Stack confirmed.

### Step 3 — Initialized SAP CAP Project
**Action:** Created `package.json`, installed dependencies  
**Command:**
```bash
npm install @sap/cds express
```
**Files created:**
- `package.json`
- `server.js` — CAP server that serves static files from `app/webapp/`
- `srv/service.cds` — Service definition
- `db/schema.cds` — Data schema (BlogPosts, Projects entities)

**Outcome:** `cds watch --port 4004` runs the server.

---

## PHASE 2 — Design Decisions

### Step 4 — Chose Design Style
**Options shown to user:** 4 preview styles  
- Style 1: Terminal/Hacker (green monospace)
- Style 2: Magazine/Editorial (bold typography)
- Style 3: Glassmorphism (frosted glass cards)
- Style 4: Timeline/Story (career journey focus)

**Decision:** Style 3 (Glassmorphism) + Style 4 (Timeline merged in)  
**Outcome:** Dark army-green glassmorphism design selected.

### Step 5 — Chose Color Palette
**User preference:** Army Green + Gray + Milky White  
**Palette defined:**
```css
--bg:        #0f1a0f   (dark green background)
--green:     #4a5c3a   (army green)
--green-glow:#a8c080   (accent)
--milky:     #f0ebe0   (milky white text)
--gray:      #7a7f75   (muted gray)
```
**Outcome:** Color variables used throughout all CSS.

### Step 6 — Chose Architecture
**Decision:** MVC pattern  
- **Model** → `model/data.js` — all portfolio content
- **View** → `index.html` — structure only
- **Controller** → `controller/app.js` — all interactions  

**Outcome:** Clean separation of content, layout, and logic.

---

## PHASE 3 — Building the Portfolio

### Step 7 — Created MVC Files

**Model (`model/data.js`):**
- Profile: name, title, email, LinkedIn, mobile, location
- About: bio paragraphs, detail cards
- Awards: SAP Move Award (2019), SAP Honor Award (2018), HPF Nomination (2018)
- Skills: 6 groups — SAP Backend, Frontend, Platform, Cloud & APIs, Programming, Tools
- Projects: Order To Cash Cockpit, Vehicle Expense Tracker, Personal Portfolio
- Stats: 10+ Years, 15+ Projects, SAP Certified, 2× Awards

**Controller (`controller/app.js`):**
- `init()` — renders all sections from model
- `renderHero()` — photo, name, stats
- `renderAbout()` — bio + detail cards
- `renderSkills()` — skill groups + tags
- `renderProjects()` — project cards
- `renderContact()` — social links
- Scroll spy — highlights active nav button as user scrolls
- Fade-in animations on scroll

**Outcome:** All content driven from model. No hardcoded text in HTML.

### Step 8 — Built index.html (View)
**Structure:** Single-page, all sections in one file  
**Sections built:**
1. **Home** — profile photo, name, role, nav buttons, 4-stat grid
2. **About** — bio text + detail cards (60/40 split)
3. **Journey** — career timeline
4. **Skills** — 6 skill card groups
5. **Projects** — 3 project cards
6. **Contact** — social links + contact form

**Outcome:** Complete single-page portfolio.

### Step 9 — Built Navigation
**Two navigation components:**

1. **Floating pill nav** — fixed at top center on page load
   - Buttons: Home · Journey · Skills · Projects · Contact
   - Hides (fades out) when scrolled past hero

2. **Name strip** — slides in from top when user scrolls past the hero name
   - Left: `Venkata Naga Raju T` (full name)
   - Center: same nav buttons (highlighted based on current section)
   - Right: email address + mobile number
   - Rounded bottom corners

**Outcome:** Always visible navigation, professional look.

### Step 10 — Added LinkedIn Profile Data
**Source:** https://in.linkedin.com/in/venkata-naga-raju-thottempudi  
**Data extracted and added:**
- Full name: Venkata Naga Raju Thottempudi
- Current role: SAP Technical Consultant at Volvo Group (Aug 2022–Present)
- All 7 career roles with dates and descriptions
- Awards and certification

**Career Timeline (Journey section):**
| Period | Role | Company |
|---|---|---|
| Aug 2022–Present | SAP Technical Consultant | Volvo Group |
| Jun 2021–Aug 2022 | IT Developer Lead | FieldCore |
| Oct 2018–Jun 2021 | IT Technology Consultant | SAP |
| Sep 2017–Oct 2018 | IT Technology Associate Consultant | SAP (↑ Promoted) |
| Jun 2017–Sep 2017 | SAP Technical Consultant | Incon Infotech Pvt Ltd |
| Jun 2016–Dec 2016 | Junior SAP Consultant | Vishet Business Solutions |
| Feb 2015–Jun 2016 | Jr SAP Consultant | Wynam Infotech |

**Outcome:** Real LinkedIn data shown in timeline format.

### Step 11 — Added Profile Photo
**Source:** LinkedIn profile photo URL  
**Action:** Downloaded and saved locally  
**Command:**
```bash
curl -L "<linkedin_photo_url>" -o app/webapp/img/profile.jpg
```
**Why local:** LinkedIn photo URLs expire — saving locally ensures permanent display  
**Outcome:** Photo loads from `img/profile.jpg`, not an expiring URL.

---

## PHASE 4 — Layout Refinements

### Step 12 — Home Section Layout
**Final layout:** 50/50 split grid
- **Left (50%):** Photo + Name + Role + Location + Nav buttons + Stats grid
- **Right (50%):** About Me glass card with bio + 4 detail cards

**Photo size:** 180×180px circular with green glow border  
**Name size:** `clamp(2.2rem, 4vw, 3.8rem)` — responsive  
**Stats:** 4 tiles — `10+ Years SAP`, `15+ Projects`, `SAP Certified`, `2× Awards`

**Outcome:** Clean, professional home section.

### Step 13 — Removed Redundant Elements
Items removed based on user feedback:
- Blog section (not needed)
- Upload panel from Key Documents dialog
- College/awards from timeline (experience only)
- Photo from About section
- "Open to Opportunities" badge from hero
- "Volvo Group" from hero location line

**Outcome:** Cleaner, focused layout.

### Step 14 — Fixed CSS Issues
Issues fixed:
- `alignItems="Stretch"` → valid value
- `width="44%"` on VBox → replaced with `sap.ui.layout.Grid`
- Section padding reduced: `100px` → `72px` (reduced gap between sections)
- Max-width expanded: `1100px` → `1400px` with `padding: 0 4%` (fills horizontal space)

**Outcome:** No wasted white space, consistent spacing.

---

## PHASE 5 — Git & Version Control

### Step 15 — Initial Commit to Organisation Repo
**Repository:** `SAP-Fiori-Prjts/capm_mypage`  
**Files committed:**
- `.gitignore` (excludes node_modules/)
- `app/webapp/index.html`
- `app/webapp/img/profile.jpg`
- `app/webapp/model/data.js`
- `srv/service.cds`, `db/schema.cds`, `server.js`, `package.json`
- `README.md`

**Command:**
```bash
git add .gitignore README.md app/ srv/ db/ server.js package.json
git commit -m "Add personal portfolio — SAP CAP + HTML/CSS/JS MVC"
git push origin main
```
**Outcome:** Code on GitHub at `SAP-Fiori-Prjts/capm_mypage`. ✅

---

## PHASE 6 — GitHub Pages Deployment

### Step 16 — Created `gh-pages` Branch
**Action:** Created orphan branch (no history) for static file serving  
**Commands:**
```bash
git checkout --orphan gh-pages
git rm -rf .
git checkout main -- app/webapp/
cp app/webapp/index.html .
cp -r app/webapp/css . && cp -r app/webapp/img . && cp -r app/webapp/model .
git add index.html css/ img/ model/
git commit -m "Deploy portfolio to GitHub Pages"
git push origin gh-pages
```
**Outcome:** `gh-pages` branch pushed to org repo. ✅

### Step 17 — GitHub Pages Failed on Org Repo
**Attempted:** Enable Pages via GitHub API on `SAP-Fiori-Prjts/capm_mypage`  
**Result:** ❌ Error: `"Your current plan does not support GitHub Pages for this repository."`  
**Reason:** Free plan organisation accounts cannot use GitHub Pages for public repos.

### Step 18 — Created Personal Repository
**Account found:** `nani09547` (Venkata Naga Raju) — personal account, supports free Pages  
**API call:** `POST https://api.github.com/user/repos`  
**Repository created:** `https://github.com/nani09547/capm_mypage`  
**Outcome:** ✅ New public repo created.

### Step 19 — Pushed to Personal Repo
**Commands:**
```bash
git remote add personal https://github.com/nani09547/capm_mypage.git
git checkout main && git push personal main
git checkout gh-pages && git push personal gh-pages
```
**Outcome:** Both `main` and `gh-pages` branches on personal repo. ✅

### Step 20 — Enabled GitHub Pages
**API call:** `POST https://api.github.com/repos/nani09547/capm_mypage/pages`  
**Config:** `{ "source": { "branch": "gh-pages", "path": "/" } }`  
**Response:** Already enabled (auto-enabled on public personal repo)  
**Status:** `"built"` ✅  
**Live URL:** https://nani09547.github.io/capm_mypage/

---

## PHASE 7 — CI/CD Automation

### Step 21 — Added GitHub Actions Workflow
**Problem:** Every code change required manually updating `gh-pages` branch  
**Solution:** GitHub Actions auto-deploys on every push to `main`

**File created:** `.github/workflows/deploy.yml`  
**Workflow:**
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./app/webapp
          publish_branch: gh-pages
```
**Pushed and verified:** Workflow ran, status `in_progress` confirmed.  
**Outcome:** ✅ Auto-deploy working. Now just push to `main` → site updates automatically.

---

## FINAL OUTCOME

| Item | Value |
|---|---|
| **Live URL** | https://nani09547.github.io/capm_mypage/ |
| **Personal Repo** | https://github.com/nani09547/capm_mypage |
| **Org Repo** | https://github.com/SAP-Fiori-Prjts/capm_mypage |
| **Local URL** | http://localhost:4004/index.html |
| **Local start** | `cds watch --port 4004` |
| **Auto-deploy** | ✅ Push to main → live in ~1 min |
| **HTTPS** | ✅ Automatic |
| **Cost** | Free |

---

## HOW TO UPDATE IN FUTURE

```bash
# 1. Make changes
cd C:\Users\I344101\sap_vibe_dev\capm_mypage
# edit app/webapp/index.html  or  app/webapp/model/data.js

# 2. Commit and push
git add .
git commit -m "your change description"
git push personal main

# That's it — GitHub Actions deploys automatically in ~1 minute
```

---

## PROJECT FILE STRUCTURE

```
capm_mypage/
├── .github/
│   └── workflows/
│       └── deploy.yml          Auto-deploy to GitHub Pages
├── app/webapp/
│   ├── index.html              Single-page portfolio (CSS inline)
│   ├── img/
│   │   └── profile.jpg         Profile photo (local copy)
│   ├── model/
│   │   └── data.js             All content — MVC Model
│   ├── controller/
│   │   └── app.js              Interactions — MVC Controller
│   └── css/
│       └── style.css           Reserved for future styles
├── srv/
│   └── service.cds             SAP CAP service
├── db/
│   └── schema.cds              Data schema
├── server.js                   CAP server (serves static files)
├── package.json                Node.js dependencies
├── .gitignore                  Excludes node_modules/
├── README.md                   Project documentation
└── steps.md                    This file
```
