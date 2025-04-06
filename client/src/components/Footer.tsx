import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4 inline-block">
            <span className="font-mono">&lt;</span>Daniyal Imran<span className="font-mono">/&gt;</span>
          </a>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Web & Software Developer</p>
          
          <div className="flex justify-center space-x-5 mb-6">
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
          
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {currentYear} Daniyal Imran. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
