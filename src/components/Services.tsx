import React from 'react';
import { Music, Palette, Calendar, Gamepad2, Users, ShoppingBag, Headphones, Camera } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Production",
      description: "Full-service music production, mixing, and mastering for hip-hop, R&B, and trap artists.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Brand identity, album covers, promotional materials, and digital art that stands out.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Merch & Fashion",
      description: "Custom clothing line design, merchandise creation, and fashion consulting.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Production",
      description: "Concerts, showcases, and creative events that leave lasting impressions.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "A&R & Management",
      description: "Artist development, career management, and industry connections.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Gaming & Interactive",
      description: "Game development, interactive experiences, and digital entertainment.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Audio Engineering",
      description: "Professional recording, sound design, and audio post-production services.",
      color: "from-gray-500 to-slate-500"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Visual Content",
      description: "Music videos, promotional content, and photography for artists and brands.",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We offer a range of creative services, and exclusive clothing to bring our artists vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-750 transition-all transform hover:scale-105 group">
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;