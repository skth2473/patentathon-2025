// This is the navigation bar at the top.
// To change the logo text or tagline, edit the lines near the top.
// To add or remove navigation links, look for the links section.
// To update the buttons (Register, WhatsApp), find the button code below.

// NAVIGATION COMPONENT
// Top navigation bar with logo, tagline, and links
// To change logo text or navigation links, edit lines below

'use client';

import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); // Use global theme context

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b ${isDarkMode ? 'bg-black/90 border-gray-800' : 'bg-white/90 border-gray-200'}`}>
      <div className="max-w-full mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo, title and tagline section */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-16 h-16 mt-0 rounded-full items-center justify-center text-white font-bold text-xl">
              <Image
                src={isDarkMode ? "/LOGO.png" : "/LOGO-black.png"}
                alt="Patent-A-Thon Logo"
                width={64}
                height={64}
                className="rounded-full"
                priority
              />
            </div>
            {/* Title and tagline */}
            <div className="flex flex-col">
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Patent-A-Thon 1.0
              </h1>
              <span className={`text-sm text-green-400 font-semibold ${isDarkMode ? 'text-green' : 'text-purple-700'}`}>
                Ideate • Innovate • Invent
              </span>
            </div>
          </div>

        {/* Desktop navigation links */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <a href="#tracks" className={`hover:text-green-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              Tracks
            </a>
            <a href="#timeline" className={`hover:text-green-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              Timeline
            </a>
            <a href="#mentors" className={`hover:text-green-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              Mentors
            </a>
            {/* <a href="/community-partners" className={`hover:text-green-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              Partners
            </a> */}
            {/* <a href="#faq" className={`hover:text-green-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              FAQ
            </a>
          </div> */}

          {/* Desktop CTA buttons and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://docs.google.com/forms/d/1fIqW1_lN9XV0re2l6G4Bc79yFwbj9kM5YzNckMkMbzc/edit"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                isDarkMode
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg'
              }`}
            >
              Register Now
            </a>
            <a
              href="https://chat.whatsapp.com/CXnEqBAZlSIC3Msbv8017a?mode=ems_qr_c"
              target="_blank"
              rel="noopener noreferrer"
              className={`border px-6 py-2 rounded-full font-medium transition-colors ${isDarkMode ? 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white' : 'border-gray-800 hover:border-gray-800 text-gray-800 hover:text-gray-900'}`}
            >
              Join WhatsApp
            </a>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${isDarkMode ? 'bg-black/95 border-gray-800' : 'bg-white/95 border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#tracks"
                className={`block px-3 py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={toggleMenu}
              >
                Tracks
              </a>
              <a
                href="#timeline"
                className={`block px-3 py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={toggleMenu}
              >
                Timeline
              </a>
              <a
                href="#mentors"
                className={`block px-3 py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={toggleMenu}
              >
                Mentors
              </a>
              <a
                href="/community-partners"
                className={`block px-3 py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={toggleMenu}
              >
                Partners
              </a>
              <a
                href="#faq"
                className={`block px-3 py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={toggleMenu}
              >
                FAQ
              </a>
              <div className="pt-4 space-y-2">
                <a
                  href="https://docs.google.com/forms/d/1fIqW1_lN9XV0re2l6G4Bc79yFwbj9kM5YzNckMkMbzc/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-3 py-2 rounded-full font-medium transition-all duration-300 text-center shadow-lg"
                >
                  Register Now
                </a>
                <a
                  href="https://chat.whatsapp.com/CXnEqBAZlSIC3Msbv8017a?mode=ems_qr_c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block border px-3 py-2 rounded-full font-medium transition-colors text-center ${isDarkMode ? 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white' : 'border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900'}`}
                >
                  Join WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

// End NAVIGATION COMPONENT
