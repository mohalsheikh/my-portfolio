import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiGithub, FiChevronLeft, FiExternalLink, FiMoon, FiSun } from "react-icons/fi";

const features = [
  {
    title: "RA Profiles & Duty Schedule",
    description: "Direct access to Resident Assistants with their duty schedules and contact information.",
    icon: "👤"
  },
  {
    title: "Interactive Campus Map",
    description: "Detailed maps with navigation for all housing buildings and key campus locations.",
    icon: "🗺️"
  },
  {
    title: "AI-Powered Helpdesk",
    description: "GPT-4o chatbot for instant answers to housing FAQs and assistance requests.",
    icon: "🤖"
  },
  {
    title: "Event Management",
    description: "Calendar of upcoming events with RSVP functionality and notifications.",
    icon: "📅"
  },
  {
    title: "Safety Resources",
    description: "Emergency contacts, safety procedures, and quick access to campus security.",
    icon: "🛡️"
  },
  {
    title: "Multi-Residence Support",
    description: "Support for multiple housing areas with customizable content per residence.",
    icon: "🏘️"
  }
];

const techStack = [
  { name: "Swift", color: "from-orange-500 to-orange-300" },
  { name: "Firebase", color: "from-yellow-500 to-yellow-300" },
  { name: "TypeScript", color: "from-blue-500 to-blue-300" },
  { name: "GPT-4o", color: "from-purple-500 to-purple-300" },
  { name: "MapKit", color: "from-red-500 to-red-300" },
  { name: "Node.js", color: "from-green-500 to-green-300" }
];

export default function HallLinkProject() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
      {/* Background grid */}
      <div className={`absolute inset-0 z-0 ${darkMode ? 'bg-grid-gray-700/20' : 'bg-grid-gray-400/20'} bg-[length:80px_80px]`}></div>
      
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
          >
            <FiChevronLeft className="transition-transform group-hover:-translate-x-1" />
            <span className="font-medium text-gray-800 dark:text-gray-200">Back to Projects</span>
          </Link>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-indigo-700" />}
          </button>
        </header>

        {/* Hero Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-brand/10 dark:bg-brand/20 border border-brand/20 text-brand dark:text-brand/80 text-sm mb-4">
                  Mobile Application
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">HallLink</span>
                <br />
                <span className="text-gray-800 dark:text-gray-200">Student Housing Super-App</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                A centralized app for university housing communities, connecting students with RAs, events, safety resources, maps, and AI-powered help.
              </motion.p>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="https://github.com/mohalsheikh/lancer-Arms-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  <FiGithub />
                  Source Code
                </a>
                
                <a
                  href="#"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-brand text-white hover:bg-indigo-500 transition-colors"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-brand/10 to-accent/10 rounded-3xl rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop"
                  alt="HallLink app mockup"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Project Overview */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Project Overview</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <p>
                  HallLink is a mobile app created to improve student housing experiences by connecting residents with their RAs and community resources in one place. It features real-time event listings, safety info, interactive maps, and an AI chatbot.
                </p>
                
                <p>
                  As a Resident Assistant (RA) at CBU, I saw first-hand how fragmented communication and outdated tools made it difficult for students to stay informed and connected. I built HallLink to solve these challenges and modernize the student housing experience.
                </p>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border border-indigo-100 dark:border-gray-700">
                  <h3 className="font-bold text-lg mb-2 text-indigo-700 dark:text-indigo-400">Recognition</h3>
                  <p>
                    Presented at CBU's Innovation Challenge, where it received strong interest from university leadership and positive feedback from students and RAs.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Problem Statement</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full text-red-500 dark:text-red-400 mt-1">⚠️</div>
                  <div>Fragmented communication channels between RAs and students</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full text-red-500 dark:text-red-400 mt-1">⚠️</div>
                  <div>Difficulty finding campus resources and event information</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full text-red-500 dark:text-red-400 mt-1">⚠️</div>
                  <div>Lack of centralized safety information and emergency contacts</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full text-red-500 dark:text-red-400 mt-1">⚠️</div>
                  <div>Outdated tools leading to student disengagement</div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Solution Highlights</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
                    <div>Unified platform for all housing communication</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
                    <div>Real-time updates and notifications</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
                    <div>AI-powered assistance for instant help</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
                    <div>Interactive campus maps with navigation</div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Key Features
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              HallLink combines essential tools for campus living into a single, intuitive interface
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110 group-hover:text-brand">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Technology Stack
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Modern tools and frameworks powering HallLink's robust functionality
            </motion.p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="px-5 py-3 rounded-full bg-gradient-to-r text-white font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 bg-gradient-to-r from-brand/10 to-accent/10 dark:from-brand/20 dark:to-accent/20 rounded-2xl p-8 border border-indigo-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Implementation Challenges</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-1 rounded-full text-yellow-500 dark:text-yellow-400 mt-1">•</div>
                    <div>Integrating multiple data sources into a single interface</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-1 rounded-full text-yellow-500 dark:text-yellow-400 mt-1">•</div>
                    <div>Ensuring real-time updates across all app features</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-1 rounded-full text-yellow-500 dark:text-yellow-400 mt-1">•</div>
                    <div>Designing an intuitive UI for diverse user groups</div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Solutions Developed</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
                    <div>Firebase backend for real-time data synchronization</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
                    <div>Modular component architecture for flexible UI</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
                    <div>Custom AI training for campus-specific queries</div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* App Showcase */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              App Interface Showcase
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Clean, intuitive design focused on usability and accessibility
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="p-4 bg-gray-100 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <img 
                  src={`https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1074&q=80`} 
                  alt={`HallLink screen ${item}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Ready to see the code?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore the full implementation on GitHub and see how HallLink was built from the ground up.
          </p>
          <a
            href="https://github.com/mohalsheikh/lancer-Arms-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-lg font-medium"
          >
            <FiGithub />
            View Source Code on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}