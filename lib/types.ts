export type CaseStudySections = {
  problem: string;
  discovery: string;
  ideation: string;
  design: string;
  implementation: string;
  results: string;
  conclusion: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  impactStatement: string;
  tags: string[];
  coverImage: string;
  role: string;
  tools: string[];
  technologies: string[];
  duration: string;
  featured?: boolean;
  metrics: Array<{ label: string; value: string }>;
  sections: CaseStudySections;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  content: string;
};
