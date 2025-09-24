'use client';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const timeline = [
  { date: "10 Sept - ", title: "Registration Start", desc: "Kick-off your journey here!" },
  { date: "30 Sep - ", title: "Registration End", desc: "Last chance to register!" },
  { date: "Round 1 - ", title: "Draft to Craft", desc: "Turn your raw ideas into structured drafts." },
  { date: "Round 2 - ", title: "Compile to File", desc: "Prepare your submissions in final form." },
  { date: "", title: "Grand Finale", desc: "Showcase your innovation to the jury." },
];

export default function EventTimeline() {
  const [hovered, setHovered] = useState(-1);
  const { isDarkMode } = useTheme(); // Use global theme context

  return (
    <section className={`py-12 md:py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-b from-black via-gray-900 to-black' : 'bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100'}`}>
      <div className="max-w-full mx-auto px-4 md:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Event Timeline
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-400 via-blue-500 to-purple-500 h-full rounded-full"></div>

          {timeline.map((item, i) => {
            const isActive = hovered === i;
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className={`relative flex w-full mb-16 md:mb-16 ${isLeft ? 'justify-start' : 'md:justify-end justify-start'} items-center`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(-1)}
              >
                {/* Card */}
                <div
                  className={`p-4 md:p-6 rounded-xl border backdrop-blur-sm shadow-xl transition-all duration-500
                    ${isActive ? 'border-green-400 md:scale-105 shadow-green-400/40' : isDarkMode ? 'border-gray-700' : 'border-gray-300'}
                    ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'}
                    ${!isDarkMode && isActive ? 'animate-pulse' : ''}
                    ${isLeft ? 'md:mr-[15%] md:ml-0 ml-10 mr-4' : 'md:ml-[15%] md:mr-0 ml-10 mr-4'}
                    max-w-xl w-full
                    `}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    ...(isActive && !isDarkMode ? { boxShadow: '0 0 32px 4px #60a5fa55' } : {}),
                  }}
                >
                  <h3 className={`text-base md:text-lg lg:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.date} {item.title}
                  </h3>
                  {isActive && <p className={`mt-2 text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} animate-fade-in`}>
                    {item.desc}
                  </p>}
                </div>

                {/* Mobile Arrow / Desktop Diamond marker */}
                {/* Mobile Arrow */}
                {/* <div
                  className={`md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500
                  w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent
                  ${isActive ? 'border-b-green-400 scale-125' : isDarkMode ? 'border-b-gray-700' : 'border-b-gray-400'}`}
                  style={{ 
                    zIndex: 3,
                    transform: 'translateX(-50%) translateY(-50%) rotate(-90deg)'
                  }}
                ></div> */}

                {/* Desktop Diamond */}
                <div
                  className={`hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-6 h-6 transition-all duration-500
                  ${isActive ? 'bg-green-400 scale-125 shadow-lg shadow-green-400/60' : isDarkMode ? 'bg-gray-700' : 'bg-gray-400'}
                  ${!isDarkMode && isActive ? 'animate-bounce' : ''}`}
                  style={{ zIndex: 3 }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease;
        }
      `}</style>
    </section>
  );
}
