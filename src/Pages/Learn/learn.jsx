// learn.jsx
import React, { useState } from 'react';

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl">TryHackMe</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-green-400 font-medium hover:text-green-300 transition-colors">Learn</a>
            <a href="#" className="text-gray-300 font-medium hover:text-white transition-colors">Practice</a>
            <a href="#" className="text-gray-300 font-medium hover:text-white transition-colors">Compete</a>
            <a href="#" className="text-gray-300 font-medium hover:text-white transition-colors">Education</a>
            <a href="#" className="text-gray-300 font-medium hover:text-white transition-colors">Business</a>
            <a href="#" className="text-gray-300 font-medium hover:text-white transition-colors">Pricing</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-6 py-2 text-white border border-gray-500 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300">
              Log In
            </button>
            <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300">
              Join for FREE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#" className="text-green-400 font-medium">Learn</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Practice</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Compete</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Education</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Business</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
                <button className="px-6 py-2 text-white border border-gray-500 rounded-full hover:border-white transition-colors">
                  Log In
                </button>
                <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 transition-colors">
                  Join for FREE
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <Header />

      <div className="container mx-auto px-6 pt-32 pb-20 lg:pt-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Learn
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Learn cybersecurity in a fun, interactive, and hands-on way. 
              Access everything through your browser — no downloads, no setup. 
              Start your journey from beginner to expert with real-world labs and challenges.
            </p>

            {/* Statistics */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-white">1.1K+</div>
                  <div className="text-gray-400">Hands-on Labs</div>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-white">400+</div>
                  <div className="text-gray-400">Cyber Security Challenges</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Laptop Illustration */}
          <div className="flex-1 flex justify-center items-center z-10">
            <div className="relative animate-float">
              {/* Outer Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Laptop Container */}
              <div className="relative">
                {/* Laptop Screen */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 md:p-6 border border-gray-700/50 shadow-2xl shadow-black/50">
                  {/* Screen */}
                  <div className="w-64 h-44 md:w-80 md:h-52 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg border-4 border-gray-700 flex items-center justify-center overflow-hidden relative">
                    {/* Screen Content - Shield with Swords */}
                    <div className="relative flex items-center justify-center">
                      {/* Glow behind shield */}
                      <div className="absolute w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                      
                      {/* Left Sword */}
                      <svg className="absolute -left-6 -top-2 w-12 h-12 md:w-14 md:h-14 text-cyan-400 transform -rotate-45 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.121 10.48L17 7.601V4.534l-3.879 3.879L10.5 5.793 8.379 7.914l2.621 2.621-8.414 8.414 1.414 1.414 8.414-8.414 2.621 2.621 2.121-2.121-2.621-2.621L18.414 6H15.35l-2.879 2.879 1.65 1.601z"/>
                      </svg>
                      
                      {/* Right Sword */}
                      <svg className="absolute -right-6 -top-2 w-12 h-12 md:w-14 md:h-14 text-pink-400 transform rotate-45 scale-x-[-1] drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.121 10.48L17 7.601V4.534l-3.879 3.879L10.5 5.793 8.379 7.914l2.621 2.621-8.414 8.414 1.414 1.414 8.414-8.414 2.621 2.621 2.121-2.121-2.621-2.621L18.414 6H15.35l-2.879 2.879 1.65 1.601z"/>
                      </svg>
                      
                      {/* Shield */}
                      <div className="relative w-20 h-24 md:w-24 md:h-28">
                        <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 24 24" fill="none">
                          <defs>
                            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#3B82F6" />
                              <stop offset="50%" stopColor="#8B5CF6" />
                              <stop offset="100%" stopColor="#EC4899" />
                            </linearGradient>
                            <filter id="glow">
                              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                              <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                          </defs>
                          <path 
                            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
                            fill="url(#shieldGradient)"
                            stroke="rgba(255,255,255,0.5)"
                            strokeWidth="0.5"
                            filter="url(#glow)"
                          />
                          <path 
                            d="M9 12l2 2 4-4" 
                            stroke="white" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-scan pointer-events-none"></div>
                    
                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* Webcam Dot */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
                
                {/* Laptop Base/Keyboard */}
                <div className="relative mt-0">
                  <div className="h-3 md:h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl mx-4"></div>
                  <div className="h-2 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-b-2xl mx-8"></div>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-8 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -top-8 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.75s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

// Roadmap Card Component
const RoadmapCard = ({ title, description, badge, difficulty, color = 'blue' }) => {
  const colorVariants = {
    blue: 'border-blue-500/30 hover:border-blue-400/60 hover:shadow-blue-500/20',
    red: 'border-red-500/30 hover:border-red-400/60 hover:shadow-red-500/20',
    yellow: 'border-yellow-500/30 hover:border-yellow-400/60 hover:shadow-yellow-500/20',
    green: 'border-green-500/30 hover:border-green-400/60 hover:shadow-green-500/20',
  };

  const difficultyStyles = {
    Easy: 'bg-green-500/20 text-green-400 border-green-500/40',
    Intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
    Advanced: 'bg-red-500/20 text-red-400 border-red-500/40',
  };

  return (
    <div className={`
      relative bg-white/5 backdrop-blur-md rounded-xl p-5 
      border ${colorVariants[color]}
      transition-all duration-300 
      hover:shadow-lg hover:bg-white/10 hover:scale-[1.02]
      cursor-pointer group
    `}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-base md:text-lg group-hover:text-cyan-300 transition-colors truncate">
            {title}
          </h4>
          {description && (
            <p className="text-gray-400 text-sm mt-1 line-clamp-2">{description}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 items-end flex-shrink-0">
          {badge && (
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/40 whitespace-nowrap">
              {badge}
            </span>
          )}
          {difficulty && (
            <span className={`px-3 py-1 text-xs font-medium rounded-full border whitespace-nowrap ${difficultyStyles[difficulty]}`}>
              {difficulty}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// Learning Roadmap Section
const LearningRoadmap = () => {
  const foundationPath = [
    { 
      title: 'Computer Science Basics', 
      description: 'Foundational computing and networking concepts', 
      color: 'blue' 
    },
    { 
      title: 'Pre-Security', 
      description: 'Entry-level cybersecurity fundamentals', 
      badge: 'Path', 
      color: 'green' 
    },
    { 
      title: 'Cyber Security Foundations', 
      description: 'Industry-level security basics', 
      color: 'blue' 
    },
    { 
      title: 'Cyber Security 101', 
      description: 'Beginner practical security knowledge', 
      difficulty: 'Easy', 
      color: 'green' 
    },
    { 
      title: 'Cyber Security Career Skills', 
      description: 'Interview preparation and career readiness', 
      color: 'blue' 
    },
  ];

  const securityAnalyst = [
    { title: 'SOC Level 1', description: 'Security Operations fundamentals' },
    { title: 'Security Analyst Level 1 (SAL1)', description: 'Entry-level analyst skills' },
    { title: 'SOC Level 2', description: 'Advanced SOC operations' },
    { title: 'Advanced Endpoint Investigations', description: 'Deep endpoint analysis' },
  ];

  const pentester = [
    { title: 'Jr Penetration Tester', description: 'Entry-level pentesting' },
    { title: 'Web Fundamentals', description: 'Web security basics' },
    { title: 'Web Application Pentesting', description: 'Advanced web attacks' },
    { title: 'Web Application Red Teaming', description: 'Red team operations' },
    { title: 'Red Teaming', description: 'Full red team engagements' },
  ];

  const securityEngineer = [
    { title: 'Security Engineer', description: 'Security engineering fundamentals' },
    { title: 'DevSecOps', description: 'Security in DevOps pipeline' },
    { title: 'Attacking and Defending AWS', description: 'Cloud security mastery' },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Cyber Security Learning Roadmap
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Progress from fundamentals to advanced techniques with our structured learning paths. 
            Master the skills needed to become a cybersecurity professional.
          </p>
        </div>

        {/* Foundation Path */}
        <div className="max-w-2xl mx-auto mb-20">
          <h3 className="text-xl font-semibold text-cyan-400 text-center mb-8">Foundation Path</h3>
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-6">
              {foundationPath.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transform -translate-x-1/2 border-2 border-slate-900 z-10 hidden md:block shadow-lg shadow-cyan-500/50"></div>
                  
                  {/* Card - Alternating sides on desktop */}
                  <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'}`}>
                    <RoadmapCard {...item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Branches Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Choose Your Specialization
          </h3>
          <p className="text-gray-400">Select a career path that matches your interests and goals</p>
        </div>

        {/* Career Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Security Analyst Branch */}
          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl mb-4 shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-400">Security Analyst</h4>
              <p className="text-gray-500 text-sm mt-1">Defensive Security Path</p>
            </div>
            
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-32 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500/20 transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-4">
              {securityAnalyst.map((item, index) => (
                <RoadmapCard key={index} {...item} color="blue" />
              ))}
            </div>
          </div>

          {/* Penetration Tester Branch */}
          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-400 rounded-2xl mb-4 shadow-lg shadow-red-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-red-400">Penetration Tester</h4>
              <p className="text-gray-500 text-sm mt-1">Offensive Security Path</p>
            </div>
            
            <div className="absolute left-1/2 top-32 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-orange-500/20 transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-4">
              {pentester.map((item, index) => (
                <RoadmapCard key={index} {...item} color="red" />
              ))}
            </div>
          </div>

          {/* Security Engineer Branch */}
          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-2xl mb-4 shadow-lg shadow-yellow-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-yellow-400">Security Engineer</h4>
              <p className="text-gray-500 text-sm mt-1">Engineering & DevSecOps Path</p>
            </div>
            
            <div className="absolute left-1/2 top-32 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-orange-500/20 transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-4">
              {securityEngineer.map((item, index) => (
                <RoadmapCard key={index} {...item} color="yellow" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 md:mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">What's next?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Ready to start your cybersecurity journey? Explore our comprehensive learning paths 
            and begin mastering the skills needed to protect the digital world.
          </p>
          <button className="group px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/40">
            <span className="flex items-center gap-2 justify-center">
              Explore more
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const footerLinks = {
    learning: [
      { name: 'Hands-on labs', href: '#' },
      { name: 'For Business', href: '#' },
      { name: 'For Education', href: '#' },
      { name: 'Competitive Hacking', href: '#' },
      { name: 'Defensive Certifications', href: '#' },
    ],
    resources: [
      { name: 'About Us', href: '#' },
      { name: 'Newsroom', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Glossary', href: '#' },
      { name: 'Work at TryHackMe', href: '#' },
      { name: 'Careers in Cyber', href: '#' },
    ],
    shop: [
      { name: 'Buy Vouchers', href: '#' },
      { name: 'Swag Shop', href: '#' },
    ],
    contact: [
      { name: 'Contact Us', href: '#' },
      { name: 'Forum', href: '#' },
    ],
  };

  const policyLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Use', href: '#' },
    { name: 'AI Terms of Use', href: '#' },
    { name: 'Acceptable Use Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];

  const socialLinks = [
    { 
      name: 'X', 
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    { 
      name: 'Discord', 
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-gray-800/50">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Learning Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Learning</h4>
            <ul className="space-y-3">
              {footerLinks.learning.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Get in touch</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">TryHackMe</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              We're a gamified, hands-on cyber security training platform that you can access through your browser.
            </p>
            <p className="text-gray-500 text-xs">
              123 Security Street, London, UK
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-gray-500 text-sm order-3 lg:order-1">
              © TryHackMe 2018–2026
            </div>

            {/* Policy Links */}
            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm order-2">
              {policyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 order-1 lg:order-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Learn Page Component
const Learn = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      <LearningRoadmap />
      <Footer />
    </div>
  );
};

export default Learn;