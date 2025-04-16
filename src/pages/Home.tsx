import { motion, useMotionValue, useTransform, MotionValue, AnimatePresence } from "framer-motion";
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
};

type AnimatedParagraphProps = {
  text: string;
  company: string;
};

type ButtonProps = {
  text: string;
  href: string;
};

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

  const defaultData = {
    name: "Mohammed",
    tagline: "Fullstack Developer specializing in React & Node.js",
    company: "TechCorp",
    badges: ["Available for contracts", "🚀 12+ projects shipped"],
    mainButton: "Explore My Work",
    contactButton: "Schedule a Call",
  };

  const homeData = data || defaultData;

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  const floatingCardsContent = [
    {
      position: "left" as const,
      icon: <FiCode className="text-4xl" />,
      title: "Frontend Expert",
      subtitle: "5+ years crafting pixel-perfect UIs",
      details: "Specialized in React ecosystem, performance optimization, and accessibility compliance."
    },
    {
      position: "right" as const,
      icon: <FiServer className="text-4xl" />,
      title: "Fullstack Pro",
      subtitle: "Scalable backend solutions",
      details: "Node.js microservices, cloud architecture (AWS/GCP), and database optimization."
    }
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 opacity-30 dark:opacity-20 z-0">
        <div className="absolute inset-0 bg-[length:60px_60px] bg-grid-gray-400/20 dark:bg-grid-gray-700/20 animate-grid-pan" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand/5 to-transparent animate-gradient-flow" />
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, #ff0080 0%, transparent 80%)',
              'radial-gradient(circle at 50% 50%, #00ff88 0%, transparent 80%)',
              'radial-gradient(circle at 50% 50%, #0011ff 0%, transparent 80%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {floatingCardsContent.map((card, index) => (
        <FloatingCard
          key={index}
          {...card}
          isActive={activeCard === index}
          onClick={() => setActiveCard(activeCard === index ? null : index)}
          rotateX={rotateX}
          rotateY={rotateY}
        />
      ))}

      <div className="relative z-10 max-w-4xl px-4">
        <motion.div className="relative group">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
              <InteractiveTitle text={homeData.name} isHovered={isHovered} />
              <motion.span className="ml-4 inline-block" {...emojiAnimation(isHovered)}>
                👋
              </motion.span>
            </h1>
            <AnimatedParagraph text={`${homeData.tagline} at `} company={homeData.company} />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 max-w-2xl mx-auto"
          layout
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: isBioExpanded ? 'auto' : 60 }}
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Full-stack developer specializing in modern web technologies. Passionate about
              creating performant applications with clean architecture. Open source contributor
              and tech community mentor. {isBioExpanded && 'Currently focusing on improving web3 developer experience through better tooling and documentation.'}
            </p>
          </motion.div>
          <button
            onClick={() => setIsBioExpanded(!isBioExpanded)}
            className="text-brand mt-2 flex items-center gap-2 mx-auto hover:underline"
          >
            {isBioExpanded ? 'Show less' : 'Read more'} 
            <FiChevronDown className={`transition-transform ${isBioExpanded ? 'rotate-180' : ''}`} />
          </button>
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center mt-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {homeData.badges.map((badge: string, index: number) => (
            <motion.div
              key={index}
              className="px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 hover:border-brand/30 relative overflow-hidden group"
              whileHover={{ y: -2 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-sm bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent relative z-10">
                {badge}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center flex-wrap mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <PrimaryButton text={homeData.mainButton} href="#projects" />
          <SecondaryButton text={homeData.contactButton} href="#contact" />
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { icon: <FiGithub />, href: "#", label: "GitHub", count: "2.5k+ stars" },
            { icon: <FiLinkedin />, href: "#", label: "LinkedIn", count: "500+ connections" },
            { icon: <FiMail />, href: "#", label: "Email", count: "24h response" },
            { icon: <FiFileText />, href: "#", label: "Resume", count: "PDF download" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="p-4 w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-brand/50 relative group"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute -bottom-12 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                {link.label} ({link.count})
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45" />
              </div>
              <span className="text-2xl transition-transform group-hover:scale-125 group-hover:text-brand">
                {link.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <ScrollIndicator />
      </div>

      <CursorTrail x={x} y={y} />
    </section>
  );
}

const FloatingCard = ({
  position,
  icon,
  title,
  subtitle,
  details,
  isActive,
  onClick,
  rotateX,
  rotateY
}: FloatingCardProps) => (
  <motion.div
    className={`absolute ${position === "left" ? "left-5 lg:left-20" : "right-5 lg:right-20"} top-1/3 w-48 h-48 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10 group cursor-pointer hover:shadow-glow transition-all duration-300 ${
      isActive ? "!w-64 !h-64 !z-20" : ""
    }`}
    style={{ rotateX, rotateY }}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay: position === "right" ? 1 : 0 }}
    onClick={onClick}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10 flex flex-col items-center h-full">
      <div className="text-brand mb-4 [&>svg]:drop-shadow-glow">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-sm opacity-75 text-center mb-4">{subtitle}</p>
      <AnimatePresence>
        {isActive && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-gray-400"
          >
            {details}
          </motion.p>
        )}
      </AnimatePresence>
      <motion.div
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/5"
        whileHover={{ scale: 1.2 }}
      >
        {isActive ? <FiX className="text-gray-400" /> : <FiChevronDown className="text-gray-400" />}
      </motion.div>
    </div>
  </motion.div>
);

const AnimatedParagraph = ({ text, company }: AnimatedParagraphProps) => (
  <motion.p
    className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    {text}
    <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent font-bold">
      {company}
    </span>
  </motion.p>
);

const PrimaryButton = ({ text, href }: ButtonProps) => (
  <motion.a
    href={href}
    className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand to-accent text-white font-semibold hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <span className="relative z-10 flex items-center gap-2">
      {text}
      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
    </span>
  </motion.a>
);

const SecondaryButton = ({ text, href }: ButtonProps) => (
  <motion.a
    href={href}
    className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-700 dark:text-gray-300 font-semibold hover:border-brand/50 hover:bg-brand/5 transition-all duration-300 group relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="absolute inset-0 bg-shimmer animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
    <span className="relative z-10">{text}</span>
  </motion.a>
);

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2 }}
  >
    <div className="w-1 h-8 bg-gradient-to-t from-brand to-accent rounded-full animate-bounce" />
    <span className="text-sm bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
      Explore more
    </span>
  </motion.div>
);

