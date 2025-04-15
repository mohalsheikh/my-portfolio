import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowRight, FiMail, FiFileText, FiCode, FiServer } from "react-icons/fi";
import { useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, window.innerHeight], [15, -15]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-15, 15]);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(event: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-800"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Interactive gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <motion.path
            d="M25,0 L50,25 L75,0"
            className="stroke-brand/20 fill-none"
            strokeWidth="0.5"
            animate={{ d: ["M25,0 L50,25 L75,0", "M0,25 L25,50 L0,75", "M25,100 L50,75 L75,100"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M0,50 L25,75 L0,100"
            className="stroke-accent/20 fill-none"
            strokeWidth="0.5"
            animate={{ d: ["M0,50 L25,75 L0,100", "M25,100 L50,75 L75,100", "M100,50 L75,25 L100,0"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Floating 3D cards */}
      <motion.div 
        className="absolute left-10 top-1/3 w-48 h-48 bg-white/5 backdrop-blur-lg rounded-xl shadow-2xl p-6 border border-white/10"
        style={{ rotateX, rotateY }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FiCode className="text-4xl mb-4 text-brand mx-auto" />
        <h3 className="text-lg font-semibold mb-2">Frontend Expert</h3>
        <p className="text-sm opacity-75">5+ years crafting pixel-perfect UIs</p>
      </motion.div>

      <motion.div 
        className="absolute right-10 top-1/4 w-48 h-48 bg-white/5 backdrop-blur-lg rounded-xl shadow-2xl p-6 border border-white/10"
        style={{ rotateX, rotateY }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      >
        <FiServer className="text-4xl mb-4 text-accent mx-auto" />
        <h3 className="text-lg font-semibold mb-2">Fullstack Pro</h3>
        <p className="text-sm opacity-75">Scalable backend solutions</p>
      </motion.div>

      <div className="relative z-10 max-w-4xl px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent relative">
              <motion.span
                className="absolute -inset-4 bg-gradient-to-r from-brand/30 to-accent/30 blur-2xl"
                animate={{ opacity: isHovered ? 1 : 0.5 }}
              />
              Mohammed
            </span>
            <motion.span
              className="ml-4 inline-block"
              animate={{ 
                rotate: isHovered ? [0, 20, -10, 0] : 0,
                scale: isHovered ? 1.2 : 1 
              }}
              transition={{ duration: 0.4 }}
            >
              👋
            </motion.span>
          </h1>
          <motion.p
            className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Senior Fullstack Developer specializing in <span className="text-brand">React</span> and <span className="text-accent">Node.js</span>. Currently building AI-powered solutions at {''}
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent font-bold">TechCorp</span>.
          </motion.p>
        </motion.div>

        {/* Achievement badges */}
        <motion.div 
          className="flex gap-4 justify-center mt-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="px-4 py-2 bg-green-500/10 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm">Available for contracts</span>
          </div>
          <div className="px-4 py-2 bg-blue-500/10 rounded-full flex items-center gap-2">
            <span className="text-sm">🚀 12+ projects shipped</span>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center flex-wrap mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand to-accent text-white font-semibold hover:shadow-2xl hover:shadow-brand/30 transition-all duration-300 group flex items-center gap-2 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-xl border-2 border-brand/20 bg-white/5 backdrop-blur-lg text-gray-700 dark:text-gray-300 font-semibold hover:border-brand/50 hover:bg-brand/5 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Schedule a Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { icon: <FiGithub />, href: "https://github.com", label: "GitHub Profile" },
            { icon: <FiLinkedin />, href: "https://linkedin.com", label: "LinkedIn Profile" },
            { icon: <FiMail />, href: "mailto:hello@example.com", label: "Email Me" },
            { icon: <FiFileText />, href: "/resume.pdf", label: "Download Resume" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 hover:bg-brand hover:text-white transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-brand/20"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="relative z-10 block text-2xl">{link.icon}</span>
                <span className="relative z-10 text-sm font-medium opacity-75">{link.label}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-1 h-8 bg-gray-400 rounded-full animate-bounce" />
          <span className="text-sm">Explore more</span>
        </motion.div>
      </div>

      {/* Ambient cursor light */}
      <motion.div 
        className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-radial-gradient from-brand/20 to-transparent blur-3xl opacity-40"
        style={{ x, y }}
      />
    </section>
  );
}