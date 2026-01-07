import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FiGithub, FiChevronLeft, FiMoon, FiSun, FiEye, FiMic, FiNavigation, 
  FiShield, FiCpu, FiActivity, FiPlay, FiCode, FiLayers, FiTarget,
  FiZap, FiUsers, FiAward, FiBookOpen
} from "react-icons/fi";

// YouTube video ID - replace with your actual video ID after uploading
const YOUTUBE_VIDEO_ID = "https://youtu.be/Bi10vWyqO6g";

// Import your screenshots here - update paths as needed
// import screenshot1 from '../../assets/visionassist/screenshot1.png';
// import screenshot2 from '../../assets/visionassist/screenshot2.png';
// etc.

const features = [
  {
    title: "Real-Time Object Detection",
    description: "Custom-trained YOLOv8 model detecting 600+ object classes at 25+ FPS. Implemented smart label normalization, confidence thresholding, and directional positioning ('on your left', 'straight ahead').",
    icon: <FiEye className="w-6 h-6" />,
    technical: "YOLOv8 • Custom Training • NMS Optimization"
  },
  {
    title: "Human Pose & Activity Recognition",
    description: "Built a multi-person tracking system using MediaPipe with Kalman filtering for smooth pose estimation. Trained classifiers for 20+ activities including walking, sitting, waving, and pointing.",
    icon: <FiActivity className="w-6 h-6" />,
    technical: "MediaPipe • Kalman Filter • Activity Classification"
  },
  {
    title: "Sign Language Interpreter",
    description: "Developed ASL recognition system supporting A-Z alphabet, numbers 0-9, and 50+ common signs. Implemented temporal pattern analysis for gesture sequences and real-time hand landmark tracking.",
    icon: "🤟",
    technical: "Hand Landmark Detection • Gesture Recognition • Temporal Analysis"
  },
  {
    title: "Intelligent OCR System",
    description: "Engineered a hybrid OCR pipeline combining EasyOCR and Tesseract with smart region detection. Implemented reading order algorithms and text preprocessing for improved accuracy.",
    icon: "📖",
    technical: "EasyOCR • Tesseract • Region Detection • Text Preprocessing"
  },
  {
    title: "Voice Command System",
    description: "Built voice activity detection (VAD) with adaptive silence thresholding and noise filtering. Implemented intent classification for hands-free navigation and scene queries.",
    icon: <FiMic className="w-6 h-6" />,
    technical: "VAD • Intent Classification • Noise Filtering"
  },
  {
    title: "Scene Memory Engine",
    description: "Created semantic memory system using vector embeddings for scene recall. Users can ask 'Have I seen this before?' or 'What was in this room?' with contextual understanding.",
    icon: "🧠",
    technical: "Vector Embeddings • Semantic Search • Context Memory"
  },
  {
    title: "Navigation System",
    description: "Integrated Google Maps Platform APIs for real-time turn-by-turn navigation with accessibility-focused directions, landmark announcements, and multi-modal transport support.",
    icon: <FiNavigation className="w-6 h-6" />,
    technical: "Google Maps API • Route Optimization • Accessibility"
  },
  {
    title: "Depth-Based Safety System",
    description: "Implemented MiDaS depth estimation for obstacle detection with distance calculation. Built proactive warning system with smart cooldowns to prevent alert fatigue.",
    icon: <FiShield className="w-6 h-6" />,
    technical: "MiDaS • Depth Estimation • Alert Management"
  },
  {
    title: "Emotion & Expression Analysis",
    description: "Developed facial expression recognition using MediaPipe face mesh with custom emotion classifiers. Provides social context for visually impaired users in conversations.",
    icon: <FiUsers className="w-6 h-6" />,
    technical: "Face Mesh • Expression Classification • Social Context"
  }
];

const techStack = [
  { name: "Python", bg: "bg-blue-500", category: "core" },
  { name: "OpenCV", bg: "bg-green-600", category: "vision" },
  { name: "YOLOv8", bg: "bg-purple-600", category: "ml" },
  { name: "MediaPipe", bg: "bg-red-500", category: "ml" },
  { name: "PyTorch", bg: "bg-orange-600", category: "ml" },
  { name: "TensorFlow", bg: "bg-yellow-600", category: "ml" },
  { name: "MiDaS", bg: "bg-indigo-500", category: "ml" },
  { name: "EasyOCR", bg: "bg-cyan-600", category: "vision" },
  { name: "Tesseract", bg: "bg-teal-500", category: "vision" },
  { name: "NumPy", bg: "bg-blue-700", category: "core" },
  { name: "Google Maps API", bg: "bg-green-500", category: "api" },
  { name: "Deepgram", bg: "bg-violet-600", category: "api" },
];

