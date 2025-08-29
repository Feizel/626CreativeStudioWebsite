import React from 'react';
import { Zap, Award, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Zap className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Award className="w-8 h-8" />, number: "100+", label: "Projects Completed" },
    { icon: <Users className="w-8 h-8" />, number: "50+", label: "Happy Clients" },
    { icon: <Lightbulb className="w-8 h-8" />, number: "∞", label: "Creative Ideas" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            626 Creative Studio is a full-service creative agency that specializes in bringing the bold ideas of our artists to life. 
            From hip-hop music production to cutting-edge design, we're passionate about pushing creative boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-4">
              Founded in 150 South of Johannesburg, with a vision to take over the world and close the gap between street culture and mainstream creativity, 
              626 Creative Studio has become a powerhouse in the creative industry. We believe in the 
              power of authentic storytelling through music and innovative design through creativity. Self-expression is our identity.
            </p>
            <p className="text-gray-300">
              Our diverse team of artists, producers, designers, and strategists work together 
              to deliver amazing results that are global. We believe in ourselves to delusion.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
                <div className="text-purple-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;