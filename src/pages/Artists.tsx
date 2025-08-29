import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Music, Video, ExternalLink, Instagram, Youtube, Twitter } from 'lucide-react';

const Artists: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState(0);

  const artists = [
    {
      name: "POLLUXX",
      genre: "Hip-Hop",
      description: "A rising star in the hip-hop scene, POLLUXX brings raw energy and authentic storytelling to every track. Known for his distinctive flow and powerful lyricism that captures the essence of street culture.",
      image: "https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=800",
      modelingShots: [
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      tracks: [
        { title: "Street Dreams", duration: "3:24", plays: "2.1M" },
        { title: "No Limit", duration: "2:58", plays: "1.8M" },
        { title: "Rise Up", duration: "3:45", plays: "3.2M" },
        { title: "City Lights", duration: "4:12", plays: "1.5M" }
      ],
      videos: [
        { title: "Street Dreams (Official Video)", thumbnail: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400", views: "5.2M" },
        { title: "No Limit (Live Performance)", thumbnail: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400", views: "2.8M" },
        { title: "Rise Up (Behind the Scenes)", thumbnail: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400", views: "1.9M" }
      ],
      social: {
        instagram: "@polluxx_official",
        youtube: "POLLUXX",
        twitter: "@polluxx"
      }
    },
    {
      name: "SICELO WELO",
      genre: "Hip-Hop & R&B",
      description: "Zone seamlessly blends hip-hop and R&B, creating a unique sound that's both smooth and hard-hitting. His versatility and vocal range set him apart in the contemporary music scene.",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
      modelingShots: [
        "https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1464490/pexels-photo-1464490.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      tracks: [
        { title: "Midnight Vibes", duration: "4:12", plays: "4.5M" },
        { title: "Golden Hour", duration: "3:33", plays: "3.8M" },
        { title: "City Lights", duration: "3:18", plays: "2.9M" },
        { title: "Smooth Operator", duration: "3:55", plays: "2.1M" }
      ],
      videos: [
        { title: "Midnight Vibes (Official Video)", thumbnail: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400", views: "8.1M" },
        { title: "Golden Hour (Acoustic)", thumbnail: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400", views: "3.5M" },
        { title: "City Lights (Live Session)", thumbnail: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400", views: "2.7M" }
      ],
      social: {
        instagram: "@zone_music",
        youtube: "ZoneOfficial",
        twitter: "@zonemusic"
      }
    },
    {
      name: "SKATE",
      genre: "Hip-Hop & Trap",
      description: "SKATE brings the heat with his trap-influenced beats and aggressive delivery. His music captures the essence of street culture and modern urban life with uncompromising authenticity.",
      image: "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=800",
      modelingShots: [
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      tracks: [
        { title: "Traphouse", duration: "2:45", plays: "6.2M" },
        { title: "Money Moves", duration: "3:21", plays: "5.8M" },
        { title: "Grind Time", duration: "3:02", plays: "4.1M" },
        { title: "No Sleep", duration: "2:58", plays: "3.7M" }
      ],
      videos: [
        { title: "Traphouse (Official Video)", thumbnail: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400", views: "12.3M" },
        { title: "Money Moves (Behind the Scenes)", thumbnail: "https://images.pexels.com/photos/1464490/pexels-photo-1464490.jpeg?auto=compress&cs=tinysrgb&w=400", views: "4.8M" },
        { title: "Grind Time (Live)", thumbnail: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400", views: "3.2M" }
      ],
      social: {
        instagram: "@skate_trap",
        youtube: "SKATEOfficial",
        twitter: "@skatetrap"
      }
    }
  ];

  const currentArtist = artists[selectedArtist];

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
              OUR ARTISTS
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              MEET THE TALENTED ARTISTS WHO DEFINE THE SOUND OF 626 CREATIVE STUDIO
            </p>
          </motion.div>

          {/* Artist Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 border border-white/20 rounded-lg p-2 flex space-x-2">
              {artists.map((artist, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedArtist(index)}
                  className={`px-8 py-4 rounded-lg font-bold tracking-wider transition-all duration-300 ${
                    selectedArtist === index
                      ? 'bg-white text-black'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {artist.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artist Profile */}
      <AnimatePresence mode="wait">
        <motion.section
          key={selectedArtist}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <div className="container mx-auto px-6">
            {/* Artist Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <motion.img
                  src={currentArtist.image}
                  alt={currentArtist.name}
                  className="w-full h-96 object-cover border border-white/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
                  {currentArtist.name}
                </h2>
                <p className="text-2xl font-light mb-6 tracking-wide">
                  {currentArtist.genre}
                </p>
                <p className="text-lg leading-relaxed mb-8 text-white/80">
                  {currentArtist.description}
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4 mb-8">
                  <a href="#" className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                    <Instagram size={20} />
                    <span>{currentArtist.social.instagram}</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                    <Youtube size={20} />
                    <span>{currentArtist.social.youtube}</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                    <Twitter size={20} />
                    <span>{currentArtist.social.twitter}</span>
                  </a>
                </div>
                
                <div className="flex space-x-4">
                  <motion.button 
                    className="bg-white text-black px-8 py-4 font-bold tracking-wider hover:bg-white/90 transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={20} />
                    <span>LISTEN NOW</span>
                  </motion.button>
                  <motion.button 
                    className="border-2 border-white text-white px-8 py-4 font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    <span>VIEW PROFILE</span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Modeling Photos */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-8 tracking-wider">MODELING SHOTS</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentArtist.modelingShots.map((shot, index) => (
                  <motion.div
                    key={index}
                    className="relative overflow-hidden border border-white/20 group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img
                      src={shot}
                      alt={`${currentArtist.name} modeling shot ${index + 1}`}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Music & Videos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Music Tracks */}
              <div className="bg-white/5 border border-white/20 p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3 tracking-wider">
                  <Music size={24} />
                  <span>LATEST TRACKS</span>
                </h3>
                <div className="space-y-4">
                  {currentArtist.tracks.map((track, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <motion.button 
                          className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Play size={16} />
                        </motion.button>
                        <div>
                          <div className="font-bold">{track.title}</div>
                          <div className="text-sm text-white/60">{track.plays} plays</div>
                        </div>
                      </div>
                      <span className="text-white/60">{track.duration}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Music Videos */}
              <div className="bg-white/5 border border-white/20 p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3 tracking-wider">
                  <Video size={24} />
                  <span>MUSIC VIDEOS</span>
                </h3>
                <div className="space-y-4">
                  {currentArtist.videos.map((video, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-20 h-14 object-cover border border-white/20"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                          <Play size={16} className="text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sm">{video.title}</div>
                        <div className="text-xs text-white/60">{video.views} views</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </motion.div>
  );
};

export default Artists;