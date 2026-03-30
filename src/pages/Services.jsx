// pages/Services.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, Smartphone, Monitor, Palette, Cloud, 
  Rocket, ArrowRight, CheckCircle, Code, 
  Zap, Users, BarChart, Building2, GraduationCap,
  HeartPulse, ShoppingBag, TrendingUp, Cpu, Plane,
  Brush, PenTool, Image, Layers, Sparkles
} from 'lucide-react';
import { CTA } from '../components';
import servicesHero from '../assets/images/serviceshero.jpg';

const services = [
  {
    title: "Web Development",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    description: "Modern, scalable web applications built with cutting-edge frameworks and best practices.",
    features: ["React/Next.js", "Vue.js/Nuxt", "Node.js/Python", "GraphQL APIs", "Serverless Architecture"],
    benefits: ["2x faster load times", "99.99% uptime", "SEO optimized"],
    link: "/services/web-development"
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    description: "Native and cross-platform mobile experiences that users love.",
    features: ["iOS/Swift", "Android/Kotlin", "React Native", "Flutter", "App Store Optimization"],
    benefits: ["60 FPS performance", "Offline support", "Push notifications"],
    link: "/services/mobile-development"
  },
  {
    title: "Desktop Development",
    icon: Monitor,
    gradient: "from-green-500 to-emerald-500",
    description: "Cross-platform desktop applications with native performance.",
    features: ["Electron", ".NET", "Java", "Python", "Cross-platform compatibility"],
    benefits: ["Native performance", "Offline capable", "System integration"],
    link: "/services/desktop-development"
  },
  {
    title: "UX/UI Design",
    icon: Palette,
    gradient: "from-orange-500 to-red-500",
    description: "Beautiful, intuitive interfaces that drive engagement and conversion.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"],
    benefits: ["40% higher engagement", "32% better conversion", "Accessibility first"],
    link: "/services/ux-ui-design"
  },
  {
    title: "Cloud Solutions",
    icon: Cloud,
    gradient: "from-teal-500 to-cyan-500",
    description: "Scalable infrastructure and DevOps automation for modern applications.",
    features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD", "Infrastructure as Code", "24/7 Monitoring"],
    benefits: ["40% cost reduction", "3x faster deployment", "Auto-scaling"],
    link: "/services/cloud-solutions"
  },
  {
    title: "Graphics Design",
    icon: Brush,
    gradient: "from-pink-500 to-rose-500",
    description: "Stunning visual identities and creative assets that make your brand stand out.",
    features: ["Logo Design", "Brand Identity", "Social Media Graphics", "Print Materials", "Illustrations"],
    benefits: ["Brand recognition", "Professional visual identity", "Consistent brand messaging"],
    link: "/services/graphics-design"
  }
];

const industries = [
  {
    name: "Education Technology",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-500",
    description: "Transforming learning experiences through innovative digital solutions",
    solutions: ["LMS Platforms", "Virtual Classrooms", "Student Analytics", "Parent Portals", "Assessment Tools"],
    results: "40% better student engagement",
    href: "/industries/education"
  },
  {
    name: "Financial Services",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
    description: "Secure, compliant financial solutions for modern banking",
    solutions: ["FinTech Apps", "Payment Gateways", "Banking Platforms", "Investment Tools", "Fraud Detection"],
    results: "$50M+ processed transactions",
    href: "/industries/finance"
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    gradient: "from-red-500 to-pink-500",
    description: "Innovative health tech solutions improving patient care",
    solutions: ["EMR Systems", "Telemedicine", "Patient Portals", "Health Monitoring", "Appointment Scheduling"],
    results: "1M+ patients served",
    href: "/industries/healthcare"
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    gradient: "from-purple-500 to-pink-500",
    description: "Next-generation commerce experiences driving sales",
    solutions: ["E-commerce Platforms", "POS Systems", "Inventory Management", "Customer Analytics", "Mobile Shopping"],
    results: "3x revenue growth",
    href: "/industries/retail"
  },
  {
    name: "Logistics & Supply Chain",
    icon: Plane,
    gradient: "from-cyan-500 to-blue-500",
    description: "Smart logistics solutions for efficient supply chain management",
    solutions: ["Fleet Management", "Route Optimization", "Warehouse Management", "Tracking Systems", "Analytics Dashboards"],
    results: "35% operational efficiency",
    href: "/industries/logistics"
  },
  {
    name: "Manufacturing",
    icon: Cpu,
    gradient: "from-orange-500 to-red-500",
    description: "Industry 4.0 solutions for smart manufacturing",
    solutions: ["IoT Integration", "Predictive Maintenance", "Quality Control", "Production Analytics", "Supply Chain Optimization"],
    results: "25% production increase",
    href: "/industries/manufacturing"
  }
];

const process = [
  { step: "01", title: "Discovery", description: "Understanding your goals and requirements", icon: Users },
  { step: "02", title: "Planning", description: "Strategic roadmap and architecture design", icon: BarChart },
  { step: "03", title: "Development", description: "Agile development with regular updates", icon: Code },
  { step: "04", title: "Design", description: "Creative design and visual identity", icon: Brush },
  { step: "05", title: "Deployment", description: "Seamless launch and migration", icon: Rocket },
  { step: "06", title: "Support", description: "Ongoing maintenance and optimization", icon: Zap }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={servicesHero} 
            alt="Our Services"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/85 to-transparent" />
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
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                  </div>
                  <span className="text-cyan-300 text-sm font-medium">What We Offer</span>
                </motion.div>
                
                {/* Title */}
                <motion.h1 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
                >
                  Our
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Services
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
                    Comprehensive technology and creative solutions tailored to your business needs. 
                    From concept to deployment, we've got you covered.
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
                    <span className="relative z-10">Start a Project</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link
                    to="#services-grid"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
                  >
                    Explore Services
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
            <span className="text-gray-400 text-sm">Discover our services</span>
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
          
          {/* Services Grid */}
          <div id="services-grid" className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredIndex === index;
                
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative cursor-pointer"
                    onClick={() => window.location.href = service.link}
                  >
                    <motion.div
                      className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${service.gradient.replace('from-', '').replace('to-', '')})`,
                      }}
                      animate={{ scale: isHovered ? [1, 1.02, 1] : 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-transparent transition-all duration-300 h-full">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-5 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-6">{service.description}</p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Benefits */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-2 py-1 bg-cyan-500/10 rounded-full text-cyan-400 text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                      
                      <div className="inline-flex items-center gap-2 text-cyan-400 hover:gap-3 transition-all group/link">
                        <span>Learn More</span>
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Industries Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-4">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm">Industries We Serve</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transforming Industries
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Specialized solutions tailored to meet the unique challenges of your industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                const isHovered = hoveredIndustry === index;
                
                return (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredIndustry(index)}
                    onMouseLeave={() => setHoveredIndustry(null)}
                    className="group relative cursor-pointer"
                    onClick={() => window.location.href = industry.href}
                  >
                    <motion.div
                      className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${industry.gradient.replace('from-', '').replace('to-', '')})`,
                      }}
                      animate={{
                        scale: isHovered ? [1, 1.02, 1] : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-transparent transition-all duration-300 h-full">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{industry.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {industry.solutions.slice(0, 3).map((solution, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/5 rounded-full text-cyan-300 text-xs">
                            {solution}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-cyan-400 font-medium">{industry.results}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Our Process</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="text-2xl font-bold text-cyan-400">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <hr className="border-white/10" />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Services;