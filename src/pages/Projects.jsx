// pages/Projects.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, X, Sparkles, Rocket, Eye } from 'lucide-react';
import { CTA } from '../components';
import { projects } from '../constants';
import projectsHero from '../assets/images/projectpagehero.jpg';

// Custom GitHub SVG icon
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const categories = ["All", "Web Development", "Mobile Development", "Cloud Solutions", "UI/UX Design"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[500px] sm:h-screen sm:min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={projectsHero} 
            alt="Our Projects"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/10 to-transparent transform -skew-x-12" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-blue-500/10 to-transparent transform skew-y-6" />
        </div>
        
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 sm:mb-6"
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 animate-pulse" />
                  <span className="text-xs sm:text-sm text-cyan-300 font-medium">Our Portfolio</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                >
                  Our
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Projects
                  </span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="max-w-2xl"
                >
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-6 sm:mb-8 backdrop-blur-sm bg-black/20 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 inline-block">
                    Explore our portfolio of successful digital solutions that have transformed businesses. 
                    From web applications to mobile apps, we deliver excellence.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 text-sm sm:text-base"
                  >
                    <span className="relative z-10">Start a Project</span>
                    <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link
                    to="#projects-grid"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 group text-sm sm:text-base"
                  >
                    View Projects
                    <Rocket size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Fixed position below content */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
        >
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <span className="text-xs sm:text-sm text-gray-300">View our work</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 sm:w-1.5 sm:h-3 bg-cyan-400 rounded-full mt-1.5 sm:mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-x-auto pb-4 mb-8 sm:mb-12"
          >
            <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 min-w-max sm:min-w-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div id="projects-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-transparent transition-all">
                  <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {project.featured && (
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-[10px] sm:text-xs font-medium text-white">
                        Featured
                      </div>
                    )}
                    
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-2 py-0.5 sm:px-3 sm:py-1 bg-white/20 backdrop-blur-sm rounded-full text-[10px] sm:text-xs text-white">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-1">{project.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-cyan-500/10 rounded-full text-cyan-400 text-[10px] sm:text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/10 rounded-full text-gray-400 text-[10px] sm:text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-xs sm:text-sm">
                        View Details <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Modal - Fixed position with proper z-index */}
          {selectedProject && (
            <div 
              className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md" 
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-[95%] sm:max-w-3xl w-full bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-white/20 overflow-hidden max-h-[85vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="sticky top-2 right-2 sm:top-4 sm:right-4 z-20 ml-auto flex w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X size={16} className="sm:w-5 sm:h-5 text-white" />
                </button>
                
                <div className="relative h-48 sm:h-64 overflow-hidden -mt-8 sm:-mt-10">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                
                <div className="p-4 sm:p-8 pt-2 sm:pt-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{selectedProject.name}</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4">{selectedProject.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {selectedProject.technologies?.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white/10 rounded-full text-cyan-400 text-xs sm:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <GithubIcon size={16} className="sm:w-5 sm:h-5" />
                      View Code
                    </a>
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 px-4 py-2.5 sm:px-6 sm:py-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        <Eye size={16} className="sm:w-5 sm:h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          <hr className="border-white/10" />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Projects;