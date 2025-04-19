import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { EnvelopeIcon, DocumentArrowDownIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi';

type FormState = {
  name: string;
  email: string;
  message: string;
  isValid: boolean;
  isSending: boolean;
};

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    isValid: false,
    isSending: false,
  });

  const socialLinks = [
    { 
      Icon: EnvelopeIcon, 
      title: 'Email', 
      subtitle: 'sheikh.dev@example.com', 
      href: 'mailto:sheikh.dev@example.com',
      action: () => navigator.clipboard.writeText('sheikh.dev@example.com')
    },
    { 
      Icon: FiLinkedin, 
      title: 'LinkedIn', 
      subtitle: '/in/mohammed-alsheikh', 
      href: 'https://linkedin.com' 
    },
    { 
      Icon: FiGithub, 
      title: 'GitHub', 
      subtitle: '@mohammed-dev', 
      href: 'https://github.com' 
    },
    { 
      Icon: DocumentArrowDownIcon, 
      title: 'Resume', 
      subtitle: 'Download PDF', 
      href: '/resume.pdf', 
      download: true,
      action: () => toast.success('Resume downloaded!')
    },
  ];

  useEffect(() => {
    const validateForm = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return (
        form.name.trim().length > 2 &&
        emailRegex.test(form.email) &&
        form.message.trim().length > 10
      );
    };
    setForm(prev => ({ ...prev, isValid: validateForm() }));
  }, [form.name, form.email, form.message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setForm(prev => ({ ...prev, isSending: true }));
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.custom((t) => (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg flex items-center gap-3"
        >
          <FiCheckCircle className="w-6 h-6 text-green-500" />
          <span className="text-gray-700 dark:text-gray-200">Message sent successfully!</span>
        </motion.div>
      ));
      setForm({ name: '', email: '', message: '', isValid: false, isSending: false });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      setForm(prev => ({ ...prev, isSending: false }));
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-br from-indigo-900/5 via-purple-900/5 to-pink-900/5 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center space-y-4"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
            Let's Collaborate
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Whether you have a project in mind or just want to connect, 
            I'm here to listen and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50"
          >
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/30 border border-gray-200/80 dark:border-gray-600 focus:ring-2 focus:ring-brand/50 transition-all placeholder:text-gray-400/80"
                placeholder="Mohammed Alsheikh"
              />
              <AnimatePresence>
                {form.name.length > 0 && form.name.length < 3 && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-sm text-red-500/90"
                  >
                    Name must be at least 3 characters
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/30 border border-gray-200/80 dark:border-gray-600 focus:ring-2 focus:ring-brand/50 transition-all placeholder:text-gray-400/80"
                placeholder="hello@sheikhdev.com"
              />
              <AnimatePresence>
                {form.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-sm text-red-500/90"
                  >
                    Please enter a valid email
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/30 border border-gray-200/80 dark:border-gray-600 focus:ring-2 focus:ring-brand/50 transition-all placeholder:text-gray-400/80"
                placeholder="Hey Mohammed, let's work on something amazing..."
              />
              <AnimatePresence>
                {form.message.length > 0 && form.message.length < 10 && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-sm text-red-500/90"
                  >
                    Message needs at least 10 characters
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              disabled={!form.isValid || form.isSending}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 px-6 bg-gradient-to-r from-brand/90 to-accent/90 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
            >
              {form.isSending ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center"
                >
                  <span className="flex h-3 w-3 mr-3">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-white/80 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                  </span>
                  Sending...
                </motion.span>
              ) : (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center"
                >
                  Send Message <FiSend className="w-5 h-5 ml-3 animate-bounce-x" />
                </motion.span>
              )}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: form.isValid ? '100%' : 0 }}
                className="absolute bottom-0 left-0 h-1 bg-white/30 transition-all duration-1000"
              />
            </motion.button>
          </motion.form>

          {/* Social Cards & Map */}
          <div className="grid grid-cols-2 gap-5 relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-brand/20 to-accent/20 rounded-full blur-3xl opacity-40 animate-pulse" />
            
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                href={link.href}
                download={link.download}
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  }
                }}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-5 rounded-2xl hover:bg-white dark:hover:bg-gray-700/80 transition-all border border-white/30 dark:border-gray-600/50 hover:border-brand/40 shadow-lg hover:shadow-brand/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <link.Icon className="w-8 h-8 text-brand mb-3 group-hover:text-accent transition-colors" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{link.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{link.subtitle}</p>
              </motion.a>
            ))}

            {/* Location Card */}
            <div className="col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl border border-white/30 dark:border-gray-600/50 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-accent/10 opacity-30" />
              <MapPinIcon className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Based in</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Riverside, CA 🇺🇸</p>
              <div className="mt-4 h-48 bg-gray-100/80 dark:bg-gray-700/50 rounded-xl overflow-hidden relative">
                <img 
                  src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-117.3758,33.9806,12,0/600x300?access_token=YOUR_MAPBOX_TOKEN"
                  alt="Location Map"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toaster 
        position="bottom-right" 
        toastOptions={{
          className: '!bg-transparent !p-0 !shadow-none',
        }} 
      />
    </section>
  );
};

export default Contact;