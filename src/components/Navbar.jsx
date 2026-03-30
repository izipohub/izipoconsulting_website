// components/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import izipoLogo from "../assets/images/izipoLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-black/80 backdrop-blur-xl shadow-lg border-b border-white/10" 
        : "bg-gradient-to-b from-black/60 to-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo - Even Larger */}
          <NavLink to="/" className="flex items-center shrink-0">
            <img 
              src={izipoLogo} 
              alt="Izipo Consulting" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    isActive
                      ? "text-cyan-400 bg-white/20 shadow-sm"
                      : scrolled 
                        ? "text-gray-200 hover:text-white hover:bg-white/10"
                        : "text-white hover:text-white hover:bg-white/20"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className={`px-5 py-2 text-sm font-medium text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                scrolled
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg"
              }`}
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-xl">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `px-4 py-3 text-base font-medium transition-all rounded-lg ${
                      isActive
                        ? "text-cyan-400 bg-white/10"
                        : "text-gray-200 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 mt-2 border-t border-white/20">
                <NavLink
                  to="/contact"
                  onClick={handleLinkClick}
                  className="block w-full px-4 py-3 text-center text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Get Started
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;