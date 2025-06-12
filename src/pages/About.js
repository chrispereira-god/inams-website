import React from 'react';
import { Target, Flag, Trophy } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: "Dr. John Smith",
      role: "Founder & CEO",
      image: "https://source.unsplash.com/random/400x400/?doctor,man"
    },
    {
      name: "Dr. Sarah Wilson",
      role: "Co-Founder & Medical Director",
      image: "https://source.unsplash.com/random/400x400/?doctor,woman"
    },
    {
      name: "Dr. Michael Chen",
      role: "Co-Founder & Research Director",
      image: "https://source.unsplash.com/random/400x400/?doctor,asian"
    }
  ];

  const esteemedPanel = [
    {
      name: "Dr. Emily Brown",
      role: "Chief Medical Officer",
      image: "https://source.unsplash.com/random/200x200/?doctor,1"
    },
    {
      name: "Dr. James Wilson",
      role: "Head of Research",
      image: "https://source.unsplash.com/random/200x200/?doctor,2"
    },
    {
      name: "Dr. Maria Garcia",
      role: "Director of Education",
      image: "https://source.unsplash.com/random/200x200/?doctor,3"
    },
    {
      name: "Dr. David Lee",
      role: "Innovation Lead",
      image: "https://source.unsplash.com/random/200x200/?doctor,4"
    },
    {
      name: "Dr. Rachel Green",
      role: "Clinical Director",
      image: "https://source.unsplash.com/random/200x200/?doctor,5"
    }
  ];

  const executiveBoard = [
    {
      name: "Dr. Robert Taylor",
      role: "Chairman",
      image: "https://source.unsplash.com/random/200x200/?executive,1"
    },
    {
      name: "Dr. Lisa Anderson",
      role: "Vice Chairman",
      image: "https://source.unsplash.com/random/200x200/?executive,2"
    },
    {
      name: "Dr. Thomas Wright",
      role: "Secretary",
      image: "https://source.unsplash.com/random/200x200/?executive,3"
    },
    {
      name: "Dr. Patricia Martinez",
      role: "Treasurer",
      image: "https://source.unsplash.com/random/200x200/?executive,4"
    },
    {
      name: "Dr. Kevin Johnson",
      role: "Member",
      image: "https://source.unsplash.com/random/200x200/?executive,5"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">About Us</h1>
        <p className="text-lg text-gray-700 mb-16 max-w-3xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

        {/* Vision, Mission, Goals Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-12">
            {/* Vision */}
            <div className="flex items-start space-x-6">
              <div className="bg-blue-100 rounded-lg p-3">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vision</h2>
                <p className="text-gray-700">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex items-start space-x-6">
              <div className="bg-blue-100 rounded-lg p-3">
                <Flag className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission</h2>
                <p className="text-gray-700">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>

            {/* Goals */}
            <div className="flex items-start space-x-6">
              <div className="bg-blue-100 rounded-lg p-3">
                <Trophy className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Goals</h2>
                <p className="text-gray-700">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Add an image or illustration here */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-xl"></div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Founders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-blue-600 font-semibold">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Esteemed Panel Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Esteemed Panel</h2>
          <div className="flex justify-center flex-wrap gap-8">
            {esteemedPanel.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Boards Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Executive Boards</h2>
          <div className="flex justify-center flex-wrap gap-8">
            {executiveBoard.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 