import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Code, Database, Server, Terminal } from 'lucide-react';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
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

  // Tech icons animation for background
  const floatingIcons = [
    { icon: <Code size={24} />, top: '15%', left: '10%', delay: 0 },
    { icon: <Database size={24} />, top: '25%', right: '15%', delay: 1.5 },
    { icon: <Server size={24} />, bottom: '20%', left: '20%', delay: 1 },
    { icon: <Terminal size={24} />, bottom: '30%', right: '10%', delay: 0.5 },
  ];

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-32 md:pb-24 px-6 overflow-hidden">
      {/* Animated background gradient */}
      <div className="animated-bg"></div>
      
      {/* Floating tech icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary-400/30 dark:text-primary-400/20 z-0"
          style={{ 
            top: item.top || 'auto', 
            left: item.left || 'auto',
            right: item.right || 'auto',
            bottom: item.bottom || 'auto',
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 5,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {item.icon}
        </motion.div>
      ))}
      
      <div className="container relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div 
          className="order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h4 
            variants={itemVariants}
            className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-mono mb-3"
          >
            Hello, I'm
          </motion.h4>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text"
          >
            Daniyal Imran
          </motion.h1>
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
          >
            Web & Software Developer
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
          >
            Computer Science graduate from FAST NUCES with experience in full-stack development, 
            blockchain technologies, and AI. Passionate about creating innovative solutions 
            that solve real-world problems.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Button 
              asChild
              size="lg"
              className="relative overflow-hidden group bg-primary-600 hover:bg-primary-700 text-white"
            >
              <a href="#contact">
                {/* Button hover effect */}
                <span className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100 group-hover:bg-white/10 rounded-lg">
                </span>
                Contact Me
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-primary-600 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-gray-800/50 hover-float"
            >
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="flex mt-8 space-x-5"
          >
            <a href="https://github.com" 
              className="hover-float p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" 
              aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" 
              className="hover-float p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" 
              aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" 
              className="hover-float p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" 
              aria-label="Resume">
              <FileText className="h-5 w-5" />
            </a>
            <a href="mailto:daniyalimran602@gmail.com" 
              className="hover-float p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" 
              aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="relative group">
            {/* Background glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-lg blur opacity-30 dark:opacity-40 group-hover:opacity-60 dark:group-hover:opacity-70 transition duration-500"></div>
            
            {/* Main SVG profile illustration with hover effects */}
            <div className="w-full max-w-md relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 transition-transform duration-500 group-hover:scale-[1.02]">
              <svg
                className="w-full h-auto"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <rect width="600" height="600" fill="#f8fafc" className="dark:fill-gray-800 transition-colors duration-300" />
                
                {/* Code blocks background */}
                <g opacity="0.1">
                  <rect x="40" y="40" width="200" height="20" rx="2" fill="#3B82F6" />
                  <rect x="40" y="70" width="250" height="20" rx="2" fill="#3B82F6" />
                  <rect x="40" y="100" width="180" height="20" rx="2" fill="#3B82F6" />
                  <rect x="40" y="130" width="220" height="20" rx="2" fill="#3B82F6" />
                  
                  <rect x="360" y="450" width="200" height="20" rx="2" fill="#3B82F6" />
                  <rect x="360" y="480" width="150" height="20" rx="2" fill="#3B82F6" />
                  <rect x="360" y="510" width="180" height="20" rx="2" fill="#3B82F6" />
                  <rect x="360" y="540" width="120" height="20" rx="2" fill="#3B82F6" />
                </g>
                
                {/* Developer illustration */}
                <g>
                  {/* Profile shape */}
                  <motion.path 
                    d="M300 90C192.29 90 105 177.29 105 285C105 392.71 192.29 480 300 480C407.71 480 495 392.71 495 285C495 177.29 407.71 90 300 90Z" 
                    fill="#3B82F6" 
                    className="dark:fill-blue-500 transition-colors duration-300"
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  />
                  
                  {/* Screen/Monitor */}
                  <rect x="215" y="240" width="170" height="120" rx="5" fill="#f1f5f9" className="dark:fill-gray-700" />
                  <rect x="225" y="250" width="150" height="90" rx="2" fill="#0f172a" className="dark:fill-gray-900" />
                  
                  {/* Code on screen */}
                  <rect x="235" y="260" width="90" height="5" rx="1" fill="#3B82F6" />
                  <rect x="235" y="275" width="70" height="5" rx="1" fill="#10b981" />
                  <rect x="245" y="290" width="100" height="5" rx="1" fill="#f8fafc" />
                  <rect x="245" y="305" width="80" height="5" rx="1" fill="#f8fafc" />
                  <rect x="235" y="320" width="65" height="5" rx="1" fill="#3B82F6" />
                  
                  {/* Person */}
                  <circle cx="300" cy="170" r="35" fill="#f8fafc" className="dark:fill-gray-200" />
                  <path d="M255 365C255 331.41 282.41 304 316 304H284C317.59 304 345 331.41 345 365V400H255V365Z" fill="#f8fafc" className="dark:fill-gray-200" />
                </g>
                
                {/* Animated circles */}
                <motion.circle 
                  cx="150" 
                  cy="450" 
                  r="15" 
                  fill="#3B82F6"
                  className="dark:fill-blue-500"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.circle 
                  cx="450" 
                  cy="150" 
                  r="20" 
                  fill="#10b981"
                  className="dark:fill-emerald-500"
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
