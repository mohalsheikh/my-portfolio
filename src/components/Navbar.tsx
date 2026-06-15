import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/", idx: "01" },
  { name: "About", path: "/aboutme", idx: "02" },
  { name: "Work", path: "/projects", idx: "03" },
  { name: "Contact", path: "/contact", idx: "04" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-xl border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel font-display font-extrabold text-violetx group-hover:border-violetx transition-colors">
            M
          </span>
          <span className="font-display font-bold tracking-wide text-sm text-chrome hidden sm:block">
            ALSHEIKH<span className="text-violetx">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative px-4 py-2 rounded-lg text-sm transition-colors ${
                  active ? "text-chrome" : "text-mist hover:text-chrome"
                }`}
              >
                <span className="font-mono text-[10px] text-violetx mr-1.5">{item.idx}</span>
                {item.name}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-panel border border-line"
                  />
                )}
              </Link>
            );
          })}
          <a
            href="/Mohammed_Alsheikh_Resume_04.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-lg bg-violetx px-4 py-2 text-sm font-medium text-white hover:shadow-glowsm transition-shadow"
          >
            Résumé
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative h-10 w-10 rounded-lg border border-line bg-panel grid place-items-center"
          aria-label="Toggle menu"
        >
          <span className={`absolute h-0.5 w-5 bg-chrome transition-transform ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-0.5 w-5 bg-chrome transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-0.5 w-5 bg-chrome transition-transform ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-xl border-b border-line"
          >
            <ul className="px-6 py-5 space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 py-3 text-lg ${
                      pathname === item.path ? "text-violetx" : "text-chrome"
                    }`}
                  >
                    <span className="font-mono text-xs text-violetx">{item.idx}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Mohammed_Alsheikh_Resume_04.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block rounded-lg bg-violetx px-4 py-3 text-center font-medium text-white"
                >
                  Download Résumé
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
