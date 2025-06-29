import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiGithub, FiSmile, FiBell, FiInstagram, FiBarChart2, FiChevronLeft, FiExternalLink, FiMoon, FiSun, FiMusic, FiHeadphones, FiShare2, FiMessageSquare, FiClock, FiUserPlus } from "react-icons/fi";
import soundtracks1 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.27.53.png';
import soundtracks2 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.28.01.png';
import soundtracks3 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.28.17.png';
import soundtracks4 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.28.31.png';
import soundtracks5 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.28.46.png';
import soundtracks6 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.31.00.png';
import soundtracks7 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.31.26.png';
import soundtracks8 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.31.41.png';
import soundtracks9 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.31.49.png';
import soundtracks10 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.32.17.png';
import soundtracks11 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.32.59.png';
import soundtracks12 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.33.30.png';
import soundtracks13 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.33.44.png';
import soundtracks14 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.34.10.png';
import soundtracks15 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.34.25.png';
import soundtracks16 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.34.30.png';
import soundtracks17 from '../../assets/Simulator Screenshot - iPhone 16 - 2025-06-28 at 06.35.35.png';
import soundtrackAlt1 from '../../assets/soundtracks1.png';
import soundtrackAlt2 from '../../assets/soundtracks2.png';
import soundtrackAlt3 from '../../assets/soundtracks3.jpeg';

const images = [
  soundtracks1,
  soundtracks2,
  soundtracks3,
  soundtracks4,
  soundtracks5,
  soundtracks6,
  soundtracks7,
  soundtracks8,
  soundtracks9,
  soundtracks10,
  soundtracks11,
  soundtracks12,
  soundtracks13,
  soundtracks14,
  soundtracks15,
  soundtracks16,
  soundtracks17,
  soundtrackAlt1,
  soundtrackAlt2,
  soundtrackAlt3,
];



export default function Soundtrack() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);

useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  const features = [
    {
      title: "One Song Per Day",
      description: "Users can only post one song each day, encouraging thoughtful sharing.",
      icon: <FiMusic className="text-2xl" />
    },
    {
      title: "Spotify Integration",
      description: "Search songs, access metadata, and play 30-second previews.",
      icon: <FiHeadphones className="text-2xl" />
    },
    {
      title: "Personal Listening Stats",
      description: "View your top artists, genres, and custom playlists generated from your Spotify data.",
      icon: <FiBarChart2 className="text-2xl" />
    },
    {
      title: "Mood & Mentions",
      description: "Add custom moods and tag friends in your posts using @username.",
      icon: <FiSmile className="text-2xl" />
    },
    {
      title: "Social Interaction",
      description: "Like, comment, and share posts with friends.",
      icon: <FiShare2 className="text-2xl" />
    },
    {
      title: "Direct Messaging",
      description: "Private conversations with read receipts and typing indicators.",
      icon: <FiMessageSquare className="text-2xl" />
    },
    {
      title: "Posting Streaks",
      description: "Track consecutive days of sharing with streak counters.",
      icon: <FiClock className="text-2xl" />
    },
    {
      title: "Friend Network",
      description: "Follow or unfollow users to customize your music feed.",
      icon: <FiUserPlus className="text-2xl" />
    },
    {
      title: "Push Notifications",
      description: "Get notified when someone likes, comments, mentions you, or sends a request.",
      icon: <FiBell className="text-2xl" />
    },
    {
      title: "Instagram Integration",
      description: "Link your Instagram and let friends explore your full music & social identity.",
      icon: <FiInstagram className="text-2xl" />
    }
  ];
  

  const techStack = [
    "Flutter",
    "Dart",
    "Firebase",
    "Firestore",
    "Firebase Authentication",
    "Firebase Cloud Messaging (FCM)",
    "Firebase Storage",
    "Cloud Functions",
    "Spotify API",
    "just_audio",
    "flutter_mentions",
    "Provider (State Management)",
    "url_launcher",
    "image_picker",
    "flutter_local_notifications",
    "PostHog (Analytics)",
    "Framer Motion (for Portfolio)",
    "GitHub (CI/CD & version control)"
  ];
  

  const roadmapItems = [
    "AI mood recap based on your daily post",
    "Music match score with friends",
    "Anonymous 'hidden tracks' for close friends",
    "Vibe graph showing your mood + genre shifts",
    "Weekly AI mixtape from your shared songs",
    "QR code sharing at events or parties"
  ];
  

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-purple-50 to-blue-50'}`}>
      {/* Background grid */}
      <div className={`absolute inset-0 z-0 ${darkMode ? 'bg-grid-gray-700/20' : 'bg-grid-gray-400/20'} bg-[length:80px_80px]`}></div>
      
      {/* Floating music notes */}
      <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-purple-400/20 backdrop-blur-lg animate-float z-0"></div>
      <div className="absolute top-1/3 left-10 w-12 h-12 rounded-full bg-blue-400/20 backdrop-blur-lg animate-float-delayed z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-14 h-14 rounded-full bg-pink-400/20 backdrop-blur-lg animate-float z-0" style={{ animationDelay: '1.5s' }}></div>
      
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
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-purple-700" />}
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
                <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Soundtrack</span>
                <br />
                <span className="text-gray-800 dark:text-gray-200">Authentic Music Sharing</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                A BeReal-style mobile app where users post one song a day, promoting authentic music discovery, cultural expression, and social connection.
              </motion.p>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="https://github.com/mohalsheikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  <FiGithub />
                  Source Code
                </a>
                
                <a
                  href="https://testflight.apple.com/join/Dr3Tv9DS"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-brand text-white hover:opacity-90 transition-opacity"
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
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-400/10 to-brand/10 rounded-3xl rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1470&auto=format&fit=crop"
                  alt="Soundtrack app mockup"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Belief */}
        <motion.div 
          className="mb-24 bg-gradient-to-r from-purple-600/10 to-brand/10 dark:from-purple-700/20 dark:to-brand/20 rounded-2xl p-8 border border-purple-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <FiMusic className="mx-auto text-4xl text-purple-600 dark:text-purple-400 mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Core Belief</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 italic">
              "Sharing music is a natural form of social bonding and cultural identity. Soundtrack empowers users to express their daily mood and connect with others through music without algorithmic pressure."
            </p>
          </div>
        </motion.div>

      {/* Problem & Solution */}
