// THEME CONTEXT
// Global theme provider for dark/light mode across the entire application
// This context manages theme state and provides toggle functionality to all components

'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode

  // Load theme from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      }
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      
      // Apply theme class to document body for global styling
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Theme values and utility functions
  const themeValue = {
    isDarkMode,
    toggleTheme,
    // Utility functions for common theme-based styling
    getBackgroundClass: () => isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    getTextClass: () => isDarkMode ? 'text-white' : 'text-gray-900',
    getSecondaryTextClass: () => isDarkMode ? 'text-gray-300' : 'text-gray-600',
    getCardClass: () => isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
    getNavClass: () => isDarkMode ? 'bg-black/90 border-gray-800' : 'bg-white/90 border-gray-200',
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
