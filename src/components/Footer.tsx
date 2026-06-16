import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUp, FiCheckCircle } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { saveNewsletterEmail } from "../services/firebaseService";

const socials = [
  { name: "GitHub", url: "https://github.com/mohalsheikh", icon: <FiGithub /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/moalsheikh/", icon: <FiLinkedin /> },
  { name: "Instagram", url: "https://www.instagram.com/mo.alshe5/", icon: <FiInstagram /> },
  { name: "Email", url: "mailto:moalsheikh2004@gmail.com", icon: <FiMail /> },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      await saveNewsletterEmail(email.trim());
      toast.custom(() => (
        <div className="flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3 shadow-glowsm">
          <FiCheckCircle className="h-5 w-5 text-violetx" />
          <span className="text-sm text-chrome">You're on the list.</span>
        </div>
      ));
      setEmail("");
    } catch {
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <footer className="relative border-t border-line bg-panel/40">
      <Toaster position="bottom-right" toastOptions={{ className: "!bg-transparent !shadow-none !p-0" }} />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h3 className="font-display text-xl font-bold text-chrome">
              MOHAMMED<span className="text-violetx"> ALSHEIKH</span>
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
              Software engineer building production-grade apps and AI products. Currently shipping at the
              intersection of design, systems, and machine learning.
            </p>
            <form onSubmit={subscribe} className="mt-6 flex max-w-sm gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full rounded-lg border border-line bg-ink px-4 py-2.5 text-sm text-chrome placeholder-mist/50 focus:border-violetx focus:outline-none"
              />
              <button className="rounded-lg bg-violetx px-4 py-2.5 text-sm font-medium text-white hover:shadow-glowsm transition-shadow">
                Join
              </button>
            </form>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { n: "About", u: "/aboutme" },
                { n: "Work", u: "/projects" },
                { n: "Contact", u: "/contact" },
              ].map((l) => (
                <li key={l.n}>
                  <Link to={l.u} className="text-mist hover:text-violetx transition-colors">
                    {l.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Connect</h4>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-ink text-mist hover:border-violetx hover:text-violetx transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-mist sm:flex-row">
          <p className="font-mono">© {year} Mohammed Alsheikh — built from scratch.</p>
          <p className="font-mono">Riverside, CA · React + Firebase</p>
        </div>
      </div>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-7 right-7 z-50 grid h-12 w-12 place-items-center rounded-full bg-violetx text-white shadow-glow"
        style={{ opacity: showTop ? 1 : 0, pointerEvents: showTop ? "auto" : "none" }}
        whileHover={{ y: -3 }}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </motion.button>
    </footer>
  );
}
