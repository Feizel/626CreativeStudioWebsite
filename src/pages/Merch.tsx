import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, ArrowRight, Filter } from 'lucide-react';

const Merch: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'HOODIES', 'T-SHIRTS', 'ACCESSORIES', 'LIMITED'];

  const merchItems = [
    {
      name: "626 STUDIO HOODIE",
      price: "R650",
      originalPrice: "R850",
      image: "https://images.pexels.com/photos/8148579/pexels-photo-8148579.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      category: "HOODIES",
      isLimited: false,
      colors: ['Black', 'White', 'Gray']
    },
    {
      name: "POLLUXX SIGNATURE TEE",
      price: "R350",
      originalPrice: "R450",
      image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      category: "T-SHIRTS",
      isLimited: false,
      colors: ['Black', 'White']
    },
    {
      name: "CREATIVE CAP",
      price: "R250",
      originalPrice: "R350",
      image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      category: "ACCESSORIES",
      isLimited: false,
      colors: ['Black', 'White', 'Red']
    },
    {
      name: "ZONE BOMBER JACKET",
      price: "R1250",
      originalPrice: "R1450",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      category: "HOODIES",
      isLimited: true,
      colors: ['Black', 'Navy']
    },
    {
      name: "SKATE TRAP TEE",
      price: "R250",
      originalPrice: "R350",
      image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      category: "T-SHIRTS",
      isLimited: true,
      colors: ['Black', 'White', 'Red']
    },
    {
      name: "626 CHAIN NECKLACE",
      price: "R750",
      originalPrice: "R950",
      image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      category: "ACCESSORIES",
      isLimited: true,
      colors: ['Gold', 'Silver']
    },
    {
      name: "STUDIO SWEATPANTS",
      price: "R550",
      originalPrice: "R750",
      image: "https://images.pexels.com/photos/8148579/pexels-photo-8148579.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      category: "HOODIES",
      isLimited: false,
      colors: ['Black', 'Gray', 'Navy']
    },
    {
      name: "LIMITED VINYL RECORD",
      price: "R250",
      originalPrice: "R350",
      image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      category: "LIMITED",
      isLimited: true,
      colors: ['Black']
    }
  ];

  const filteredItems = selectedCategory === 'ALL' 
    ? merchItems 
    : merchItems.filter(item => 
        item.category === selectedCategory || 
        (selectedCategory === 'LIMITED' && item.isLimited)
      );

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
              MERCH COLLECTION
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              WEAR YOUR CREATIVITY WITH OUR EXCLUSIVE CLOTHING LINE AND ACCESSORIES
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 border border-white/20 rounded-lg p-2 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-bold text-sm tracking-wider transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-white text-black'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            layout
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="bg-white/5 border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.isLimited && (
                    <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs font-bold tracking-wider">
                      LIMITED
                    </div>
                  )}
                  <motion.button 
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ShoppingBag size={20} className="text-white" />
                  </motion.button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/60 text-sm font-medium tracking-wider">{item.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-white fill-current" />
                      <span className="text-white/60 text-sm">{item.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-3 tracking-wide">{item.name}</h3>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    {item.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className={`w-4 h-4 rounded-full border border-white/30 ${
                          color === 'Black' ? 'bg-black' :
                          color === 'White' ? 'bg-white' :
                          color === 'Gray' ? 'bg-gray-500' :
                          color === 'Red' ? 'bg-red-500' :
                          color === 'Navy' ? 'bg-blue-900' :
                          color === 'Gold' ? 'bg-yellow-500' :
                          color === 'Silver' ? 'bg-gray-300' : 'bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-black">{item.price}</span>
                      <span className="text-white/40 line-through text-sm">{item.originalPrice}</span>
                    </div>
                    <motion.button 
                      className="bg-white text-black px-4 py-2 font-bold text-sm tracking-wider hover:bg-white/90 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ADD TO CART
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <div className="text-center">
            <motion.button
              className="group bg-white text-black px-12 py-4 font-bold tracking-wider hover:bg-white/90 transition-all duration-300 flex items-center space-x-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>VIEW FULL COLLECTION</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
              STAY UPDATED
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be the first to know about new drops, exclusive releases, and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
              />
              <motion.button
                className="bg-white text-black px-8 py-4 font-bold tracking-wider hover:bg-white/90 transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SUBSCRIBE
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Merch;