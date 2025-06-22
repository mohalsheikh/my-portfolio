/* ──────────────────────────────────────────────
   Enhanced Personal Portfolio – Mohammed Alsheikh
─────────────────────────────────────────────── */
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
  AnimatePresence,
  useInView,
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
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";


type ButtonProps = {
  text: string;
  href: string;
};

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

type AnimatedParagraphProps = {
  text: string;
  company: string;
};

type GradientBlobProps = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  color: string;
  size?: number;
};

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

const emojiAnimation = (hover: boolean) => ({
  animate: {
    rotate: hover ? [0, 20, -10, 0] : 0,
    scale: hover ? 1.2 : 1,
  },
  transition: { duration: 0.4 },
});

const SecondaryButton = ({ text, href }: ButtonProps) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={href}
      className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-white/5 border border-white/10
                 text-gray-800 dark:text-gray-300 hover:bg-brand/10 transition inline-block"
    >
      {text}
    </Link>
  </motion.div>
);


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

const GradientBlob = ({ x, y, color, size = 400 }: GradientBlobProps) => (
  <motion.div
    className={`absolute w-[${size}px] h-[${size}px] rounded-full blur-3xl opacity-20 pointer-events-none`}
    style={{
      x,
      y,
      background: `radial-gradient(${color} 0%, transparent 70%)`,
    }}
  />
);

const RippleButton = ({ text, href }: ButtonProps) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0, 150, 255, 0.3)" }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Link
        to={href}
        onClick={(e) => {
          const rect = (e.target as HTMLElement).getBoundingClientRect();
          setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          setIsRippling(true);
        }}
        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand to-accent
                   text-white font-semibold overflow-hidden relative block text-center"
      >
        {isRippling && (
          <motion.span
            className="absolute w-20 h-20 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            onAnimationComplete={() => setIsRippling(false)}
            style={{ left: coords.x, top: coords.y }}
          />
        )}
        {text} <FiArrowRight className="inline-block ml-3 -mt-0.5" />
      </Link>
    </motion.div>
  );
};


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
}: FloatingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { margin: "-50% 0% 0% 0%" });

  return (
    <motion.div
      ref={cardRef}
      className={`absolute ${className}
        ${
          position === "left"
            ? "md:left-5 lg:left-20"
            : "md:right-5 lg:right-20"
        } md:top-1/3 w-48 h-48 bg-white/5 backdrop-blur-xl rounded-2xl
           shadow-2xl p-6 border border-white/10 group cursor-pointer
           transition-all duration-300 hover:shadow-brand/20
           ${isActive ? "!w-64 !h-64 !z-20 !backdrop-blur-2xl" : ""}`}
      style={{ rotateX, rotateY }}
      animate={{
        y: isInView ? [0, -20, 0] : 0,
        opacity: isInView ? 1 : 0.5,
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay: position === "right" ? 1 : 0,
      }}
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/10 to-accent/10 opacity-0 group-hover:opacity-30 transition-opacity" />
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
        <motion.div
          className="absolute top-2 right-2 p-1 hover:bg-white/5 rounded-full"
          whileHover={{ rotate: 90 }}
        >
          {isActive ? <FiX /> : <FiChevronDown />}
        </motion.div>
      </div>
    </motion.div>
  );
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

  const particlesInit = async (engine: unknown) => {
    await loadFull(engine as any);
  };

  const homeData = data || {
    name: "Mohammed",
    tagline: "Creative Engineer. Product-Focused. Code-Driven.",
    company: "California Baptist University",
    badges: [
      "🎓 Software Engineering @ CBU",
      "💼 Built apps for real clients",
      "📱 Creator of HallLink & Soundtrack",
    ],
    mainButton: "Explore My Projects",
    contactButton: "Let's Collaborate",
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
      title: "Frontend Engineer",
      subtitle: "Polished & performant UIs",
      details: "I build modern web & mobile interfaces using React, Flutter, and Tailwind—designed to look good and feel even better.",
    },
    {
      position: "right" as const,
      icon: <FiServer className="text-4xl" />,
      title: "Backend Developer",
      subtitle: "Secure, scalable systems",
      details: "I architect Firebase/Node.js backends with realtime data, cloud functions, and auth flows that just work.",
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
      <div className="absolute inset-0 z-0">
        <Particles
          init={particlesInit}
          options={{
            particles: {
              number: { value: 50 },
              size: { value: 1 },
              move: { enable: true, speed: 0.5 },
              opacity: { value: 0.1 },
              links: {
                enable: true,
                distance: 150,
                color: "#0ea5e9",
                opacity: 0.2,
              },
            },
          }}
        />
      </div>

      <GradientBlob x={x} y={y} color="#0ea5e9" size={400} />
      <GradientBlob x={useTransform(x, (v) => v + 200)} y={useTransform(y, (v) => v - 100)} color="#8b5cf6" size={300} />

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

      <div className="relative z-10 max-w-4xl px-4">
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
              <motion.span className="ml-2 sm:ml-4 inline-block" {...emojiAnimation(isHovered)}>
                👋
              </motion.span>
            </h1>
            <AnimatedParagraph text={`${homeData.tagline} at `} company={homeData.company} />
          </motion.div>
        </motion.div>

        <motion.div className="mt-8 max-w-2xl mx-auto relative" layout transition={{ duration: 0.3 }}>
          <div className="relative">
            <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: isBioExpanded ? "auto" : 64 }}>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
  I'm a software engineer who’s passionate about crafting sleek, high-impact digital experiences. Whether I’m designing systems or shipping full-stack features, I focus on solving real problems through clean architecture, intuitive UX, and scalable code.
  {isBioExpanded &&
    " I’ve built production-grade apps for clients—including a music-sharing social platform—and launched HallLink, a campus-focused app to connect residents with resources, RAs, and events. I love collaborating with creative teams and turning ambitious ideas into polished products."}
