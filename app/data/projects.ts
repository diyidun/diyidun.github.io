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
    title: "YKA Academy Management System",
    subtitle: "Multi-tenant SaaS platform for academy and studio management",
    description:
      "YKA is a multi-tenant SaaS platform for academies, dance studios, cram schools, language schools, music schools, tutoring centers, and training organizations. It helps manage student records, enrollment, schedules, payments, reports, staff access, branches, and operational workflows in one centralized system.",
    highlights: [
      "Multi-tenant organization architecture with role-based access control",
      "Student, enrollment, course, schedule, branch, and staff management workflows",
      "Payment tracking, manual payment requests, PayPal subscription billing, and admin notifications",
      "Reports for student rosters, financial activity, withdrawals, and estimated revenue loss",
      "Multilingual public homepage with SEO-friendly language routes, sitemap, canonical, and hreflang support",
      "Public contact form with email and LINE contact options",
    ],
    stack: ["React", "Tailwind", "Node.js", "Express", "MySQL", "PayPal", "i18n", "SEO"],
    liveUrl: "https://ykasys.com",
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