const architectureModules = [
  { name: "controller.py", desc: "Main orchestrator - frame processing pipeline, multi-threading, event handling", lines: "1800+" },
  { name: "human_analyzer.py", desc: "Pose estimation, face tracking, hand detection with Kalman smoothing", lines: "1650+" },
  { name: "sign_language_interpreter.py", desc: "ASL recognition with temporal pattern analysis and gesture sequences", lines: "1800+" },
  { name: "navigation_client.py", desc: "Google Maps integration with accessibility-focused routing", lines: "1100+" },
  { name: "ocr_engine.py", desc: "Hybrid OCR system with region detection and reading order", lines: "650+" },
  { name: "scene_memory.py", desc: "Semantic memory with vector embeddings for scene recall", lines: "280+" },
  { name: "guidance_engine.py", desc: "Safety alerts with depth-aware escalation and deduplication", lines: "320+" },
  { name: "voice_listener.py", desc: "VAD with adaptive thresholding and intent detection", lines: "250+" },
];

const stats = [
  { label: "Lines of Code", value: "12,000+", icon: <FiCode /> },
  { label: "ML Models Integrated", value: "8", icon: <FiCpu /> },
  { label: "Object Classes", value: "600+", icon: <FiTarget /> },
  { label: "ASL Signs", value: "86", icon: "🤟" },
  { label: "Activities Recognized", value: "20+", icon: <FiActivity /> },
  { label: "Target FPS", value: "25+", icon: <FiZap /> },
];

const mlHighlights = [
  {
    title: "Custom Object Detection Pipeline",
    description: "Engineered a real-time detection system using YOLOv8 with custom confidence thresholds per object category. Implemented non-maximum suppression optimization and temporal smoothing to eliminate detection flickering.",
    metrics: ["600+ classes", "25+ FPS", "<50ms latency"]
  },
  {
    title: "Multi-Person Pose Tracking",
    description: "Built tracking system using MediaPipe Holistic with Kalman filtering for smooth pose estimation across multiple subjects. Implemented activity classification using pose keypoint sequences.",
    metrics: ["33 keypoints", "Multi-person", "20+ activities"]
  },
  {
    title: "Hand Gesture Recognition",
    description: "Developed sign language interpreter with 21-point hand landmark detection. Created temporal pattern analysis for recognizing dynamic gestures and finger spelling sequences.",
    metrics: ["21 landmarks", "86 signs", "Real-time"]
  },
  {
    title: "Depth Estimation & Safety",
    description: "Integrated MiDaS monocular depth estimation for obstacle detection. Built distance calculation algorithms and proactive warning system with intelligent alert management.",
    metrics: ["Monocular depth", "Distance calc", "Smart alerts"]
  }
];

