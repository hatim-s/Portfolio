export type Project = {
  name: string;
  date: string;
  year: string;
  access: "Public repo" | "Private build";
  description: string;
  stack: string[];
  repository?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "Rulebook",
    date: "2026-07-17",
    year: "2026",
    access: "Private build",
    description:
      "A version-controlled source of truth for agent instructions, with three-way synchronization that propagates shared rules without erasing project-specific edits.",
    stack: ["Bun", "TypeScript", "Git", "Agent tooling"],
  },
  {
    name: "AI App Builder",
    date: "2026-07-11",
    year: "2026",
    access: "Private build",
    description:
      "A human and an AI agent co-edit the same multi-page application through granular operations. JSON specs, Convex, an HTML-like authoring DSL, and one shared renderer keep draft, collaboration, and publishing aligned.",
    stack: ["Next.js", "Convex", "Agent runtime", "JSON Render"],
  },
  {
    name: "Planloft",
    date: "2026-07-05",
    year: "2026",
    access: "Public repo",
    description:
      "A Codex and Claude plugin that captures agent-written plans into a themed global store, then previews, versions, and deploys them as expiring review links.",
    stack: ["TypeScript", "Codex plugins", "GitHub Pages", "CLI"],
    repository: "https://github.com/hatim-s/planloft",
  },
  {
    name: "SubSlot",
    date: "2026-06-08",
    year: "2026",
    access: "Private build",
    description:
      "Explainable substitution planning for schools: rank available teachers by load and fit, review OCR-imported timetables, and move from absence to fair cover in under a minute.",
    stack: ["Next.js", "Expo", "Explainable ranking", "OCR"],
  },
  {
    name: "Bolt",
    date: "2026-05-29",
    year: "2026",
    access: "Public repo",
    description:
      "A tiny path-indexed React state store with immutable nested writes, fine-grained subscriptions, typed paths, and derived dependency graphs—about 4.3 kB gzip.",
    stack: ["React", "TypeScript", "useSyncExternalStore", "npm"],
    repository: "https://github.com/hatim-s/bolt",
    live: "https://www.npmjs.com/package/@hatimcodes/bolt",
  },
  {
    name: "Flint",
    date: "2026-02-08",
    year: "2026",
    access: "Public repo",
    description:
      "An AI-native note-taking experiment built around a clean Next.js surface and a lightweight Hono backend boundary.",
    stack: ["Next.js", "Hono", "TypeScript", "AI"],
    repository: "https://github.com/hatim-s/flint",
  },
  {
    name: "EatClean",
    date: "2025-12-25",
    year: "2025",
    access: "Public repo",
    description:
      "Turn natural-language meals into structured nutrition logs, keep multiple entries per day, and surface a usable daily summary instead of a calorie spreadsheet.",
    stack: ["Next.js", "TypeScript", "AI extraction", "Nutrition data"],
    repository: "https://github.com/hatim-s/eatclean",
    live: "https://eatcleanai.vercel.app",
  },
  {
    name: "Zephyr",
    date: "2025-10-20",
    year: "2025",
    access: "Private build",
    description:
      "An AI-native meeting knowledgebase: a Chrome capture client, durable audio assembly, diarized transcription, persona-aware insight surfaces, and chat-RAG over the full corpus.",
    stack: ["Cloudflare", "Durable Objects", "R2", "RAG"],
    live: "https://zephyr-kb.vercel.app",
  },
  {
    name: "Graphyt",
    date: "2025-08-16",
    year: "2025",
    access: "Public repo",
    description:
      "An AI-native second brain for everyday journaling and knowledge capture, with guided note templates and an authenticated personal workspace.",
    stack: ["Next.js", "Supabase", "TypeScript", "AI templates"],
    repository: "https://github.com/hatim-s/graphyt.ai",
    live: "https://graphyt-ai.vercel.app",
  },
  {
    name: "Sprig / Brain Bloom",
    date: "2025-05-04",
    year: "2025",
    access: "Public repo",
    description:
      "Prompt-to-mindmap generation with an interactive canvas, AI-assisted branch editing, operation-based autosave, share routes, and local Claude or Codex subscription-backed generation.",
    stack: ["Next.js", "Convex", "Clerk", "XYFlow"],
    repository: "https://github.com/hatim-s/brain-bloom",
    live: "https://brain-bloom.vercel.app",
  },
  {
    name: "FinFlow",
    date: "2025-01-19",
    year: "2025",
    access: "Public repo",
    description:
      "A monthly expense tool that replaces tables with an interactive Sankey view, making the direction and weight of personal cash flow immediately visible.",
    stack: ["Next.js", "Nivo", "Tailwind", "Data visualization"],
    repository: "https://github.com/hatim-s/finflow",
    live: "https://finflow-hatims.vercel.app",
  },
];

