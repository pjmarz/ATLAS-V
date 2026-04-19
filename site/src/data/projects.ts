export type ProjectCategory = 'technical' | 'initiative';

export type Project = {
  title: string;
  tagline: string;
  notes: string[];
  category: ProjectCategory;
  href?: string;
  artifacts?: { label: string; href: string }[];
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: 'LUMINAL',
    tagline: 'self-hosted AI automation platform',
    category: 'technical',
    href: 'https://github.com/pjmarz/LUMINAL',
    notes: [
      'runs on a dedicated Proxmox VM with GPU passthrough, split into two areas: Automation and Midnight, a custom AI chatbot',
      'Automation, n8n for workflow orchestration, paired with Home Assistant and Bilbo, a voice assistant running the same Ollama model that powers Midnight',
      'Midnight, a fine-tuned gemma4:e4b served via Ollama and OpenWebUI, with Qdrant for vector search and Cloudflare Access SSO (Google OAuth) at the front door',
    ],
  },
  {
    title: 'HELIOS',
    tagline: 'self-hosted media delivery for the household',
    category: 'technical',
    href: 'https://github.com/pjmarz/HELIOS',
    notes: [
      'a dedicated Proxmox VM with GPU passthrough running Plex at its center, wrapped in the *arr stack (Radarr, Sonarr, Prowlarr, Bazarr), SABnzbd, and Seerr for automated acquisition',
      'Portainer, Homarr, and Tautulli handle container management, the dashboard, and viewing analytics',
    ],
  },
  {
    title: 'Project Lazarus',
    tagline: 'service desk enablement and SME program redesign',
    category: 'initiative',
    notes: [
      'redesigned an internal SME program at PPG to improve onboarding, role clarity, and long-term analyst development',
      'introduced structured SME curriculums, mentor assignments, and recurring team time to reduce knowledge silos and improve communication flow',
      'built a phased rollout plan focused on sustainable adoption, review cycles, and continuity beyond the original project owner',
    ],
    tags: ['program design', 'enablement', 'onboarding', 'operations'],
    artifacts: [
      { label: 'overview pdf', href: '/artifacts/initiatives/project-lazarus/project-lazarus-overview.pdf' },
    ],
  },
  {
    title: 'The Prometheus Initiative',
    tagline: 'gamified sales enablement program for Geek Squad',
    category: 'initiative',
    notes: [
      'created a monthly points-based incentive system to increase service-plan attachment, sales consistency, and agent engagement',
      'designed the full operating model, including scoring rules, rewards, rollout stages, and lightweight reporting through OneDrive tooling',
      'paired the program with branding, presentations, and adoption materials to make the system memorable, usable, and easy to champion internally',
    ],
    tags: ['sales ops', 'change management', 'gamification', 'program leadership'],
    artifacts: [
      { label: 'overview pdf', href: '/artifacts/initiatives/prometheus-initiative/prometheus-initiative-overview.pdf' },
    ],
  },
];
