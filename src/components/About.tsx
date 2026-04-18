import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';
import bg from '../Assets/bg.png';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, 0.1);

  const experiences = [
    {
      icon: <Briefcase size={24} />,
      title: 'Software Engineer',
      company: 'IBM',
      period: 'September 2023 - August 2024',
      description: 'Developed Python data pipelines and Spark workloads on AWS, enhancing ETL automation, system reliability, and reporting performance.'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Software Engineer II',
      company: 'Carelon Global Solutions',
      period: 'August 2020 - August 2023',
      description: 'Built secure healthcare backend services on AWS using Python and SQL, improving claims processing performance and deployment efficiency.'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Master of Science in Computer Science',
      company: 'University of North Texas',
      period: 'August 2024 – May 2026',
      description: 'Pursuing a Master of Science in Computer Science at the University of North Texas with focus on advanced computing and software systems.'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark"
    >
      <div className="container mx-auto">
        <div 
          className={`mb-16 text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={bg} 
                  alt="Working at desk" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-lg z-[-1]"></div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Code size={20} className="text-blue-600 dark:text-blue-400" />
                 <span className="font-bold text-gray-900 dark:text-white">
  4+ Years Experience
</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Software Engineer specializing in scalable backend systems, cloud-native applications, and data-driven solutions across healthcare and finance domains. Expertise in Python, SQL, Spark, and AWS, delivering high-performance data pipelines and secure microservices that enhance system reliability and operational efficiency.
            </p>

            <div className="space-y-4">
              {experiences.map((experience, index) => (
                <div 
                  key={index} 
                  className={`flex items-start space-x-4 transition-all duration-700 delay-${300 + index * 100} ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 flex-shrink-0">
                    {experience.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.title}</h4>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>{experience.company}</span>
                      <span className="mx-2">•</span>
                      <span>{experience.period}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;