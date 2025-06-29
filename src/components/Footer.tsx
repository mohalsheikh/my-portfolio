import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
  // FaFileAlt,
  // FaBook,
  FaUser,
  FaComments,
  FaCode,
  // FaQuestionCircle,
  FaRegMoon,
  FaSun,
  FaBuilding,
  FaMusic,
  FaMapMarkedAlt,
  // FaTools,
} from 'react-icons/fa';
import {FiCheckCircle,
} from 'react-icons/fi';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import toast, { Toaster } from 'react-hot-toast';
import { saveNewsletterEmail } from '../services/firebaseService';



const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const scrollY = useMotionValue(0);
  const scrollProgress = useTransform(
    scrollY,
    [0, document.body.scrollHeight - window.innerHeight],
    [0, 100]
  );

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/mohalsheikh', icon: <FaGithub />, tip: 'Check my code' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/moalsheikh/', icon: <FaLinkedin />, tip: 'Connect professionally' },
    { name: 'Instagram', url: 'https://www.instagram.com/mo.alshe5/', icon: <FaInstagram />, tip: 'See my journey' }
  ];

  const navLinks = [
    { name: 'Projects', url: '/projects', icon: <FaCode className="mr-2" /> },
    { name: 'About', url: '/aboutme', icon: <FaUser className="mr-2" /> },
    { name: 'Contact', url: '/contact', icon: <FaComments className="mr-2" /> }
  ];

  const resourceLinks = [
    {
      name: 'HallLink',
      url: '/projects/halllink',
      icon: <FaBuilding className="mr-2" /> // Represents dorms/halls
    },
    {
      name: 'Soundtrack',
      url: '/projects/soundtrack',
      icon: <FaMusic className="mr-2" /> // Represents music
    },
    {
      name: 'Room Finder',
      url: '/projects/room-finder',
      icon: <FaMapMarkedAlt className="mr-2" /> // Represents finding locations
    },
  ];
  
  

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (email.trim()) {
      try {
        await saveNewsletterEmail(email.trim());
  
        toast.custom(() => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg flex items-center gap-3"
          >
            <FiCheckCircle className="w-6 h-6 text-green-500" />
            <span className="text-gray-700 dark:text-gray-200">You're on the list!</span>
          </motion.div>
        ));
  
        setEmail('');
        animate('#newsletter-form', { y: [0, -10, 0], scale: [1, 1.05, 1] }, { duration: 0.3 });
      } catch (error) {
        console.error('❌ Error saving newsletter email:', error);
        toast.error('Something went wrong. Try again.');
      }
    }
  };
  

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!', { position: 'bottom-right' });
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-indigo-500 rounded-full"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: 0
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={footerVariants}
      className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <FloatingParticles />
      <Toaster toastOptions={{ 
        className: '!bg-indigo-600 !text-white dark:!bg-indigo-800',
        iconTheme: { primary: '#fff', secondary: '#4f46e5' }
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Branding + Theme Toggle + Newsletter */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <motion.h3 
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                Mohammed Alsheikh
              </motion.h3>
              {/* <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <FaSun className="text-xl text-yellow-500" />
                ) : (
                  <FaRegMoon className="text-xl text-gray-600 dark:text-gray-300" />
                )}
              </button> */}
            </div>
            <motion.form 
              id="newsletter-form"
              onSubmit={handleSubscribe}
              className="mt-6 space-y-3"
            >
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Stay Updated ✨</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg whitespace-nowrap hover:shadow-lg transition-all"
                  type="submit"
                >
                  Join
                </motion.button>
              </div>
              {/* <p className="text-xs text-gray-500 dark:text-gray-400">No spam, just quality content</p> */}
            </motion.form>
          </div>

          {/* Nav Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Explore</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <motion.li key={link.name} whileHover="hover">
                    <a
                      href={link.url}
                      className="group flex items-center text-gray-500 dark:text-gray-400 transition-colors relative"
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <motion.span
                        className="absolute left-0 bottom-0 w-0 h-px bg-indigo-600 transition-all group-hover:w-full"
                        variants={{ hover: { width: '100%' } }}
                      />
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Projects</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <motion.li key={link.name} whileTap={{ scale: 0.98 }}>
                    <a
                      href={link.url}
                      className="flex items-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Connect</h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <Tippy key={social.name} content={social.tip}>
                  <motion.a
                    href={social.url}
                    className="flex items-center p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors group"
                    whileHover={{ y: -3 }}
                  >
                    <span className="text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                      {social.icon}
                    </span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">{social.name}</span>
                  </motion.a>
                </Tippy>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <motion.div
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                onClick={() => copyToClipboard('moalsheikh2004@gmail.com')}
                whileTap={{ scale: 0.98 }}
              >
                <FaEnvelope className="mr-3 text-indigo-500 flex-shrink-0" />
                <span className="text-gray-500 dark:text-gray-400">moalsheikh2004@gmail.com</span>
              </motion.div>
              <motion.div
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                onClick={() => copyToClipboard('+1 951 855 6539')}
                whileTap={{ scale: 0.98 }}
              >
                <FaPhone className="mr-3 text-indigo-500 flex-shrink-0" />
                <span className="text-gray-500 dark:text-gray-400">+1 951 855 6539</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div className="fixed bottom-0 left-0 right-0 h-1 bg-indigo-600/20 z-50" style={{ scaleX: scrollProgress }} />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Mohammed Alsheikh. <span className="text-indigo-600"></span>
          </p>
          <div className="flex space-x-6">
            {/* {['Privacy Policy', 'Terms', 'Cookies'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-indigo-600 transition-all group-hover:w-full" />
              </motion.a>
            ))} */}
          </div>
        </div>
      </div>

      {/* Back to Top */}
{/* Back to Top */}
<motion.button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="fixed bottom-8 right-8 z-[99] p-4 rounded-full bg-indigo-600 text-white shadow-xl hover:shadow-2xl transition-all flex items-center justify-center"
  style={{ opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? 'auto' : 'none' }}
  whileHover={{ scale: 1.1, rotate: 360 }}
  whileTap={{ scale: 0.95 }}
  aria-label="Back to top"
>
  <div className="absolute inset-0 border-2 border-indigo-300/50 rounded-full animate-ping" />
  <FaArrowUp className="text-xl relative z-10" />
</motion.button>
    </motion.footer>
  );
}
