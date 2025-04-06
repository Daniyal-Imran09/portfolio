import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div 
          className="order-2 lg:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-mono mb-3">
            Hello, I'm
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Daniyal Imran
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Web & Software Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
            Computer Science graduate from FAST NUCES with experience in full-stack development, 
            blockchain technologies, and AI. Passionate about creating innovative solutions 
            that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              <a href="#contact">Contact Me</a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-primary-600 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-gray-800"
            >
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          <div className="flex mt-8 space-x-5">
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="Resume">
              <FileText className="h-6 w-6" />
            </a>
            <a href="mailto:daniyalimran602@gmail.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-lg blur opacity-30 dark:opacity-50"></div>
            <svg
              className="w-full max-w-md relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="600" height="600" fill="#f8fafc" className="dark:fill-gray-800" />
              <path d="M300 50C167.29 50 60 157.29 60 290C60 394.71 132.09 483.17 230 513.69V410C230 396.19 241.19 385 255 385H345C358.81 385 370 396.19 370 410V513.69C467.91 483.17 540 394.71 540 290C540 157.29 432.71 50 300 50Z" fill="#3B82F6" className="dark:fill-blue-500" />
              <circle cx="300" cy="230" r="80" fill="#f8fafc" className="dark:fill-gray-800" />
              <path d="M159 290C159 218.68 216.68 161 288 161H312C383.32 161 441 218.68 441 290V513.34C441 523.94 432.6 532.34 422 532.34H178C167.4 532.34 159 523.94 159 513.34V290Z" fill="#3B82F6" className="dark:fill-blue-500" />
              <path d="M300 310C355.228 310 400 265.228 400 210C400 154.772 355.228 110 300 110C244.772 110 200 154.772 200 210C200 265.228 244.772 310 300 310Z" fill="#f8fafc" className="dark:fill-gray-800" />
              <path d="M290 360H310V500H290V360Z" fill="#f8fafc" className="dark:fill-gray-800" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
