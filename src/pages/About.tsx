import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { AnimatedSection } from '../components/AnimatedSection';
import { skills, education, certifications, languages } from '../data';
import { useTheme } from '../ThemeContext';
import { Code, Book, Award, Globe } from 'lucide-react';

export function About() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

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
            About Me
          </motion.h1>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <div className={`p-6 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-white/5 backdrop-blur-lg border-white/10'
                  : 'bg-black/5 backdrop-blur-lg border-black/10'
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  <Code className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                  <h2 className={`text-2xl font-semibold ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    Technical Skills
                  </h2>
                </div>
                {skills.map((category, index) => (
                  <div key={index} className="mb-8">
                    <h3 className={`text-xl mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.items.map((skill, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                        >
                          <div className="flex justify-between mb-1">
                            <span className={
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }>
                              {skill.name}
                            </span>
                            <span className={
                              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                            }>
                              {skill.level}%
                            </span>
                          </div>
                          <div className={`h-2 rounded-full overflow-hidden ${
                            theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
                          }`}>
                            <motion.div
                              className={`h-full ${
                                theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
                              }`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1,
                                delay: index * 0.2 + idx * 0.1,
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-8">
              {/* Education Section */}
              <motion.div variants={itemVariants}>
                <div className={`p-6 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-lg border-white/10'
                    : 'bg-black/5 backdrop-blur-lg border-black/10'
                }`}>
                  <div className="flex items-center gap-3 mb-6">
                    <Book className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                    <h2 className={`text-2xl font-semibold ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      Education
                    </h2>
                  </div>
                  <p className={`text-xl ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {education.degree}
                  </p>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {education.institution}
                  </p>
                </div>
              </motion.div>

              {/* Certifications Section */}
              <motion.div variants={itemVariants}>
                <div className={`p-6 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-lg border-white/10'
                    : 'bg-black/5 backdrop-blur-lg border-black/10'
                }`}>
                  <div className="flex items-center gap-3 mb-6">
                    <Award className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                    <h2 className={`text-2xl font-semibold ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      Professional Certifications
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <motion.a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block p-4 rounded-lg transition-all ${
                          theme === 'dark'
                            ? 'bg-white/5 hover:bg-white/10'
                            : 'bg-black/5 hover:bg-black/10'
                        }`}
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <h3 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                          {cert.name}
                        </h3>
                        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                          {cert.issuer}
                        </p>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Languages Section */}
              <motion.div variants={itemVariants}>
                <div className={`p-6 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-lg border-white/10'
                    : 'bg-black/5 backdrop-blur-lg border-black/10'
                }`}>
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                    <h2 className={`text-2xl font-semibold ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      Languages
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {languages.map((language, index) => (
                      <motion.div
                        key={index}
                        className={`flex justify-between items-center p-3 rounded-lg ${
                          theme === 'dark'
                            ? 'bg-white/5'
                            : 'bg-black/5'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                          {language.name}
                        </span>
                        <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                          {language.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}