import React from 'react';
import {motion} from 'framer-motion';
import {ArrowRight, Linkedin, MapPin} from 'lucide-react';
import {Button} from '@/components/ui/button';
import * as Tooltip from '@radix-ui/react-tooltip';
import {PremiumTooltip} from "@/components/ui/tooltip.jsx";
import avatarImage from '/images/avatar-developer-transparent.png';
import {myLinkedIn} from "@/content/contactLinks.jsx";


const skills = [
  { name: 'C#' },
  { name: '.NET Framework' }
];

const HeroSection = () => {
  return (
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Colonne gauche */}
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
          >
            {/* Intro */}
            <div className="space-y-4">
              <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-blue-600 font-medium text-lg"
              >
                Hello, I'm Genji Tanaka / はじめまして、田中源氏と申します。
              </motion.p>

              <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                C# / .NET Developer
                <span className="block gradient-text">日本での就職を目指す</span>
              </motion.h1>

              <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-600 leading-relaxed"
              >
                Passionate full-stack developer seeking opportunities in Japan.
                Building robust applications with C# and the .NET Framework.
              </motion.p>

              <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-gray-500"
              >
                C#と.NET Frameworkを主軸に、日本のIT業界での活躍を志すフルスタック開発者です。
              </motion.p>
            </div>

            {/* Localisation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-2 text-gray-600"
            >
              <MapPin size={20} className="text-red-500" />
              <span>Tokyo, Japan / 東京、日本</span>
            </motion.div>

            {/* Boutons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                  className="btn-primary group"
                  onClick={() => window.open(myLinkedIn, '_blank')}
              >
                Connect on LinkedIn
                <Linkedin className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                  variant="outline"
                  className="btn-secondary group"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Compétences avec Tooltip premium */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-3 mt-8"
            >
              <Tooltip.Provider delayDuration={150}>
                {skills.map((tech, index) => {
                  const hasCert = tech.certifications && tech.certifications.length > 0;
                  if (hasCert) {
                    return (
                        <PremiumTooltip
                            key={tech.name}
                            label={tech.name}
                            certifications={tech.certifications}
                        />
                    );
                  }
                  return (
                      <motion.span
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium flex items-center"
                      >
                        {tech.name}
                      </motion.span>
                  );
                })}
              </Tooltip.Provider>
            </motion.div>
          </motion.div>

          {/* Colonne droite */}
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative px-8"
          >
            <div className="relative" >
              <motion.div
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
              >
                <img
                    alt="Developer avatar from GitHub"
                    className="w-80 h-80 rounded-2xl object-cover shadow-2xl mx-auto"
                    src={avatarImage}
                />
              </motion.div>

              <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default HeroSection;
