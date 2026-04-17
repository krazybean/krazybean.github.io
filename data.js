const profile = {
  name: "Juan Castro",
  title: "Backend Engineer • Systems • Infrastructure",
  tagline: "I build production-minded systems with a focus on clarity, reliability, and strong domain modeling.",

  about: `I’m a backend-focused engineer with a background in Linux systems, infrastructure, and database-heavy applications.

I tend to think in systems — how things connect, where they break, and how to make them easier to reason about over time.

Most of my work has been around building and hardening production systems, where correctness, observability, and simplicity matter more than cleverness.

Lately, I’ve been focused on building small, well-polished tools and thinking more deeply about control planes and multi-tenant system design.

I enjoy building things that are small, clear, and hold up under real-world constraints.`,

  focus: [
    "Building small, polished Python CLI tools",
    "Designing a multi-tenant infrastructure control plane (SaSSy)",
    "Improving CI/CD and release workflows",
    "Exploring scalable system design patterns"
  ],

  projects: [
    {
      name: "Hayabusa",
      description: "Local-first security detection system",
      details: [
        "Event ingestion → ClickHouse pipeline",
        "SQL-based detection rules",
        "Modular, containerized architecture"
      ],
      repo: "https://github.com/krazybean/Hayabusa"
    },
    {
      name: "Bean",
      description: "Production social platform backend",
      details: [
        "Authorization boundary enforcement",
        "Admin capability system",
        "Audit-first hardening approach"
      ],
      repo: "https://github.com/krazybean/Bean"
    },
    {
      name: "justifycert",
      description: "TLS certificate analyzer",
      details: [
        "Expiry, SAN, and chain validation",
        "Structured JSON output",
        "Actionable CLI results"
      ],
      repo: "https://github.com/krazybean/justifycert"
    },
    {
      name: "pybusy",
      description: "Minimal CLI spinner for Python",
      details: [
        "Context manager API",
        "TTY-aware output",
        "Zero dependencies"
      ],
      repo: "https://github.com/krazybean/pybusy"
    }
  ],
 

  principles: [
    "Ship > perfect",
    "Clarity over cleverness",
    "Model the domain correctly before scaling",
    "Additive and reversible changes",
    "Server-enforced trust boundaries",
    "Observability is not optional"
  ],

  tech: {
    backend: ["Python", "Django", "FastAPI", "Node.js", "TypeScript"],
    data: ["PostgreSQL", "MySQL", "Relational modeling"],
    systems: ["Linux", "Service architecture", "Background jobs"],
    infra: ["AWS", "Docker", "CI/CD"]
  }
};
