import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Star, Music } from 'lucide-react';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-white/20 rounded-full pointer-events-none z-30 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* Main Title */}
            <div className="mb-8">
              <motion.h1 
                className="text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-none mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <span className="block">626</span>
                <motion.span 
                  className="block text-6xl md:text-7xl lg:text-8xl font-light tracking-widest"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  CREATIVE
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl font-light tracking-wide mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              WHERE <span className="font-bold">CREATIVITY</span> MEETS{' '}
              <span className="font-bold">FASHION</span>
              <br />
              MUSIC • DESIGN • FASHION • DIGITAL
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link to="/artists">
                <motion.button 
                  className="group relative px-8 py-4 bg-white text-black font-bold tracking-wider overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 group-hover:text-white transition-colors flex items-center space-x-2">
                    <span>EXPLORE ARTISTS</span>
                    <ArrowRight size={20} />
                  </span>
                </motion.button>
              </Link>
              
              <motion.button 
                className="group border-2 border-white px-8 py-4 font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} />
                <span>WATCH REEL</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-white/30 relative">
            <motion.div
              className="absolute top-0 w-px h-4 bg-white"
              animate={{ y: [0, 48, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Preview Sections */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Artists Preview */}
            <motion.div
              className="group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/artists">
                <div className="border border-white/20 p-8 h-80 flex flex-col justify-between hover:border-white/40 transition-all duration-300">
                  <div>
                    <Music className="w-8 h-8 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">OUR ARTISTS</h3>
                    <p className="text-white/60">POLLUXX • ZONE • SKATE</p>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>

            {/* Services Preview */}
            <motion.div
              className="group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/services">
                <div className="border border-white/20 p-8 h-80 flex flex-col justify-between hover:border-white/40 transition-all duration-300">
                  <div>
                    <Zap className="w-8 h-8 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">OFFERINGS</h3>
                    <p className="text-white/60">PRODUCTION • DESIGN • EVENTS</p>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>

            {/* Merch Preview */}
            <motion.div
              className="group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/merch">
                <div className="border border-white/20 p-8 h-80 flex flex-col justify-between hover:border-white/40 transition-all duration-300">
                  <div>
                    <Star className="w-8 h-8 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">MERCH</h3>
                    <p className="text-white/60">CLOTHING • ACCESSORIES • LIMITED</p>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;