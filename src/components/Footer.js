import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { href: "https://www.instagram.com/inams.health/", icon: <Instagram className="w-6 h-6" /> },
  { href: "https://www.facebook.com/inams.health", icon: <Facebook className="w-6 h-6" /> },
  { href: "https://www.linkedin.com/company/international-network-for-ai-in-medical-sciences", icon: <Linkedin className="w-6 h-6" /> },
  { href: "https://x.com/inamshealth", icon: <Twitter className="w-6 h-6" /> },
  // Note: Lucide doesn't have a Threads icon yet, so it's omitted.
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About & Socials */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-3xl font-bold">INAMS</span>
            </Link>
            <p className="text-gray-300 mb-6 text-lg">Integrating AI in Medicine</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact us</h3>
            <div className="space-y-3 text-gray-300">
              <a href="mailto:inams.health@gmail.com" className="flex items-center hover:text-blue-300">
                <Mail className="w-5 h-5 mr-3" />
                inams.health@gmail.com
              </a>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                +995 511 232 446
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div>
            <h3 className="text-xl font-bold mb-6">Legal</h3>
            <Link to="/privacy-policy" className="text-gray-300 hover:text-blue-300 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-8">
          © {new Date().getFullYear()} INAMS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 