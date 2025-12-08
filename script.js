function seeMyWork() {
  window.location.href = "projects.html";
}

function aboutMe() {
  window.location.href = "about.html";
}

// Experience detail interaction for About page
const experienceData = {
  bell: {
    title: "Software Quality Assurance Specialist (Co-op)",
    company: "Bell Canada — Fibe TV Quality Department",
    dates: "Sep 2024 - Aug 2025",
    logo: "pictures/bell.png",
    bullets: [
      "Built end-to-end automated tests for Bell Fibe TV (2M+ users), reducing manual testing by 50% using Maestro.",
      "Integrated automated QA checks into GitLab CI/CD, cutting deployment failure rates by 20% and accelerating release cycles.",
      "Analyzed crash data with Firebase Crashlytics, identifying root causes and reducing app crashes by 20%.",
      "Developed accessibility validation scripts ensuring WCAG 2.0 compliance across multiple devices.",
      "Collaborated cross-functionally with development, product, and QA teams to align testing outcomes with business KPIs.",
      "Presented quality insights and performance metrics to management to support product improvement decisions."
    ],
    tools: [
      "Maestro automation",
      "GitLab CI/CD",
      "Firebase Crashlytics",
      "WCAG 2.0 validation",
      "Cross-team alignment",
      "Quality reporting"
    ]
  },
  ircc: {
    title: "Junior Programmer (Co-op)",
    company: "Immigration, Refugees and Citizenship Canada — IM, Data & Cyber Security",
    dates: "Jan 2024 - Aug 2024",
    logo: "pictures/ircc.jpg",
    bullets: [
      "Developed Oracle BI and SQL dashboards for cybersecurity and data-quality monitoring, speeding incident triage and decisions.",
      "Designed and implemented IBM Netezza ETL pipelines for large-scale analytics to improve data accessibility and reporting reliability.",
      "Built monitoring scripts to track report usage with ~80% accuracy, informing retirement of low-value assets.",
      "Optimized MySQL queries to reduce report load times by 30%, improving user experience.",
      "Translated analytical findings into recommendations for data and cybersecurity stakeholders to support policy enhancements."
    ],
    tools: [
      "Oracle BI",
      "SQL (MySQL, Netezza)",
      "ETL pipelines",
      "Usage monitoring scripts",
      "Performance tuning",
      "Cyber/data analytics"
    ]
  },
  ssc: {
    title: "Junior Business and IT Analyst (Co-op)",
    company: "Shared Services Canada — Telecommunications",
    dates: "May 2023 - Dec 2023",
    logo: "pictures/ssc.jpeg",
    bullets: [
      "Delivered interactive dashboards with Power BI, DAX, and Azure, enhancing telecom service planning by 25%.",
      "Collaborated with stakeholders to define KPIs and automate internal workflows using Power Automate, cutting manual effort by 20%.",
      "Presented analytical reports to senior management, supporting cost-optimization and service delivery decisions."
    ],
    tools: [
      "Power BI + DAX",
      "Azure data workflows",
      "Power Automate",
      "KPI design",
      "Executive reporting"
    ]
  }
};

function renderExperience(id) {
  const detail = document.getElementById("experience-detail");
  const placeholder = document.getElementById("experience-placeholder");
  if (!detail || !experienceData[id]) return;

  const data = experienceData[id];
  const title = detail.querySelector('[data-detail="title"]');
  const company = detail.querySelector('[data-detail="company"]');
  const dates = detail.querySelector('[data-detail="dates"]');
  const logo = detail.querySelector('[data-detail="logo"]');
  const bullets = detail.querySelector('[data-detail="bullets"]');
  const tools = detail.querySelector('[data-detail="tools"]');

  if (detail.classList.contains("collapsed")) {
    detail.classList.remove("collapsed");
    if (placeholder) placeholder.classList.remove("show");
  }

  if (title) title.textContent = data.title;
  if (company) company.textContent = data.company;
  if (dates) dates.textContent = data.dates;
  if (logo) logo.src = data.logo;

  if (bullets) {
    bullets.innerHTML = "";
    data.bullets.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      bullets.appendChild(li);
    });
  }

  if (tools) {
    tools.innerHTML = "";
    data.tools.forEach((item) => {
      const pill = document.createElement("span");
      pill.className = "pill";
      pill.textContent = item;
      tools.appendChild(pill);
    });
  }
}

function initExperienceCards() {
  const cards = document.querySelectorAll(".experience-card[data-experience]");
  if (!cards.length) return;

  const setCardLabel = (card, text) => {
    const label = card.querySelector(".pill");
    if (label) label.textContent = text;
  };

  const handleCardAction = (card) => {
    if (card.classList.contains("disabled")) return;

    const detail = document.getElementById("experience-detail");
    const placeholder = document.getElementById("experience-placeholder");
    const isActive = card.classList.contains("active");

    if (isActive) {
      cards.forEach((c) => {
        c.classList.remove("active");
        setCardLabel(c, "Open");
      });
      if (detail) detail.classList.add("collapsed");
      if (placeholder) placeholder.classList.add("show");
      return;
    }

    cards.forEach((c) => {
      c.classList.remove("active");
      setCardLabel(c, "Open");
    });
    card.classList.add("active");
    setCardLabel(card, "Hide");
    renderExperience(card.dataset.experience);
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => handleCardAction(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCardAction(card);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initExperienceCards();
});
