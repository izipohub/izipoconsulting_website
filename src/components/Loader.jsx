// components/Loader.jsx
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

// Full page loader for route changes
export const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Animated Rings */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-cyan-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-blue-500/20 rounded-full"></div>
          <div className="absolute inset-2 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
        </div>
        
        {/* Loading Text */}
        <div className="flex gap-1">
          {["L", "o", "a", "d", "i", "n", "g"].map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
              className="text-white font-medium text-sm"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        {/* Pulsing Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0.4 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
              className="w-2 h-2 bg-cyan-400 rounded-full"
            />
          ))}
        </div>
        
        {/* Brand Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 text-xs mt-4"
        >
          Izipo Consulting
        </motion.p>
      </div>
    </div>
  );
};

// 3D Scene Loader (for Canvas)
export const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Animated Rings */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-cyan-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-blue-500/20 rounded-full"></div>
          <div className="absolute inset-2 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
        </div>
        
        {/* Loading Text */}
        <div className="flex gap-1">
          {["L", "o", "a", "d", "i", "n", "g"].map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
              className="text-white font-medium text-sm"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        {/* Pulsing Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0.4 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
              className="w-2 h-2 bg-cyan-400 rounded-full"
            />
          ))}
        </div>
      </div>
    </Html>
  );
};

export default Loader;