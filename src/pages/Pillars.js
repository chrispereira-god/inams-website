import React from 'react';
import { Brain, Stethoscope, FlaskConical } from 'lucide-react';

const Pillars = () => {
  const pillars = [
    {
      title: "Department of AI",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      image: "https://source.unsplash.com/random/800x400/?artificial-intelligence"
    },
    {
      title: "Department of Medicine",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      image: "https://source.unsplash.com/random/800x400/?medicine"
    },
    {
      title: "Research and Development",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
      image: "https://source.unsplash.com/random/800x400/?research-lab"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Core Pillars of INAMS</h1>
        <p className="text-lg text-gray-700 mb-16 max-w-3xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

        <div className="space-y-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    {pillar.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{pillar.title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pillars; 