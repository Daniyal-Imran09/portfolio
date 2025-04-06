import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { 
  Award, Github, Database, Server, Terminal, Flame, Code, Cpu, 
  BarChart3, Monitor, Cloud, Globe, Layers, TerminalSquare, Rocket 
} from 'lucide-react';

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

  // Function to get icon component based on string name
  const getToolIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
      case 'git':
      case 'git/github':
        return <Github className="h-6 w-6 text-primary" />;
      case 'mongodb':
      case 'mysql':
      case 'oracle':
        return <Database className="h-6 w-6 text-primary" />;
      case 'aws':
        return <Cloud className="h-6 w-6 text-primary" />;
      case 'linux':
        return <Terminal className="h-6 w-6 text-primary" />;
      case 'firebase':
        return <Flame className="h-6 w-6 text-primary" />;
      default:
        return <Server className="h-6 w-6 text-primary" />;
    }
  };

  // Function to get achievement icon
  const getAchievementIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'trophy':
      case 'award':
        return <Award className="h-10 w-10 text-primary mb-3" />;
      case 'cloud':
        return <Cloud className="h-10 w-10 text-primary mb-3" />;
      case 'code':
        return <Code className="h-10 w-10 text-primary mb-3" />;
      default:
        return <Award className="h-10 w-10 text-primary mb-3" />;
    }
  };

  // Skill category specific icon
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'languages':
        return <Code className="mr-2 text-primary" />;
      case 'frameworks & libraries':
        return <Layers className="mr-2 text-primary" />;
      default:
        return <Cpu className="mr-2 text-primary" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="py-20 px-6 relative overflow-hidden"
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      {/* Animated background gradient */}
      <div className="animated-bg opacity-5"></div>
      
      {/* Hexagon pattern background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
            <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66Z M28 100L0 84L0 50L28 34L56 50L56 84L28 100Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical toolkit includes a variety of programming languages, frameworks, and tools that I use to create robust and efficient software solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={hasIntersected ? "visible" : "hidden"}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-indigo-500/20 rounded-2xl blur-2xl opacity-30 dark:opacity-40"></div>
            
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
              {/* Code editor illustration */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-800 dark:bg-gray-900 flex items-center p-2">
                  <div className="flex space-x-1.5 ml-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-xs text-gray-400">skills.js</div>
                </div>
                <div className="bg-gray-900 dark:bg-black p-4 text-xs font-mono">
                  <div className="text-pink-400">const <span className="text-yellow-300">developer</span> = {'{'}</div>
                  <div className="pl-6 text-blue-400">name: <span className="text-green-300">"Daniyal Imran"</span>,</div>
                  <div className="pl-6 text-blue-400">skills: <span className="text-purple-400">[</span></div>
                  {skillCategories[0].skills.map((skill, i) => (
                    <motion.div 
                      key={i}
                      className="pl-10 text-green-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    >
                      "{skill.name}"{i < skillCategories[0].skills.length - 1 ? "," : ""}
                    </motion.div>
                  ))}
                  <div className="pl-6 text-purple-400">]</div>
                  <div className="text-pink-400">{'}'}</div>
                </div>
              </div>
              
              {/* Skills bars */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold mb-5 flex items-center">
                  {getCategoryIcon(skillCategories[0].title)}
                  <span>{skillCategories[0].title}</span>
                </h3>
                <div className="space-y-5">
                  {skillCategories[0].skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative"
                      initial={{ opacity: 0 }}
                      animate={hasIntersected ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="font-mono text-sm text-primary">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div 
                          className="h-2 rounded-full bg-primary"
                          initial={{ width: 0 }}
                          animate={hasIntersected ? { width: `${skill.percentage}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        ></motion.div>
                      </div>
                      
                      {/* Animated dot that travels along the progress bar */}
                      <motion.div 
                        className="absolute top-0 -mt-0.5 w-3 h-3 rounded-full bg-white border-2 border-primary shadow-md"
                        animate={{ 
                          left: [`0%`, `${skill.percentage}%`]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.5 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={hasIntersected ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-10 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-5 flex items-center">
                {getCategoryIcon(skillCategories[1].title)}
                <span>{skillCategories[1].title}</span>
              </h3>
              <div className="space-y-5">
                {skillCategories[1].skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    animate={hasIntersected ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-mono text-sm text-primary">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className="h-2 rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #10b981 0%, #3b82f6 100%)'
                        }}
                        initial={{ width: 0 }}
                        animate={hasIntersected ? { width: `${skill.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                    
                    {/* Pulsing effect for high skill levels */}
                    {skill.percentage > 90 && (
                      <motion.div 
                        className="absolute right-0 top-0 -mt-0.5 -mr-1 w-4 h-4 rounded-full bg-primary/20"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 0.3, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-5 flex items-center">
                <TerminalSquare className="mr-2 text-primary" />
                <span>Tools & Platforms</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.div 
                    key={index}
                    className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center
                     border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary
                     transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                  >
                    <div className="transform transition-transform duration-300 group-hover:scale-110">
                      {getToolIcon(tool)}
                    </div>
                    <p className="mt-3 font-medium group-hover:text-primary transition-colors duration-300">{tool}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center">
            <Rocket className="mr-2 text-primary" />
            <span>Achievements & Certifications</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-t-4 border-primary
                hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  {getAchievementIcon(achievement.icon)}
                </div>
                <h4 className="text-lg font-medium mb-3 text-center">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-center">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
