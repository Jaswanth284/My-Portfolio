import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import profile from '../Assets/profile.png';
import resume from '../Assets/Jaswanth Koorapati.pdf';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-600 dark:text-blue-400">Jaswanth Koorapati</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              Designing, developing, and deploying scalable, high-performance applications using modern programming languages, frameworks, and cloud technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                Get in touch
              </a>
              <a 
                href={resume} 
                className="px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300 font-medium"
              >
                Download CV
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Jaswanth284" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jaswanth-koorapati-software-engineer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={profile} 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-2xl z-[-1]"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-600 dark:bg-purple-500 rounded-2xl z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="text-blue-600 dark:text-blue-400" />
      </button>
    </section>
  );
};

export default Hero;