import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-xl tracking-tighter">626</span>
              </div>
              <div>
                <div className="font-black text-xl tracking-tighter">CREATIVE STUDIO</div>
                <div className="text-white/60 text-sm tracking-widest">EST. 2022</div>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              A full-service creative agency specializing in music production, design, fashion, 
              and digital experiences. Where creativity meets self-expression.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-black text-lg tracking-wider mb-6">OFFERINGS</h3>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Music Production</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Creative Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Artist Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Event Production</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Clothing & Fashion</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-lg tracking-wider mb-6">QUICK LINKS</h3>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors tracking-wide">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors tracking-wide">150</Link></li>
              <li><Link to="/artists" className="hover:text-white transition-colors tracking-wide">Artists</Link></li>
              <li><Link to="/merch" className="hover:text-white transition-colors tracking-wide">Clothing</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors tracking-wide">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 tracking-wide">
            © {currentYear} 626 CREATIVE STUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;