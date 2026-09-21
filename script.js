"use strict";

/*
  ADD OR EDIT PROJECTS HERE
  -------------------------
  1. Copy one object in PROJECTS.
  2. Change its title, summary, tools, and case-study text.
  3. Paste your GitHub repo URL in repoUrl and Power BI/public demo URL in liveUrl.
*/
const PROJECTS = [
  {
    id: "ecommerce-sales",
    number: "01",
    title: "E-commerce Sales Analysis",
    category: ["Power BI", "SQL", "Excel"],
    summary: "A sales performance dashboard designed to compare revenue, orders, profit, products, regions, and monthly trends in one decision-ready view.",
    question: "Which products, categories, regions, and time periods are driving sales performance—and where should the business investigate further?",
    process: [
      "Clean and validate order, customer, product, and date fields.",
      "Create consistent measures for revenue, orders, quantity, and profit.",
      "Compare trends across category, region, product, and time.",
      "Design an interactive dashboard with focused filters and KPI cards."
    ],
    insights: [
      "Revenue, order, quantity, and profit performance",
      "Month-over-month sales trend and seasonal movement",
      "Category, product, and regional contribution",
      "High-value segments and areas needing review"
    ],
    tools: ["Power BI", "DAX", "SQL", "Excel", "Power Query"],
    repoUrl: "",
    liveUrl: "",
    accent: "#38d9ff",
    glow: "rgba(56,217,255,.14)"
  },
  {
    id: "employee-attendance",
    number: "02",
    title: "Employee Attendance Dashboard",
    category: ["Power BI", "Excel"],
    summary: "An attendance monitoring dashboard that turns daily records into clear workforce patterns across presence, leave, work from home, and teams.",
    question: "How is attendance changing over time, and which teams or periods need closer operational attention?",
    process: [
      "Standardize employee, date, team, and attendance-status values.",
      "Build measures for attendance, leave, WFH, and presence trends.",
      "Add team and date filters for drill-down analysis.",
      "Present exceptions alongside the overall workforce pattern."
    ],
    insights: [
      "Attendance, leave, and work-from-home overview",
      "Daily and monthly trend monitoring",
      "Team-wise comparison and exception visibility",
      "Operational patterns for workforce planning"
    ],
    tools: ["Power BI", "Excel", "Power Query", "DAX"],
    repoUrl: "",
    liveUrl: "",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,.14)"
  },
  {
    id: "hr-analytics",
    number: "03",
    title: "HR Analytics Dashboard",
    category: ["Power BI", "SQL"],
    summary: "A workforce dashboard for exploring headcount, attrition, departments, roles, demographics, and employee patterns without losing business context.",
    question: "Where are workforce changes concentrated, and which employee segments deserve deeper HR investigation?",
    process: [
      "Validate employee attributes and define consistent HR measures.",
      "Model headcount, attrition, role, department, and tenure data.",
      "Segment results to reveal meaningful workforce differences.",
      "Build a clear executive view with drill-down filters."
    ],
    insights: [
      "Headcount and attrition overview",
      "Department, role, and tenure comparison",
      "Employee demographic and experience patterns",
      "Segments that need targeted follow-up"
    ],
    tools: ["Power BI", "SQL", "DAX", "Data Modeling"],
    repoUrl: "",
    liveUrl: "",
    accent: "#4d7cff",
    glow: "rgba(77,124,255,.14)"
  }
];

const projectGrid = document.querySelector("#project-grid");
const caseDialog = document.querySelector("#case-dialog");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function dashboardPreview(project, index) {
  const paths = [
    "M5 82 C30 76, 38 43, 64 55 S104 72, 128 34 S170 26, 205 12",
    "M5 75 C28 58, 44 68, 68 42 S103 18, 129 43 S171 61, 205 25",
    "M5 84 C29 45, 49 69, 73 51 S111 67, 133 28 S171 48, 205 18"
  ];
  return `
    <div class="dashboard-window" style="--chart-color:${project.accent}">
      <div class="dashboard-top"><span>Analytics overview</span><span class="dashboard-dots"><i></i><i></i><i></i></span></div>
      <div class="dashboard-kpis">
        <div><span>PRIMARY KPI</span><strong>${index === 0 ? "Revenue" : index === 1 ? "Attendance" : "Headcount"}</strong></div>
        <div><span>COMPARISON</span><strong>${index === 0 ? "Orders" : index === 1 ? "Leave" : "Attrition"}</strong></div>
        <div><span>VIEW</span><strong>${index === 0 ? "Monthly" : index === 1 ? "Team" : "Department"}</strong></div>
      </div>
      <div class="chart-grid">
        <div class="chart-box"><span>Trend analysis</span><svg viewBox="0 0 210 100" role="img" aria-label="Decorative trend chart"><defs><linearGradient id="area-${project.id}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${project.accent}" stop-opacity=".35"/><stop offset="1" stop-color="${project.accent}" stop-opacity="0"/></linearGradient></defs><path d="${paths[index]} L205 96 L5 96 Z" fill="url(#area-${project.id})"/><path d="${paths[index]}" fill="none" stroke="${project.accent}" stroke-width="3" stroke-linecap="round"/><g fill="${project.accent}"><circle cx="64" cy="${index === 0 ? 55 : index === 1 ? 42 : 51}" r="3"/><circle cx="128" cy="${index === 0 ? 34 : index === 1 ? 43 : 28}" r="3"/><circle cx="205" cy="${index === 0 ? 12 : index === 1 ? 25 : 18}" r="3"/></g></svg></div>
        <div class="chart-box donut"><span>Key segment</span><div class="donut-circle"></div></div>
      </div>
    </div>`;
}

