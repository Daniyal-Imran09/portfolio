import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { portfolioData } from '@/data/portfolioData';

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <About 
        education={portfolioData.education}
        interests={portfolioData.interests}
      />
      <Experience 
        experiences={portfolioData.experiences}
      />
      <Projects 
        projects={portfolioData.projects}
        categories={portfolioData.projectCategories}
      />
      <Skills 
        skillCategories={portfolioData.skillCategories}
        tools={portfolioData.tools}
        achievements={portfolioData.achievements}
      />
      <Contact 
        contactInfo={portfolioData.contactInfo}
      />
      <Footer />
    </div>
  );
};

export default Home;
