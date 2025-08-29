import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Star,
  ArrowRight,
  Filter,
  X,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";

const Merch: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [showFullCollection, setShowFullCollection] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = ["ALL", "HOODIES", "T-SHIRTS", "ACCESSORIES", "LIMITED"];

  const merchItems = [
    {
      name: "626 CREATIVE STUDIO BLACK HOODIE",
      price: "R650",
      originalPrice: "R850",
      image: "/clothing line/626 Creative Studio Black Hoodie.PNG",
      rating: 4.9,
      category: "HOODIES",
      isLimited: false,
      colors: ["Black"],
    },
    {
      name: "626 CREATIVE STUDIO GREY HOODIE",
      price: "R650",
      originalPrice: "R850",
      image: "/clothing line/626 Creative Studio Grey Hoodie Premium.PNG",
      rating: 4.9,
      category: "HOODIES",
      isLimited: false,
      colors: ["Gray"],
    },
    {
      name: "626 BLACK T-SHIRT",
      price: "R350",
      originalPrice: "R450",
      image: "/clothing line/626 Balck T.PNG",
      rating: 4.8,
      category: "T-SHIRTS",
      isLimited: false,
      colors: ["Black"],
    },
    {
      name: "626 STOLEN FROM T-SHIRT",
      price: "R350",
      originalPrice: "R450",
      image: "/clothing line/626 Stolen From TShirt.PNG",
      rating: 4.8,
      category: "T-SHIRTS",
      isLimited: true,
      colors: ["Black"],
    },
    {
      name: "626 NAVY BASEBALL CAP",
      price: "R250",
      originalPrice: "R350",
      image: "/clothing line/626 Creative Studio Navy Baseball Cap.PNG",
      rating: 4.7,
      category: "ACCESSORIES",
      isLimited: false,
      colors: ["Navy"],
    },
    {
      name: "626 UNIVERSITY JACKET PREMIUM",
      price: "R1250",
      originalPrice: "R1450",
      image: "/clothing line/626 University Jacket Premium.PNG",
      rating: 5.0,
      category: "HOODIES",
      isLimited: true,
      colors: ["Black", "White"],
    },
    {
      name: "626 SKATE SWEATPANTS",
      price: "R550",
      originalPrice: "R750",
      image: "/clothing line/626 Skate Sweatpants.PNG",
      rating: 4.8,
      category: "HOODIES",
      isLimited: false,
      colors: ["Black", "Gray"],
    },
    {
      name: "626 AK47 GREY HOODIE",
      price: "R750",
      originalPrice: "R950",
      image: "/clothing line/626 AK47 Grey Hoodie.PNG",
      rating: 4.9,
      category: "HOODIES",
      isLimited: true,
      colors: ["Gray"],
    },
    {
      name: "B&W 626 JACKET ZIPPER",
      price: "R950",
      originalPrice: "R1150",
      image: "/clothing line/B&W 626 Jacket Zipper.PNG",
      rating: 5.0,
      category: "HOODIES",
      isLimited: true,
      colors: ["Black", "White"],
    },
  ];

  const fullCollection = [
    ...merchItems,
    {
      name: "626 ARTISTS ASSORTED HOODIES",
      price: "R750",
      originalPrice: "R950",
      image: "/clothing line/626 Artists Assorted Hoodies.PNG",
      rating: 4.9,
      category: "HOODIES",
      isLimited: false,
      colors: ["Black", "Gray"],
    },
    {
      name: "626 ASSORTED COLOURS HOODIES",
      price: "R750",
      originalPrice: "R950",
      image: "/clothing line/626 Assorted Colours Hoodies.PNG",
      rating: 4.8,
      category: "HOODIES",
      isLimited: false,
      colors: ["Black", "Gray", "White"],
    },
    {
      name: "626 GREY AND BLACK JACKETS",
      price: "R1150",
      originalPrice: "R1350",
      image: "/clothing line/626 Grey and Black Jackets.PNG",
      rating: 5.0,
      category: "HOODIES",
      isLimited: true,
      colors: ["Black", "Gray"],
    },
    {
      name: "626 NAVY BASEBALL CAP 2",
      price: "R250",
      originalPrice: "R350",
      image: "/clothing line/626 Navy Baseball Cap 2.PNG",
      rating: 4.7,
      category: "ACCESSORIES",
      isLimited: false,
      colors: ["Navy"],
    },
    {
      name: "626 UNIVERSITY JACKET PREMIUM 2",
      price: "R1250",
      originalPrice: "R1450",
      image: "/clothing line/626 University Jacket Premium2.PNG",
      rating: 5.0,
      category: "HOODIES",
      isLimited: true,
      colors: ["Black", "White"],
    },
    {
      name: "W&B 626 JACKET ZIPPER",
      price: "R950",
      originalPrice: "R1150",
      image: "/clothing line/W&B 626 Jacket Zipper.PNG",
      rating: 5.0,
      category: "HOODIES",
      isLimited: true,
      colors: ["White", "Black"],
    },
    {
      name: "SICELO WELO HOODIE PINK",
      price: "R650",
      originalPrice: "R850",
      image: "/clothing line/Welo Hoddie Pink.PNG",
      rating: 4.9,
      category: "HOODIES",
      isLimited: true,
      colors: ["Black"],
    },
    {
      name: "626 OFFSET T-SHIRT",
      price: "R450",
      originalPrice: "R650",
      image: "/clothing line/626 Offset T-Shirt.PNG",
      rating: 4.8,
      category: "T-SHIRTS",
      isLimited: false,
      colors: ["Black", "White"],
    },
    {
      name: "626 NORMAL T-SHIRT",
      price: "R450",
      originalPrice: "R650",
      image: "/clothing line/626 Normal T-Shirt.PNG",
      rating: 4.8,
      category: "T-SHIRTS",
      isLimited: false,
      colors: ["Black", "White"],
    },
  ];

  const itemsToShow = showFullCollection ? fullCollection : merchItems;
  const filteredItems =
    selectedCategory === "ALL"
      ? itemsToShow
      : itemsToShow.filter(
          (item) =>
            item.category === selectedCategory ||
            (selectedCategory === "LIMITED" && item.isLimited)
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
              WEAR YOUR CREATIVITY WITH OUR EXCLUSIVE CLOTHING LINE AND
              ACCESSORIES
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
                      ? "bg-white text-black"
                      : "text-white/60 hover:text-white hover:bg-white/10"
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
                onClick={() => setSelectedItem(item)}
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
                    <span className="text-white/60 text-sm font-medium tracking-wider">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-white fill-current" />
                      <span className="text-white/60 text-sm">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-3 tracking-wide h-12 flex items-start">
                    {item.name}
                  </h3>

                  <div className="flex items-center space-x-2 mb-4">
                    {item.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className={`w-4 h-4 rounded-full border border-white/30 ${
                          color === "Black"
                            ? "bg-black"
                            : color === "White"
                            ? "bg-white"
                            : color === "Gray"
                            ? "bg-gray-500"
                            : color === "Red"
                            ? "bg-red-500"
                            : color === "Navy"
                            ? "bg-blue-900"
                            : color === "Gold"
                            ? "bg-yellow-500"
                            : color === "Silver"
                            ? "bg-gray-300"
                            : "bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-2xl font-black">
                          {item.price}
                        </span>
                        <span className="text-white/40 line-through text-sm">
                          {item.originalPrice}
                        </span>
                      </div>
                      <span className="text-white/60 text-xs font-medium">
                        In Stock
                      </span>
                    </div>
                    <motion.button
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-300 shadow-lg group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ShoppingBag
                        size={16}
                        className="text-black group-hover:scale-110 transition-transform"
                      />
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
              onClick={() => setShowFullCollection(!showFullCollection)}
            >
              <span>
                {showFullCollection ? "SHOW LESS" : "VIEW FULL COLLECTION"}
              </span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
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
              Be the first to know about new drops, exclusive releases, and
              special offers
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

      {/* Product Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-black border border-white/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-white/20">
                <h3 className="text-2xl font-bold text-white">
                  {selectedItem.name}
                </h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-96 object-cover rounded-lg border border-white/20"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/60 text-sm font-medium tracking-wider uppercase">
                      {selectedItem.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-white fill-current" />
                      <span className="text-white/80 text-sm font-medium">
                        {selectedItem.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-4xl font-black text-white">
                      {selectedItem.price}
                    </span>
                    <span className="text-white/40 line-through text-xl">
                      {selectedItem.originalPrice}
                    </span>
                    {selectedItem.isLimited && (
                      <span className="bg-white text-black px-3 py-1 text-xs font-bold tracking-wider rounded-full">
                        LIMITED
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Available Colors:
                    </h4>
                    <div className="flex items-center space-x-3">
                      {selectedItem.colors.map(
                        (color: string, colorIndex: number) => (
                          <div
                            key={colorIndex}
                            className={`w-8 h-8 rounded-full border-2 border-white/20 cursor-pointer hover:border-white/60 transition-colors ${
                              color === "Black"
                                ? "bg-black"
                                : color === "White"
                                ? "bg-white"
                                : color === "Gray"
                                ? "bg-gray-500"
                                : color === "Navy"
                                ? "bg-blue-900"
                                : "bg-gray-500"
                            }`}
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">
                      Product Details:
                    </h4>
                    <div className="space-y-2 text-white/80">
                      <div className="flex items-center space-x-2">
                        <Shield size={16} />
                        <span>Premium quality materials</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Truck size={16} />
                        <span>Free shipping on orders over R500</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RotateCcw size={16} />
                        <span>30-day return policy</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-white text-black py-4 font-bold tracking-wider rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingBag size={20} />
                    <span>ADD TO CART</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Merch;