function externalProjectLink(url, label) {
  if (!url) return `<span class="project-link disabled" title="Add this URL in script.js">${label}: add link</span>`;
  return `<a class="project-link" href="${url}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`;
}

function renderProjects(filter = "all") {
  if (!projectGrid) return;
  const visible = PROJECTS.filter(project => filter === "all" || project.category.includes(filter));
  projectGrid.innerHTML = visible.map(project => {
    const index = PROJECTS.findIndex(item => item.id === project.id);
    return `
      <article class="project-card reveal visible" style="--preview-glow:${project.glow}">
        <div class="project-preview">${dashboardPreview(project, index)}</div>
        <div class="project-content">
          <div class="project-meta"><span>Case study ${project.number}</span><span>${project.category[0]}</span></div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="project-tags">${project.tools.map(tool => `<span>${tool}</span>`).join("")}</div>
          <div class="project-actions">
            <button class="project-link primary-link project-more" type="button" data-project="${project.id}">View case study <span aria-hidden="true">↗</span></button>
            ${externalProjectLink(project.repoUrl, "GitHub")}
            ${project.liveUrl ? externalProjectLink(project.liveUrl, "Live dashboard") : ""}
          </div>
        </div>
      </article>`;
  }).join("");
}

renderProjects();

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    renderProjects(button.dataset.filter);
  });
});

function openCaseStudy(projectId) {
  const project = PROJECTS.find(item => item.id === projectId);
  if (!project || !caseDialog) return;
  document.querySelector("#case-label").textContent = `Case study ${project.number} · ${project.category[0]}`;
  document.querySelector("#case-title").textContent = project.title;
  document.querySelector("#case-summary").textContent = project.summary;
  document.querySelector("#case-question").textContent = project.question;
  document.querySelector("#case-process").innerHTML = project.process.map(step => `<li>${step}</li>`).join("");
  document.querySelector("#case-insights").innerHTML = project.insights.map(insight => `<li>${insight}</li>`).join("");
  document.querySelector("#case-tools").innerHTML = project.tools.map(tool => `<span>${tool}</span>`).join("");
  caseDialog.showModal();
  document.body.style.overflow = "hidden";
}

projectGrid?.addEventListener("click", event => {
  const trigger = event.target.closest(".project-more");
  if (trigger) openCaseStudy(trigger.dataset.project);
});

function closeDialog() {
  caseDialog?.close();
  document.body.style.overflow = "";
}

document.querySelector(".dialog-close")?.addEventListener("click", closeDialog);
caseDialog?.addEventListener("click", event => { if (event.target === caseDialog) closeDialog(); });
caseDialog?.addEventListener("close", () => { document.body.style.overflow = ""; });

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

function closeNav() {
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Open navigation menu");
  navMenu?.classList.remove("open");
}

navToggle?.addEventListener("click", () => {
  const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(willOpen));
  navToggle.setAttribute("aria-label", willOpen ? "Close navigation menu" : "Open navigation menu");
  navMenu?.classList.toggle("open", willOpen);
});

document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", closeNav));
document.addEventListener("keydown", event => { if (event.key === "Escape") { closeNav(); if (caseDialog?.open) closeDialog(); } });
window.addEventListener("resize", () => { if (window.innerWidth > 780) closeNav(); });

const header = document.querySelector(".site-header");
function updateHeader() { header?.classList.toggle("scrolled", window.scrollY > 20); }
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55%", threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal:not(.visible)").forEach(element => revealObserver.observe(element));

if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  document.querySelectorAll("[data-tilt]").forEach(card => {
    card.addEventListener("pointermove", event => {
      const bounds = card.getBoundingClientRect();
      const rotateX = ((event.clientY - bounds.top) / bounds.height - .5) * -8;
      const rotateY = ((event.clientX - bounds.left) / bounds.width - .5) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });

  const glow = document.querySelector(".cursor-glow");
  window.addEventListener("pointermove", event => {
    if (!glow) return;
    glow.style.opacity = "1";
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
