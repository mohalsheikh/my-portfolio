import { Link } from "react-router-dom";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";
import { Eyebrow, Reveal } from "../components/Section";

export default function Projects() {
  return (
    <div className="relative px-5 sm:px-8 pt-36 pb-28">
      <div className="pointer-events-none absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-violetx/15 blur-[120px]" />
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Eyebrow index="00" label="Work" />
          <h1 className="font-display text-4xl font-extrabold leading-tight text-chrome sm:text-6xl">
            Selected projects
          </h1>
          <p className="mt-5 max-w-xl text-lg text-mist">
            A few things I've designed, engineered, and shipped — spanning AI wearables, mobile apps,
            and campus tools.
          </p>
        </Reveal>

        <div className="mt-16 space-y-px overflow-hidden rounded-3xl border border-line bg-line">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to={`/projects/${p.slug}`}
                className="group relative block bg-panel px-7 py-9 transition-colors hover:bg-panel2 sm:px-10"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-full w-1 bg-violetx opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <span className="font-mono text-sm text-violetx sm:w-12 sm:pt-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-2xl">{p.accent}</span>
                      <h2 className="font-display text-2xl font-bold text-chrome sm:text-3xl">
                        {p.title}
                      </h2>
                      {p.featured && (
                        <span className="rounded-full border border-violetx/40 bg-violetx/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-lavender">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-violetx">{p.tagline}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist">{p.description}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-line bg-ink px-2.5 py-1 font-mono text-xs text-mist"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-4">
                    <span className="font-mono text-xs text-mist">{p.year}</span>
                    {p.source && (
                      <a
                        href={p.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${p.title} source code`}
                        className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-ink text-mist transition-colors hover:border-violetx hover:text-violetx"
                      >
                        <FiGithub />
                      </a>
                    )}
                    <FiArrowUpRight className="hidden text-xl text-mist transition-all group-hover:text-violetx group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 rounded-3xl border border-line bg-panel px-8 py-12 text-center">
            <h2 className="font-display text-2xl font-bold text-chrome sm:text-3xl">
              Have something in mind?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-mist">
              I'm always open to new projects, ideas, and opportunities to build.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-violetx px-7 py-3.5 font-medium text-white shadow-glow transition-all hover:gap-3"
            >
              Get in touch
              <FiArrowUpRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
