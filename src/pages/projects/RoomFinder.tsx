import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiGithub, FiChevronLeft, FiExternalLink, FiMoon, FiSun, FiMap, FiUsers, FiClock, FiCalendar, FiThumbsUp, FiAward } from "react-icons/fi";

export default function RoomFinder() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const features = [
    {
      title: "Live Room Availability",
      description: "Real-time updates on which rooms are currently available based on user input.",
      icon: <FiClock className="text-2xl" />
    },
    {
      title: "Community Voting System",
      description: "Users mark rooms as 'empty' or 'in use' to maintain accuracy.",
      icon: <FiThumbsUp className="text-2xl" />
    },
    {
      title: "Building Directory",
      description: "Browse rooms with tags like 'quiet' or 'good for group work'.",
      icon: <FiMap className="text-2xl" />
    },
    {
      title: "Schedule Integration",
      description: "Predict future availability by viewing campus class schedules.",
      icon: <FiCalendar className="text-2xl" />
    }
  ];

  const techStack = [
    "Flutter",
    "Firebase Auth",
    "Firestore",
    "Firebase Analytics",
    "Provider / Riverpod",
    "Google Maps API"
  ];

  const impactStats = [
    { value: "78%", label: "Reduction in search time" },
    { value: "1,200+", label: "Active users" },
    { value: "94%", label: "User satisfaction" },
    { value: "42", label: "Buildings mapped" }
  ];

  const futureIdeas = [
    "Admin moderation tools",
    "Automatic presence detection",
    "Push notifications for room availability",
    "Integration with university systems"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-blue-900' : 'bg-gradient-to-br from-blue-50 to-green-50'}`}>
      {/* Background grid */}
      <div className={`absolute inset-0 z-0 ${darkMode ? 'bg-grid-gray-700/20' : 'bg-grid-gray-400/20'} bg-[length:80px_80px]`}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-blue-400/20 backdrop-blur-lg animate-float z-0"></div>
      <div className="absolute top-1/3 left-10 w-12 h-12 rounded-full bg-green-400/20 backdrop-blur-lg animate-float-delayed z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
          >
            <FiChevronLeft className="transition-transform group-hover:-translate-x-1" />
            <span className="font-medium text-gray-800 dark:text-gray-200">Back to Projects</span>
          </Link>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-blue-700" />}
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
                  Team Project • Campus Solution
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent">CBU Room Finder</span>
                <br />
                <span className="text-gray-800 dark:text-gray-200">Real-Time Study Space Discovery</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                As part of a student development team, I helped create this Flutter app that helps CBU students find empty classrooms and study spaces in real time.
              </motion.p>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="https://github.com/example/room-finder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  <FiGithub />
                  Source Code
                </a>
                
                <a
                  href="#"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-green-500 text-white hover:opacity-90 transition-opacity"
                >
                  <FiExternalLink />
                  View Demo
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-3xl rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1470&auto=format&fit=crop"
                  alt="CBU Room Finder app mockup"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Collaboration */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">My Role on the Team</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <p>
                  As a developer on this project, I collaborated with fellow CBU students to create a solution to a common campus challenge. My contributions included:
                </p>
                
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Implementing the real-time room availability feature using Firebase</li>
                  <li>Developing the voting system interface and backend logic</li>
                  <li>Contributing to the building directory with user-tagged rooms</li>
                  <li>Assisting with UI design for optimal campus navigation</li>
                </ul>
                
                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">Development Team</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-bold">Y</div>
                      <div className="w-12 h-12 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white font-bold">M</div>
                      <div className="w-12 h-12 rounded-full bg-brand border-2 border-white flex items-center justify-center text-white font-bold">J</div>
                      <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-700 font-bold">+2</div>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">Team Members</span>
                  </div>
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
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Solving Campus Challenges</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our team identified these common problems faced by CBU students:
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full text-red-500 dark:text-red-400 mt-1">⚠️</div>
                  <div>Wasted time searching for available spaces between classes</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full text-red-500 dark:text-red-400 mt-1">⚠️</div>
                  <div>Frustration during exam seasons with overcrowded study areas</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full text-red-500 dark:text-red-400 mt-1">⚠️</div>
                  <div>Difficulty finding appropriate spaces for group projects</div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Our Team's Solution</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Together, we created CBU Room Finder to offer real-time room availability based on crowdsourced data — helping students save time, reduce frustration, and study more efficiently.
                </p>
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
              Features I Helped Implement
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Core functionality I contributed to as part of the development team
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="text-blue-600 dark:text-blue-400 mb-4 transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impact & Value */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Campus Impact
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              How our team's solution transformed the CBU student experience
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-white/80 to-green-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Measurable Results</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                    <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Value to Students</h3>
              
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
                  <div>Saves valuable time when searching for study spaces</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
                  <div>Reduces classroom congestion during peak hours</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
                  <div>Promotes efficient use of campus facilities</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
                  <div>Demonstrates student-led tech solutions in higher education</div>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack & Future Ideas */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Technology Stack</h2>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">My Technical Contributions</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I worked with Flutter for cross-platform development and Firebase for real-time data synchronization. My responsibilities included implementing the voting system and optimizing the room availability algorithm.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-white/80 to-green-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Future Development Ideas</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {futureIdeas.map((idea, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1 w-3 h-3 rounded-full bg-blue-600"></div>
                    <span className="text-gray-700 dark:text-gray-300">{idea}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* App Interface Showcase */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              App Interface
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Screens from the app I helped develop
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
                  src={`https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80`} 
                  alt={`Room Finder screen ${item}`}
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
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Explore Our Team's Work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            See how our student team created this campus solution with modern technologies and collaborative development.
          </p>
          <a
            href="https://github.com/example/room-finder"
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