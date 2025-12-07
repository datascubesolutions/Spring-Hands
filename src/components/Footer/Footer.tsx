import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/images/spring hands - logo.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-slate-800 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="Spring Hands Logo"
                className="h-12 w-12 rounded-full object-cover border-2 border-purple-300"
              />
              <div>
                <h3 className="text-xl font-bold">Spring Hands</h3>
                <p className="text-sm text-gray-400">Nail Art & Mehndi Studio</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your one-stop destination for beautiful nail art and intricate mehndi designs.
              We bring creativity and elegance to your fingertips.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-200 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/917069530992"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-pink-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Our Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Nail Art Design</li>
              <li>Mehndi Application</li>
              <li>Bridal Packages</li>
              <li>Party Makeup</li>
              <li>Custom Designs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Contact Info</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-purple-300 mt-1" />
                <span>C-302, Kaveri Sangam, Near Shilaj Cross Road, Ahmedabad - 380059</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-purple-300" />
                <a href="tel:+917069530992" className="hover:text-purple-200 transition-colors">
                  <span>+91 70695 30992</span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-300" />
                <span>springhands001@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Spring Hands. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

