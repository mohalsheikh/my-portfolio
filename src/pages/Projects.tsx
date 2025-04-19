/* ──────────────────────────────────────────────
   src/pages/Projects.tsx
─────────────────────────────────────────────── */
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { FiExternalLink, FiGithub, FiChevronRight } from "react-icons/fi";
import Tilt from 'react-parallax-tilt';

type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  live?: string;
  source?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    slug: "halllink",
    title: "HallLink – Student‑Housing Super‑App",
    description: "Won $7,500 in a university competition. Connects residents with RAs, events, safety resources, and an AI chatbot.",
    stack: ["React Native", "Firebase", "TypeScript", "GPT‑4o"],
    image: "https://source.unsplash.com/featured/800x600?dorm",
    live: "#",
    source: "https://github.com/example/halllink",
    featured: true,
  },
  {
    slug: "portfolio",
    title: "Modern Portfolio",
    description: "My own blazing‑fast, animated dev portfolio built with React, Vite, TailwindCSS, and Framer Motion.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
    image: "https://source.unsplash.com/featured/800x600?code",
    live: "#",
    source: "https://github.com/example/portfolio",
  },
  {
    slug: "astroblog",
    title: "Headless Blog with Astro + MDX",
    description: "A content‑driven blog that hits perfect Lighthouse scores and costs $0 to host.",
    stack: ["Astro", "MDX", "Tailwind", "Netlify"],
    image: "https://source.unsplash.com/featured/800x600?blog",
    live: "#",
    source: "https://github.com/example/astroblog",
  },
  {
    slug: "room‑finder",
    title: "CBU Empty‑Room Finder",
    description: "Flutter app that crowdsources real‑time study‑room availability on campus.",
    stack: ["Flutter", "Firebase", "Cloud Functions"],
    image: "https://source.unsplash.com/featured/800x600?library",
    live: "#",
    source: "https://github.com/example/room‑finder",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } },
};

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <motion.header
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring the intersection of design and technology through impactful solutions
          </p>
        </motion.header>

        {featured && (
          <motion.article
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="group mb-24 bg-gradient-to-br from-brand/5 to-accent/5 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl border border-white/20 dark:border-gray-700"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
                <motion.div
                  className="relative overflow-hidden rounded-2xl lg:w-[600px]"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </motion.div>
              </Tilt>

              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                    {featured.title}
                  </h2>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {featured.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {featured.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-brand/10 dark:bg-brand/20 backdrop-blur-lg border border-brand/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {featured.live && (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 bg-brand hover:bg-brand/90 text-white rounded-lg transition-all"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}
                  {featured.source && (
                    <a
                      href={featured.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-all"
                    >
                      <FiGithub />
                      Source Code
                    </a>
                  )}
                  <Link
                    to={`/projects/${featured.slug}`}
                    className="flex items-center px-6 py-2.5 text-brand hover:text-accent transition-colors"
                  >
                    <span className="mr-2">Case Study</span>
                    <FiChevronRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {rest.map((project) => (
            <motion.div
              key={project.slug}
              variants={cardVariants}
              className="group relative h-full"
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
                <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700 hover:border-brand/30 transition-all">
                  <div className="relative mb-6 rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-brand/10 dark:bg-brand/20 backdrop-blur-lg border border-brand/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm bg-brand hover:bg-brand/90 text-white rounded-lg transition-all"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                      {project.source && (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-all"
                        >
                          <FiGithub />
                        </a>
                      )}
                    </div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex items-center text-brand hover:text-accent transition-colors"
                    >
                      <span className="text-sm">Details</span>
                      <FiChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
