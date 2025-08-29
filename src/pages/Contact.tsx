import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Twitter, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "EMAIL",
      info: "hello@626creative.com",
      link: "mailto:hello@626creative.com"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "PHONE",
      info: "+27 (626) 626-0123",
      link: "tel:+16265550123"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "STUDIO",
      info: "Johannesburg South, GP",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-8 h-8" />, platform: "INSTAGRAM", handle: "@626CreativeStudio", link: "#" },
    { icon: <Youtube className="w-8 h-8" />, platform: "YOUTUBE", handle: "626 Creative Studio", link: "#" },
    { icon: <Twitter className="w-8 h-8" />, platform: "TWITTER", handle: "@626creatives", link: "#" }
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
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              LET'S WORK
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              WANT TO COLLABORATE WITH US? GET IN TOUCH AND LET'S SEE WHAT WE CAN DO.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 border border-white/20 p-8"
            >
              <h2 className="text-3xl font-black tracking-tighter mb-8">SEND MESSAGE</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold tracking-wider mb-3">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-transparent border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold tracking-wider mb-3">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-transparent border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold tracking-wider mb-3">
                    SERVICE INTEREST
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-black border-2 border-white/20 text-white focus:outline-none focus:border-white transition-colors"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="music-production">Music Production</option>
                    <option value="creative-design">Creative Design</option>
                    <option value="merch-fashion">Merch & Fashion</option>
                    <option value="event-production">Event Production</option>
                    <option value="ar-management">A&R & Management</option>
                    <option value="gaming-interactive">Gaming & Interactive</option>
                    <option value="audio-engineering">Audio Engineering</option>
                    <option value="visual-content">Visual Content</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold tracking-wider mb-3">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-transparent border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-4 font-bold tracking-wider hover:bg-white/90 transition-all duration-300 flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>SEND MESSAGE</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div>
                <h3 className="text-3xl font-black tracking-tighter mb-8">GET IN TOUCH</h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.link}
                      className="flex items-center space-x-6 p-6 bg-white/5 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-white/60 text-sm font-bold tracking-wider mb-1">{contact.title}</div>
                        <div className="font-bold text-lg">{contact.info}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-2xl font-black tracking-tighter mb-6">FOLLOW US</h4>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      className="flex items-center space-x-6 p-4 bg-white/5 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{social.platform}</div>
                        <div className="text-white/60 text-sm">{social.handle}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Studio Hours */}
              <div className="bg-white/5 border border-white/20 p-8">
                <h4 className="text-2xl font-black tracking-tighter mb-6 flex items-center space-x-3">
                  <Clock className="w-6 h-6" />
                  <span>STUDIO HOURS</span>
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">MONDAY - FRIDAY</span>
                    <span className="text-white/60">9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">SATURDAY</span>
                    <span className="text-white/60">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">SUNDAY</span>
                    <span className="text-white/60">12:00 PM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
              VISIT OUR STUDIO
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Located in the heart of Johannesburg, our state-of-the-art studio is where creativity comes to life
            </p>
            <div className="bg-white/10 border border-white/20 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <div className="text-2xl font-bold">626 CREATIVE STUDIO</div>
                <div className="text-white/60">Johannesburg, Gauteng</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;