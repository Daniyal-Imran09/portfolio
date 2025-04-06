import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { 
  Briefcase, Building, Calendar, CheckCircle2
} from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  const { targetRef, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
    <section 
      id="experience" 
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-500/5 rounded-full -ml-12 -mb-12 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-1 rounded-full bg-primary/10 dark:bg-primary-900/30 text-primary font-medium text-sm inline-block mb-4">
            <Briefcase className="w-4 h-4 inline mr-2" />
            Professional Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work History</h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and roles I've taken on throughout my career
          </p>
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
        >
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`relative mb-12 md:mb-24 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 w-5 h-5 rounded-full bg-white dark:bg-gray-800 border-4 border-primary z-10
                  ${index % 2 === 0 ? 'right-[-10px]' : 'left-[-10px]'}"
                  style={{ 
                    [index % 2 === 0 ? 'right' : 'left']: '-10px',
                    top: '24px'
                  }}
              ></div>
              
              {/* Card */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover-float"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                {/* Card header with gradient */}
                <div className="bg-gradient-to-r from-primary/90 to-indigo-600/90 p-6 text-white">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                  </div>
                  <div className="flex items-center mt-3 opacity-90 text-sm">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                {/* Card body */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