<section className="mb-24">
  <div className="grid md:grid-cols-2 gap-12">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">The Problem</h2>
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>
          Most music platforms today aren't built for intentional sharing. Music discovery is driven by impersonal algorithms, and sharing songs with friends often feels clunky or superficial. Users lack a space where their music taste can be shared in a meaningful, personal way.
        </p>

        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-blue-100 dark:border-gray-700">
          <h3 className="font-bold text-lg mb-2 text-purple-700 dark:text-purple-400">User Insight</h3>
          <p>
            Gen Z and Gen Alpha value authenticity over algorithms. Soundtrack embraces this by giving users a space to express their music identity — one song at a time — free from trends, pressure, or endless scrolling.
          </p>
        </div>
      </div>
    </motion.div>

            
            <motion.div
  className="bg-gradient-to-br from-white/80 to-purple-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Soundtrack Solution</h3>
  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
    <li className="flex items-start gap-3">
      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
      <div>Focuses on music as personal identity — not trends or algorithms</div>
    </li>
    <li className="flex items-start gap-3">
      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
      <div>One-song-per-day limit encourages real reflection and intentional sharing</div>
    </li>
    <li className="flex items-start gap-3">
      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
      <div>Spotify integration surfaces top artists, genres, and authentic listening stats</div>
    </li>
    <li className="flex items-start gap-3">
      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
      <div>Built to spark connection — not comparison — through music and mood</div>
    </li>
  </ul>
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
      Soundtrack makes it simple to share music with meaning — combining personal expression, social connection, and real listening stats in one clean app.
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
        <div className="text-purple-600 dark:text-purple-400 mb-4 transition-transform group-hover:scale-110">
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
      </motion.div>
    ))}
  </div>
</section>


        {/* Metrics & Roadmap */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12">
          <motion.div
  className="bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Metrics That Matter</h3>
  
  <div className="space-y-6">
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">API Integration Coverage</span>
        <span className="font-bold text-purple-600">100%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
      </div>
    </div>

    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">Realtime Feature Utilization</span>
        <span className="font-bold text-brand">92%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div className="bg-brand h-2.5 rounded-full" style={{ width: '92%' }}></div>
      </div>
    </div>

    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">Client-Side Crash Rate</span>
        <span className="font-bold text-accent">0.0%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div className="bg-accent h-2.5 rounded-full" style={{ width: '100%' }}></div>
      </div>
    </div>

    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">Unit & Integration Test Coverage</span>
        <span className="font-bold text-green-500">85%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
      </div>
    </div>
  </div>
</motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-white/80 to-purple-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Future Roadmap</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {roadmapItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2 p-3 rounded-lg bg-purple-50 dark:bg-gray-800 border border-purple-100 dark:border-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1 w-3 h-3 rounded-full bg-purple-600"></div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack & Compliance */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Tech Stack</h2>
              
              <div className="flex flex-wrap gap-3">
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
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Hosting & Analytics</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Firebase powers the backend for real-time data, secure authentication, and push notifications. PostHog tracks engagement metrics like songs shared, app opens, and follows.
                </p>
              </div>
            </motion.div>
            
            <motion.div
  className="bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Privacy & Compliance</h3>

  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
    <li className="flex items-start gap-3">
      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
      <div>Fully aligned with Spotify Developer Terms and API usage policies</div>
    </li>
    <li className="flex items-start gap-3">
      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
      <div>Secure authentication with Firebase Auth and hashed credentials</div>
    </li>
    <li className="flex items-start gap-3">
      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
      <div>No music downloads or monetization — streaming only via official previews</div>
    </li>
    <li className="flex items-start gap-3">
      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
      <div>Public Privacy Policy and Terms of Service available in-app</div>
    </li>
    <li className="flex items-start gap-3">
      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
      <div>User data never sold or shared — minimal collection, maximum control</div>
    </li>
    <li className="flex items-start gap-3">
      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-500 dark:text-green-400 mt-1">✓</div>
      <div>Data deletion requests supported for full user control</div>
    </li>
  </ul>
</motion.div>
          </div>
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
      App Interface
    </motion.h2>
    <motion.p 
      className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true }}
    >
      Clean, intuitive design focused on music sharing
    </motion.p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {images.map((img, index) => (
      <motion.div 
        key={index}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
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
          src={img} 
          alt={`Soundtrack screen ${index + 1}`}
          className="w-full h-auto object-cover"
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
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Experience Authentic Music Sharing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore how Soundtrack revolutionizes music discovery and social connection.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/mohalsheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-lg font-medium"
            >
              <FiGithub />
              View Source Code
            </a>
            <a
              href="https://testflight.apple.com/join/Dr3Tv9DS"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-brand text-white hover:opacity-90 transition-opacity text-lg font-medium"
            >
              <FiExternalLink />
              Try Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}