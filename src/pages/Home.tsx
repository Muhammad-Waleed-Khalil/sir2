import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { PageTransition } from '../components/PageTransition';
import { profile } from '../data';
import { useTheme } from '../ThemeContext';

export function Home() {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <div className={`min-h-screen flex items-center justify-center p-4 md:p-8 
        ${theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white' 
          : 'bg-gradient-to-br from-white via-gray-100 to-white text-gray-900'}`}
      >
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div 
            className="md:w-1/2" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
            >
              <TypeAnimation 
                sequence={[
                  'Hello,', 3000, 
                  "I'm Afrasiyab", 3000, 
                  "I'm a QA Engineer", 3000
                ]} 
                wrapper="span" 
                speed={50} 
                repeat={Infinity} 
              />
            </motion.h1>
            <motion.p 
              className={`text-xl md:text-2xl mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4 }}
            >
              {profile.about}
            </motion.p>
            <motion.div 
              className="flex gap-4" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href="/contact" 
                className={`px-6 py-3 rounded-full border transition-colors ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                    : 'bg-black/10 border-black/20 text-black hover:bg-black/20'
                }`}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a 
                href="/projects" 
                className={`px-6 py-3 rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center" 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="relative" 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className={`absolute inset-0 rounded-full blur-3xl opacity-20 ${
                  theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
                }`}
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
              />
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQHkOtXoGdLEBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729247219010?e=1743033600&v=beta&t=l9B54U1uWizN5qMgz56chVXxDJeNUz41b5ANWnwpYPM" 
                alt={profile.name} 
                className={`w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl relative z-10 ${
                  theme === 'dark' ? 'border-4 border-white/20' : 'border-4 border-black/20'
                }`}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}