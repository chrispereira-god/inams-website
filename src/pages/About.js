import React from 'react';
import { Target, Flag, Trophy } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: "Chris Moris Pereira",
      role: "Founder",
      image: require('../assets/founder-chris.jpg')
    },
    {
      name: "Yash Pradeep Dhage",
      role: "Founder",
      image: require('../assets/founder-yash.jpg')
    }
  ];

  // const esteemedPanel = [
  //   {
  //     name: "Mr. Amey Talekar",
  //     role: "Manufacturing Manager at Argon Medical Devices",
  //     degree: "M.S. in Engineering Management, Northeastern University, Boston",
  //     image: require('../assets/panel-amey.jpg')
  //   },
  //   {
  //     name: "Dr. Rajesh Patil",
  //     role: "Professor",
  //     degree: "B.E. Electronics; M.Tech Electronics, IIT Powai; Ph.D, NIT Jaipur",
  //     image: require('../assets/panel-rajesh.jpg')
  //   }
  // ];

  const executiveBoard = [
    {
      name: "Mrunal Mahadeo Sule",
      role: "Executive",
      image: require('../assets/executive-mrunal.jpg')
    },
    {
      name: "Aishwarya Shelke",
      role: "Executive",
      image: require('../assets/executive-aishwarya.jpg')
    },
    {
      name: "Prerna Dhamale",
      role: "Executive",
      image: require('../assets/executive-prerna.jpg')
    },
    {
      name: "Kruthika Gowda",
      role: "Executive",
      image: require('../assets/executive-kruthika.jpg')
    },
    {
      name: "Manoj kumar uppar",
      role: "Executive",
      image: require('../assets/executive-manoj.jpg')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">About Us</h1>
        <p className="text-lg text-gray-700 mb-16 max-w-3xl">
          The International Network of AI in Medical Science (INAMS) was founded on February 3, 2024, by Rushikesh Rajesh Patil along with Yash Pradeep Dhage & Chris Moris Pereira.
INAMS is a pioneering organization dedicated to advancing Artificial Intelligence (AI) in medicine, fostering a global community of medical and technology professionals. By promoting interdisciplinary collaboration, research, and innovation, INAMS is shaping the future of healthcare through AI-driven solutions.

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
                  Our vision is to be a global leader in AI-driven healthcare, promoting innovation, ethical use, and improved patient outcomes through collaboration between medicine and technology.
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
                   INAMS aims to transform healthcare and medical education by responsibly integrating AI. We foster interdisciplinary collaboration through events, research, and expert-led initiatives.
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
                  We organize events and publish research to promote AI in medicine, build global networks, and support innovations that enhance diagnostics, clinical efficiency, and education.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl inline-block">
  <img 
    src={require('../assets/about_us_banner.png')} 
    alt="About Us Banner" 
    className="block w-full h-full rounded-2xl object-cover"
  />
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
        // <div className="mb-24">
        //   <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Esteemed Panel</h2>
        //   <div className="flex flex-wrap justify-center gap-8">
        //     {esteemedPanel.map((member, index) => (
        //       <div key={index} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center w-80 max-w-full">
        //         <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-100 shadow">
        //           <img
        //             src={member.image}
        //             alt={member.name}
        //             className="w-full h-full object-cover"
        //           />
        //         </div>
        //         <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{member.name}</h3>
        //         <p className="text-blue-700 font-medium text-center mb-2">{member.role}</p>
        //         <p className="text-gray-600 text-center text-sm">{member.degree}</p>
        //       </div>
        //     ))}
        //   </div>
        // </div>

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
