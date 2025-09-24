// This component displays all the innovation tracks for the event.
// To add a new track, just add an object to the 'tracks' array below.
// You can change the title, description, icon, and color for each track.

'use client';

import { Heart, Leaf, Brain, Wifi, DollarSign, GraduationCap, Tractor, Factory, Lightbulb } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Image from 'next/image';

const InnovationTracks = () => {
  const { isDarkMode } = useTheme(); // Use global theme context
  
  const tracks = [
    {
      icon: Heart,
      title: "HealthTech & Medical Innovations",
      description: "Revolutionary healthcare solutions and medical devices",
      color: "bg-red-500/20 text-red-400",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Leaf,
      title: "Sustainable Technology",
      description: "Green tech innovations for environmental sustainability",
      color: "bg-green-500/20 text-green-400",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge AI algorithms and intelligent systems",
      color: "bg-purple-500/20 text-purple-400",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Wifi,
      title: "IoT & Smart Systems",
      description: "Connected devices and smart infrastructure solutions",
      color: "bg-blue-500/20 text-blue-400",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: DollarSign,
      title: "FinTech Solutions",
      description: "Financial technology and blockchain innovations",
      color: "bg-yellow-500/20 text-yellow-400",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: GraduationCap,
      title: "EdTech Platforms",
      description: "Educational technology and learning management systems",
      color: "bg-indigo-500/20 text-indigo-400",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Tractor,
      title: "AgriTech Solutions",
      description: "Agricultural technology and farming innovations",
      color: "bg-orange-500/20 text-orange-400",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Factory,
      title: "Smart Manufacturing",
      description: "Industry 4.0 and automated manufacturing systems",
      color: "bg-gray-500/20 text-gray-400",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Lightbulb,
      title: "Open Innovation",
      description: "Any innovative solution across all domains and industries",
      color: "bg-pink-500/20 text-pink-400",
      image: "https://alcorfund.com/wp-content/uploads/2020/09/Open-Innovation-Header.png"
    }
  ];

  return (
    <section id="tracks" className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-full mx-auto px-8">
        {/* Section title and intro */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Innovation Tracks</h2>
          <p className="text-xl text-green-400 font-semibold mb-2 animate-pulse">Unleash your creativity. Pick a track. Patent your idea!</p>
          <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Choose your domain and build groundbreaking solutions that can be patented
          </p>
        </div>
        {/* Tracks grid: each card shows image, icon, title, tagline, and description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            const taglines = [
              "Save lives with tech!",
              "Go green, go future!",
              "Smarter than ever!",
              "Connect everything!",
              "Money moves!",
              "Teach the world!",
              "Grow smarter!",
              "Automate the future!",
              "Break all boundaries!"
            ];
            const hotTracks = [0, 2, 8];
            return (
              <div key={index} className={`rounded-xl p-0 border-2 hover:border-green-400 shadow-lg hover:shadow-green-500/30 transition-all duration-300 group relative overflow-hidden ${isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-gray-300'}`}>
                {hotTracks.includes(index) && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-bounce z-10">Hot!</span>
                )}
                
                {/* Track Image */}
                <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={track.image}
                    alt={`${track.title} illustration`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Icon overlay */}
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-lg ${track.color} flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {track.title}
                  </h3>
                  <p className="text-green-400 text-sm mb-3 italic font-medium">{taglines[index]}</p>
                  <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {track.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InnovationTracks;
// End INNOVATION TRACKS COMPONENT
