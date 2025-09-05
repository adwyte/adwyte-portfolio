export type Project = {
  title: string;
  slug: string;
  blurb: string;
  tags: string[];
  repo?: string;
  demo?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  // Featured
  {
    title: "Digital Twin Platform",
    slug: "digital-twin-platform",
    blurb:
      "IIoT + ML predictive maintenance for MSME machines. Unity3D twins, real-time telemetry (RPM, vibration, power), anomaly detection, and dashboard.",
    tags: ["Python", "Unity3D", "MQTT", "MongoDB", "IoT"],
    repo: "https://github.com/Adwyte/digital-twin-platform",
    highlight: true,
  },
  {
    title: "AI Debate Arena",
    slug: "ai-debate-arena",
    blurb:
      "Real-time debates (Human↔AI) with STT, NLP parsing, LLM scoring, leaderboards. FastAPI backend + React UI + PostgreSQL.",
    tags: ["FastAPI", "React", "PostgreSQL", "LLM", "STT/NLP"],
    repo: "https://github.com/Adwyte/ai-debate-arena",
    highlight: true,
  },
  {
    title: "Legacy Code Migrator",
    slug: "legacy-code-migrator",
    blurb:
      "Parses procedural C, builds call graphs, and generates OOP Python modules; pybind11 bridge and auto-tests for validation.",
    tags: ["Python", "C/C++", "NetworkX", "pybind11", "Automation"],
    repo: "https://github.com/Adwyte/legacy-code-migrator",
    highlight: true,
  },
  {
    title: "Autonomous Exploration Agent",
    slug: "autonomous-exploration-agent",
    blurb:
      "Nearest Frontier, Information Gain, Wall Following with coverage/efficiency metrics; simulation environment with dynamic obstacles.",
    tags: ["Python", "Robotics", "CV", "Path Planning"],
    repo: "https://github.com/Adwyte/autonomous-exploration-agent",
    highlight: true,
  },

  // Supporting
  {
    title: "KeyStash Password Manager",
    slug: "keystash-password-manager",
    blurb:
      "Password manager with encryption, master key, random generation; backup & recovery workflow.",
    tags: ["Java", "Security"],
    repo: "https://github.com/Adwyte/keystash-password-manager",
  },
  {
    title: "Fluxion Gesture Control",
    slug: "fluxion-gesture-control",
    blurb:
      "Gesture-based device control (brightness/volume) with OpenCV; real-time logging to SQLite for analytics.",
    tags: ["Python", "OpenCV", "SQLite"],
    repo: "https://github.com/Adwyte/fluxion-gesture-control",
  },
  {
    title: "LipSync Lip-reading Model",
    slug: "lipsync-lipreading-model",
    blurb:
      "3D CNN lip-reading on GRID; feature extraction pipeline and interactive Streamlit app.",
    tags: ["TensorFlow", "OpenCV", "Streamlit"],
    repo: "https://github.com/Adwyte/lipsync-lipreading-model",
  },
  {
    title: "Olist RFM Segmentation",
    slug: "olist-customer-segmentation",
    blurb:
      "Supply chain exploration + customer segmentation using Recency, Frequency, Monetary analysis and visualizations.",
    tags: ["Python", "Pandas", "Matplotlib"],
    repo: "https://github.com/Adwyte/olist-customer-segmentation",
  },

  // Upcoming / In-progress
  {
    title: "Cloud-Native Conversational Data Assistant",
    slug: "cloud-rag-assistant",
    blurb:
      "RAG-powered query engine with MCP, interactive dashboards, and chat interface. (in-progress)",
    tags: ["RAG", "Next.js", "FastAPI", "Cloud"],
    highlight: true,
  },
  {
    title: "Swarm Intelligence + RL for Drone Tracking",
    slug: "swarm-intelligence-rl",
    blurb:
      "PSO/ACO for global strategy + PPO/MAPPO for navigation; AirSim/Gazebo/PyBullet simulations. (in-progress)",
    tags: ["RL", "Multi-Agent", "Robotics"],
  },
  {
    title: "Graph RAG Assistant for Manufacturing",
    slug: "graph-rag-assistant",
    blurb:
      "Unified asset knowledge graph + Cypher + semantic search with AR visual exploration. (queued)",
    tags: ["Neo4j", "RAG", "AR"],
  },
];
