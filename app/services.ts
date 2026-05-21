export const servicePages = {
  'ai-agents': {
    title: 'AI Agents for Everyday Businesses',
    eyebrow: 'AI agents',
    nav: 'AI Agents',
    description:
      'Custom AI agents that help businesses answer questions, triage requests, draft responses, research accounts, and move routine work forward with human oversight.',
    hero:
      'Deploy focused AI agents that handle repetitive work without losing business control.',
    outcomes: ['Lead follow-up agents', 'Customer service copilots', 'Internal research agents', 'Operations assistants'],
    body:
      'Heck Holdings designs AI agents around the specific rules, tools, and approval points of your business. The result is not a generic chatbot. It is a controlled layer of intelligence that can assist teams, prepare work, and escalate decisions when people need to stay involved.'
  },
  'business-automation': {
    title: 'Business Automation Systems',
    eyebrow: 'Business automation',
    nav: 'Automation',
    description:
      'Workflow automation for small and mid-sized businesses that want to reduce manual admin, speed up handoffs, and standardize recurring work.',
    hero:
      'Automate the busywork that keeps your team from growing the business.',
    outcomes: ['CRM updates', 'Intake routing', 'Reporting workflows', 'Admin task reduction'],
    body:
      'We map the time-consuming tasks inside your company and turn them into reliable systems. From forms to inboxes to spreadsheets to CRMs, Heck Holdings connects the tools you already use and removes avoidable manual steps.'
  },
  'ai-consulting': {
    title: 'AI Consulting for Practical Growth',
    eyebrow: 'AI consulting',
    nav: 'AI Consulting',
    description:
      'Practical AI consulting for business owners who need a clear roadmap, realistic use cases, and implementation support instead of hype.',
    hero:
      'Find the AI opportunities that can actually move your business forward.',
    outcomes: ['AI opportunity audits', 'Automation roadmaps', 'Tool selection', 'Implementation planning'],
    body:
      'Heck Holdings helps everyday businesses identify where artificial intelligence can create immediate leverage. We focus on measurable wins: time saved, faster response speed, cleaner data, better handoffs, and more capacity to serve customers.'
  },
  'agentic-workflows': {
    title: 'Agentic Workflows and AI Operating Layers',
    eyebrow: 'Agentic workflows',
    nav: 'Workflows',
    description:
      'Agentic workflow design for businesses that want AI systems to coordinate multi-step work across tools, teams, and approval points.',
    hero:
      'Turn multi-step business processes into managed AI-assisted workflows.',
    outcomes: ['Multi-step task execution', 'Human approval gates', 'Tool orchestration', 'Audit-friendly operations'],
    body:
      'Agentic workflows combine instructions, tools, data sources, and approvals into repeatable systems. Heck Holdings builds these workflows so businesses can automate more than single tasks while still preserving quality, accountability, and human judgment.'
  }
} as const;

export type ServiceSlug = keyof typeof servicePages;
