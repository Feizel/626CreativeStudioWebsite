import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'HOME', path: '/', delay: 0.1 },
    { name: '150', path: '/about', delay: 0.2 },
    { name: 'OFFERINGS', path: '/services', delay: 0.3 },
    { name: 'ARTISTS', path: '/artists', delay: 0.4 },
    { name: 'CLOTHING', path: '/merch', delay: 0.5 },
    { name: 'JOIN THE TEAM', path: '/contact', delay: 0.6 }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Creative Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
                  whileHover={{ rotate: 0 }}
                >
                  <span className="text-black font-black text-xl tracking-tighter">626</span>
                </motion.div>
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="hidden md:block">
                <div className="font-black text-2xl tracking-tighter leading-none">
                  CREATIVE
                </div>
                <div className="font-light text-sm tracking-widest opacity-70">
                  STUDIO
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Creative Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.5 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 font-bold text-sm tracking-wider transition-all duration-300 group ${
                    location.pathname === item.path ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Creative Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Creative Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="container mx-auto px-6 py-6">
                <div className="grid grid-cols-2 gap-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        to={item.path}
                        onClick={toggleMenu}
                        className={`block p-4 font-bold text-center tracking-wider transition-all duration-300 rounded-lg ${
                          location.pathname === item.path 
                            ? 'bg-white/10 text-white' 
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;