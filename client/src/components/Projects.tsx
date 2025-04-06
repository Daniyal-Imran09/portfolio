import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectTech {
  name: string;
}

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: ProjectTech[];
  github?: string;
  liveDemo?: string;
}

interface ProjectsProps {
  projects: Project[];
  categories: string[];
}

const Projects = ({ projects, categories }: ProjectsProps) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { targetRef, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="projects" 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => handleFilterClick('all')}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === category 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full border border-gray-200 dark:border-gray-700">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <ProjectIllustration index={index} title={project.title} />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a 
                          href={project.github} 
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo} 
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// SVG illustrations for project cards
const ProjectIllustration = ({ index, title }: { index: number, title: string }) => {
  // Different SVG patterns based on the index
  const colors = [
    ['#3B82F6', '#10B981'], // blue & green
    ['#6366F1', '#EC4899'], // indigo & pink
    ['#8B5CF6', '#EC4899'], // purple & pink
    ['#EC4899', '#F59E0B'], // pink & amber
    ['#10B981', '#3B82F6'], // green & blue
    ['#F59E0B', '#EF4444'], // amber & red
  ];
  
  const colorIndex = index % colors.length;
  const [primary, secondary] = colors[colorIndex];

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="250" fill="#f3f4f6" className="dark:fill-gray-700" />
      
      {/* Background pattern based on index */}
      {index % 3 === 0 && (
        <>
          <circle cx="100" cy="50" r="80" fill={primary} opacity="0.2" />
          <circle cx="320" cy="200" r="100" fill={secondary} opacity="0.2" />
        </>
      )}
      
      {index % 3 === 1 && (
        <>
          <path d="M0 0L400 250H0V0Z" fill={primary} opacity="0.2" />
          <path d="M400 0L0 250H400V0Z" fill={secondary} opacity="0.1" />
        </>
      )}
      
      {index % 3 === 2 && (
        <>
          <rect x="50" y="30" width="300" height="190" rx="20" fill={primary} opacity="0.1" />
          <circle cx="200" cy="125" r="60" fill={secondary} opacity="0.2" />
        </>
      )}
      
      {/* Project icon or text */}
      <g transform="translate(200, 125) scale(0.8)">
        {index % 4 === 0 && (
          // Code/App icon
          <g>
            <rect x="-40" y="-30" width="80" height="60" rx="8" stroke={primary} strokeWidth="4" fill="none" />
            <line x1="-20" y1="-10" x2="20" y2="-10" stroke={primary} strokeWidth="4" />
            <line x1="-20" y1="0" x2="10" y2="0" stroke={primary} strokeWidth="4" />
            <line x1="-20" y1="10" x2="15" y2="10" stroke={primary} strokeWidth="4" />
          </g>
        )}
        
        {index % 4 === 1 && (
          // Data/Analytics icon
          <g>
            <path d="M-35 30L-15 10L5 20L25 -10L45 -30" stroke={primary} strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="-35" cy="30" r="5" fill={primary} />
            <circle cx="-15" cy="10" r="5" fill={primary} />
            <circle cx="5" cy="20" r="5" fill={primary} />
            <circle cx="25" cy="-10" r="5" fill={primary} />
            <circle cx="45" cy="-30" r="5" fill={primary} />
          </g>
        )}
        
        {index % 4 === 2 && (
          // Cloud/Network icon
          <g>
            <circle cx="0" cy="0" r="25" fill={primary} opacity="0.5" />
            <circle cx="-40" cy="10" r="15" fill={primary} opacity="0.5" />
            <circle cx="40" cy="10" r="15" fill={primary} opacity="0.5" />
            <circle cx="-25" cy="-25" r="15" fill={primary} opacity="0.5" />
            <circle cx="25" cy="-25" r="15" fill={primary} opacity="0.5" />
          </g>
        )}
        
        {index % 4 === 3 && (
          // UI/Design icon
          <g>
            <rect x="-35" y="-25" width="30" height="50" rx="4" stroke={primary} strokeWidth="3" fill="none" />
            <rect x="5" y="-25" width="30" height="30" rx="4" stroke={primary} strokeWidth="3" fill="none" />
            <rect x="5" y="15" width="30" height="10" rx="4" stroke={primary} strokeWidth="3" fill="none" />
            <line x1="-25" y1="-15" x2="-15" y2="-15" stroke={primary} strokeWidth="3" strokeLinecap="round" />
            <line x1="-25" y1="-5" x2="-15" y2="-5" stroke={primary} strokeWidth="3" strokeLinecap="round" />
          </g>
        )}
      </g>
      
      {/* Project title text */}
      <text 
        x="200" 
        y="230" 
        fontSize="12" 
        fontWeight="bold" 
        textAnchor="middle" 
        fill="#1f2937"
        className="dark:fill-gray-200"
      >
        {title}
      </text>
    </svg>
  );
};

export default Projects;
