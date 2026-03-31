// pages/Privacy.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from 'lucide-react';
import privacyHero from '../assets/policypagehero/privacyhero.jpg';

const Privacy = () => {
  const lastUpdated = "January 1, 2024";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={privacyHero} 
            alt="Privacy Policy"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/10 to-transparent transform -skew-x-12" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-blue-500/10 to-transparent transform skew-y-6" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
                >
                  <Shield className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-cyan-300 text-sm font-medium">Privacy & Security</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                >
                  Privacy
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Policy
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-300 max-w-2xl"
                >
                  Last updated: {lastUpdated}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At Izipo Consulting, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
            </p>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Personal Data</h3>
                <p className="text-gray-400 text-sm">Personally identifiable information, such as your name, email address, phone number, and project details that you voluntarily give to us when you contact us through our contact form or when you choose to participate in various activities related to the Site.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Derivative Data</h3>
                <p className="text-gray-400 text-sm">Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.</p>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you emails regarding your project or services</li>
              <li>Improve our website and services based on your feedback</li>
              <li>Protect against unauthorized transactions and fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Data Security</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to correct inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:admin@izipoconsulting.com" className="text-cyan-400 hover:underline">admin@izipoconsulting.com</a>.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>admin@izipoconsulting.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+264 85 809 9470</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Alpha Street, Khomasdal, Windhoek, Namibia</span>
              </div>
            </div>
          </motion.div>

          <hr className="border-white/10 my-12" />
          
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-lg transition-all"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;