import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import AdminMessages from "./pages/AdminMessages";
import { Privacy, Terms } from "./pages/Legal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/aboutme" element={<Page><AboutMe /></Page>} />
        <Route path="/projects" element={<Page><Projects /></Page>} />
        <Route path="/projects/:slug" element={<Page><ProjectDetail /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
        <Route path="/admin/messages" element={<Page><AdminMessages /></Page>} />
        <Route path="/privacy" element={<Page><Privacy /></Page>} />
        <Route path="/terms" element={<Page><Terms /></Page>} />
        <Route
          path="*"
          element={
            <Page>
              <div className="grid min-h-[70vh] place-items-center px-5 text-center">
                <div>
                  <p className="eyebrow">404</p>
                  <h1 className="mt-3 font-display text-4xl font-bold text-chrome">Page not found</h1>
                  <a href="/" className="mt-6 inline-block text-violetx hover:underline">
                    Back home
                  </a>
                </div>
              </div>
            </Page>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <ScrollToTop />
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="relative z-10 flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
