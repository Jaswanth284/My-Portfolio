import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Jaswanth Koorapati</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Focused on designing and building scalable, secure, and high-performance applications using modern backend, cloud, and data technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Jaswanth284" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jaswanth-koorapati-software-engineer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Hero', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>United States</li>
              <li>jaswanthkoorapati1999@gmail.com</li>
              <li>+1 940-629-3868</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            
            © {new Date().getFullYear()} Jaswanth Koorapati. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;