import React from 'react';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';

const Merch: React.FC = () => {
  const merchItems = [
    {
      name: "626 Studio Hoodie",
      price: "R650",
      image: "https://images.pexels.com/photos/8148579/pexels-photo-8148579.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      category: "Hoodies"
    },
    {
      name: "Artist Signature Tee",
      price: "R400",
      image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      category: "T-Shirts"
    },
    {
      name: "Creative Cap",
      price: "R250",
      image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      category: "Accessories"
    },
    {
      name: "Studio Bomber Jacket",
      price: "R1350",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      category: "Jackets"
    }
  ];

  return (
    <section id="merch" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Merch Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Wear your creativity with our exclusive clothing line and accessories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {merchItems.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all group">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag size={20} className="text-white" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400 text-sm font-medium">{item.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-gray-400 text-sm">{item.rating}</span>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{item.price}</span>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:from-purple-600 hover:to-blue-600 transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto">
            <span>View Full Collection</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Merch;