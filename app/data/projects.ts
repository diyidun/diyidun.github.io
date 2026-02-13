export type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl: string;
  githubShowcaseUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Studio Management System",
    subtitle: "Multi-tenant SaaS/ERP platform (Full-Stack Web App)",
    description:
      "A multi-branch management platform that centralizes student records, scheduling, financial transactions, reporting, and PayPal subscription billing.",
    highlights: [
      "Multi-tenant data isolation + role-based access control",
      "Audit logs for accountability and activity history",
      "Billing + subscription workflow with PayPal (webhooks)",
      "Dashboards for revenue, new registrations, and unpaid students",
    ],
    stack: ["React", "Tailwind", "Node.js", "Express", "MySQL", "PayPal"],
    liveUrl: "https://studio-management-sys-production.up.railway.app",
    githubShowcaseUrl:
      "https://github.com/diyidun/studio-management-saas-showcase",
  },
  {
    title: "All Seasons Roadside",
    subtitle: "Business Website + Custom CMS",
    description:
      "A production business website backed by a custom CMS so the owner can update services, images, and content without editing code.",
    highlights: [
      "Admin panel for content updates",
      "REST API + MySQL-backed content storage",
      "Production deployment with Nginx + PM2",
      "Mobile-first responsive UI + SEO-friendly structure",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "AWS Lightsail",
      "Nginx",
      "PM2",
    ],
    liveUrl: "https://allseasonsroadside.com/",
    githubShowcaseUrl: "https://github.com/diyidun/roadside-cms-showcase",
  },
];
