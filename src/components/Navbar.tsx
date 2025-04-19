import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "AboutMe", path: "/aboutme" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close menu on route change */
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav
      className={`fixed inset-x-0 z-50 transition-all
        ${scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur shadow" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent"
        >
          Mohammed
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-brand after:transition-transform
                hover:after:scale-x-100
                ${
                  pathname === item.path
                    ? "text-brand font-semibold after:scale-x-100"
                    : "text-gray-700 dark:text-gray-300"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-9 h-9 rounded focus:outline-none group"
          aria-label="Toggle Menu"
        >
          {/* bars */}
          <span
            className={`absolute inset-x-1.5 top-1/2 h-0.5 bg-current transition-transform
              ${open ? "rotate-45" : "-translate-y-2"}`}
          />
          <span
            className={`absolute inset-x-1.5 top-1/2 h-0.5 bg-current transition-opacity
              ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute inset-x-1.5 top-1/2 h-0.5 bg-current transition-transform
              ${open ? "-rotate-45" : "translate-y-2"}`}
          />
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween" }}
            className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur border-t border-white/10"
          >
            <ul className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block text-lg py-1
                      ${
                        pathname === item.path
                          ? "text-brand font-semibold"
                          : "text-gray-800 dark:text-gray-200"
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
