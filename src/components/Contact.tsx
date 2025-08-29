import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Twitter } from 'lucide-react';

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
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "join@626creative.com",
      link: "mailto:join@626creative.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+27 (626) 234-8975",
      link: "tel:+276262348975"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Studio",
      info: "Johannesburg South, GP",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, platform: "Instagram", link: "#" },
    { icon: <Youtube className="w-6 h-6" />, platform: "YouTube", link: "#" },
    { icon: <Twitter className="w-6 h-6" />, platform: "Twitter", link: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Gang (626)
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            You feel you belong with the gang? Get in contact and let's see what we can do.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.link}
                      className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{contact.title}</div>
                        <div className="text-white font-medium">{contact.info}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 transition-all transform hover:scale-110"
                      title={social.platform}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-4">Studio Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;