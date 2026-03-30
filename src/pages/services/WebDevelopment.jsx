// pages/services/WebDevelopment.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Zap, Shield, Rocket, Users, Clock,
  Star, TrendingUp, Heart, ShoppingBag,
  Database, Cloud, Layout, Code, Server, Globe, Palette,
  GraduationCap, Briefcase, HeartPulse, MessageSquare, 
  BarChart, Settings, ShoppingCart, BookOpen, FileText,
  Building2, PieChart, Activity, Layers, Cpu, HardDrive,
  GitBranch, Box, Lock, Eye, Sparkles
} from 'lucide-react';
import { CTA } from '../../components';
import Webdevhero from '../../assets/serviceshero/webdevhero.jpg';

// Import your icons from assets/icons
import reactIcon from '../../assets/icons/react.svg';
import nextjsIcon from '../../assets/icons/nextjs.svg';
import vueIcon from '../../assets/icons/vue.svg';
import nodejsIcon from '../../assets/icons/nodejs.svg';
import tailwindIcon from '../../assets/icons/tailwindcss.svg';
import phpIcon from '../../assets/icons/php.svg';
import laravelIcon from '../../assets/icons/laravel.svg';
import pythonIcon from '../../assets/icons/python.svg';
import djangoIcon from '../../assets/icons/django.svg';
import apiIcon from '../../assets/icons/api.svg';

