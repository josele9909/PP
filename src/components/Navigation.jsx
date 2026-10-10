import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import {BlogLinkData, GithubLinkData, LinkedInLinkData} from "@/content/contactLinks.jsx";
import titleImg from "/images/title.svg"
import {AnimatedLinkIcon} from "@/components/AnimatedLinkIcon.jsx";

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', labelJp: 'ホーム' },
    { id: 'about', label: 'About', labelJp: 'について' },
    { id: 'projects', label: 'Projects', labelJp: 'プロジェクト' },
    { id: 'contact', label: 'Contact', labelJp: 'お問い合わせ' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        const currentIndex = navItems.findIndex(item => item.id === activeSection);
        let nextIndex;
        
        if (e.key === 'ArrowUp') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : navItems.length - 1;
        } else {
          nextIndex = currentIndex < navItems.length - 1 ? currentIndex + 1 : 0;
        }
        
        scrollToSection(navItems[nextIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, navItems]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl gradient-text cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img src={titleImg} alt="Portfolio Genji Tanaka" className="w-full h-8"/>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label} / {item.labelJp}
              </motion.button>
            ))}
            
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-300">
              <AnimatedLinkIcon { ...GithubLinkData } className={"text-gray-600 hover:text-gray-900"} />
              <AnimatedLinkIcon { ...LinkedInLinkData } className={"text-gray-600 hover:text-gray-900"} />
              <AnimatedLinkIcon { ...BlogLinkData } className={"text-gray-600 hover:text-gray-900"} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label} / {item.labelJp}
              </motion.button>
            ))}
            
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              <AnimatedLinkIcon { ...GithubLinkData } className={"text-gray-600 hover:text-gray-900"} />
              <AnimatedLinkIcon { ...LinkedInLinkData } className={"text-gray-600 hover:text-gray-900"} />
              <AnimatedLinkIcon { ...BlogLinkData } className={"text-gray-600 hover:text-gray-900"} />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;