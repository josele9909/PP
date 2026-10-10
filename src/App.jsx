import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { Toaster } from '@/components/ui/toaster';
import Footer from "@/components/Footer.jsx";
import {initGA} from "@/lib/ga4.js";

function App() {
  useEffect(() => {
	initGA();
  }, []);

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Genji Tanaka (田中源氏) - C# / .NET Developer Portfolio | 日本で働きたい開発者</title>
        <meta
          name="description"
          content="Portfolio of Genji Tanaka, a passionate full-stack developer seeking opportunities in Japan. Experienced with C# and the .NET Framework. 田中源氏 - C#と.NET Frameworkを主軸とするフルスタック開発者のポートフォリオ。"
        />
        <meta name="keywords" content="Genji Tanaka, 田中源氏, C#, .NET Framework, .NET developer, Japan, portfolio, 開発者, 日本, ポートフォリオ" />
        <meta property="og:title" content="Genji Tanaka (田中源氏) - C# / .NET Developer Portfolio" />
        <meta property="og:description" content="Passionate full-stack developer with expertise in C# and the .NET Framework, seeking opportunities in Japan's tech industry." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://leopaul29.github.io/" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        <Footer />
        
        <Toaster />
      </div>
    </>
  );
}

export default App;