import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 text-gray-700">
          <p>
            Welcome to the International Network of AI in Medical Science (INAMS). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 pt-4">Information Collection</h2>
          <p>
            We may collect personal information from you, such as your name, email address, and professional details when you register for events, subscribe to our newsletter, or contact us directly.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 pt-4">Use of Your Information</h2>
          <p>
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Provide, operate, and maintain our website.</li>
            <li>Improve, personalize, and expand our website.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Develop new products, services, features, and functionality.</li>
            <li>Communicate with you for customer service, updates, and marketing.</li>
            <li>Process your transactions and manage your event registrations.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 pt-4">Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 pt-4">Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at <a href="mailto:inams.health@gmail.com" className="text-blue-600 hover:underline">inams.health@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 