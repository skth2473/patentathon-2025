// HEADER COMPONENT
// Main landing section with event title, tagline, date, venue, and registration buttons
// To change event name, tagline, or date, edit lines below
// To change the registration button, look for the 'Register Now' link.
// To update the stats (participants, ideas, tracks, innovation), edit the grid at the bottom.

'use client';

import { Calendar, Clock, MapPin } from 'lucide-react';
import { useEffect, useState } from "react";
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { isDarkMode } = useTheme(); // Use global theme context
  
  // Animated counter hook

  function useCountUp(to, duration = 2000) {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const end = parseInt(to, 10);
      if (start === end) return;
      let incrementTime = Math.floor(duration / end);
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }, [to, duration]);
    return count;
  }

  // Only start counting when header is visible
  const [startCount, setStartCount] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate countdown to September 20th, 2025 at 6 PM
  useEffect(() => {
    const targetDate = new Date('2025-09-30T23:59:59').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('main-header');
      if (header) {
        const rect = header.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStartCount(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Check on mount in case already visible
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const participants = useCountUp(startCount ? 200 : 0, 15000);

  return (
    <header id="main-header" className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-black via-gray-900 to-black' : 'bg-gradient-to-br from-gray-100 via-white to-gray-100'}`}>
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]' : 'bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_50%)]'}`}></div>
      </div>
      {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="relative max-w-full mx-auto px-8 pt-20 pb-16 min-h-screen flex flex-col justify-center">
          
          <div className="text-center">
            {/* Main event title */}
            <div className="mt-6">
          <h1 className={`text-3xl md:text-4xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Sci-Fi Innovation Club
          </h1>
          <h2 className={`text-xl md:text-xl lg:text-xl font-semibold ${isDarkMode ? 'text-white-1000' : 'text-gray-900'}`}>Presents</h2>
            </div>
            <div className="mb-2">
          <h1 className={`text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600' : 'bg-gradient-to-r from-green-600 via-blue-600 to-purple-700'}`}>
            Patent-A-Thon 1.0
          </h1>
            </div>
            <p className={`text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          Join Patent-a-thon 1.0 at Chandigarh University and turn your innovative ideas into protected intellectual property. Register now and be part of this groundbreaking innovation event
            </p>
            {/* Event details (date, time, venue) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 mb-6">
            <div className={`flex items-center gap-3 text-base lg:text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4 text-blue-400" />
              </div>
              <span className="font-semibold">Date Announced Soon</span>
            </div>
            <div className={`flex items-center gap-3 text-base lg:text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-400" />
              </div>
              <span className="font-semibold">Full Day Event</span>
            </div>
            <div className={`flex items-center gap-3 text-base lg:text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-purple-400" />
              </div>
              <a href="https://maps.app.goo.gl/AiwNVUqkVgkSVL6B7" className="font-semibold hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">Chandigarh University</a>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="mb-8">
            <h3 className={`text-lg md:text-xl font-semibold mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Registration Ends In
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className={`backdrop-blur-sm rounded-lg p-4 border transition-all duration-300 ${isDarkMode ? 'bg-white/10 border-green-500/30' : 'bg-white/90 border-green-500/40'} min-w-[80px]`}>
                <div className="text-2xl md:text-3xl font-bold text-green-400">{timeLeft.days}</div>
                <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Days</div>
              </div>
              <div className={`backdrop-blur-sm rounded-lg p-4 border transition-all duration-300 ${isDarkMode ? 'bg-white/10 border-blue-500/30' : 'bg-white/90 border-blue-500/40'} min-w-[80px]`}>
                <div className="text-2xl md:text-3xl font-bold text-blue-400">{timeLeft.hours}</div>
                <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Hours</div>
              </div>
              <div className={`backdrop-blur-sm rounded-lg p-4 border transition-all duration-300 ${isDarkMode ? 'bg-white/10 border-purple-500/30' : 'bg-white/90 border-purple-500/40'} min-w-[80px]`}>
                <div className="text-2xl md:text-3xl font-bold text-purple-400">{timeLeft.minutes}</div>
                <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Minutes</div>
              </div>
              <div className={`backdrop-blur-sm rounded-lg p-4 border transition-all duration-300 ${isDarkMode ? 'bg-white/10 border-yellow-500/30' : 'bg-white/90 border-yellow-500/40'} min-w-[80px] animate-pulse`}>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">{timeLeft.seconds}</div>
                <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Seconds</div>
              </div>
            </div>
          </div>

          {/* Registration and WhatsApp buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://docs.google.com/forms/d/1fIqW1_lN9XV0re2l6G4Bc79yFwbj9kM5YzNckMkMbzc/edit"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg
                ${isDarkMode
                  ? 'bg-green-600 hover:bg-green-800 text-white hover:shadow-purple-500/25'
                  : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white hover:shadow-xl hover:shadow-green-500/30'
                }`}
            >
              Register Now
            </a> 
            <a
              href="https://chat.whatsapp.com/CXnEqBAZlSIC3Msbv8017a?mode=ems_qr_c"
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105
                ${isDarkMode
                  ? 'border-green-400 text-white hover:border-green-400 hover:text-green-300'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-700 shadow-lg hover:shadow-blue-500/25'
                }`}
            >
              Join WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className={`backdrop-blur-sm rounded-lg p-6 border transition-colors duration-300 ${isDarkMode ? 'bg-white/5 border-gray-800' : 'bg-white/80 border-gray-200'}`}>
              <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">{participants}+</div>
              <div className={`text-sm lg:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Participants</div>
            </div>
            <div className={`backdrop-blur-sm rounded-lg p-6 border transition-colors duration-300 ${isDarkMode ? 'bg-white/5 border-gray-800' : 'bg-white/80 border-gray-200'}`}>
              <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">9</div>
              <div className={`text-sm lg:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tracks</div>
            </div>
            <div className={`backdrop-blur-sm rounded-lg p-6 border transition-colors duration-300 ${isDarkMode ? 'bg-white/5 border-gray-800' : 'bg-white/80 border-gray-200'}`}>
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">∞</div>
              <div className={`text-sm lg:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Innovation</div>
            </div>
                        <div className={`backdrop-blur-sm rounded-lg p-6 border transition-colors duration-300 ${isDarkMode ? 'bg-white/5 border-gray-800' : 'bg-white/80 border-gray-200'}`}>
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">17+</div>
              <div className={`text-sm lg:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Events Organised</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// End HEADER COMPONENT
