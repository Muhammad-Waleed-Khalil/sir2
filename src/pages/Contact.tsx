import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { profile } from '../data';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export function Contact() {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <div className={`min-h-screen p-4 md:p-8 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900' 
          : 'bg-gradient-to-br from-white via-gray-100 to-white'
      }`}>
        <div className="container mx-auto py-20 max-w-6xl">
          <motion.h1 
            className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>

          <div className="max-w-2xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                href={`mailto:${profile.email}`}
                className={`p-6 rounded-lg border transition-all flex items-center gap-4 ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10'
                    : 'bg-black/5 backdrop-blur-lg border-black/10 hover:bg-black/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                <div>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Email</p>
                  <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    {profile.email}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${profile.phone}`}
                className={`p-6 rounded-lg border transition-all flex items-center gap-4 ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10'
                    : 'bg-black/5 backdrop-blur-lg border-black/10 hover:bg-black/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                <div>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Phone</p>
                  <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    {profile.phone}
                  </p>
                </div>
              </motion.a>

              <motion.div
                className={`p-6 rounded-lg border transition-all flex items-center gap-4 ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10'
                    : 'bg-black/5 backdrop-blur-lg border-black/10 hover:bg-black/10'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                <div>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Location</p>
                  <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    {profile.location}
                  </p>
                </div>
              </motion.div>

              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-lg border transition-all flex items-center gap-4 ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10'
                    : 'bg-black/5 backdrop-blur-lg border-black/10 hover:bg-black/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                <div>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>LinkedIn</p>
                  <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    Connect with me
                  </p>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}