export default function VisionAssistProject() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
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

  // Placeholder for demo video - replace with your actual video URL
  const demoVideoUrl = "YOUR_VIDEO_URL_HERE"; // Replace with YouTube embed or video file

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-950' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-72 h-72 rounded-full ${darkMode ? 'bg-brand/10' : 'bg-brand/20'} blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-40 left-20 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-500/10' : 'bg-purple-500/20'} blur-3xl animate-pulse`} style={{animationDelay: '1s'}}></div>
        <div className={`absolute top-1/2 right-1/3 w-64 h-64 rounded-full ${darkMode ? 'bg-cyan-500/10' : 'bg-cyan-500/15'} blur-3xl animate-pulse`} style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
          >
            <FiChevronLeft className="transition-transform group-hover:-translate-x-1" />
            <span className="font-medium text-gray-800 dark:text-gray-200">Back to Projects</span>
          </Link>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-indigo-700" />}
          </button>
        </header>

        {/* Hero Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand/20 to-purple-500/20 border border-brand/30 text-brand dark:text-brand mb-6"
            >
              <FiAward className="w-4 h-4" />
              <span className="text-sm font-medium">Senior Capstone Project • California Baptist University</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              VisionAssist
              <span className="block text-3xl md:text-4xl font-normal bg-gradient-to-r from-brand to-purple-500 bg-clip-text text-transparent mt-2">
                AI-Powered Smart Glasses
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A comprehensive assistive technology system combining <span className="text-brand font-semibold">computer vision</span>, 
              <span className="text-purple-500 font-semibold"> machine learning</span>, and 
              <span className="text-cyan-500 font-semibold"> real-time processing</span> to help visually impaired users 
              navigate the world independently.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://github.com/mohalsheikh/visionassist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-medium"
              >
                <FiGithub className="w-5 h-5" />
                View Source Code
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand to-purple-500 text-white hover:opacity-90 transition-all shadow-lg hover:shadow-xl font-medium"
              >
                <FiPlay className="w-5 h-5" />
                Watch Demo
              </a>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand/30 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-60"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 shadow-2xl overflow-hidden">
              {/* Simulated glasses view */}
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-4">👓</div>
                    <div className="text-white font-mono text-lg mb-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                      VisionAssist Active
                    </div>
                    <div className="text-gray-400 text-sm font-mono">
                      Real-time AI Processing • 25+ FPS
                    </div>
                  </div>
                </div>
                {/* Detection boxes animation */}
                <div className="absolute top-6 left-6 w-20 h-14 border-2 border-green-400 rounded-lg animate-pulse">
                  <span className="absolute -top-5 left-0 text-green-400 text-xs font-mono">person 94%</span>
                </div>
                <div className="absolute bottom-12 right-12 w-24 h-20 border-2 border-blue-400 rounded-lg animate-pulse" style={{animationDelay: '0.5s'}}>
                  <span className="absolute -top-5 left-0 text-blue-400 text-xs font-mono">laptop 89%</span>
                </div>
                <div className="absolute top-1/3 right-1/4 w-16 h-24 border-2 border-purple-400 rounded-lg animate-pulse" style={{animationDelay: '1s'}}>
                  <span className="absolute -top-5 left-0 text-purple-400 text-xs font-mono">door 91%</span>
                </div>
                {/* Scanning line */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-brand/20 to-transparent animate-scan"></div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center text-xs text-gray-400 font-mono">
                <span>🎯 YOLOv8 Detection</span>
                <span>🧠 Scene Analysis</span>
                <span>🗣️ Voice Active</span>
                <span>🧭 Navigation Ready</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl mb-2 text-brand">
                  {typeof stat.icon === 'string' ? stat.icon : stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Demo Video Section */}
        <section id="demo" className="mb-20">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              See It In Action
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Watch a full demonstration of VisionAssist's capabilities
            </motion.p>
          </div>

          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              {/* YouTube Video Embed */}
              <div className="aspect-video bg-gray-900">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                  title="VisionAssist Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ML Highlights Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Machine Learning Architecture
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Custom-built ML pipelines optimized for real-time performance on edge devices
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mlHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-purple-500 flex items-center justify-center text-white">
                    <FiCpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{highlight.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{highlight.description}</p>
                <div className="flex flex-wrap gap-2">
                  {highlight.metrics.map((metric, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-brand/10 dark:bg-brand/20 text-brand text-sm font-medium">
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Core Features
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              A comprehensive suite of AI-powered features designed for real-world accessibility
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-brand/50 transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-4 transition-transform group-hover:scale-110 text-brand">
                  {typeof feature.icon === 'string' ? feature.icon : feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{feature.description}</p>
                <div className="text-xs text-brand/80 dark:text-brand/60 font-mono bg-brand/5 dark:bg-brand/10 px-3 py-2 rounded-lg">
                  {feature.technical}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Architecture Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              System Architecture
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Modular, production-grade codebase with 12,000+ lines of custom code
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {architectureModules.map((module, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-brand font-mono text-sm font-bold">{module.lines}</span>
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-gray-800 dark:text-white mb-1">{module.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{module.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Technology Stack
            </motion.h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className={`px-5 py-3 rounded-full ${tech.bg} text-white font-medium shadow-lg hover:shadow-xl transition-all`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="mb-20">
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl font-bold mb-8 text-center relative z-10">Technical Challenges & Solutions</h2>
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">⚡</span>
                  Challenges
                </h3>
                <ul className="space-y-4">
                  {[
                    "Achieving 25+ FPS while running multiple ML models simultaneously",
                    "Eliminating detection flickering with temporal smoothing",
                    "Resolving MediaPipe dependencies on Apple Silicon",
                    "Balancing safety alerts without overwhelming the user"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-yellow-500/20 p-1 rounded-full text-yellow-400 mt-1">•</div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">✓</span>
                  Solutions
                </h3>
                <ul className="space-y-4">
                  {[
                    "Implemented frame skipping and GPU acceleration with half-precision inference",
                    "Built triple-buffered temporal voting with Kalman filtering",
                    "Created custom build scripts and fallback implementations",
                    "Designed smart cooldowns with severity escalation and reading-mode muting"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-green-500/20 p-1 rounded-full text-green-400 mt-1">✓</div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Screenshots Section - Uncomment and add your images */}
        {/* <section className="mb-20">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Screenshots
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[screenshot1, screenshot2, screenshot3].map((img, index) => (
              <motion.div 
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <img 
                  src={img} 
                  alt={`VisionAssist screenshot ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Call to Action */}
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Explore the Code</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            This senior capstone project represents months of development, research, and iteration.
            Explore the full implementation on GitHub.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/mohalsheikh/visionassist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg font-medium"
            >
              <FiGithub className="w-5 h-5" />
              View Source Code
            </a>
            <a
              href="https://linkedin.com/in/mohalsheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand to-purple-500 text-white hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-lg font-medium"
            >
              <FiBookOpen className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Custom animation styles */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}