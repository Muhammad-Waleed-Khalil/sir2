import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Code, Phone, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';
import { useTheme } from '../ThemeContext';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: User, label: 'About' },
  { path: '/experience', icon: Briefcase, label: 'Experience' },
  { path: '/projects', icon: Code, label: 'Projects' },
  { path: '/contact', icon: Phone, label: 'Contact' },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      {/* Logo */}
      <motion.div
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Afrasiyab
        </div>
        <div className={`text-xs sm:text-sm hidden sm:block ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Software Engineer
        </div>
      </motion.div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className={`fixed top-4 right-16 sm:top-6 sm:right-20 z-50 p-2 sm:p-2.5 rounded-full md:hidden
                   transition-colors ${
                     theme === 'dark'
                       ? 'bg-white/10 border border-white/20 text-white'
                       : 'bg-black/10 border border-black/20 text-gray-900'
                   }`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
      </motion.button>

      {/* Mobile Menu */}
      <motion.nav
        className={`fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-6 sm:gap-8
                   ${isOpen ? 'block' : 'hidden'}
                   ${theme === 'dark' 
                     ? 'bg-gray-900/95 backdrop-blur-lg' 
                     : 'bg-white/95 backdrop-blur-lg'
                   }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl sm:text-2xl flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors
                         ${isActive 
                           ? theme === 'dark' 
                             ? 'text-blue-400 bg-white/10' 
                             : 'text-blue-600 bg-black/10'
                           : theme === 'dark'
                             ? 'text-white hover:bg-white/10'
                             : 'text-gray-900 hover:bg-black/10'
                         }`}
            >
              <Icon size={20} className="sm:w-6 sm:h-6" />
              {item.label}
            </NavLink>
          );
        })}
      </motion.nav>

      {/* Desktop Navigation */}
      <motion.nav 
        className={`fixed bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50
                   backdrop-blur-lg rounded-full px-4 sm:px-6 py-3 sm:py-4
                   border shadow-lg hidden md:block
                   ${theme === 'dark'
                     ? 'bg-white/10 border-white/20'
                     : 'bg-black/10 border-black/20'
                   }`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1, bounce: 0.5 }}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors
                           ${isActive
                             ? theme === 'dark'
                               ? 'text-blue-400 bg-white/10'
                               : 'text-blue-600 bg-black/10'
                             : theme === 'dark'
                               ? 'text-gray-300 hover:text-blue-400 hover:bg-white/10'
                               : 'text-gray-700 hover:text-blue-600 hover:bg-black/10'
                           }`}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">{item.label}</span>
                </motion.div>
              </NavLink>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}