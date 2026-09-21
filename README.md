Neeraj Kumar — Data Analyst Portfolio

A modern, responsive portfolio website presenting my data analytics skills, projects, resume, and professional contact details.

Overview

This portfolio showcases how I use data cleaning, analysis, visualization, and business reporting to turn raw data into useful insights. It is built with HTML, CSS, and JavaScript and works across desktop, tablet, and mobile devices.

Key Features

Professional dark-theme interface

Fully responsive desktop, tablet, and mobile layout

Smooth scrolling and animated section reveals

Mobile navigation menu

Interactive project filters and case-study dialogs

3D hover and tilt effects

Downloadable resume button

Clickable email, phone, LinkedIn, and GitHub contact cards

Accessible keyboard focus styles

No contact form, message submission, or data storage

Portfolio Sections

Home

About

Skills

Projects

Resume

Contact

Featured Projects

1. E-commerce Sales Analysis

A sales-performance dashboard for analysing revenue, orders, profit, products, regions, and monthly trends.

Tools: Power BI, DAX, SQL, Excel, Power Query

2. Employee Attendance Dashboard

An attendance-monitoring dashboard showing presence, leave, work-from-home, team comparisons, and workforce trends.

Tools: Power BI, Excel, Power Query, DAX

3. HR Analytics Dashboard

A workforce dashboard for exploring headcount, attrition, departments, roles, demographics, and employee patterns.

Tools: Power BI, SQL, DAX, Data Modeling

Technical Skills

Data Analytics: Data Cleaning, Data Preparation, Data Transformation, EDA, Data Validation, KPI Reporting, Business Insights

Excel: Pivot Tables, VLOOKUP, XLOOKUP, INDEX-MATCH, IF, COUNTIF, SUMIF, Charts, Power Query

SQL: SELECT, WHERE, GROUP BY, HAVING, JOINs, Subqueries, CTEs, Aggregate Functions, Window Functions

Power BI: Data Modeling, Power Query, DAX, KPI Cards, Slicers, Interactive Dashboards

Python: Pandas, NumPy, Matplotlib, Seaborn

Visualization: Power BI and Tableau (Basic)

Core Skills: Analytical Thinking, Problem Solving, Attention to Detail, Business Reporting

Technologies Used

HTML5

CSS3

JavaScript

Responsive Design

CSS Grid and Flexbox

Project Structure

portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── neeraj-data-analyst.webp
│   └── neeraj-kumar-resume.pdf
└── README.md

Run Locally

Download or clone this repository.

Confirm that index.html, style.css, and script.js use these exact filenames.

Keep the complete assets folder beside the three code files.

Open index.html in a browser.

You can also open the project in VS Code and use the Live Server extension.

Add or Update a Project

Open script.js and find the PROJECTS array. Copy an existing project object and update its content:

{
  id: "unique-project-id",
  number: "04",
  title: "Project Name",
  category: ["Power BI", "SQL"],
  summary: "Short project description",
  question: "Business question solved by the project",
  process: ["Step 1", "Step 2", "Step 3"],
  insights: ["Insight 1", "Insight 2"],
  tools: ["Power BI", "SQL", "Excel"],
  repoUrl: "https://github.com/USERNAME/REPOSITORY",
  liveUrl: "https://YOUR-PUBLIC-DASHBOARD-LINK",
  accent: "#38d9ff",
  glow: "rgba(56,217,255,.14)"
}

Use an empty liveUrl when the project does not have a safe public dashboard. Never upload confidential company or personal data.

Deploy on GitHub Pages

Create a public GitHub repository.

Upload index.html, style.css, script.js, README.md, and the complete assets folder to the repository root.

Make sure index.html is visible on the first level of the repository.

Open Settings → Pages.

Under Build and deployment, select Deploy from a branch.

Select the main branch and / (root) folder, then click Save.

Wait for GitHub to show the live website URL.

Contact

LinkedIn

GitHub

License

This portfolio is intended for personal and professional showcase purposes.

