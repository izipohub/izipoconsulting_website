// pages/About.jsx
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CTA } from '../components';
import { skills } from '../constants';
import { 
  Users, Target, Heart, Award, MapPin, TrendingUp, Code, Coffee, 
  ArrowRight, Rocket, Sparkles, Building2, Globe 
} from 'lucide-react';
import aboutHero from '../assets/images/abouthero.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animated Counter Component
  const AnimatedCounter = ({ value, label, icon: Icon, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const isCounterInView = useInView(counterRef, { once: true });

    useEffect(() => {
      if (isCounterInView) {
        let start = 0;
        const end = parseInt(value);
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        
        return () => clearInterval(timer);
      }
    }, [isCounterInView, value]);

    return (
      <div ref={counterRef} className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5 text-cyan-400" />
        </div>
        <div className="text-2xl md:text-3xl font-bold text-white mb-1">
          {count}{suffix}
        </div>
        <div className="text-gray-400 text-sm">{label}</div>
      </div>
    );
  };

  const companyValues = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver innovative technology solutions that help businesses solve real problems, grow sustainably, and make a meaningful impact.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Innovation, integrity, client success, and community. We believe in building lasting partnerships and creating technology that matters.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "Delivering quality solutions with reliable support. Your success is our success, and we're dedicated to helping you achieve your goals.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { value: "20", label: "Projects Delivered", icon: Code, suffix: "+" },
    { value: "15", label: "Happy Clients", icon: Users, suffix: "+" },
    { value: "100", label: "Client Satisfaction", icon: Heart, suffix: "%" },
    { value: "10", label: "Years of Excellence", icon: Award, suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={aboutHero} 
            alt="About Izipo"
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
                    <Building2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                  </div>
                  <span className="text-cyan-300 text-sm font-medium">Who We Are</span>
                </motion.div>
                
                {/* Title */}
                <motion.h1 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
                >
                  About
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Izipo
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
                    We're a technology partner dedicated to helping businesses thrive through practical, 
                    innovative digital solutions. Building the future, one project at a time.
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
                    <span className="relative z-10">Work With Us</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link
                    to="#story"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
                  >
                    Our Story
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
            <span className="text-gray-400 text-sm">Discover our story</span>
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
          
          {/* Company Story Section */}
          <div id="story" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
              <p className="text-gray-300 leading-relaxed">
                Izipo was founded with a simple belief: technology should work for people, not the other way around. We started as a small team of passionate developers who wanted to build solutions that actually solve problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we've grown into a trusted partner for businesses of all sizes. Our team combines technical expertise with a deep understanding of what makes businesses tick, ensuring every solution we deliver is practical, effective, and built to last.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We've helped over 15 businesses transform their digital presence, streamline operations, and reach new customers. And we're just getting started.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <AnimatedCounter key={stat.label} {...stat} />
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Based in Windhoek, Namibia</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Values */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">What Drives Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companyValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"
                      style={{ background: `linear-gradient(135deg, ${value.gradient})` }} />
                    
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-transparent transition-all h-full">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} p-3 mb-5 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Expertise</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="group relative">
                  <div className="block-container w-20 h-20">
                    <div className="btn-back rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
                    <div className="btn-front rounded-xl flex justify-center items-center bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform">
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-center text-gray-400 text-sm mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <hr className="border-white/10" />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default About;