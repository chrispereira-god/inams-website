import React from 'react';
import { Mail, Stethoscope } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                <Stethoscope className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold">INAMS</span>
            </div>
            <p className="text-gray-300 mb-6 text-lg">Integrating AI in Medicine</p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer"></div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contact us</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center"><Mail className="w-5 h-5 mr-3" />user@email.com</p>
              <p>+99988998889</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Privacy Policy</h3>
            <p className="text-gray-300 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 