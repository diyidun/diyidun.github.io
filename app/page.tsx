import Image from "next/image";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-zinc-900">
      {/* Top */}
      <header className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl order-2 md:order-1 mt-4 md:mt-0">
            <p className="text-base font-semibold text-zinc-900">
              Milton Diaz{" "}
              <span className="font-normal text-zinc-500">(Li Yi Dun)</span>
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tighter md:text-6xl">
              Full-Stack Web Developer
            </h1>
            <p className="mt-4 text-lg text-zinc-600">
              I build SaaS platforms and business systems with React, Node.js,
              and MySQL — including multi-tenant architecture, role-based
              access, audit logs, and subscription billing.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                View Projects
              </a>
              <a
                href="https://github.com/diyidun"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/milton-diaz-li-yi-dun-583597142"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-zinc-500">
              {[
                "React",
                "Tailwind",
                "Node.js",
                "Express",
                "MySQL",
                "REST APIs",
                "PayPal",
                "Linux / Nginx",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="shrink-0 order-1 md:order-2">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-200 w-40 sm:w-48 md:w-64 mx-auto mb-6 md:mb-0">
              {/* Put your photo at: public/me.jpg */}
              <Image
                src="/me.jpeg"
                alt="Milton Diaz"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-zinc-600">
              Based in Taiwan • Open to remote roles
            </p>
          </div>
        </div>
      </header>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <p className="mt-2 text-zinc-500">
          Real systems deployed online — SaaS platform + production business
          CMS.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">{p.subtitle}</p>
              <p className="mt-4 text-zinc-600">{p.description}</p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Live
                </a>

                {p.githubShowcaseUrl && (
                  <a
                    href={p.githubShowcaseUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50"
                  >
                    Case Study
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About + Contact */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-3 text-zinc-600">
              I build practical business software: dashboards, workflows,
              multi-tenant systems, and integrations. I focus on reliability,
              clear UX, and real operational needs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-3 text-zinc-600">Best way to reach me:</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/milton-diaz-li-yi-dun-583597142"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/diyidun"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50"
              >
                GitHub
              </a>
              {/* If you want, replace with your email */}
              {/* <a href="mailto:you@example.com" className="..." /> */}
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-zinc-200 pt-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Milton Diaz • Built with Next.js +
          Tailwind
        </footer>
      </section>
    </main>
  );
}
