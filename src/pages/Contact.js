import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { submitContact } from '../services/contactService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitContact(formData);
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-700">
          Thank you for your interest in INAMS. Whether you're representing an organization, exploring collaboration opportunities, or seeking information about our initiatives, we're here to connect. Please reach out to us through the appropriate channel below:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 text-sm mt-1">For partnerships & institutional inquiries:</p>
                    <a href="mailto:inams.health@gmail.com" className="text-blue-600 hover:underline">inams.health@gmail.com</a>
                    <p className="text-gray-600 text-sm mt-3">For events, workshops, and collaborations:</p>
                    <a href="mailto:inams.collab@gmail.com" className="text-blue-600 hover:underline">inams.collab@gmail.com</a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-lg p-3">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">Direct Contact: +995 511 232 446</p>
                    <a href="https://chat.whatsapp.com/Gbr8p0Bta8k2SrgC7KxIJy" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Join our WhatsApp Community</a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start">
                  <div className="bg-pink-100 rounded-lg p-3">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Instagram</h3>
                    <p className="text-gray-600">Follow us for the latest news and insights.</p>
                    <a href="https://instagram.com/inams.health" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">@inams.health</a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
              <div className="space-y-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className="w-4 h-4 mr-2" />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 