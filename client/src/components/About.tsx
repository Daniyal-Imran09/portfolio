import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Education {
  degree: string;
  institution: string;
  period: string;
}

interface AboutProps {
  education: Education[];
  interests: string[];
}

const About = ({ education, interests }: AboutProps) => {
  const { targetRef, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="about" 
      className="py-20 px-6 bg-white dark:bg-gray-800"
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg
              className="rounded-lg shadow-lg w-full h-auto"
              viewBox="0 0 600 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="600" height="450" rx="8" fill="#f8fafc" className="dark:fill-gray-700" />
              <rect x="40" y="40" width="320" height="200" rx="4" fill="#e2e8f0" className="dark:fill-gray-600" />
              <rect x="40" y="260" width="320" height="150" rx="4" fill="#e2e8f0" className="dark:fill-gray-600" />
              <rect x="380" y="40" width="180" height="370" rx="4" fill="#e2e8f0" className="dark:fill-gray-600" />
              
              {/* Code editor elements */}
              <rect x="50" y="50" width="300" height="180" rx="2" fill="#334155" className="dark:fill-gray-900" />
              <rect x="60" y="60" width="280" height="12" rx="2" fill="#3B82F6" />
              <rect x="60" y="80" width="200" height="12" rx="2" fill="#10B981" />
              <rect x="60" y="100" width="240" height="12" rx="2" fill="#EAB308" />
              <rect x="60" y="120" width="180" height="12" rx="2" fill="#f8fafc" />
              <rect x="60" y="140" width="220" height="12" rx="2" fill="#f8fafc" />
              <rect x="60" y="160" width="200" height="12" rx="2" fill="#3B82F6" />
              <rect x="60" y="180" width="240" height="12" rx="2" fill="#10B981" />
              <rect x="60" y="200" width="160" height="12" rx="2" fill="#f8fafc" />

              {/* Browser preview */}
              <rect x="50" y="270" width="300" height="130" rx="2" fill="#fff" className="dark:fill-gray-900" />
              <rect x="50" y="270" width="300" height="24" rx="2" fill="#e2e8f0" className="dark:fill-gray-800" />
              <circle cx="64" cy="282" r="6" fill="#EF4444" />
              <circle cx="84" cy="282" r="6" fill="#EAB308" />
              <circle cx="104" cy="282" r="6" fill="#10B981" />
              <rect x="70" y="310" width="260" height="16" rx="2" fill="#3B82F6" />
              <rect x="70" y="340" width="180" height="12" rx="2" fill="#e2e8f0" className="dark:fill-gray-700" />
              <rect x="70" y="360" width="220" height="12" rx="2" fill="#e2e8f0" className="dark:fill-gray-700" />

              {/* Side elements */}
              <rect x="390" y="50" width="160" height="30" rx="4" fill="#3B82F6" />
              <rect x="390" y="90" width="160" height="120" rx="4" fill="#fff" className="dark:fill-gray-900" />
              <rect x="400" y="100" width="140" height="12" rx="2" fill="#e2e8f0" className="dark:fill-gray-700" />
              <rect x="400" y="120" width="100" height="12" rx="2" fill="#e2e8f0" className="dark:fill-gray-700" />
              <rect x="400" y="140" width="120" height="12" rx="2" fill="#e2e8f0" className="dark:fill-gray-700" />
              <rect x="400" y="160" width="80" height="12" rx="2" fill="#e2e8f0" className="dark:fill-gray-700" />
              <rect x="400" y="180" width="120" height="12" rx="2" fill="#e2e8f0" className="dark:fill-gray-700" />
              
              <rect x="390" y="220" width="160" height="180" rx="4" fill="#fff" className="dark:fill-gray-900" />
              <circle cx="430" cy="260" r="30" fill="#3B82F6" />
              <rect x="400" y="300" width="140" height="12" rx="2" fill="#e2e8f0" className="dark:fill-gray-700" />
              <rect x="400" y="320" width="100" height="12" rx="2" fill="#e2e8f0" className="dark:fill-gray-700" />
              <rect x="400" y="340" width="120" height="12" rx="2" fill="#e2e8f0" className="dark:fill-gray-700" />
              <rect x="400" y="360" width="140" height="12" rx="2" fill="#e2e8f0" className="dark:fill-gray-700" />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a Computer Science graduate from FAST NUCES with a passion for building software that solves real-world problems. 
              My experience spans full-stack development, blockchain technologies, and AI applications.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="space-y-4 mb-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                  <h4 className="font-medium text-lg">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution} | {edu.period}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Interests</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
