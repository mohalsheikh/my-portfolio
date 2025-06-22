import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider'; // Create this component
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import HallLink from './pages/projects/HallLink';
import Soundtrack from './pages/projects/Soundtrack';
import RoomFinder from './pages/projects/RoomFinder';



function App() {
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before showing theme-dependent content
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/halllink" element={<HallLink />} />
              <Route path="/projects/soundtrack" element={<Soundtrack />} />
              <Route path="/projects/room-finder" element={<RoomFinder />} />
              <Route path="*" element={<div>404 - Page not found</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;