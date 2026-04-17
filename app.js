function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function svgIcon(name) {
  const icons = {
    spinner: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 4v3m0 10v3M4 12h3m10 0h3M6.2 6.2l2.1 2.1m7.4 7.4l2.1 2.1M17.8 6.2l-2.1 2.1M8.3 15.7l-2.1 2.1" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    `,
    shield: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 3l7 3v6c0 4.4-2.7 7.8-7 9-4.3-1.2-7-4.6-7-9V6l7-3z" />
        <path d="M9.5 12.1l1.7 1.7 3.6-3.6" />
      </svg>
    `,
    api: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M8 11l8-4m-8 6l8 4" />
      </svg>
    `,
    radar: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 12l5-5" />
        <path d="M12 4v3m8 5h-3M12 17v3M4 12h3" />
      </svg>
    `,
    code: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
      </svg>
    `,
    container: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 8l8-4 8 4-8 4-8-4zm0 0v8l8 4 8-4V8" />
        <path d="M12 12v8" />
      </svg>
    `,
    database: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    `,
    terminal: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 6h16v12H4z" />
        <path d="M8 10l-2 2 2 2m4 0h4" />
      </svg>
    `,
    cloud: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M7.5 18h9a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 5 11.5 3.5 3.5 0 0 0 7.5 18z" />
      </svg>
    `,
    gear: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3m0 12v3M4.9 4.9l2.1 2.1m10 10l2.1 2.1M3 12h3m12 0h3M4.9 19.1l2.1-2.1m10-10l2.1-2.1" />
      </svg>
    `
  };

  return icons[name] || icons.code;
}

function getProjectIcon(projectName) {
  const normalized = projectName.toLowerCase();

  if (normalized.includes("pybusy")) return svgIcon("spinner");
  if (normalized.includes("justifycert")) return svgIcon("shield");
  if (normalized.includes("bean")) return svgIcon("api");
  if (normalized.includes("hayabusa")) return svgIcon("radar");

  return svgIcon("code");
}

function getStackIcon(item) {
  const normalized = item.toLowerCase();

  if (normalized.includes("python") || normalized.includes("typescript") || normalized.includes("node")) return svgIcon("code");
  if (normalized.includes("docker")) return svgIcon("container");
  if (normalized.includes("postgres") || normalized.includes("mysql") || normalized.includes("modeling")) return svgIcon("database");
  if (normalized.includes("linux")) return svgIcon("terminal");
  if (normalized.includes("aws")) return svgIcon("cloud");
  if (normalized.includes("ci/cd")) return svgIcon("gear");
  if (normalized.includes("fastapi")) return svgIcon("gear");
  if (normalized.includes("django")) return svgIcon("gear");
  if (normalized.includes("service")) return svgIcon("api");
  if (normalized.includes("jobs")) return svgIcon("gear");

  return svgIcon("code");
}

function renderHero() {
  const heroSummary = profile.about.trim().split("\n\n")[0];
  return `
    <div class="hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">SYSTEM CONSOLE</p>
        <h1>${escapeHtml(profile.name)}</h1>
        <p class="subtitle accent">${escapeHtml(profile.title)}</p>
        <p class="tagline">${escapeHtml(heroSummary)}</p>
        <div class="hero-links" aria-label="External links">
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">[GITHUB]</a>
          <a href="https://www.linkedin.com/in/juan-castro-dev/" target="_blank" rel="noopener noreferrer">[LINKEDIN]</a>
          <a href="/docs/Juan-Castro-Resume.pdf" target="_blank" rel="noopener noreferrer">[RESUME]</a>
        </div>
      </div>
      <pre class="hero-panel" aria-label="profile snippet"><code>${escapeHtml(`class Engineer:
    name = "${profile.name}"
    role = "${profile.title}"
    focus = ["Python", "Linux", "Infrastructure"]`)}</code></pre>
    </div>
  `;
}

function renderList(items, className = "list") {
  return `
    <ul class="${className}">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function renderSection(id, title, content, label = title) {
  return `
    <section id="${id}" class="section" aria-labelledby="${id}-title">
      <p class="section-label">${escapeHtml(label)}</p>
      <h2 class="section-title" id="${id}-title">${escapeHtml(title)}</h2>
      ${content}
    </section>
  `;
}

function renderProjects() {
  const cards = profile.projects
    .map(
      (project) => `
        <article class="project project-card">
          <h3 class="project-name">
            <span class="project-icon">${getProjectIcon(project.name)}</span>
            <span>${escapeHtml(project.name)}</span>
          </h3>
          <p class="project-description">${escapeHtml(project.description)}</p>
          <ul class="project-details">
            ${project.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}
          </ul>
          ${project.name === "Hayabusa" ? `
          <div class="project-diagram">
            <div class="project-diagram-divider"></div>
            <div class="pipeline-container">
              <div class="pipeline-node">Windows Event Logs</div>
              <div class="pipeline-arrow">↓</div>
              <div class="pipeline-node">PowerShell Collector</div>
              <div class="pipeline-arrow">↓</div>
              <div class="pipeline-node">Vector</div>
              <div class="pipeline-arrow">↓</div>
              <div class="pipeline-node">NATS</div>
              <div class="pipeline-arrow">↓</div>
              <div class="pipeline-node">hayabusa-ingest (Go)</div>
              <div class="pipeline-arrow">↓</div>
              <div class="pipeline-node">ClickHouse</div>
              <div class="pipeline-arrow">↓</div>
              <div class="pipeline-node">SQL Detection Rules</div>
              <div class="pipeline-arrow">↓</div>
              <div class="pipeline-node">Alerts / UI</div>
            </div>
          </div>
          ` : ""}
          <div class="project-footer">
            <a class="project-repo" href="${escapeHtml(project.repo)}" target="_blank" rel="noopener noreferrer">→ SOURCE</a>
          </div>
        </article>
      `
    )
    .join("");

  return renderSection("projects", "ACTIVE_MODULES", `<div class="projects-grid">${cards}</div>`, "ACTIVE_MODULES");
}

function renderSystemHistory() {
  return renderSection(
    "system-history",
    "SYSTEM_HISTORY",
    `
      <div class="system-history-grid">
        <article class="history-card">
          <span class="history-company">:: RACKSPACE</span>
          <p>Cloud database systems at scale</p>
          <p class="history-impact">→ 300k+ databases, 1.5M websites</p>
        </article>
        <article class="history-card">
          <span class="history-company">:: LIQUID WEB</span>
          <p>Infrastructure provisioning architecture</p>
          <p class="history-impact">→ Migrated 400k+ customers</p>
        </article>
        <article class="history-card">
          <span class="history-company">:: MAILGUN</span>
          <p>High-throughput validation + stream processing</p>
          <p class="history-impact">→ 500k–8M events/day</p>
        </article>
        <article class="history-card">
          <span class="history-company">:: COMMANDLINK</span>
          <p>Security platform infrastructure + event processing</p>
          <p class="history-impact">→ multi-tenant systems, rule engines, telemetry pipelines</p>
        </article>
      </div>
    `,
    "SYSTEM_HISTORY"
  );
}

function renderNow() {
  return `
    <section id="now" class="section" aria-labelledby="now-label">
      <p class="section-label" id="now-label">NOW</p>
      <ul class="list">
        <li>Building small, production-grade developer tooling</li>
        <li>Designing SaSSy (multi-tenant infrastructure control plane)</li>
        <li>Refining system design and operational clarity</li>
      </ul>
    </section>
  `;
}

function renderTechStack() {
  const cards = Object.entries(profile.tech)
    .flatMap(([area, items]) =>
      items.map(
        (item) => `
          <article class="stack-tile">
            <div class="stack-icon" aria-hidden="true">${getStackIcon(item)}</div>
            <span class="stack-label">${escapeHtml(area)}</span>
            <h3>${escapeHtml(item)}</h3>
          </article>
        `
      )
    )
    .join("");

  return renderSection("tech", "ENGINEERING_STACK", `<div class="tech-grid">${cards}</div>`, "ENGINEERING_STACK");
}

function renderPrinciples() {
  const cards = profile.principles
    .map(
      (principle, index) => `
        <article class="principle-card">
          <span class="principle-index">${String(index + 1).padStart(2, "0")}</span>
          <p>${escapeHtml(principle)}</p>
        </article>
      `
    )
    .join("");

  return renderSection("principles", "ENGINEERING_PRINCIPLES", `<div class="principles-grid">${cards}</div>`, "ENGINEERING_PRINCIPLES");
}

function renderApp() {
  const content = [
    renderProjects(),
    renderSystemHistory(),
    renderNow(),
    renderTechStack(),
    renderPrinciples()
  ].join("");

  document.getElementById("hero").innerHTML = renderHero();
  document.getElementById("content").innerHTML = content;
  document.getElementById("footer").innerHTML = `
    <p>© ${new Date().getFullYear()} ${escapeHtml(profile.name)}. Built for clarity, reliability, and real systems.</p>
  `;
}

document.addEventListener("DOMContentLoaded", renderApp);
