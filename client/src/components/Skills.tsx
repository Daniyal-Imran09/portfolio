import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Award, Github, Database, Server, Terminal, Flame } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

interface SkillsProps {
  skillCategories: SkillCategory[];
  tools: string[];
  achievements: Achievement[];
}

const Skills = ({ skillCategories, tools, achievements }: SkillsProps) => {
  const { targetRef, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  // Function to get icon component based on string name
  const getToolIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
      case 'git':
        return <Github className="h-6 w-6" />;
      case 'mongodb':
      case 'mysql':
      case 'database':
        return <Database className="h-6 w-6" />;
      case 'aws':
      case 'server':
        return <Server className="h-6 w-6" />;
      case 'linux':
      case 'terminal':
        return <Terminal className="h-6 w-6" />;
      case 'firebase':
        return <Flame className="h-6 w-6" />;
      default:
        return <Server className="h-6 w-6" />;
    }
  };

  // Function to get achievement icon
  const getAchievementIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'trophy':
      case 'award':
        return <Award className="text-3xl text-primary-500 mb-3" />;
      case 'cloud':
        return <Server className="text-3xl text-primary-500 mb-3" />;
      case 'code':
        return <Terminal className="text-3xl text-primary-500 mb-3" />;
      default:
        return <Award className="text-3xl text-primary-500 mb-3" />;
    }
  };

  return (
    <section 
      id="skills" 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg
              className="rounded-lg shadow-lg mb-8 w-full"
              viewBox="0 0 600 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="600" height="400" rx="8" fill="#f8fafc" className="dark:fill-gray-800" />
              
              {/* Code editor elements */}
              <rect x="40" y="40" width="520" height="320" rx="6" fill="#1e293b" className="dark:fill-gray-900" />
              <rect x="40" y="40" width="520" height="30" rx="6 6 0 0" fill="#0f172a" className="dark:fill-gray-950" />
              
              {/* Browser tabs */}
              <rect x="50" y="45" width="100" height="20" rx="4" fill="#3B82F6" />
              <rect x="160" y="45" width="100" height="20" rx="4" fill="#1e293b" className="dark:fill-gray-900" />
              
              {/* Code lines */}
              <rect x="60" y="90" width="240" height="12" rx="2" fill="#ec4899" />
              <rect x="60" y="110" width="280" height="12" rx="2" fill="#3B82F6" />
              <rect x="100" y="130" width="200" height="12" rx="2" fill="#10B981" />
              <rect x="100" y="150" width="250" height="12" rx="2" fill="#f8fafc" />
              <rect x="100" y="170" width="180" height="12" rx="2" fill="#f8fafc" />
              <rect x="60" y="190" width="200" height="12" rx="2" fill="#3B82F6" />
              <rect x="100" y="210" width="220" height="12" rx="2" fill="#f8fafc" />
              <rect x="100" y="230" width="190" height="12" rx="2" fill="#f8fafc" />
              <rect x="60" y="250" width="240" height="12" rx="2" fill="#ec4899" />
              <rect x="100" y="270" width="160" height="12" rx="2" fill="#10B981" />
              <rect x="100" y="290" width="280" height="12" rx="2" fill="#f8fafc" />
              <rect x="60" y="310" width="200" height="12" rx="2" fill="#3B82F6" />
              <rect x="100" y="330" width="220" height="12" rx="2" fill="#f8fafc" />
            </svg>
            
            {skillCategories.slice(0, 1).map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      animate={hasIntersected ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div 
                          className={`${category.color} h-2.5 rounded-full`}
                          initial={{ width: 0 }}
                          animate={hasIntersected ? { width: `${skill.percentage}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {skillCategories.slice(1, 2).map((category, catIndex) => (
              <div key={catIndex} className="mb-10">
                <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      animate={hasIntersected ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div 
                          className={`${category.color} h-2.5 rounded-full`}
                          initial={{ width: 0 }}
                          animate={hasIntersected ? { width: `${skill.percentage}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
            
            <h3 className="text-2xl font-semibold mb-6">Tools & Platforms</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {getToolIcon(tool)}
                  <p className="mt-2">{tool}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Achievements & Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-primary-500"
                initial={{ opacity: 0, y: 20 }}
                animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                {getAchievementIcon(achievement.icon)}
                <h4 className="text-lg font-medium mb-2">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
