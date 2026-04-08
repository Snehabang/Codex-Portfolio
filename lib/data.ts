import { BlogPost, Project } from './types';

export const projects: Project[] = [
  {
    slug: 'ai-support-copilot',
    title: 'AI Support Copilot',
    description: 'Built a retrieval-augmented support assistant to reduce ticket resolution times.',
    impactStatement: 'Cut average support response latency by 63% while improving answer accuracy.',
    tags: ['AI', 'RAG', 'Backend Systems'],
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    role: 'Lead AI Engineer',
    tools: ['Python', 'FastAPI', 'LangChain', 'PostgreSQL'],
    technologies: ['OpenAI API', 'Redis', 'Docker', 'Vercel'],
    duration: '12 weeks',
    featured: true,
    metrics: [
      { label: 'Response Latency', value: '4.3s → 1.6s' },
      { label: 'First Contact Resolution', value: '+29%' },
      { label: 'Agent Productivity', value: '+41%' }
    ],
    sections: {
      problem:
        'Support agents were searching through scattered documentation and product notes. Users waited too long for consistent answers, causing churn risk in enterprise accounts.',
      discovery:
        'Analyzed 18,000 anonymized support tickets, mapped top issue clusters, and interviewed 11 agents to identify workflow bottlenecks. Key pain points were irrelevant search results and missing context handoff.',
      ideation:
        'Evaluated three solution paths: keyword search optimization, scripted decision trees, and retrieval-augmented generation. Chose RAG due to scalability and contextual response quality, while adding strict confidence thresholds to limit hallucinations.',
      design:
        'Designed a dual-index architecture combining semantic vector retrieval with metadata filters. Added an orchestration layer for query rewriting, context ranking, and policy checks before response generation.',
      implementation:
        'Implemented FastAPI microservices, event-driven indexing pipeline, and Redis caching for high-volume prompts. Added observability dashboards for token usage, retrieval precision, and fallback frequency.',
      results:
        'Response speed improved 63%, escalations dropped 24%, and CSAT increased from 4.1 to 4.6. The team saved approximately 70 agent-hours per week.',
      conclusion:
        'Learned that retrieval quality matters more than model size in production support environments. Next step is multilingual support and automatic knowledge freshness scoring.'
    }
  },
  {
    slug: 'predictive-ops-dashboard',
    title: 'Predictive Ops Dashboard',
    description: 'Created a forecasting and anomaly detection platform for operational leaders.',
    impactStatement: 'Reduced critical incident reaction time by 48% through proactive signal surfacing.',
    tags: ['Systems', 'Analytics', 'MLOps'],
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
    role: 'Full Stack AI Engineer',
    tools: ['TypeScript', 'Next.js', 'dbt', 'Python'],
    technologies: ['BigQuery', 'Airflow', 'Plotly', 'Kubernetes'],
    duration: '16 weeks',
    featured: true,
    metrics: [
      { label: 'Incident Detection Lead Time', value: '+48%' },
      { label: 'Manual Reporting Time', value: '-65%' },
      { label: 'Forecast Accuracy', value: '91%' }
    ],
    sections: {
      problem:
        'Operations managers lacked a single source of truth for forecasting risk and identifying anomalies across regions and product lines.',
      discovery:
        'Reviewed historical incidents over 2 years, validated data quality in 14 source tables, and identified lagging indicators that delayed team response.',
      ideation:
        'Compared static BI dashboards against model-driven insights. Selected hybrid design: deterministic KPI panels plus ML-driven anomaly cards for clearer trust and explainability.',
      design:
        'Built a layered architecture with ELT transformations, feature pipelines, and model inference services. Added role-based dashboard views for executive and operator workflows.',
      implementation:
        'Integrated scheduled training jobs, quality checks, and incremental data refreshes. Implemented edge caching and skeleton loaders for performant frontend rendering.',
      results:
        'Teams identified critical risks nearly twice as early, lowered weekly reporting overhead, and increased confidence in planning decisions during peak load periods.',
      conclusion:
        'Balancing transparency with automation drove adoption. Next step is closed-loop automation that triggers playbooks directly from high-confidence alerts.'
    }
  },
  {
    slug: 'agentic-workflow-orchestrator',
    title: 'Agentic Workflow Orchestrator',
    description: 'Engineered a multi-agent workflow for document-heavy internal operations.',
    impactStatement: 'Automated 78% of repetitive workflow steps with robust human-in-the-loop controls.',
    tags: ['AI Agents', 'Automation', 'Architecture'],
    coverImage: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=80',
    role: 'AI Systems Architect',
    tools: ['Node.js', 'Temporal', 'OpenTelemetry', 'PostgreSQL'],
    technologies: ['LLM APIs', 'S3', 'Terraform', 'GitHub Actions'],
    duration: '10 weeks',
    featured: true,
    metrics: [
      { label: 'Workflow Automation', value: '78%' },
      { label: 'Processing Throughput', value: '+3.2x' },
      { label: 'Error Rate', value: '-37%' }
    ],
    sections: {
      problem:
        'Document processing workflows were manual, error-prone, and difficult to scale with rising compliance load.',
      discovery:
        'Shadowed operators, traced handoff points, and measured cycle times across ingestion, extraction, validation, and approval steps.',
      ideation:
        'Prototyped single-agent and multi-agent variants. Chose modular multi-agent design for better separation of responsibilities and easier policy enforcement.',
      design:
        'Defined orchestration graph with specialized agents for classification, extraction, validation, and escalation. Added audit logging and confidence-based routing.',
      implementation:
        'Implemented durable workflows in Temporal, integrated model endpoints, and built operator review UI for low-confidence outputs.',
      results:
        'Processing capacity scaled 3.2x without proportional headcount growth, while exception handling quality improved through targeted human review loops.',
      conclusion:
        'Agent boundaries and observability were critical to reliability. Next step is adaptive routing based on historical reviewer feedback.'
    }
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'designing-ai-systems-for-trust',
    title: 'Designing AI Systems for Trust, Not Just Throughput',
    excerpt: 'A practical framework for balancing model performance, explainability, and operational confidence.',
    publishedAt: '2026-02-11',
    content:
      'When teams scale AI systems, trust is the limiting factor. In this article, I break down design principles for confidence scoring, fallback paths, and human review loops.'
  },
  {
    slug: 'case-study-storytelling-that-recruiters-scan',
    title: 'Case Study Storytelling Recruiters Can Scan in 30 Seconds',
    excerpt: 'How to structure project narratives around problem framing, decisions, and measurable outcomes.',
    publishedAt: '2026-01-20',
    content:
      'Strong portfolios make decision quality visible. I share a structure that highlights context, tradeoffs, and impact metrics with minimal visual noise.'
  }
];

export const siteLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];
