// learn.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Learn', path: '/learn' },
    { name: 'Practice', path: '/practice' },
    { name: 'Compete', path: '/compete' },
    { name: 'Education', path: '/education' },
    { name: 'Business', path: '/business' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl">TryHackMe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? 'text-green-400 hover:text-green-300'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-6 py-2 text-white border border-gray-500 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              Join for FREE
            </Link>
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
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-medium transition-colors ${
                      isActive ? 'text-green-400' : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-2 text-white border border-gray-500 rounded-full hover:border-white transition-colors text-center"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 transition-colors text-center"
                >
                  Join for FREE
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Hero Section Component - Enhanced
const HeroSection = () => {
  const features = [
    { icon: '🎯', text: 'Guided Learning Paths' },
    { icon: '🔒', text: 'Real Attack Simulations' },
    { icon: '🏆', text: 'Earn Certificates' },
    { icon: '👥', text: 'Join 3M+ Hackers' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <Header />

      <div className="container mx-auto px-6 pt-28 pb-16 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm font-medium">Start Learning Today</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Learn
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Cyber Security
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Master cybersecurity through hands-on, gamified learning. 
              Access real-world labs directly in your browser — no setup required. 
              From beginner to expert, we've got you covered.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                to="/signup"
                className="group px-8 py-4 bg-gradient-to-r from-green-500 to-green-400 text-slate-900 font-bold rounded-full hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Learning Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/paths"
                className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                View Learning Paths
              </Link>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <span>{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

           
          </div>

          {/* Right Content - Enhanced 3D Laptop Illustration */}
          <div className="flex-1 flex justify-center items-center z-10 mt-8 lg:mt-0">
            <div className="relative animate-float">
              {/* Outer Glow - Larger */}
              <div className="absolute -inset-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

              {/* Laptop Container - Larger */}
              <div className="relative">
                {/* Laptop Screen */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 md:p-8 border border-gray-700/50 shadow-2xl shadow-black/50">
                  {/* Screen - Increased Size */}
                  <div className="w-72 h-52 sm:w-80 sm:h-56 md:w-96 md:h-64 lg:w-[420px] lg:h-72 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg border-4 border-gray-700 flex items-center justify-center overflow-hidden relative">
                    {/* Screen Content - Terminal Style */}
                    <div className="absolute inset-4 flex flex-col">
                      {/* Terminal Header */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-gray-500 text-xs font-mono">terminal@tryhackme</span>
                      </div>

                      {/* Terminal Content */}
                      <div className="flex-1 font-mono text-xs sm:text-sm space-y-2 overflow-hidden">
                        <div className="flex">
                          <span className="text-green-400">$</span>
                          <span className="text-gray-300 ml-2">nmap -sV target.thm</span>
                        </div>
                        <div className="text-gray-500 text-xs">
                          Starting Nmap scan...
                        </div>
                        <div className="space-y-1 text-xs">
                          <div className="text-cyan-400">PORT     STATE  SERVICE</div>
                          <div className="text-gray-300">22/tcp   open   ssh</div>
                          <div className="text-gray-300">80/tcp   open   http</div>
                          <div className="text-gray-300">443/tcp  open   https</div>
                          <div className="text-yellow-400">3306/tcp open   mysql</div>
                        </div>
                        <div className="flex mt-2">
                          <span className="text-green-400">$</span>
                          <span className="text-gray-300 ml-2">gobuster dir -u http://target.thm</span>
                          <span className="animate-pulse text-green-400 ml-1">_</span>
                        </div>
                      </div>

                      {/* Shield Overlay */}
                      <div className="absolute bottom-4 right-4 opacity-20">
                        <svg className="w-16 h-16 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scan pointer-events-none"></div>

                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Webcam Dot */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full">
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-50"></div>
                  </div>

                  {/* Brand Logo on Screen Bezel */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-1 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full"></div>
                  </div>
                </div>

                {/* Laptop Base/Keyboard */}
                <div className="relative mt-0">
                  <div className="h-4 md:h-5 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl mx-6"></div>
                  <div className="h-2 md:h-3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-b-2xl mx-12"></div>
                </div>

                {/* Keyboard Glow */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-cyan-400/20 blur-md"></div>
              </div>

              {/* Floating Elements - Enhanced */}
              <div className="absolute -top-6 -right-6 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-6 -left-6 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-10 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -top-10 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.75s' }}></div>
              <div className="absolute top-1/4 -left-8 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '1.25s' }}></div>
              <div className="absolute bottom-1/3 -right-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>

              {/* Floating Code Snippets */}
              <div className="absolute -top-4 -left-16 bg-slate-800/90 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2 text-xs font-mono text-green-400 animate-bounce" style={{ animationDuration: '3s' }}>
                {'{ hack }'}
              </div>
              <div className="absolute -bottom-4 -right-12 bg-slate-800/90 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2 text-xs font-mono text-cyan-400 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                ./exploit.py
              </div>
              <div className="absolute top-1/2 -left-20 bg-slate-800/90 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2 text-xs font-mono text-purple-400 animate-bounce hidden lg:block" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
                root@kali:~#
              </div>

              {/* Achievement Badge */}
              <div className="absolute -top-8 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3 shadow-lg shadow-orange-500/30 animate-bounce" style={{ animationDuration: '2s' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
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
const RoadmapCard = ({ title, description, badge, difficulty, color = 'blue', path }) => {
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

  const CardContent = () => (
    <>
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
    </>
  );

  if (path) {
    return (
      <Link
        to={path}
        className={`block relative bg-white/5 backdrop-blur-md rounded-xl p-5 border ${colorVariants[color]} transition-all duration-300 hover:shadow-lg hover:bg-white/10 hover:scale-[1.02] cursor-pointer group`}
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <div className={`relative bg-white/5 backdrop-blur-md rounded-xl p-5 border ${colorVariants[color]} transition-all duration-300 hover:shadow-lg hover:bg-white/10 hover:scale-[1.02] cursor-pointer group`}>
      <CardContent />
    </div>
  );
};

// Featured Courses Section (NEW)
const FeaturedCourses = () => {
  const courses = [
    {
      title: 'Introduction to Cyber Security',
      description: 'Learn the basics of cyber security and different career paths',
      image: '🔐',
      level: 'Beginner',
      duration: '24 hours',
      modules: 8,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Linux Fundamentals',
      description: 'Master the Linux command line and system administration',
      image: '🐧',
      level: 'Beginner',
      duration: '18 hours',
      modules: 6,
      color: 'from-green-500 to-emerald-400'
    },
    {
      title: 'Web Application Security',
      description: 'Discover vulnerabilities in web applications and how to exploit them',
      image: '🌐',
      level: 'Intermediate',
      duration: '32 hours',
      modules: 12,
      color: 'from-purple-500 to-pink-400'
    },
    {
      title: 'Network Security',
      description: 'Understand network protocols and learn to secure networks',
      image: '🔗',
      level: 'Intermediate',
      duration: '28 hours',
      modules: 10,
      color: 'from-orange-500 to-red-400'
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-blue-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Popular Learning Paths
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start with our most popular courses designed for all skill levels
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Link
              key={index}
              to={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Course Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {course.image}
              </div>

              {/* Course Info */}
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {course.description}
              </p>

              {/* Course Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className={`px-2 py-1 rounded-full ${
                  course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {course.level}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration}
                </span>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            View All Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Learning Roadmap Section
const LearningRoadmap = () => {
  const foundationPath = [
    {
      title: 'Computer Science Basics',
      description: 'Foundational computing and networking concepts',
      color: 'blue',
      path: '/courses/computer-science-basics'
    },
    {
      title: 'Pre-Security',
      description: 'Entry-level cybersecurity fundamentals',
      badge: 'Path',
      color: 'green',
      path: '/courses/pre-security'
    },
    {
      title: 'Cyber Security Foundations',
      description: 'Industry-level security basics',
      color: 'blue',
      path: '/courses/cyber-security-foundations'
    },
    {
      title: 'Cyber Security 101',
      description: 'Beginner practical security knowledge',
      difficulty: 'Easy',
      color: 'green',
      path: '/courses/cyber-security-101'
    },
    {
      title: 'Cyber Security Career Skills',
      description: 'Interview preparation and career readiness',
      color: 'blue',
      path: '/courses/career-skills'
    },
  ];

  const securityAnalyst = [
    { title: 'SOC Level 1', description: 'Security Operations fundamentals', path: '/courses/soc-level-1' },
    { title: 'Security Analyst Level 1 (SAL1)', description: 'Entry-level analyst skills', path: '/courses/sal1' },
    { title: 'SOC Level 2', description: 'Advanced SOC operations', path: '/courses/soc-level-2' },
    { title: 'Advanced Endpoint Investigations', description: 'Deep endpoint analysis', path: '/courses/endpoint-investigations' },
  ];

  const pentester = [
    { title: 'Jr Penetration Tester', description: 'Entry-level pentesting', path: '/courses/jr-pentester' },
    { title: 'Web Fundamentals', description: 'Web security basics', path: '/courses/web-fundamentals' },
    { title: 'Web Application Pentesting', description: 'Advanced web attacks', path: '/courses/web-app-pentesting' },
    { title: 'Web Application Red Teaming', description: 'Red team operations', path: '/courses/web-red-teaming' },
    { title: 'Red Teaming', description: 'Full red team engagements', path: '/courses/red-teaming' },
  ];

  const securityEngineer = [
    { title: 'Security Engineer', description: 'Security engineering fundamentals', path: '/courses/security-engineer' },
    { title: 'DevSecOps', description: 'Security in DevOps pipeline', path: '/courses/devsecops' },
    { title: 'Attacking and Defending AWS', description: 'Cloud security mastery', path: '/courses/aws-security' },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 overflow-hidden">
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
            <Link to="/paths/security-analyst" className="block text-center mb-8 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">Security Analyst</h4>
              <p className="text-gray-500 text-sm mt-1">Defensive Security Path</p>
            </Link>

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
            <Link to="/paths/penetration-tester" className="block text-center mb-8 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-400 rounded-2xl mb-4 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-red-400 group-hover:text-red-300 transition-colors">Penetration Tester</h4>
              <p className="text-gray-500 text-sm mt-1">Offensive Security Path</p>
            </Link>

            <div className="absolute left-1/2 top-32 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-orange-500/20 transform -translate-x-1/2 hidden lg:block"></div>

            <div className="space-y-4">
              {pentester.map((item, index) => (
                <RoadmapCard key={index} {...item} color="red" />
              ))}
            </div>
          </div>

          {/* Security Engineer Branch */}
          <div className="relative">
            <Link to="/paths/security-engineer" className="block text-center mb-8 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-2xl mb-4 shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">Security Engineer</h4>
              <p className="text-gray-500 text-sm mt-1">Engineering & DevSecOps Path</p>
            </Link>

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
          <Link
            to="/explore"
            className="inline-flex group px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/40"
          >
            <span className="flex items-center gap-2 justify-center">
              Explore more
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const footerLinks = {
    learning: [
      { name: 'Hands-on labs', path: '/labs' },
      { name: 'For Business', path: '/business' },
      { name: 'For Education', path: '/education' },
      { name: 'Competitive Hacking', path: '/compete' },
      { name: 'Defensive Certifications', path: '/certifications' },
    ],
    resources: [
      { name: 'About Us', path: '/about' },
      { name: 'Newsroom', path: '/newsroom' },
      { name: 'Blog', path: '/blog' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Work at TryHackMe', path: '/careers' },
      { name: 'Careers in Cyber', path: '/cyber-careers' },
    ],
    shop: [
      { name: 'Buy Vouchers', path: '/vouchers' },
      { name: 'Swag Shop', path: '/shop' },
    ],
    contact: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Forum', path: '/forum' },
    ],
  };

  const policyLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Use', path: '/terms' },
    { name: 'AI Terms of Use', path: '/ai-terms' },
    { name: 'Acceptable Use Policy', path: '/acceptable-use' },
    { name: 'Cookie Policy', path: '/cookies' },
  ];

  const socialLinks = [
    {
      name: 'X',
      href: 'https://twitter.com/tryhackme',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/tryhackme',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/tryhackme',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/tryhackme',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/tryhackme',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/tryhackme',
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
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
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
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
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
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
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
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 hover:opacity-90 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">TryHackMe</span>
            </Link>
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
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 order-1 lg:order-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
      <FeaturedCourses />
      <LearningRoadmap />
      <Footer />
    </div>
  );
};

export default Learn;