import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Calendar, Handshake, CheckCircle, Star, Mail, Award, Stethoscope } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');

  const heroSlides = [
    {
      title: "Advancing Medical Excellence Through Continuous Learning",
      description: "Join thousands of healthcare professionals in our comprehensive CPD programs designed to enhance your medical knowledge and clinical skills.",
      bgImage: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)"
    },
    {
      title: "Professional Development for Healthcare Leaders",
      description: "Discover cutting-edge medical education and training programs that keep you at the forefront of healthcare innovation.",
      bgImage: "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)"
    },
    {
      title: "Transform Your Medical Practice",
      description: "Access world-class continuing professional development opportunities tailored for modern healthcare professionals.",
      bgImage: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #60a5fa 100%)"
    }
  ];

  const testimonials = [
    {
      text: "Firstly when we got the goodies at the start of the session. It felt really amazing and appreciative. And then next when our trainers were personally teaching us suturing with great attention and splendid attitude. Overall every part of the workshop was so engaging and worth every penny I swear. The knowledge and practice we got was far more valuable than any material things and for that I am truly grateful.",
      author: "InClosure",
      role: " Participant",
      rating: 5,
      image: "👩‍⚕️"
    },
    {
      text: "The INAMS workshop was an amazing experience! Learned useful suturing techniques and got a cute kit to practice at home. Thank you INAMS for the amazing opportunity!",
      author: "Ilona Dzotsenidze",
      role: "Medical Student, Tbilisi Medical Academy",
      rating: 5,
      image: "👨‍⚕️"
    },
    {
      text: "We attended the INAMS suturing workshop and learned 12 techniques, practiced on real skin, and learned anesthesia injection and waste disposal. Trainers were supportive and interactive. Grateful for this experience!",
      author: "Sanjana, Kannika, Varshita",
      role: "Medical Students, Georgian American University",
      rating: 5,
      image: "👩‍⚕️"
    }
  ];

  const partnerLogos = [
    { name: "MedHack", src: require('../assets/partners/medhack_logo.png') },
    { name: "GAU", src: require('../assets/partners/gau-logo.png') },
    { name: "IHI", src: require('../assets/partners/ihi-logo.png') },
    { name: "Grigol", src: require('../assets/partners/grigol_logo.png') },
    { name: "ASRU", src: require('../assets/partners/asru_logo.png') },
    { name: "MV", src: require('../assets/partners/mv_logo.png') },
    { name: "UG", src: require('../assets/partners/ug_logo.png') }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: heroSlides[currentSlide].bgImage }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        <button 
          onClick={prevSlide}
          className="absolute left-8 z-10 p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
        >
          <ChevronLeft size={28} />
        </button>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-20">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-semibold">INAMS IS CPD APPROVED PROVIDER</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            {heroSlides[currentSlide].title.split(' ').slice(0, 3).join(' ')}{' '}
            <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              {heroSlides[currentSlide].title.split(' ').slice(3).join(' ')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
          
          <div className="flex justify-center space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        <button 
          onClick={nextSlide}
          className="absolute right-8 z-10 p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* CPD Information Section */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 rounded-full px-6 py-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-semibold">What is CPD and why it matters</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Elevating Healthcare Through 
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Continuous Development</span>
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Continuing Professional Development (CPD) is the process of maintaining and enhancing the knowledge, skills, and experience needed to deliver high-quality healthcare. At INAMS, we believe CPD is essential for empowering medical professionals and students to stay up-to-date with advancements, improve patient care, and grow confidently in their careers.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-center text-white">
                  <Award className="w-8 h-8 mr-3" />
                  <span className="text-lg font-bold">CERTIFIED STAMP</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Stethoscope className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Medical Education</h3>
                  <p className="text-gray-600">Comprehensive training programs designed for modern healthcare professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="w-16 h-16 text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-5xl font-bold text-white mb-4">690+</div>
                <div className="text-blue-100 text-lg font-semibold">Students trained</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Calendar className="w-16 h-16 text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-5xl font-bold text-white mb-4">16+</div>
                <div className="text-blue-100 text-lg font-semibold">Events & conferences</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Handshake className="w-16 h-16 text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-5xl font-bold text-white mb-4">10+</div>
                <div className="text-blue-100 text-lg font-semibold">Collaborations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What our participants say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                    <div className="text-blue-600 font-semibold">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Partnered With</h2>
          <div className="flex justify-center items-center flex-wrap gap-x-16 gap-y-12">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-12 lg:h-14 object-contain transition-transform duration-300 transform hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl">
            <Mail className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-blue-100 text-lg mb-8">Subscribe to our latest email and blogs for cutting-edge medical insights</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border-0 rounded-xl focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-900 placeholder-gray-500 font-medium"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 