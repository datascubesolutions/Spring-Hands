import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/spring hands - logo.jpg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact-us', label: 'Contact Us' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gradient-to-r from-purple-200 via-fuchsia-200 to-purple-200 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Spring Hands Logo"
              className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover border-2 border-rose-400 shadow-md"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Spring Hands
              </h1>
              <p className="text-xs md:text-sm text-gray-600">
                Nail Art & Mehndi Studio
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${isActive(link.path)
                  ? 'bg-white text-rose-500 shadow-md'
                  : 'text-gray-700 hover:bg-white/40 hover:text-gray-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${isActive(link.path)
                    ? 'bg-white text-purple-600 shadow-md'
                    : 'text-gray-700 hover:bg-white/40'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

