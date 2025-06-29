/* ──────────────────────────────────────────────
   src/pages/Projects.tsx
─────────────────────────────────────────────── */
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { FiExternalLink, FiGithub, FiChevronRight } from "react-icons/fi";
import Tilt from 'react-parallax-tilt';
import halllinkVideo from '../assets/lancerarmspromo2.mp4';
import moporto from '../assets/moporto.png';
import emptyroom from '../assets/emptyroom.png';
import soundtrackporto from '../assets/soundtrackporto.png';


type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  video?: string;
  live?: string;
  source?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    slug: "halllink",
    title: "HallLink – Student‑Housing Super‑App",
    description:
      "Mobile app designed to streamline campus housing by connecting students with RAs, events, maps, safety tools, and an AI chatbot. Presented at CBU’s Innovation Challenge, where it received strong interest from university leadership.",
    stack: ["Swift", "Firebase", "Python", "JavaScript"],
    video: halllinkVideo,
    live: "#",
    source: "https://github.com/mohalsheikh/lancer-Arms-app",
    featured: true,
  },    
  {
    slug: "soundtrack",
    title: "Soundtrack – Social Music Sharing",
    description:
      "A BeReal-style app built for a client where users post one song per day, powered by Spotify. Built with Flutter and Firebase for a smooth cross-platform experience.",
    stack: ["Flutter", "Firebase", "Spotify API"],
    image: soundtrackporto,
    live: "#",
    source: "https://github.com/example/soundtrack",
  },
  {
    slug: "portfolio",
    title: "My Developer Portfolio",
    description:
      "Fast, animated portfolio site showcasing my work, built using modern tools and motion UI. Designed to reflect my style and skills as a fullstack developer.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
    image: moporto,
    live: "https://moalsheikh.com",
    source: "https://github.com/mohalsheikh/my-portfolio",
  },
  {
    slug: "room-finder",
    title: "CBU Empty Room Finder",
    description:
      "Flutter app that helps CBU students find available study rooms in real-time, powered by crowdsourced data and Firebase backend.",
    stack: ["Flutter", "Firebase", "Cloud Functions"],
    image: emptyroom,
    live: "#",
    source: "https://github.com/example/room-finder",
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
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.6 } },
};

export default function Projects() {
  const featured = projects.find((p: Project) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-brand/10 backdrop-blur-lg animate-float z-0"></div>
      <div className="absolute bottom-1/4 left-10 w-12 h-12 rounded-full bg-accent/10 backdrop-blur-lg animate-float-delayed z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-14 h-14 rounded-full bg-blue-400/10 backdrop-blur-lg animate-float z-0" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <motion.header
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl sm:text-7xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Exploring the intersection of design and technology through impactful solutions
          </motion.p>
          
          <motion.div 
            className="mt-8 h-1 w-24 bg-gradient-to-r from-brand to-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.header>

        {featured && (
          <motion.article
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="group mb-24 bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl border border-white/30 dark:border-gray-700"
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <Tilt 
                tiltMaxAngleX={8} 
                tiltMaxAngleY={8} 
                scale={1.03}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glarePosition="all"
                glareBorderRadius="1.5rem"
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl lg:w-[600px] border-4 border-white dark:border-gray-800 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                >
{featured.video ? (
  <video
    src={featured.video}
    className="w-full h-80 object-cover"
    autoPlay
    muted
    loop
    playsInline
  />
) : (
  <img
    src={featured.image}
    alt={featured.title}
    className="w-full h-80 object-cover"
    loading="lazy"
  />
)}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block px-4 py-1 bg-gradient-to-r from-brand to-accent text-white text-sm rounded-full">
                      Featured Project
                    </div>
                  </div>
                </motion.div>
              </Tilt>

              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand to-accent rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    {featured.title}
                  </h2>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {featured.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {featured.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-sm font-medium rounded-full bg-brand/10 dark:bg-brand/20 backdrop-blur-lg border border-brand/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  {/* {featured.live && (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand to-brand/90 hover:from-brand/90 hover:to-brand text-white rounded-xl transition-all shadow-lg hover:shadow-xl"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )} */}
                  {featured.source && (
                    <a
                      href={featured.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-xl transition-all shadow-lg hover:shadow-xl"
                    >
                      <FiGithub />
                      Source Code
                    </a>
                  )}
                  <Link
                    to={`/projects/${featured.slug}`}
                    className="flex items-center px-6 py-3 text-brand hover:text-accent transition-colors group"
                  >
                    <span className="mr-2 font-medium">Read More</span>
                    <FiChevronRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
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
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                scale={1.02}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glarePosition="all"
                glareBorderRadius="1.25rem"
              >
                <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 dark:border-gray-700 hover:border-brand/30 transition-all hover:shadow-2xl">
                  <div className="relative mb-6 rounded-xl overflow-hidden border border-white/30 dark:border-gray-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-brand/10 dark:bg-brand/20 backdrop-blur-lg border border-brand/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700">
                        +{project.stack.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {/* {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-brand to-brand/90 text-white shadow hover:shadow-lg transition-all"
                          title="Live Demo"
                        >
                          <FiExternalLink className="text-sm" />
                        </a>
                      )} */}
                      {project.source && (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 shadow hover:shadow-lg transition-all"
                          title="Source Code"
                        >
                          <FiGithub className="text-sm" />
                        </a>
                      )}
                    </div>
                    <Link
  to={project.slug === 'portfolio' ? '/' : `/projects/${project.slug}`}
  className="flex items-center text-brand hover:text-accent transition-colors group"
>
  <span className="text-sm font-medium">Read More</span>
  <FiChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
</Link>

                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
  className="mt-24 text-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
  </p>
  <Link
    to="/contact"
    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand to-accent text-white rounded-lg transition-all shadow-lg hover:shadow-brand/30 hover:from-brand/90 hover:to-accent/90 group"
  >
    <span>Get in Touch</span>
    <FiChevronRight className="transition-transform group-hover:translate-x-1" />
  </Link>
</motion.div>
      </div>
    </section>
  );
}