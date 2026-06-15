import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFileText,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { useHomeContent } from "../hooks/useHomeContent";
import { projects } from "../data/projects";
import { Eyebrow, Reveal } from "../components/Section";

const ROLES = ["Software Engineer", "AI / ML Builder", "Product Engineer", "Full-Stack Developer"];

function RoleRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block align-bottom overflow-hidden h-[1.15em]">
      <motion.span
        key={i}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-grad inline-block"
      >
        {ROLES[i]}
      </motion.span>
    </span>
  );
}

const stats = [
  { value: "4+", label: "Shipped products" },
  { value: "2", label: "Competition prizes" },
  { value: "10+", label: "Tech in the stack" },
  { value: "∞", label: "Coffees debugged" },
];

const socials = [
  { icon: <FiGithub />, href: "https://github.com/mohalsheikh", label: "GitHub" },
  { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/moalsheikh/", label: "LinkedIn" },
  { icon: <FiMail />, href: "mailto:moalsheikh2004@gmail.com", label: "Email" },
  { icon: <FiFileText />, href: "/Mohammed_Alsheikh_Resume_04.pdf", label: "Résumé" },
];

export default function Home() {
  const { data } = useHomeContent();
  const name = data?.name || "Mohammed";
  const featured = projects.filter((p) => p.featured || ["halllink", "soundtrack"].includes(p.slug)).slice(0, 3);

  return (
    <div className="relative">
      {/* ── HERO ── */}
      <section className="relative grid-bg overflow-hidden px-5 sm:px-8 pt-36 pb-24 md:pt-44 md:pb-32">
        {/* ambient glows */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-violetx/20 blur-[120px]" />
        <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-lavender/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-violetx/70" />
              <span className="h-2 w-2 rounded-full bg-violetx" />
            </span>
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-mist">
              Open to Spring 2027 roles &amp; internships
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 font-display font-extrabold leading-[0.95] tracking-tight text-chrome
                       text-[2.7rem] sm:text-7xl lg:text-8xl"
          >
            Hi, I'm {name}.
            <br />
            <RoleRotator />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl"
          >
            I design and ship production-grade apps and AI products — from assistive computer-vision
            wearables to social platforms used on campus. I care about clean architecture, intentional
            UX, and shipping things that actually work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-violetx px-7 py-3.5 font-medium text-white shadow-glow transition-all hover:gap-3"
            >
              View my work
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-7 py-3.5 font-medium text-chrome transition-colors hover:border-violetx"
            >
              Get in touch
            </Link>

            <div className="flex items-center gap-2 sm:ml-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-panel text-mist transition-colors hover:border-violetx hover:text-violetx"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-panel px-6 py-6">
                <div className="font-display text-3xl font-bold text-chrome">{s.value}</div>
                <div className="mt-1 font-mono text-xs uppercase tracking-wider text-mist">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section className="px-5 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow index="01" label="Selected Work" />
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-bold text-chrome sm:text-5xl">
                Things I've built
              </h2>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-violetx"
              >
                See everything
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  to={`/projects/${p.slug}`}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel p-7 transition-all hover:border-violetx/60 ${
                    i === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violetx/10 blur-2xl transition-opacity group-hover:bg-violetx/20" />
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">{p.accent}</span>
                    <span className="font-mono text-xs text-mist">{p.year}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-chrome">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-violetx">{p.tagline}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist">{p.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line bg-ink px-2.5 py-1 font-mono text-xs text-mist"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-chrome">
                    Read the case study
                    <FiArrowRight className="transition-transform group-hover:translate-x-1 text-violetx" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 sm:px-8 pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-panel px-8 py-16 text-center sm:px-16">
              <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
              <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violetx/20 blur-[100px]" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-chrome sm:text-5xl">
                  Let's build something that makes people say <span className="text-grad">wow</span>.
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-mist">
                  Hiring, collaborating, or just curious about my work? My inbox is always open.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violetx px-8 py-4 font-medium text-white shadow-glow transition-all hover:gap-3"
                >
                  Start a conversation
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