const InteractiveTitle = ({ text, isHovered }: { text: string; isHovered: boolean }) => (
  <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent relative">
    <motion.span
      className="absolute -inset-4 bg-gradient-to-r from-brand/30 to-accent/30 blur-2xl opacity-0 group-hover:opacity-50"
      animate={{ opacity: isHovered ? 0.5 : 0 }}
    />
    {text.split('').map((letter: string, i: number) => (
      <motion.span
        key={i}
        className="inline-block"
        animate={isHovered ? { y: [0, -10, 0] } : {}}
        transition={{ delay: i * 0.05, duration: 0.3 }}
      >
        {letter}
      </motion.span>
    ))}
  </span>
);

const CursorTrail = ({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) => (
  <>
    <motion.div
      className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-radial-gradient from-brand/20 to-transparent blur-3xl opacity-40"
      style={{ x, y }}
    />
    <motion.div
      className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand/10 rounded-full blur-xl"
      style={{ x, y }}
    />
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute pointer-events-none w-2 h-2 bg-brand rounded-full"
        style={{ x, y }}
        transition={{ duration: 0.1 }}
      />
    ))}
  </>
);

const emojiAnimation = (isHovered: boolean) => ({
  animate: {
    rotate: isHovered ? [0, 20, -10, 0] : 0,
    scale: isHovered ? 1.2 : 1,
  },
  transition: { type: "tween", duration: 0.4 } as const
});