// pages/Terms.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, FileText, Scale, Clock, Shield, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import termsHero from '../assets/policypagehero/termshero.jpg';

const Terms = () => {
  const lastUpdated = "January 1, 2024";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={termsHero} 
            alt="Terms of Service"
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
                  <Scale className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-cyan-300 text-sm font-medium">Legal Agreement</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                >
                  Terms of
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Service
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
              Welcome to Izipo Consulting ("Company", "we", "our", "us"). These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our website or use our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              These Terms apply to all visitors, users, and others who access or use our website and services.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Our Services</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Izipo Consulting provides technology consulting services including web development, mobile development, desktop applications, UX/UI design, cloud solutions, and graphics design. We reserve the right to modify, suspend, or discontinue any service at any time without notice.
            </p>
          </motion.div>

          {/* Client Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When engaging our services, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Provide accurate and complete information about your project requirements</li>
              <li>Cooperate with our team and provide timely feedback during the development process</li>
              <li>Ensure you have the necessary rights to any content or materials you provide</li>
              <li>Pay all fees and charges associated with our services in a timely manner</li>
            </ul>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All content, features, and functionality on our website, including but not limited to text, graphics, logos, and software, are the exclusive property of Izipo Consulting and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Upon full payment, the client receives ownership of the final deliverables as specified in the project agreement. Our source code, templates, and proprietary tools remain our intellectual property.
            </p>
          </motion.div>

          {/* Payment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Payment Terms</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Payment terms are specified in individual project agreements. Typically, we require a deposit before commencing work, with the balance due upon project completion. All fees are non-refundable except as expressly provided in the agreement.
            </p>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To the fullest extent permitted by law, Izipo Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of our services.
            </p>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use our services will immediately cease.
            </p>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Governing Law</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of Namibia, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Windhoek, Namibia.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              If you have any questions about these Terms, please contact us at:
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

export default Terms;