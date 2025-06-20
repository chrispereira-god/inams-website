import React from 'react';
import { Brain, Stethoscope, FlaskConical } from 'lucide-react';

const Pillars = () => {
  const pillars = [
    {
      title: "Department of AI",
      description: "The Department of AI at INAMS is where medicine meets machine intelligence. We explore the transformative role of AI in healthcare — from diagnostics and medical imaging to predictive analytics and digital health tools. Our goal is to equip students and professionals with the skills and knowledge to innovate responsibly, leveraging AI to solve real-world medical challenges. - We don’t just study AI — we apply it to save lives.",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      image: "https://source.unsplash.com/random/800x400/?artificial-intelligence"
    },
    {
      title: "Department of Medicine",
      description: "Rooted in evidence-based clinical science, the Department of Medicine focuses on enhancing medical understanding through interactive education, hands-on training, and multidisciplinary collaboration. From anatomy to pathology, we promote deep learning that integrates traditional knowledge with modern innovation — preparing students for a future where medicine is both human and high-tech. - Preserving the art of healing while embracing the science of progress.",
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      image: "https://source.unsplash.com/random/800x400/?medicine"
    },
    {
      title: "Research and Development",
      description: "The R&D wing of INAMS is the heartbeat of innovation. Here, ideas turn into impact. We foster a culture of scientific curiosity, mentoring students in high-quality research, systematic reviews, AI-integrated projects, and clinical innovation. Whether it’s publishing, prototyping, or problem-solving, our focus is on pushing the boundaries of what’s possible in medicine and technology. - From questions to discoveries — we build the future of healthcare through research.",
      icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
      image: "https://source.unsplash.com/random/800x400/?research-lab"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Core Pillars of INAMS</h1>
        <p className="text-lg text-gray-700 mb-16 max-w-3xl">
          At INAMS, our mission is to empower the next generation of medical professionals and innovators by integrating artificial intelligence, cutting-edge medical science, and research excellence. Our structure is built on three foundational pillars that drive all our initiatives:
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