/**
 * MODEL — All portfolio content in one place.
 * Update this file to change any text, links, or data.
 */
const PortfolioModel = {

    profile: {
        name:       "Venkata Naga Raju T",
        shortName:  "Raju T",
        title:      "SAP Full Stack Developer",
        company:    "Volvo Group",
        subtitle:   "SAP-certified developer at Volvo Group with expertise in SAP ABAP, UI5/Fiori, CAP, and HANA. Recognised with SAP Move Award and Hasso Plattner Founders' Award nomination.",
        badge:      "Open to Opportunities",
        email:      "thottempudinani6@gmail.com",
        linkedin:   "https://in.linkedin.com/in/venkata-naga-raju-thottempudi",
        github:     "https://github.com/raju-t",
        location:   "Bengaluru, Karnataka, India",
        experience: "10+",
        projects:   "15+",
        available:  true
    },

    about: {
        bio: [
            "I'm <strong>Venkata Naga Raju Thottempudi</strong>, an SAP Full Stack Developer currently at <strong>Volvo Group, Bengaluru</strong>. I specialise in SAP ABAP, SAP UI5/Fiori, SAP CAP, and SAP HANA — delivering enterprise solutions across the full stack.",
            "With over 10 years in the SAP ecosystem, I have been recognised with the <strong>SAP Move Award (2019)</strong>, <strong>SAP Honor Award (2018)</strong>, and a nomination for the prestigious <strong>Hasso Plattner Founders' Award 2018</strong> for the Order To Cash Cockpit project.",
            "I hold an <strong>SAP Certified Development Specialist – ABAP for SAP HANA 2.0</strong> certification and a B.Tech from Sri Sunflower College of Engineering & Technology."
        ],
        details: [
            { label: "Full Name",    value: "Venkata Naga Raju Thottempudi" },
            { label: "Current Role", value: "SAP Full Stack Developer" },
            { label: "Company",      value: "Volvo Group" },
            { label: "Location",     value: "Bengaluru, Karnataka, India" },
            { label: "Experience",   value: "10+ Years SAP" },
            { label: "Certification",value: "SAP Certified – ABAP for HANA 2.0" },
            { label: "Education",    value: "B.Tech – Sri Sunflower College of Engg." },
            { label: "Status",       value: "Open to Opportunities", highlight: true }
        ]
    },

    awards: [
        { icon: "🏆", title: "SAP Move Award",            year: "March 2019",   desc: "Significant contribution to SAP's business success" },
        { icon: "🌟", title: "SAP Honor Award",           year: "October 2018", desc: "Excellence in SAP development" },
        { icon: "🎯", title: "Hasso Plattner Founders' Award Nomination", year: "2018", desc: "Order To Cash Cockpit project" }
    ],

    skills: [
        {
            group: "SAP Backend",
            tags:  ["SAP ABAP", "SAP HANA", "SAP CAP (CDS)", "OData v4", "OData v2", "SAP BTP", "ABAP for HANA 2.0"]
        },
        {
            group: "SAP Frontend",
            tags:  ["SAP UI5", "SAP Fiori", "Fiori Elements", "SmartControls", "Freestyle MVC", "ObjectPageLayout", "sap.viz Charts"]
        },
        {
            group: "SAP Platform",
            tags:  ["SAP BTP", "SAP Analytics Cloud", "SAP ERP", "SAP HANA Systems", "SAP Document AI", "Order To Cash"]
        },
        {
            group: "Cloud & APIs",
            tags:  ["Google Sheets API", "Google Drive API", "OAuth2", "REST APIs", "Node.js"]
        },
        {
            group: "Programming",
            tags:  ["ABAP", "JavaScript", "CDS",  "HTML5 / CSS3"]
        },
        {
            group: "Tools",
            tags:  ["SAP Business Application Studio", "VS Code", "Git", "SAP HANA Studio", "npm"]
        }
    ],

    projects: [
        {
            emoji:  "🔄",
            title:  "Order To Cash Cockpit",
            desc:   "Enterprise-grade Order To Cash automation cockpit built at SAP. Nominated for the prestigious Hasso Plattner Founders' Award 2018 for its significant business impact.",
            tags:   ["SAP ABAP", "SAP UI5", "SAP ERP", "Fiori", "OData"],
            github: "",
            live:   "",
            featured: true
        },
        {
            emoji:  "📊",
            title:  "Vehicle Expense Tracker",
            desc:   "Full-stack expense tracking app with Google Sheets as a live database. Features SAP Document AI extraction, analytics dashboard with sap.viz charts, key document management, and validation workflow.",
            tags:   ["SAP CAP", "UI5", "Google Sheets", "Document AI", "Node.js"],
            github: "#",
            live:   "#",
            featured: true
        },
        {
            emoji:  "🌐",
            title:  "Personal Portfolio",
            desc:   "This portfolio site built with SAP CAP backend and pure HTML/CSS/JS frontend (no framework). Single-page MVC architecture, army-green dark theme, smooth scroll animations.",
            tags:   ["SAP CAP", "HTML5", "CSS3", "JavaScript", "MVC"],
            github: "#",
            live:   "#",
            featured: true
        }
    ],

    stats: [
        { value: "10+",  label: "Years SAP Experience" },
        { value: "15+",  label: "Projects Delivered" },
        { value: "SAP",  label: "Certified HANA 2.0" },
        { value: "2×",   label: "SAP Award Winner" }
    ]
};
