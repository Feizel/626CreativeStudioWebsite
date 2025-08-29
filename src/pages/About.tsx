import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, Users, Lightbulb, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Zap className="w-8 h-8" />, number: "5+", label: "YEARS EXPERIENCE" },
    { icon: <Award className="w-8 h-8" />, number: "100+", label: "PROJECTS COMPLETED" },
    { icon: <Users className="w-8 h-8" />, number: "50+", label: "COLLABORATIONS" },
    { icon: <Lightbulb className="w-8 h-8" />, number: "∞", label: "CREATIVE IDEAS" }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "AUTHENTICITY",
      description: "We believe in staying true to the culture and creating genuine connections through our work."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "INNOVATION",
      description: "Pushing boundaries and exploring new creative territories to deliver cutting-edge solutions."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "PASSION",
      description: "Every project is fueled by our deep love for creativity and commitment to excellence."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24"
    >
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              WHO WE ARE
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              626 CREATIVE STUDIO IS A FULL-SERVICE CREATIVE AGENCY THAT SPECIALIZES IN 
              BRINGING <span className="font-bold">BOLD IDEAS</span> TO LIFE.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center border border-white/20 p-8 hover:border-white/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black mb-2">{stat.number}</div>
                <div className="text-sm tracking-widest opacity-70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
                OUR STORY
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Founded in 150, South of Johannesburg, with a vision to take over the world and close the gap between street culture and mainstream creativity, 
              626 Creative Studio has become a powerhouse in the creative industry.
                </p>
                <p>
                  We believe in the 
              power of authentic storytelling through music and innovative design through creativity. Self-expression is our identity.
                </p>
                <p className="font-bold">
                  FROM HIP-HOP MUSIC PRODUCTION TO CUTTING-EDGE DESIGN, WE'RE PASSIONATE ABOUT 
                  PUSHING CREATIVE BOUNDARIES.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-white/10 border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-black mb-4">626</div>
                  <div className="text-2xl font-light tracking-widest">CREATIVE</div>
                  <div className="text-sm tracking-widest opacity-70 mt-2">EST. 2019</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
              OUR VALUES
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center border border-white/20 p-12 hover:border-white/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-wider">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
              THE TEAM
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              A collective of passionate creatives, each bringing their unique expertise 
              to every project. Together, we transform ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;