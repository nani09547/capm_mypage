# capm_mypage — Personal Portfolio

Personal portfolio website of **Venkata Naga Raju T**, SAP BTP Consultant at Volvo Group, Bengaluru.

---

## Live

🌐 **Global:** https://nani09547.github.io/capm_mypage/

**Local:** `http://localhost:4004/index.html`

**Start server:**
```bash
cd C:\Users\I344101\sap_vibe_dev\capm_mypage
cds watch --port 4004
```

---

## Stack

| Layer | Technology |
|---|---|
| Backend | SAP CAP (Node.js) — serves static files |
| Frontend | Pure HTML / CSS / JavaScript (no framework) |
| Architecture | MVC — `model/data.js` · `controller/app.js` · `index.html` |
| Theme | Dark glassmorphism — Army Green + Milky White |

---

## Structure

```
capm_mypage/
├── app/webapp/
│   ├── index.html          Single-page portfolio (all CSS inline)
│   ├── img/
│   │   └── profile.jpg     Profile photo (saved locally)
│   ├── model/
│   │   └── data.js         All content — name, bio, skills, projects, contact
│   ├── controller/
│   │   └── app.js          Scroll, nav, scroll-spy interactions
│   └── css/
│       └── style.css       (reserved for future external styles)
├── srv/
│   └── service.cds         SAP CAP service definition
├── db/
│   └── schema.cds          Data schema
├── server.js               CAP server — serves static files
└── package.json
```

---

## Sections

| Section | Description |
|---|---|
| **Home** | Photo · Name · Role · Nav buttons · Stats · About summary card |
| **Journey** | Career timeline — all 7 roles in reverse chronological order |
| **Skills** | 6 skill groups: SAP Backend, Frontend, Platform, Cloud, Programming, Tools |
| **Projects** | Order To Cash Cockpit · Vehicle Expense Tracker · Personal Portfolio |
| **Contact** | Email · LinkedIn · Contact form |

---

## Navigation

- **Pill nav** — fixed floating nav visible on page load
- **Name strip** — slides in from top when scrolled past hero, shows:
  - Name on the left
  - Nav buttons centered (highlight active section as you scroll)
  - Email + mobile number on the right

---

## Profile

| Field | Value |
|---|---|
| Name | Venkata Naga Raju Thottempudi |
| Role | SAP BTP Consultant |
| Company | Volvo Group |
| Location | Bengaluru, Karnataka, India |
| Email | thottempudinani6@gmail.com |
| LinkedIn | [venkata-naga-raju-thottempudi](https://in.linkedin.com/in/venkata-naga-raju-thottempudi) |
| Mobile | +91 80959 96301 |
| Certification | SAP Certified – ABAP for SAP HANA 2.0 |

---

## Awards

| Award | Year |
|---|---|
| SAP Move Award | March 2019 |
| SAP Honor Award | October 2018 |
| Hasso Plattner Founders' Award — Nomination | 2018 |

---

## Pending

- GitHub Pages deployment
- Real GitHub links on project cards
- Any remaining UI tweaks
