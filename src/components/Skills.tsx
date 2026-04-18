import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, 0.1);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto">
        <div 
          className={`mb-16 text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My technical skills and areas of expertise across various technologies and domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Technical Skills */}
          <div 
            className={`transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>

            <div className="space-y-6">
              {skillsData.technical.map((skill, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 delay-${200 + index * 100} ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                      style={{ 
                        width: isInView ? `${skill.level}%` : '0%',
                        transition: 'width 1s ease-in-out'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills and Tools */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tools & Soft Skills
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillsData.tools.map((tool, index) => (
                <div 
                  key={index}
                  className={`bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm flex flex-col items-center text-center transition-all duration-500 delay-${300 + index * 50} ${
                    isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                    <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
                  </div>
                  <h4 className="text-gray-900 dark:text-white font-medium">{tool.name}</h4>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Soft Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {skillsData.soft.map((skill, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-medium transition-all duration-500 delay-${400 + index * 50} ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;