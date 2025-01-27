import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { AnimatedSection } from '../components/AnimatedSection';
import { experience } from '../data';
import { Briefcase } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export function Experience() {
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
            Professional Experience
          </motion.h1>

          <div className="space-y-8 md:space-y-12">
            {experience.map((job, index) => (
              <AnimatedSection key={index} className="relative">
                <motion.div
                  className={`absolute left-0 top-0 w-4 h-4 rounded-full ${
                    theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                />
                
                <motion.div
                  className={`ml-8 p-6 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10'
                      : 'bg-black/5 backdrop-blur-lg border-black/10 hover:bg-black/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <Briefcase className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                      <div>
                        <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                          {job.role}
                        </h3>
                        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                          {job.company}
                        </p>
                      </div>
                    </div>
                    <div className="md:ml-auto text-left md:text-right">
                      <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                        {job.period}
                      </p>
                      <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                        {job.location}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2">
                    {job.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                      >
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}