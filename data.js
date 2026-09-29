const profile = {
  name: "Juan Castro",
  title: "Backend Engineer • Systems • Infrastructure",
  about: "I’m a backend and systems engineer focused on infrastructure, developer tooling, and event-driven applications.",

  focus: [
    "Building native macOS tooling around lightweight Linux VMs",
    "Developing a provider-neutral model API across TypeScript, Python, and Rust",
    "Building local security detection and event-processing pipelines"
  ],

  history: [
    { company: "RACKSPACE", description: "Cloud database systems at scale", impact: "300k+ databases, 1.5M websites" },
    { company: "LIQUID WEB", description: "Infrastructure provisioning architecture", impact: "Migrated 400k+ customers" },
    { company: "MAILGUN", description: "High-throughput validation + stream processing", impact: "500k–8M events/day" },
    { company: "COMMANDLINK", description: "Security platform infrastructure + event processing", impact: "multi-tenant systems, rule engines, telemetry pipelines" }
  ],

  projects: [
    {
      name: "Hayabusa",
      icon: "radar",
      description: "Local-first security detection playground built around an event-to-alert pipeline.",
      details: [
        "One real Windows host lane; Linux collector templates and runbooks",
        "Local Docker Compose stack with Grafana alerting and UI"
      ],
      repo: "https://github.com/krazybean/Hayabusa",
      pipeline: ["Windows Events", "Vector", "NATS", "hayabusa-ingest (Go)", "ClickHouse", "SQL Detection", "Alerts / UI"]
    },
    {
      name: "Harpoon",
      icon: "container",
      description: "Docker-compatible Apple Silicon macOS container environment using Apple Virtualization.framework and a minimal Linux VM.",
      details: [
        "Swift host runtime bridges Docker CLI/context over Unix socket and vsock",
        "Alpine guest runs Docker Engine; networking and VirtioFS bind mounts",
        "Tauri desktop client, CLI, and Compose workflows"
      ],
      repo: "https://github.com/krazybean/Harpoon"
    },
    {
      name: "Conduit",
      icon: "api",
      description: "Small provider-neutral driver for local and hosted model APIs, implemented in TypeScript, Python, and Rust.",
      details: [
        "OpenAI-compatible, Ollama, Anthropic, and Gemini drivers",
        "Shared generation, streaming, and tool-call APIs; structured output varies by provider",
        "Normalized errors, deadlines, cancellation, and cross-language conformance fixtures"
      ],
      repo: "https://github.com/krazybean/Conduit"
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
    languages: ["Swift", "TypeScript", "Python", "Rust", "Go", "SQL"],
    systems: ["Apple Virtualization", "Alpine Linux", "VirtioFS", "Docker"],
    data: ["Vector", "NATS", "ClickHouse"]
  }
};
