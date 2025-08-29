import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Palette, Calendar, Gamepad2, Users, ShoppingBag, Headphones, Camera, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: <Music className="w-12 h-12" />,
      title: "MUSIC PRODUCTION",
      description: "Full-service music production, mixing, and mastering for hip-hop, R&B, and trap artists.",
      details: [
        "Beat Production & Composition",
        "Recording & Engineering",
        "Mixing & Mastering",
        "Artist Development",
        "Studio Sessions"
      ],
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "CREATIVE DESIGN",
      description: "Brand identity, album covers, promotional materials, and digital art that stands out.",
      details: [
        "Brand Identity Design",
        "Album Cover Art",
        "Promotional Materials",
        "Digital Art & Graphics",
        "Web Design"
      ],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "MERCH & FASHION",
      description: "Custom clothing line design, merchandise creation, and fashion consulting.",
      details: [
        "Clothing Line Design",
        "Merchandise Creation",
        "Fashion Consulting",
        "Print Design",
        "Product Photography"
      ],
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "EVENT PRODUCTION",
      description: "Concerts, showcases, and creative events that leave lasting impressions.",
      details: [
        "Concert Production",
        "Artist Showcases",
        "Creative Events",
        "Stage Design",
        "Event Marketing"
      ],
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "A&R & MANAGEMENT",
      description: "Artist development, career management, and industry connections.",
      details: [
        "Artist Development",
        "Career Management",
        "Industry Connections",
        "Contract Negotiation",
        "Strategic Planning"
      ],
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "GAMING & INTERACTIVE",
      description: "Game development, interactive experiences, and digital entertainment.",
      details: [
        "Game Development",
        "Interactive Experiences",
        "Digital Entertainment",
        "VR/AR Projects",
        "Mobile Apps"
      ],
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "AUDIO ENGINEERING",
      description: "Professional recording, sound design, and audio post-production services.",
      details: [
        "Professional Recording",
        "Sound Design",
        "Audio Post-Production",
        "Podcast Production",
        "Audio Restoration"
      ],
      image: "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "VISUAL CONTENT",
      description: "Music videos, promotional content, and photography for artists and brands.",
      details: [
        "Music Video Production",
        "Promotional Content",
        "Photography",
        "Video Editing",
        "Motion Graphics"
      ],
      image: "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800"
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
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              OFFERINGS
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              WE OFFER A RANGE OF CREATIVE SERVICES TO BRING OUR ARTISTS VISION TO LIFE
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer border border-white/20 p-8 transition-all duration-300 ${
                  selectedService === index ? 'border-white bg-white/5' : 'hover:border-white/40'
                }`}
                onClick={() => setSelectedService(index)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 tracking-wider">{service.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Selected Service Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  {services[selectedService].icon}
                  <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
                    {services[selectedService].title}
                  </h2>
                </div>
                <p className="text-xl mb-8 leading-relaxed">
                  {services[selectedService].description}
                </p>
                <div className="space-y-4 mb-8">
                  {services[selectedService].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-white"></div>
                      <span className="tracking-wide">{detail}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  className="group border-2 border-white px-8 py-4 font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>GET STARTED</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
              
              <div className="relative">
                <motion.img
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  className="w-full h-96 object-cover border border-white/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
              HAVE A PROJECT IN MIND?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how a collaboration can happen
            </p>
            <motion.button
              className="bg-white text-black px-12 py-4 font-bold tracking-wider hover:bg-white/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              START YOUR PROJECT
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;