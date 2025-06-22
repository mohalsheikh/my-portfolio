import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Code, RocketLaunch, SoccerBall } from 'phosphor-react';

const AboutMe = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const techStack = [
    // Programming Languages
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Python', icon: '🐍' },
    { name: 'Dart', icon: '🎯' },
    { name: 'C++', icon: '💻' },
    { name: 'Swift', icon: '🧡' }, // ✅ added Swift
  
    // Frontend Frameworks
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '🚀' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Tailwind CSS', icon: '🎨' },
  
    // Backend & Databases
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚂' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'SQL', icon: '🗃️' },
  
    // DevOps & Tools
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Linux & CLI', icon: '💻' },
    // { name: 'Framer Motion', icon: '🎞️' },
  
    // Core Engineering Skills
    { name: 'Data Structures', icon: '🧱' },
    { name: 'Algorithms', icon: '🧠' },
    { name: 'System Design', icon: '🗂️' },
    { name: 'Object-Oriented Programming', icon: '🏗️' },
  
    // Professional Skills
    { name: 'Debugging', icon: '🐞' },
    { name: 'Unit Testing', icon: '🧪' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'Agile & Scrum', icon: '📆' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Collaboration', icon: '🤝' },
  ];
  

  const coreValues = [
    { title: 'Creativity', icon: <RocketLaunch size={24} />, color: 'purple' },
    { title: 'Impact', icon: '🌍', color: 'blue' },
    { title: 'Excellence', icon: '🏆', color: 'pink' },
    { title: 'Faith', icon: '🕊️', color: 'teal' },
  ];

  const culturalJourney = [
    { year: '2004', event: 'Born in Tuebingen, Germany', flag: '🇩🇪' },
    { year: '2009', event: 'Moved to Amman, Jordan', flag: '🇯🇴' },
    { year: '2022', event: 'California, USA', flag: '🇺🇸' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Animated Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-24 relative"
        >
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply blur-3xl dark:bg-purple-400/20" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-2xl p-2 shadow-2xl hover:shadow-xl transition-all"
          >
            <div className="w-32 h-32 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-6xl">
              👨💻
            </div>
          </motion.div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400 mt-8 mb-4">
            Mohammed Alsheikh
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="bg-purple-100 dark:bg-slate-700 px-4 py-1 rounded-full text-purple-600 dark:text-purple-300 text-sm font-medium flex items-center gap-2">
              <Code weight="duotone" /> Fullstack Developer
            </span>
            <span className="bg-blue-100 dark:bg-slate-700 px-4 py-1 rounded-full text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center gap-2">
              <Globe weight="duotone" /> Global Citizen
            </span>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bridging cultures through code • Software Engineering student @ CBU • Former pro athlete •
            Building human-centric solutions at the intersection of technology and creativity
          </p>
        </motion.div>

        {/* Cultural Journey Timeline */}
        <section className="mb-28 relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-pink-500/30" />
          <div className="space-y-16">
            {culturalJourney.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-between w-full`}
              >
                <div className="w-5/12 px-6 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-3">
                    {item.flag} {item.event}
                  </h4>
                  <span className="text-sm text-purple-600 dark:text-purple-400">{item.year}</span>
                </div>
                <div className="w-1/12 flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="mb-28">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-800 dark:text-white">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
             Technical Skills
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-xl flex flex-col items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
              >
                <span className="text-4xl">{tech.icon}</span>
                <span className="text-lg font-medium text-slate-700 dark:text-slate-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

{/* Achievement Spotlight */}
<motion.div
  whileInView={{ scale: 1 }}
  initial={{ scale: 0.95 }}
  className="mb-28 relative group"
>
  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all" />
  <div className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/3">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-center">
          <span className="text-5xl">🏆</span>
          <h3 className="text-2xl font-bold text-white mt-4">HallLink</h3>
          <p className="text-purple-200">Finalist & Recognized Project</p>
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
          Designed and led development of HallLink, a campus housing platform that gained recognition at CBU's Innovation Challenge and earned rewards for its innovation and impact. The project drew interest from multiple universities for its potential to enhance student life through:
        </p>
        <ul className="grid grid-cols-2 gap-4 mb-4">
          {[
            'RA Info & Duty Nights',
            'AI Chatbot Support',
            'Interactive Housing Map',
            'Event Listings & Community Activities',
            'Campus Safety Toolkit',
          ].map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
              <span className="text-purple-600">▹</span>
              {feature}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-500 dark:text-slate-400 italic">
          Planned expansions include multi-area support, resident account creation, admin dashboards, and in-app maintenance requests.
        </p>
      </div>
    </div>
  </div>
</motion.div>

        {/* Athletic Background */}
        <section className="mb-28 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/soccer-pattern.svg')] opacity-10" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <motion.div
                whileHover={{ rotate: 3 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl"
              >
                <SoccerBall size={120} weight="duotone" className="text-blue-400 mx-auto" />
              </motion.div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl font-bold mb-6">From Pitch to Code</h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
  During high school, I had the opportunity to play professional soccer with Al-Wehdat SC in the Jordan Premier League. The experience sharpened my discipline, resilience, and ability to work under pressure — qualities I now bring into my work as a developer.
  Key transferable skills:
</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { skill: 'Leadership', emoji: '👨✈️' },
                  { skill: 'Strategy', emoji: '♟️' },
                  { skill: 'Resilience', emoji: '💪' },
                  { skill: 'Collaboration', emoji: '🤝' },
                ].map((item) => (
                  <div key={item.skill} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="font-medium">{item.skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;