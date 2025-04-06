import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { 
  Book, Code, Monitor, Laptop, Briefcase, Gamepad, Map, 
  Music, Trophy, GraduationCap, User, Heart 
} from 'lucide-react';

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
        return <Heart className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 px-6 relative overflow-hidden"
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      {/* Background with subtle animation */}
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="absolute h-full w-full opacity-[0.03] dark:opacity-[0.05]">
          <defs>
            <pattern id="circlePattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="currentColor" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circlePattern)" />
        </svg>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 mix-blend-multiply dark:mix-blend-soft-light animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl opacity-20 mix-blend-multiply dark:mix-blend-soft-light animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary font-medium text-sm inline-block mb-4">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get to know me better</h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm a passionate developer with a keen interest in building useful and well-designed software solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left panel - Bio card */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20"></div>
              
              <div className="flex items-center space-x-4 mb-6 relative">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Daniyal Imran</h3>
                  <p className="text-primary dark:text-primary-400 text-sm">MERN Stack Developer</p>
                </div>
              </div>
              
              <div className="relative">
                <h4 className="flex items-center text-lg font-semibold mb-4">
                  <Briefcase className="w-5 h-5 mr-2 text-primary" />
                  About Me
                </h4>
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm a Computer Science graduate with a passion for building innovative software solutions. My expertise encompasses full-stack development, with a focus on the MERN stack, blockchain technologies, and AI applications.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    I thrive on transforming complex problems into elegant, efficient solutions that provide real value to users.
                  </p>
                </div>
                
                <h4 className="flex items-center text-lg font-semibold mt-8 mb-4">
                  <Heart className="w-5 h-5 mr-2 text-primary" />
                  My Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span 
                      key={index}
                      className="flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-sm 
                        rounded-full text-gray-700 dark:text-gray-300 transition-all hover-float"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: 'var(--primary-10)',
                        color: 'var(--primary)' 
                      }}
                    >
                      <span className="mr-1.5 text-primary">{getInterestIcon(interest)}</span>
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right panel - Education and Skills */}
          <motion.div
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate={hasIntersected ? "visible" : "hidden"}
          >
            {/* Education block */}
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 mb-6"
            >
              <h3 className="flex items-center text-xl font-bold mb-6">
                <GraduationCap className="w-6 h-6 mr-2 text-primary" />
                Education Journey
              </h3>
              
              <div className="relative border-l-2 border-primary/20 pl-6 pb-1 space-y-6">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    custom={index}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: i => ({ 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: i * 0.2,
                          duration: 0.5
                        }
                      })
                    }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[34px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-gray-800 bg-primary"></div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                      <div className="flex justify-between">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{edu.degree}</h4>
                        <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        {edu.institution}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Key skills block */}
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="flex items-center text-xl font-bold mb-6">
                <Code className="w-6 h-6 mr-2 text-primary" />
                Key Skills
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {icon: <Code />, name: "JavaScript"},
                  {icon: <Server />, name: "Node.js"},
                  {icon: <Monitor />, name: "React"},
                  {icon: <Database />, name: "MongoDB"},
                  {icon: <Globe />, name: "Express.js"},
                  {icon: <Code />, name: "TypeScript"}
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg flex items-center space-x-3
                      border border-gray-100 dark:border-gray-700/50 hover:border-primary/50 
                      dark:hover:border-primary/50 transition-all duration-300 hover-float"
                    custom={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: i => ({ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          delay: 0.5 + i * 0.1,
                          duration: 0.4
                        }
                      })
                    }}
                  >
                    <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper components
const Server = (props: any) => (
  <svg 
    {...props}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
  >
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </svg>
);

const Globe = (props: any) => (
  <svg 
    {...props}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Database = (props: any) => (
  <svg 
    {...props}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export default About;
