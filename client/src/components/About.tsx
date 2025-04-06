import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Book, Code, Monitor, Laptop, Briefcase, Gamepad, Map, Music, Trophy } from 'lucide-react';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Map interest name to icon
  const getInterestIcon = (interest: string) => {
    switch (interest.toLowerCase()) {
      case 'web 3.0':
        return <Code className="w-5 h-5" />;
      case 'gaming':
        return <Gamepad className="w-5 h-5" />;
      case 'traveling':
        return <Map className="w-5 h-5" />;
      case 'music':
        return <Music className="w-5 h-5" />;
      case 'sports':
        return <Trophy className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 px-6 relative overflow-hidden"
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            className="text-primary/20"
          >
            <path d="M0 0 L40 0 L40 40 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Decorative blob behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-indigo-500/30 rounded-2xl blur-2xl opacity-30 dark:opacity-40"></div>
            
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 transition-all duration-500 hover:shadow-2xl">
              <svg
                className="w-full h-auto"
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

                {/* Animated elements */}
                <motion.circle 
                  cx="520" 
                  cy="60" 
                  r="10" 
                  fill="#EAB308"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.rect 
                  x="180" 
                  y="310" 
                  width="30" 
                  height="16" 
                  rx="2" 
                  fill="#10B981"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={hasIntersected ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Briefcase className="mr-2 text-primary" />
                <span>Who I Am</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a Computer Science graduate from FAST NUCES with a passion for building software that solves real-world problems. 
                My expertise spans full-stack development, blockchain technologies, and AI applications.
                I enjoy tackling complex challenges and transforming ideas into elegant, efficient solutions.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Book className="mr-2 text-primary" />
                <span>Education</span>
              </h3>
              <div className="space-y-4 mb-6">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-primary 
                    hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center mt-2">
                      <Monitor className="mr-2 h-4 w-4" />
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 flex items-center mt-1">
                      <Calendar className="mr-2 h-4 w-4" />
                      {edu.period}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Laptop className="mr-2 text-primary" />
                <span>Interests</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span 
                    key={index}
                    className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full 
                    text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-all hover-float
                    border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="mr-2 text-primary">{getInterestIcon(interest)}</span>
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Calendar icon component
const Calendar = ({ className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
};

export default About;
