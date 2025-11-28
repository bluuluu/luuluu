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

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("disabled")) return;
      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      renderExperience(card.dataset.experience);
    });
  });
}

function initCloseButton() {
  const closeBtn = document.querySelector(".close-detail");
  const detail = document.getElementById("experience-detail");
  const placeholder = document.getElementById("experience-placeholder");
  if (!closeBtn || !detail) return;

  closeBtn.addEventListener("click", () => {
    detail.classList.add("collapsed");
    if (placeholder) placeholder.classList.add("show");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initExperienceCards();
  initCloseButton();
});