export const archive = [
  ["2024-11-02", "Dashify", "Dashboard composition toolkit", "https://github.com/hatim-s/dashify"],
  ["2024-11-01", "HS Component Library", "ShadCN-based component experiments", "https://github.com/hatim-s/hs-component-lib"],
  ["2024-05-12", "Gem5 Pipeline", "Automated simulation and benchmark pipeline", "https://github.com/hatim-s/gem5-pipeline"],
  ["2024-02-15", "FOSSMeet", "Conference web experience", "https://github.com/hatim-s/fossmeet"],
  ["2024-01-03", "Game Finder", "Search, filter, and discover games", "https://github.com/hatim-s/game-finder"],
  ["2023-10-22", "C Function Library", "Algorithms and data structures for NITC", "https://github.com/hatim-s/C-Function-Library"],
  ["2023-09-07", "TCP + SSL Group Chat", "Certificate-backed terminal chat", "https://github.com/hatim-s/TCP-SSL-Group-Chat"],
  ["2023-08-05", "NITCBase", "Relational database system", "https://github.com/hatim-s/NITCBase"],
  ["2023-03-18", "EXPL Compiler", "Compiler for a C-like teaching language", "https://github.com/hatim-s/Expl-Compiler"],
  ["2022-08-13", "eXpOS", "A modular operating system on XSM", "https://github.com/hatim-s/eXpOS"],
] as const;

export const contributionMonths = [
  ["Aug 25", 94],
  ["Sep", 221],
  ["Oct", 194],
  ["Nov", 152],
  ["Dec", 197],
  ["Jan 26", 230],
  ["Feb", 158],
  ["Mar", 102],
  ["Apr", 189],
  ["May", 277],
  ["Jun", 363],
  ["Jul", 1988],
  ["Aug 26", 9],
] as const;

export const unifyAreas = [
  {
    title: "Workflow intelligence",
    signal: "Build + validate",
    description:
      "AI-assisted workflow generation, schema-aware cleanup, topology validation, dynamic inputs and outputs, and conflict-safe Copilot updates.",
    evidence: "Primary concentration in the workflow module and llm-tools runtime.",
  },
  {
    title: "Agents and Copilot",
    signal: "Reason + act",
    description:
      "AI workers, skills and knowledge, Copilot chat and voice surfaces, MCP integrations, and the contracts that let agents operate on real platform objects.",
    evidence: "Repeated delivery across AI workers, Copilot blocks, and agent knowledge.",
  },
  {
    title: "Platform experience",
    signal: "See + control",
    description:
      "Interfaces, settings, API platform, connectors, and core interaction surfaces built on shared navigation, messaging, form, and table primitives.",
    evidence: "Main-reachable work spans product modules and the Carbon / Blocks systems.",
  },
  {
    title: "Contracts and delivery",
    signal: "Ship + hold",
    description:
      "Connector schemas, workflow-node contracts, Text-to-Workflow assets, and disciplined main-to-UAT-to-live release paths.",
    evidence: "Cross-repository work in www, UACode, and the builder knowledge source.",
  },
];
