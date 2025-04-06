import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

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

  return (
    <section 
      id="experience" 
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-primary-500"
              initial={{ opacity: 0, y: 20 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-sm bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">{exp.company}</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
