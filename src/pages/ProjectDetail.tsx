import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiGithub, FiArrowUpRight, FiCheck } from "react-icons/fi";
import { getProject, projects } from "../data/projects";
import { Eyebrow, Reveal } from "../components/Section";
import Seo from "../seo/Seo";
import type { PageSeo } from "../seo/seo.config";
import { projectSchema, breadcrumbSchema, personSchema } from "../seo/schema";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <div className="grid min-h-[70vh] place-items-center px-5 text-center">
        <div>
          <p className="eyebrow">404</p>
          <h1 className="mt-3 font-display text-3xl font-bold text-chrome">Project not found</h1>
          <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-violetx">
            <FiArrowLeft /> Back to all work
          </Link>
        </div>
      </div>
    );
  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const detailSeo: PageSeo = {
    title: `${project.title} — ${project.tagline} | Mohammed Alsheikh`,
    description: project.description.slice(0, 158),
    path: `/projects/${project.slug}`,
    type: "article",
  };

  return (
    <div className="relative px-5 sm:px-8 pt-32 pb-28">
      <Seo
        seo={detailSeo}
        jsonLd={[
          projectSchema(project),
          personSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />
      <div className="pointer-events-none absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-violetx/15 blur-[120px]" />
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-violetx"
          >
            <FiArrowLeft /> All work
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-2xl border border-line bg-panel text-4xl">
              {project.accent}
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-violetx">{project.category}</p>
              <h1 className="font-display text-3xl font-extrabold text-chrome sm:text-5xl">{project.title}</h1>
            </div>
          </div>
          <p className="mt-5 text-xl text-lavender">{project.tagline}</p>
        </Reveal>

        {/* meta strip */}
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            <div className="bg-panel px-5 py-4">
              <p className="font-mono text-xs uppercase tracking-wider text-mist">Year</p>
              <p className="mt-1 text-chrome">{project.year}</p>
            </div>
            <div className="bg-panel px-5 py-4">
              <p className="font-mono text-xs uppercase tracking-wider text-mist">Role</p>
              <p className="mt-1 text-chrome">{project.role}</p>
            </div>
            <div className="col-span-2 bg-panel px-5 py-4 sm:col-span-1">
              <p className="font-mono text-xs uppercase tracking-wider text-mist">Stack</p>
              <p className="mt-1 text-chrome">{project.stack.slice(0, 3).join(", ")}</p>
            </div>
          </div>
        </Reveal>

        {/* overview */}
        <section className="mt-14">
          <Reveal>
            <Eyebrow index="01" label="Overview" />
            <p className="text-lg leading-relaxed text-mist">{project.description}</p>
          </Reveal>
        </section>

        {/* highlights */}
        <section className="mt-14">
          <Reveal>
            <Eyebrow index="02" label="Highlights" />
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((h, i) => (
              <Reveal key={h} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-xl border border-line bg-panel px-5 py-4">
                  <FiCheck className="mt-0.5 shrink-0 text-violetx" />
                  <span className="text-sm text-chrome">{h}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* full stack */}
        <section className="mt-14">
          <Reveal>
            <Eyebrow index="03" label="Built with" />
            <div className="mt-6 flex flex-wrap gap-2.5">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-line bg-panel px-3.5 py-2 font-mono text-sm text-chrome"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* links */}
        {(project.source || project.live) && (
          <Reveal>
            <div className="mt-12 flex flex-wrap gap-4">
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-6 py-3.5 font-medium text-chrome transition-colors hover:border-violetx"
                >
                  <FiGithub /> Source code
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-violetx px-6 py-3.5 font-medium text-white shadow-glowsm transition-all hover:gap-3"
                >
                  Live demo <FiArrowUpRight />
                </a>
              )}
            </div>
          </Reveal>
        )}

        {/* next projects */}
        <section className="mt-24 border-t border-line pt-12">
          <Eyebrow index="—" label="Keep exploring" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-line bg-panel px-6 py-6 transition-colors hover:border-violetx/60"
              >
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{p.accent}</span>
                    <h3 className="font-display text-lg font-semibold text-chrome">{p.title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-mist">{p.tagline}</p>
                </div>
                <FiArrowUpRight className="text-mist transition-all group-hover:text-violetx group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
