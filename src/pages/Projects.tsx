import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { AnimatedSection } from '../components/AnimatedSection';
import { projects } from '../data';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export function Projects() {
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
            Projects
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  className={`p-6 rounded-lg border transition-all ${
                    theme === 'dark'
                      ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10'
                      : 'bg-black/5 backdrop-blur-lg border-black/10 hover:bg-black/10'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: theme === 'dark' 
                      ? "0 0 20px rgba(59, 130, 246, 0.2)"
                      : "0 0 20px rgba(37, 99, 235, 0.2)"
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-semibold ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {project.name}
                    </h3>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          theme === 'dark' 
                            ? 'text-gray-400 hover:text-blue-400' 
                            : 'text-gray-600 hover:text-blue-600'
                        } transition-colors`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {project.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}