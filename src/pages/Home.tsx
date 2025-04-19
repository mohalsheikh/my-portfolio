/* ──────────────────────────────────────────────
   src/pages/Home.tsx
─────────────────────────────────────────────── */
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiArrowRight,
  FiMail,
  FiFileText,
  FiCode,
  FiServer,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import { useRef, useState } from "react";
import { useHomeContent } from "../hooks/useHomeContent";

/* ──────────────────────────────────────────────
   Types
─────────────────────────────────────────────── */
type FloatingCardProps = {
  position: "left" | "right";
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  details: string;
  isActive?: boolean;
  onClick?: () => void;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  className?: string;
};
type AnimatedParagraphProps = { text: string; company: string };
type ButtonProps = { text: string; href: string };

/* ──────────────────────────────────────────────
   Main Component
─────────────────────────────────────────────── */
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-10, 10]);
  const [isHovered, setIsHovered] = useState(false);
  const { data } = useHomeContent();

  const homeData = data || {
    name: "Mohammed",
    tagline: "Fullstack Developer specializing in React & Node.js",
    company: "TechCorp",
    badges: ["Available for contracts", "🚀 12+ projects shipped"],
    mainButton: "Explore My Work",
    contactButton: "Schedule a Call",
  };

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  const floatingCards = [
    {
      position: "left" as const,
      icon: <FiCode className="text-4xl" />,
      title: "Frontend Expert",
      subtitle: "5+ years crafting UIs",
      details:
        "Specialized in React ecosystem, performance optimization, and accessibility.",
    },
    {
      position: "right" as const,
      icon: <FiServer className="text-4xl" />,
      title: "Fullstack Pro",
      subtitle: "Scalable backend solutions",
      details:
        "Node.js microservices, cloud architecture (AWS/GCP), database tuning.",
    },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col justify-center items-center text-center
                 px-4 pt-24 pb-32 md:pt-40 relative overflow-hidden
                 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white
                 dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900"
    >
      {/* background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 -z-10">
        <div className="absolute inset-0 bg-[length:60px_60px] bg-grid-gray-400/20
                        dark:bg-grid-gray-700/20 animate-grid-pan" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand/5
                        to-transparent animate-gradient-flow" />
      </div>

      {/* floating cards (hidden on mobile) */}
      {floatingCards.map((c, i) => (
        <FloatingCard
          key={i}
          {...c}
          isActive={activeCard === i}
          onClick={() => setActiveCard(activeCard === i ? null : i)}
          rotateX={rotateX}
          rotateY={rotateY}
          className="hidden md:block"
        />
      ))}

      {/* main container */}
      <div className="relative z-10 max-w-4xl px-4">
        {/* hero */}
        <motion.div className="relative group">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 tracking-tighter">
              <InteractiveTitle text={homeData.name} isHovered={isHovered} />
              <motion.span
                className="ml-2 sm:ml-4 inline-block"
                {...emojiAnimation(isHovered)}
              >
                👋
              </motion.span>
            </h1>
            <AnimatedParagraph
              text={`${homeData.tagline} at `}
              company={homeData.company}
            />
          </motion.div>
        </motion.div>

        {/* bio */}
        <motion.div
          className="mt-8 max-w-2xl mx-auto"
          layout
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: isBioExpanded ? "auto" : 64 }}
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Full‑stack developer specializing in modern web technologies.
              Passionate about performant, clean architecture. Open‑source
              contributor & community mentor.
              {isBioExpanded &&
                " Currently focusing on improving web3 developer experience through better tooling & docs."}
            </p>
          </motion.div>
          <button
            onClick={() => setIsBioExpanded(!isBioExpanded)}
            className="text-brand mt-2 flex items-center gap-2 mx-auto hover:underline"
          >
            {isBioExpanded ? "Show less" : "Read more"}
            <FiChevronDown
              className={`transition-transform ${
                isBioExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </motion.div>

        {/* badges */}
        <motion.div
          className="flex gap-3 justify-center mt-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {homeData.badges.map((b: string, i: number) => (
            <motion.div
              key={i}
              className="px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full
                         border border-white/10 hover:border-brand/30 relative"
              whileHover={{ y: -2 }}
            >
              <span className="text-sm bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                {b}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* buttons */}
        <motion.div
          className="flex gap-6 justify-center flex-wrap mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <PrimaryButton text={homeData.mainButton} href="#projects" />
          <SecondaryButton text={homeData.contactButton} href="#contact" />
        </motion.div>

        {/* social */}
        <motion.div
          className="flex gap-6 justify-center mt-16 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { icon: <FiGithub />, href: "#", label: "GitHub" },
            { icon: <FiLinkedin />, href: "#", label: "LinkedIn" },
            { icon: <FiMail />, href: "#", label: "Email" },
            { icon: <FiFileText />, href: "#", label: "Resume" },
          ].map((l, i) => (
            <motion.a
              key={i}
              href={l.href}
              className="p-4 w-14 h-14 flex items-center justify-center
                         rounded-xl bg-white/5 backdrop-blur-lg border border-white/10
                         hover:border-brand/50 transition-all"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {l.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* cursor effects hidden on phones */}
      <div className="hidden md:block">
        <CursorTrail x={x} y={y} />
      </div>

      <ScrollIndicator />
    </section>
  );
}

/* ──────────────────────────────────────────────
   Floating Card (hidden on < md via className)
─────────────────────────────────────────────── */
const FloatingCard = ({
  position,
  icon,
  title,
  subtitle,
  details,
  isActive,
  onClick,
  rotateX,
  rotateY,
  className = "",
}: FloatingCardProps) => (
  <motion.div
    className={`absolute ${className}
      ${
        position === "left"
          ? "md:left-5 lg:left-20"
          : "md:right-5 lg:right-20"
      } md:top-1/3 w-48 h-48 bg-white/5 backdrop-blur-xl rounded-2xl
         shadow-2xl p-6 border border-white/10 group cursor-pointer
         transition-all duration-300 ${isActive ? "!w-64 !h-64 !z-20" : ""}`}
    style={{ rotateX, rotateY }}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay: position === "right" ? 1 : 0 }}
    onClick={onClick}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10 flex flex-col items-center h-full">
      <div className="text-brand mb-4">{icon}</div>
      <h3 className="text-lg font-bold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-sm opacity-75 text-center">{subtitle}</p>
      <AnimatePresence>
        {isActive && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-gray-400 mt-2"
          >
            {details}
          </motion.p>
        )}
      </AnimatePresence>
      <motion.div className="absolute top-2 right-2 p-1">
        {isActive ? <FiX /> : <FiChevronDown />}
      </motion.div>
    </div>
  </motion.div>
);

/* ──────────────────────────────────────────────
   Small helpers
─────────────────────────────────────────────── */
const AnimatedParagraph = ({ text, company }: AnimatedParagraphProps) => (
  <motion.p
    className="text-lg sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    {text}
    <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent font-semibold">
      {company}
    </span>
  </motion.p>
);

const PrimaryButton = ({ text, href }: ButtonProps) => (
  <motion.a
    href={href}
    className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-brand to-accent
               text-white font-semibold hover:shadow-xl transition"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {text} <FiArrowRight className="inline-block ml-2 -mt-0.5" />
  </motion.a>
);

const SecondaryButton = ({ text, href }: ButtonProps) => (
  <motion.a
    href={href}
    className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-white/5 border border-white/10
               text-gray-800 dark:text-gray-300 hover:bg-brand/10 transition"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {text}
  </motion.a>
);

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
  >
    <div className="w-1 h-6 bg-gradient-to-t from-brand to-accent rounded-full animate-bounce" />
    <span className="text-xs bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
      Scroll
    </span>
  </motion.div>
);

const InteractiveTitle = ({ text, isHovered }: { text: string; isHovered: boolean }) => (
  <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent relative">
    {text.split("").map((letter, i) => (
      <motion.span
        key={i}
        className="inline-block"
        animate={isHovered ? { y: [0, -10, 0] } : {}}
        transition={{ delay: i * 0.04, duration: 0.3 }}
      >
        {letter}
      </motion.span>
    ))}
  </span>
);

const CursorTrail = ({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) => (
  <>
    <motion.div
      className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2
                 w-96 h-96 bg-radial-gradient from-brand/20 to-transparent blur-3xl opacity-40"
      style={{ x, y }}
    />
    <motion.div
      className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2
                 w-24 h-24 bg-brand/10 rounded-full blur-xl"
      style={{ x, y }}
    />
  </>
);

const emojiAnimation = (hover: boolean) => ({
  animate: {
    rotate: hover ? [0, 20, -10, 0] : 0,
    scale: hover ? 1.2 : 1,
  },
  transition: { duration: 0.4 },
});