const WebDevelopment = () => {
  const technologies = [
    { 
      name: "React/Next.js", 
      icon: reactIcon || nextjsIcon, 
      isImage: true,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-transparent"
    },
    { 
      name: "Vue.js/Nuxt", 
      icon: vueIcon, 
      isImage: true,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-transparent"
    },
    { 
      name: "Node.js", 
      icon: nodejsIcon, 
      isImage: true,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-transparent"
    },
    { 
      name: "Python/Django", 
      icon: pythonIcon || djangoIcon, 
      isImage: true,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-transparent"
    },
    { 
      name: "PHP/Laravel", 
      icon: phpIcon || laravelIcon, 
      isImage: true,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-transparent"
    },
    { 
      name: "REST/GraphQL", 
      icon: apiIcon, 
      isImage: true,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-transparent"
    },
    { 
      name: "Tailwind CSS", 
      icon: tailwindIcon, 
      isImage: true,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-transparent"
    }
  ];

  const benefits = [
    { icon: Zap, title: "Lightning Fast Performance", description: "Optimized code and modern architecture for blazing fast load times" },
    { icon: Shield, title: "Enterprise Security", description: "Bank-grade security protocols to protect your data" },
    { icon: TrendingUp, title: "SEO Optimized", description: "Built to rank higher and drive organic traffic" },
    { icon: Users, title: "Scalable Architecture", description: "Grows seamlessly with your business needs" },
    { icon: Clock, title: "24/7 Expert Support", description: "Always here when you need assistance" },
    { icon: Heart, title: "User-First Design", description: "Experiences that users actually love to use" }
  ];

  const process = [
    { step: "01", title: "Discovery & Research", description: "Understanding your goals, audience, and requirements" },
    { step: "02", title: "Architecture Planning", description: "Strategic roadmap and technology selection" },
    { step: "03", title: "UI/UX Design", description: "Creating intuitive, beautiful interfaces" },
    { step: "04", title: "Agile Development", description: "Iterative development with regular updates" },
    { step: "05", title: "Quality Assurance", description: "Comprehensive testing across all devices" },
    { step: "06", title: "Launch & Support", description: "Seamless deployment and ongoing maintenance" }
  ];

  const features = [
    {
      title: "Custom Web Applications",
      description: "Tailored solutions built specifically for your unique business needs and workflows",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-commerce & Marketplaces",
      description: "Powerful online stores with seamless payment integration and inventory management",
      icon: ShoppingBag,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Learning Management Systems (LMS)",
      description: "Comprehensive e-learning platforms with course management, student tracking, and certification",
      icon: GraduationCap,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Content Management Systems (CMS)",
      description: "User-friendly systems that empower your team to manage content effortlessly",
      icon: Layout,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "Integrated management of core business processes including finance, HR, and operations",
      icon: Briefcase,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Electronic Medical Records (EMR)",
      description: "Secure, compliant healthcare management systems for patient records and clinical workflows",
      icon: HeartPulse,
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "App-like experiences that work offline, load instantly, and deliver native-like performance",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "REST & GraphQL APIs",
      description: "Robust, scalable APIs for seamless integration with third-party services and mobile apps",
      icon: Database,
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      title: "Cloud Integration",
      description: "Scalable cloud infrastructure for maximum reliability, auto-scaling, and global reach",
      icon: Cloud,
      gradient: "from-sky-500 to-blue-500"
    },
    {
      title: "Real-time Applications",
      description: "Live chat, notifications, and collaborative tools with WebSocket technology",
      icon: MessageSquare,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Analytics Dashboards",
      description: "Data visualization and business intelligence dashboards for informed decision-making",
      icon: BarChart,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Automation Workflows",
      description: "Streamline repetitive tasks with intelligent workflow automation and business process management",
      icon: Settings,
      gradient: "from-gray-500 to-gray-700"
    }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Scalable online store with real-time inventory and payment integration",
      result: "300% increase in sales",
      tags: ["React", "Node.js", "Stripe", "REST API"]
    },
    {
      title: "Enterprise Dashboard",
      description: "Complex data visualization and analytics platform",
      result: "50% faster decision making",
      tags: ["Vue.js", "Django", "Python", "PostgreSQL"]
    },
    {
      title: "Content Management System",
      description: "Custom CMS with intuitive content management",
      result: "75% reduction in publishing time",
      tags: ["Laravel", "PHP", "MySQL", "REST API"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[700px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={Webdevhero} 
            alt="Web Development Hero"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Unique Overlay Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        {/* Diagonal Accent Overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/10 to-transparent transform -skew-x-12" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-blue-500/10 to-transparent transform skew-y-6" />
        </div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
                >
                  <div className="relative">
                    <Code className="w-4 h-4 text-cyan-400 animate-pulse" />
                  </div>
                  <span className="text-cyan-300 text-sm font-medium">Web Development</span>
                </motion.div>
                
                {/* Title */}
                <motion.h1 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
                >
                  Modern Web
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Development
                  </span>
                </motion.h1>
                
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="max-w-2xl"
                >
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/10 inline-block">
                    We build fast, scalable, and beautiful web applications using the latest technologies. 
                    From startups to established businesses, we deliver solutions that drive real results.
                  </p>
                </motion.div>
                
                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link
                    to="#process"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
                  >
                    How It Works
                    <Rocket size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* What We Build Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Build</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                Comprehensive web solutions tailored to your specific needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group hover:transform hover:-translate-y-1 duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies We Use</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                Leveraging the most powerful and modern tech stack
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur"
                    style={{ background: `linear-gradient(135deg, ${tech.color})` }} />
                  
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center group-hover:border-transparent transition-all">
                    <div className={`w-12 h-12 mx-auto rounded-lg ${tech.bgColor} p-2 mb-3 group-hover:scale-110 transition-transform flex items-center justify-center`}>
                      {tech.isImage ? (
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                      ) : (
                        <tech.icon className="w-8 h-8 text-cyan-400" />
                      )}
                    </div>
                    <p className="text-white text-sm font-medium">{tech.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                What sets our web development services apart
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group hover:transform hover:-translate-y-1 duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Success Stories Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                Real results from real clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all hover:transform hover:-translate-y-1 duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-cyan-500/10 rounded-full text-cyan-400 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 pt-2 border-t border-white/10">
                    <TrendingUp size={16} />
                    <span className="text-sm font-medium">{project.result}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            id="process"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Development Process</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group hover:transform hover:-translate-y-1 duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-cyan-400">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your web development project and turn your vision into reality
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <hr className="border-white/10 mt-20" />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;