</p>
              {!isBioExpanded && (
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 pointer-events-none" />
              )}
            </motion.div>
            <button
              onClick={() => setIsBioExpanded(!isBioExpanded)}
              className="text-brand mt-2 flex items-center gap-2 mx-auto hover:underline group"
            >
              {isBioExpanded ? "Show less" : "Read more"}
              <motion.span animate={{ y: isBioExpanded ? 0 : [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <FiChevronDown className={`transition-transform ${isBioExpanded ? "rotate-180" : ""}`} />
              </motion.span>
            </button>
          </div>
        </motion.div>

        <motion.div className="flex gap-3 justify-center mt-8 flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          {homeData.badges.map((b: string, i: number) => (
            <motion.div
              key={i}
              className="px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 hover:border-brand/30 relative overflow-hidden group"
              whileHover={{ y: -2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-sm bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent relative z-10">{b}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex gap-6 justify-center flex-wrap mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <RippleButton text={homeData.mainButton} href="/projects" />
          <SecondaryButton text={homeData.contactButton} href="/contact" />
        </motion.div>

        <motion.div
  className="flex gap-6 justify-center mt-16 flex-wrap"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  {[
    { icon: <FiGithub />, href: "https://github.com/mohalsheikh", label: "GitHub" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/moalsheikh/", label: "LinkedIn" },
    { icon: <FiMail />, href: "mailto:moalsheikh2004@gmail.com", label: "Email Me" },
    { icon: <FiFileText />, href: "/Mohammed_Alsheikh_Resume_04.pdf", label: "View Resume" },
  ].map((l, i) => (
    <motion.a
      key={i}
      href={l.href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-brand/50 transition-all relative group"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      {l.icon}
      <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black/80 text-white px-2 py-1 rounded">
        {l.label}
      </span>
    </motion.a>
  ))}
        </motion.div>
      </div>
    </section>
  );
}
