import React, { useState } from 'react';
import { Play, Music, Camera, Video, ExternalLink } from 'lucide-react';

const Artists: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState(0);

  const artists = [
    {
      name: "POLLUXX",
      genre: "Hip-Hop",
      description: "A rising star in the hip-hop scene, POLLUXX brings raw energy and authentic storytelling to every track. Known for his distinctive flow and powerful lyricism.",
      image: "https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 to-pink-500",
      tracks: [
        { title: "Pt.1", duration: "3:24" },
        { title: "No Limit", duration: "2:58" },
        { title: "La Vida", duration: "3:45" }
      ],
      videos: [
        { title: "No Way (Official Video)", thumbnail: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Fosho (Live Performance)", thumbnail: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400" }
      ]
    },
    {
      name: "Zone",
      genre: "Hip-Hop & R&B",
      description: "Zone seamlessly blends hip-hop and R&B, creating a unique sound that's both smooth and hard-hitting. His versatility and vocal range set him apart.",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-500 to-cyan-500",
      tracks: [
        { title: "Ungakhali", duration: "4:12" },
        { title: "Oh Babe", duration: "3:33" },
        { title: "Bayeke", duration: "3:18" }
      ],
      videos: [
        { title: "VIZA (Official Video)", thumbnail: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Oh Babe(Acoustic)", thumbnail: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400" }
      ]
    },
    {
      name: "SKATE",
      genre: "Hip-Hop & Trap",
      description: "SKATE brings the heat with his trap-influenced beats and aggressive delivery. His music captures the essence of street culture and modern urban life.",
      image: "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-yellow-500 to-orange-500",
      tracks: [
        { title: "Put in the Work & Step", duration: "2:45" },
        { title: "Don't Do That", duration: "3:21" },
        { title: "Alive & Shine", duration: "3:02" }
      ],
      videos: [
        { title: "VIZA (Official Video)", thumbnail: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Put in the Work & Step (Behind the Scenes)", thumbnail: "https://images.pexels.com/photos/1464490/pexels-photo-1464490.jpeg?auto=compress&cs=tinysrgb&w=400" }
      ]
    }
  ];

  const currentArtist = artists[selectedArtist];

  return (
    <section id="artists" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Gang Gang (626)
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the talented artists who define the sound of 626 Creative Studio
          </p>
        </div>

        {/* Artist Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-2 flex space-x-2">
            {artists.map((artist, index) => (
              <button
                key={index}
                onClick={() => setSelectedArtist(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedArtist === index
                    ? `bg-gradient-to-r ${artist.color} text-white`
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {artist.name}
              </button>
            ))}
          </div>
        </div>

        {/* Artist Profile */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={currentArtist.image}
                  alt={currentArtist.name}
                  className="w-full h-96 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentArtist.color} opacity-20`}></div>
              </div>
            </div>
            
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">{currentArtist.name}</h3>
              <p className={`text-xl font-semibold mb-4 bg-gradient-to-r ${currentArtist.color} bg-clip-text text-transparent`}>
                {currentArtist.genre}
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {currentArtist.description}
              </p>
              
              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${currentArtist.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center space-x-2`}>
                  <Play size={20} />
                  <span>Listen Now</span>
                </button>
                <button className="border-2 border-gray-600 text-gray-400 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <ExternalLink size={20} />
                  <span>View Profile</span>
                </button>
              </div>
            </div>
          </div>

          {/* Music & Videos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Music Tracks */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Music size={24} />
                <span>Latest Tracks</span>
              </h4>
              <div className="space-y-3">
                {currentArtist.tracks.map((track, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    <div className="flex items-center space-x-3">
                      <button className={`w-10 h-10 rounded-full bg-gradient-to-r ${currentArtist.color} flex items-center justify-center hover:scale-110 transition-transform`}>
                        <Play size={16} className="text-white" />
                      </button>
                      <span className="text-white font-medium">{track.title}</span>
                    </div>
                    <span className="text-gray-400">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Music Videos */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Video size={24} />
                <span>Music Videos</span>
              </h4>
              <div className="space-y-4">
                {currentArtist.videos.map((video, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play size={20} className="text-white" />
                      </div>
                    </div>
                    <span className="text-white font-medium">{video.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;