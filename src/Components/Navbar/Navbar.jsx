import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [openCompete, setOpenCompete] = useState(false);
  const [openPractice, setOpenPractice] = useState(false);
  
  const competeDropdownRef = useRef(null);
  const practiceDropdownRef = useRef(null);
  const navRef = useRef(null);

  // Regular nav links (without dropdowns)
  const navLinks = [
    { name: "Learn", path: "/learn" },
    { name: "Education", path: "/education" },
  ];

  // Practice dropdown links
  const practiceLinks = [
    { 
      name: "Challenges", 
      path: "/practice/challenges",
      icon: "🚨",
      description: "Handle security incidents effectively"
    },
    { 
      name: "SOC Simulator", 
      path: "/practice/soc-simulator",
      icon: "🛡️",
      description: "Simulated SOC environment training"
    },
    { 
      name: "Threat Hunting Simulator", 
      path: "/practice/threat-hunting",
      icon: "🔍",
      description: "Hunt real adversary behaviors"
    },
    { 
      name: "Malware Analysis", 
      path: "/practice/malware-analysis",
      icon: "🦠",
      description: "Analyze and reverse engineer malware"
    },
    { 
      name: "Penetration Testing", 
      path: "/practice/penetration-testing",
      icon: "💻",
      description: "Ethical hacking challenges"
    },
  ];

  // Compete dropdown links
  const competeLinks = [
    { 
      name: "King of the Hill", 
      path: "/compete/king-of-the-hill",
      icon: "👑",
      description: "Attack & defend challenges"
    },
    { 
      name: "Leaderboard", 
      path: "/compete/leaderboard",
      icon: "🏆",
      description: "Global rankings"
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const closeDropdowns = (e) => {
      if (competeDropdownRef.current && !competeDropdownRef.current.contains(e.target)) {
        setOpenCompete(false);
      }
      if (practiceDropdownRef.current && !practiceDropdownRef.current.contains(e.target)) {
        setOpenPractice(false);
      }
    };
    document.addEventListener("mousedown", closeDropdowns);
    return () => document.removeEventListener("mousedown", closeDropdowns);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  // Close all dropdowns when route changes or mobile menu closes
  const closeAllDropdowns = () => {
    setOpenCompete(false);
    setOpenPractice(false);
  };

  // Custom HackYard Logo Component
  const HackYardLogo = () => (
    <div className="relative group">
      {/* Main Logo Container */}
      <div className="relative w-11 h-11 md:w-12 md:h-12 flex items-center justify-center">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#88cc14] via-[#65a30d] to-[#4d7c0f] rounded-xl opacity-20 blur-lg group-hover:opacity-40 group-hover:blur-xl transition-all duration-500 animate-pulse" />
        
        {/* Logo Background with Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#88cc14] via-[#65a30d] to-[#4d7c0f] rounded-xl p-[2px]">
          <div className="w-full h-full bg-[#0a0a1a] rounded-[10px] flex items-center justify-center overflow-hidden">
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#88cc14]/10 to-transparent" />
          </div>
        </div>

        {/* Logo SVG */}
        <svg
          viewBox="0 0 48 48"
          className="relative w-8 h-8 md:w-9 md:h-9 z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield Outline */}
          <path
            d="M24 4L6 12v12c0 11 8 18 18 20 10-2 18-9 18-20V12L24 4z"
            stroke="url(#shieldGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="group-hover:stroke-[#a3e635] transition-all duration-300"
          />
          
          {/* Terminal/Code Symbol - Stylized "H" */}
          <path
            d="M16 16v16M32 16v16M16 24h16"
            stroke="url(#codeGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-[#a3e635] transition-all duration-300"
          />
          
          {/* Circuit Nodes */}
          <circle cx="16" cy="16" r="2" fill="#88cc14" className="group-hover:fill-[#a3e635] transition-all duration-300" />
          <circle cx="32" cy="16" r="2" fill="#88cc14" className="group-hover:fill-[#a3e635] transition-all duration-300" />
          <circle cx="16" cy="32" r="2" fill="#88cc14" className="group-hover:fill-[#a3e635] transition-all duration-300" />
          <circle cx="32" cy="32" r="2" fill="#88cc14" className="group-hover:fill-[#a3e635] transition-all duration-300" />
          <circle cx="24" cy="24" r="2.5" fill="#88cc14" className="group-hover:fill-[#a3e635] transition-all duration-300 animate-pulse" />
          
          {/* Decorative Circuit Lines */}
          <path
            d="M10 20h3M10 28h3M35 20h3M35 28h3"
            stroke="#88cc14"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
            className="group-hover:opacity-100 transition-all duration-300"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="shieldGradient" x1="6" y1="4" x2="42" y2="44">
              <stop offset="0%" stopColor="#88cc14" />
              <stop offset="50%" stopColor="#65a30d" />
              <stop offset="100%" stopColor="#4d7c0f" />
            </linearGradient>
            <linearGradient id="codeGradient" x1="16" y1="16" x2="32" y2="32">
              <stop offset="0%" stopColor="#88cc14" />
              <stop offset="100%" stopColor="#a3e635" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Particles Effect */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#88cc14] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#a3e635] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-200 transition-all duration-300" />
      </div>
    </div>
  );

  // Alternative Minimal Logo
  const HackYardLogoMinimal = () => (
    <div className="relative group cursor-pointer">
      {/* Outer Glow Ring */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#88cc14] via-[#65a30d] to-[#88cc14] rounded-2xl opacity-0 group-hover:opacity-75 blur-md transition-all duration-500" />
      
      {/* Main Container */}
      <div className="relative w-12 h-12 md:w-14 md:h-14">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] rounded-xl border border-[#88cc14]/30 group-hover:border-[#88cc14]/60 transition-all duration-300 shadow-lg shadow-[#88cc14]/10 group-hover:shadow-[#88cc14]/30" />
        
        {/* Inner Pattern Grid */}
        <div className="absolute inset-[3px] rounded-lg overflow-hidden opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, #88cc14 1px, transparent 1px),
              linear-gradient(to bottom, #88cc14 1px, transparent 1px)
            `,
            backgroundSize: '6px 6px'
          }} />
        </div>

        {/* Logo Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 40 40"
            className="w-8 h-8 md:w-9 md:h-9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hexagon Background */}
            <path
              d="M20 3L35.32 11.5V28.5L20 37L4.68 28.5V11.5L20 3Z"
              fill="url(#hexFill)"
              stroke="url(#hexStroke)"
              strokeWidth="1.5"
              className="group-hover:fill-[#88cc14]/20 transition-all duration-300"
            />
            
            {/* Code Brackets */}
            <path
              d="M13 14L9 20L13 26"
              stroke="#88cc14"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-[#a3e635] transition-all duration-300"
            />
            <path
              d="M27 14L31 20L27 26"
              stroke="#88cc14"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-[#a3e635] transition-all duration-300"
            />
            
            {/* Slash */}
            <path
              d="M22 12L18 28"
              stroke="url(#slashGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              className="group-hover:stroke-[#a3e635] transition-all duration-300"
            />
            
            {/* Center Dot */}
            <circle
              cx="20"
              cy="20"
              r="2"
              fill="#88cc14"
              className="animate-pulse group-hover:fill-[#a3e635]"
            />

            <defs>
              <linearGradient id="hexFill" x1="4.68" y1="3" x2="35.32" y2="37">
                <stop offset="0%" stopColor="#88cc14" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#4d7c0f" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="hexStroke" x1="4.68" y1="3" x2="35.32" y2="37">
                <stop offset="0%" stopColor="#88cc14" />
                <stop offset="100%" stopColor="#4d7c0f" />
              </linearGradient>
              <linearGradient id="slashGradient" x1="22" y1="12" x2="18" y2="28">
                <stop offset="0%" stopColor="#a3e635" />
                <stop offset="100%" stopColor="#65a30d" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#88cc14]/50 rounded-tl-lg group-hover:border-[#88cc14] transition-all duration-300" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#88cc14]/50 rounded-tr-lg group-hover:border-[#88cc14] transition-all duration-300" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#88cc14]/50 rounded-bl-lg group-hover:border-[#88cc14] transition-all duration-300" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#88cc14]/50 rounded-br-lg group-hover:border-[#88cc14] transition-all duration-300" />
      </div>
    </div>
  );

  // Premium Cyber Logo
  const CyberLogo = () => (
    <div className="relative group cursor-pointer">
      {/* Animated Ring */}
      <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute inset-0 rounded-2xl border-2 border-[#88cc14]/40 animate-spin-slow" style={{ animationDuration: '8s' }} />
      </div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-[#88cc14]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Main Logo */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
        {/* Background with border animation */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#88cc14] via-[#a3e635] to-[#65a30d] animate-gradient-x" />
          {/* Inner Background */}
          <div className="absolute inset-[2px] bg-gradient-to-br from-[#0a0a1a] via-[#0d1525] to-[#0a1628] rounded-[10px]" />
        </div>
        
        {/* Logo Content */}
        <div className="relative z-10">
          <svg
            viewBox="0 0 44 44"
            className="w-9 h-9 md:w-10 md:h-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Circle with Nodes */}
            <circle
              cx="22"
              cy="22"
              r="18"
              stroke="url(#circleGrad)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="group-hover:stroke-[#a3e635] transition-all duration-300"
            />
            
            {/* Tech Nodes on Circle */}
            <circle cx="22" cy="4" r="2" fill="#88cc14" className="group-hover:fill-[#a3e635] animate-pulse" />
            <circle cx="40" cy="22" r="2" fill="#88cc14" className="group-hover:fill-[#a3e635] animate-pulse animation-delay-100" />
            <circle cx="22" cy="40" r="2" fill="#88cc14" className="group-hover:fill-[#a3e635] animate-pulse animation-delay-200" />
            <circle cx="4" cy="22" r="2" fill="#88cc14" className="group-hover:fill-[#a3e635] animate-pulse animation-delay-300" />

            {/* Inner Shield */}
            <path
              d="M22 8L32 13V23C32 28.5 27.5 33 22 35C16.5 33 12 28.5 12 23V13L22 8Z"
              fill="url(#shieldFill)"
              stroke="url(#shieldStroke)"
              strokeWidth="1.5"
              className="group-hover:fill-[#88cc14]/30 transition-all duration-300"
            />
            
            {/* Binary/Code Lines */}
            <g className="opacity-80 group-hover:opacity-100 transition-all duration-300">
              <rect x="18" y="16" width="8" height="2" rx="1" fill="#88cc14" />
              <rect x="16" y="21" width="12" height="2" rx="1" fill="#a3e635" />
              <rect x="18" y="26" width="8" height="2" rx="1" fill="#88cc14" />
            </g>

            {/* Lock Icon Center */}
            <circle cx="22" cy="22" r="3" stroke="#88cc14" strokeWidth="1.5" fill="none" className="group-hover:stroke-[#a3e635]" />
            <path d="M22 21V23" stroke="#88cc14" strokeWidth="2" strokeLinecap="round" className="group-hover:stroke-[#a3e635]" />

            <defs>
              <linearGradient id="circleGrad" x1="4" y1="4" x2="40" y2="40">
                <stop offset="0%" stopColor="#88cc14" />
                <stop offset="50%" stopColor="#65a30d" />
                <stop offset="100%" stopColor="#88cc14" />
              </linearGradient>
              <linearGradient id="shieldFill" x1="12" y1="8" x2="32" y2="35">
                <stop offset="0%" stopColor="#88cc14" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#4d7c0f" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="shieldStroke" x1="12" y1="8" x2="32" y2="35">
                <stop offset="0%" stopColor="#88cc14" />
                <stop offset="100%" stopColor="#65a30d" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );

  const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
      />
    </svg>
  );

  const ChevronDown = ({ open }) => (
    <svg
      className={`w-4 h-4 transition-transform duration-300 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  // Check if any practice link is active
  const isPracticeActive = practiceLinks.some(link => 
    window.location.pathname.startsWith(link.path)
  );

  // Check if any compete link is active
  const isCompeteActive = competeLinks.some(link => 
    window.location.pathname.startsWith(link.path)
  );

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#0a0a1a]/95 via-[#0d1525]/95 to-[#0a1628]/95 backdrop-blur-xl shadow-2xl shadow-black/50"
          : "bg-gradient-to-r from-[#12122a] via-[#141b2d] to-[#0f1d32]"
      }`}
    >
      {/* Subtle top border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#88cc14]/30 to-transparent" />
      
      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            {/* Use one of the logo options - CyberLogo is the premium choice */}
            <CyberLogo />
            
            {/* Brand Name */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg md:text-2xl tracking-wide leading-none flex items-center gap-1">
                <span className="bg-gradient-to-r from-[#88cc14] via-[#a3e635] to-[#88cc14] bg-clip-text text-transparent group-hover:from-[#a3e635] group-hover:via-[#88cc14] group-hover:to-[#a3e635] transition-all duration-500">
                  Hack
                </span>
                <span className="group-hover:text-gray-100 transition-colors duration-300">
                  Yard
                </span>
              </span>
             
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {/* Learn Link */}
            <NavLink
              to="/learn"
              className={({ isActive }) =>
                `relative px-4 py-2 text-[15px] font-semibold transition-all duration-300 rounded-lg group ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">Learn</span>
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#88cc14] transition-all duration-300 ${
                      isActive
                        ? "w-3/4 opacity-100"
                        : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                    }`}
                  />
                  {isActive && <span className="absolute inset-0 bg-[#88cc14]/10 rounded-lg" />}
                </>
              )}
            </NavLink>

            {/* Practice Dropdown */}
            <div className="relative" ref={practiceDropdownRef}>
              <button
                onClick={() => {
                  setOpenPractice((prev) => !prev);
                  setOpenCompete(false);
                }}
                onMouseEnter={() => {
                  setOpenPractice(true);
                  setOpenCompete(false);
                }}
                className={`relative px-4 py-2 text-[15px] font-semibold transition-all duration-300 rounded-lg group flex items-center gap-1 ${
                  isPracticeActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="relative z-10">Practice</span>
                <ChevronDown open={openPractice} />
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#88cc14] transition-all duration-300 ${
                    isPracticeActive
                      ? "w-3/4 opacity-100"
                      : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                  }`}
                />
                {isPracticeActive && <span className="absolute inset-0 bg-[#88cc14]/10 rounded-lg" />}
              </button>

              {/* Practice Dropdown Menu */}
              <div
                onMouseLeave={() => setOpenPractice(false)}
                className={`absolute top-14 left-0 w-72 rounded-xl overflow-hidden border border-white/10 bg-[#0b1220]/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
                  openPractice
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {/* Dropdown Header */}
                <div className="px-4 py-3 border-b border-white/10 bg-white/5">
                  <h3 className="text-white font-semibold text-sm">Practice Labs</h3>
                  <p className="text-gray-500 text-xs mt-0.5">Hands-on security training</p>
                </div>

                {/* Dropdown Links */}
                <div className="py-2">
                  {practiceLinks.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => {
                        setOpenPractice(false);
                        closeAllDropdowns();
                      }}
                      className={({ isActive }) =>
                        `flex items-start gap-3 px-4 py-3 transition-all duration-200 ${
                          isActive
                            ? "bg-[#88cc14]/15 border-l-2 border-[#88cc14]"
                            : "hover:bg-white/5 border-l-2 border-transparent"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                          <div className="min-w-0">
                            <div className={`text-[14px] font-semibold ${
                              isActive ? "text-[#88cc14]" : "text-gray-300"
                            }`}>
                              {item.name}
                            </div>
                            <div className="text-[12px] text-gray-500 mt-0.5 truncate">
                              {item.description}
                            </div>
                          </div>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>

                {/* Dropdown Footer */}
                <div className="px-4 py-3 border-t border-white/10 bg-white/5">
                  <Link
                    to="/practice"
                    onClick={() => setOpenPractice(false)}
                    className="flex items-center justify-between text-[13px] text-[#88cc14] hover:text-[#a3e635] font-medium transition-colors"
                  >
                    <span>View all practice labs</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Education Link */}
            <NavLink
              to="/education"
              className={({ isActive }) =>
                `relative px-4 py-2 text-[15px] font-semibold transition-all duration-300 rounded-lg group ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">Education</span>
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#88cc14] transition-all duration-300 ${
                      isActive
                        ? "w-3/4 opacity-100"
                        : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                    }`}
                  />
                  {isActive && <span className="absolute inset-0 bg-[#88cc14]/10 rounded-lg" />}
                </>
              )}
            </NavLink>

            {/* Compete Dropdown */}
            <div className="relative" ref={competeDropdownRef}>
              <button
                onClick={() => {
                  setOpenCompete((prev) => !prev);
                  setOpenPractice(false);
                }}
                onMouseEnter={() => {
                  setOpenCompete(true);
                  setOpenPractice(false);
                }}
                className={`relative px-4 py-2 text-[15px] font-semibold transition-all duration-300 rounded-lg group flex items-center gap-1 ${
                  isCompeteActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="relative z-10">Compete</span>
                <ChevronDown open={openCompete} />
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#88cc14] transition-all duration-300 ${
                    isCompeteActive
                      ? "w-3/4 opacity-100"
                      : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                  }`}
                />
                {isCompeteActive && <span className="absolute inset-0 bg-[#88cc14]/10 rounded-lg" />}
              </button>

              {/* Compete Dropdown Menu */}
              <div
                onMouseLeave={() => setOpenCompete(false)}
                className={`absolute top-14 left-0 w-64 rounded-xl overflow-hidden border border-white/10 bg-[#0b1220]/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
                  openCompete
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {/* Dropdown Header */}
                <div className="px-4 py-3 border-b border-white/10 bg-white/5">
                  <h3 className="text-white font-semibold text-sm">Competitions</h3>
                  <p className="text-gray-500 text-xs mt-0.5">Test your skills against others</p>
                </div>

                {/* Dropdown Links */}
                <div className="py-2">
                  {competeLinks.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => {
                        setOpenCompete(false);
                        closeAllDropdowns();
                      }}
                      className={({ isActive }) =>
                        `flex items-start gap-3 px-4 py-3 transition-all duration-200 ${
                          isActive
                            ? "bg-[#88cc14]/15 border-l-2 border-[#88cc14]"
                            : "hover:bg-white/5 border-l-2 border-transparent"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                          <div className="min-w-0">
                            <div className={`text-[14px] font-semibold ${
                              isActive ? "text-[#88cc14]" : "text-gray-300"
                            }`}>
                              {item.name}
                            </div>
                            <div className="text-[12px] text-gray-500 mt-0.5 truncate">
                              {item.description}
                            </div>
                          </div>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            <Link
              to="/login"
              className="relative px-6 py-2.5 text-[14px] font-semibold text-[#88cc14] border-2 border-[#88cc14] rounded-full transition-all duration-300 hover:bg-[#88cc14]/10 hover:shadow-lg hover:shadow-[#88cc14]/30 group overflow-hidden"
            >
              <span className="relative z-10">Log In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#88cc14]/0 via-[#88cc14]/20 to-[#88cc14]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Link>

            <Link
              to="/signup"
              className="relative px-6 py-2.5 text-[14px] font-bold text-black bg-[#88cc14] rounded-full transition-all duration-300 hover:bg-[#9fe01b] hover:shadow-lg hover:shadow-[#88cc14]/50 hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10">Join for FREE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-1">
            <button
              className="p-1.5 text-gray-400 hover:text-white rounded-full transition-colors hover:bg-white/10"
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen((prev) => !prev);
                closeAllDropdowns();
              }}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg transition-colors hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-b from-[#0d1525] to-[#0a1222] border-t border-white/10 px-4 py-4 space-y-2">
          {/* Learn Link */}
          <NavLink
            to="/learn"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-[16px] font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[#88cc14]/20 text-[#88cc14] border-l-4 border-[#88cc14]"
                  : "text-gray-400 hover:text-white hover:bg-white/5 hover:pl-6"
              }`
            }
          >
            Learn
          </NavLink>

          {/* Mobile Practice Dropdown */}
          <div className="pt-1">
            <button
              onClick={() => setOpenPractice((prev) => !prev)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-[16px] font-semibold transition-all duration-200 ${
                isPracticeActive 
                  ? "bg-[#88cc14]/10 text-[#88cc14]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span>Practice</span>
                {isPracticeActive && (
                  <span className="w-1.5 h-1.5 bg-[#88cc14] rounded-full" />
                )}
              </div>
              <ChevronDown open={openPractice} />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openPractice ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-2 space-y-1 border-l-2 border-white/10 pl-4">
                {practiceLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      setOpenPractice(false);
                    }}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-[#88cc14]/20 text-[#88cc14] border-l-2 border-[#88cc14] -ml-[2px]"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <div>{item.name}</div>
                      <div className="text-[11px] text-gray-500 font-normal">{item.description}</div>
                    </div>
                  </NavLink>
                ))}
                
                {/* View All Link */}
                <Link
                  to="/practice"
                  onClick={() => {
                    setIsOpen(false);
                    setOpenPractice(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-[13px] text-[#88cc14] font-medium hover:text-[#a3e635] transition-colors"
                >
                  <span>View all practice labs</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Education Link */}
          <NavLink
            to="/education"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-[16px] font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[#88cc14]/20 text-[#88cc14] border-l-4 border-[#88cc14]"
                  : "text-gray-400 hover:text-white hover:bg-white/5 hover:pl-6"
              }`
            }
          >
            Education
          </NavLink>

          {/* Mobile Compete Dropdown */}
          <div className="pt-1">
            <button
              onClick={() => setOpenCompete((prev) => !prev)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-[16px] font-semibold transition-all duration-200 ${
                isCompeteActive 
                  ? "bg-[#88cc14]/10 text-[#88cc14]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span>Compete</span>
                {isCompeteActive && (
                  <span className="w-1.5 h-1.5 bg-[#88cc14] rounded-full" />
                )}
              </div>
              <ChevronDown open={openCompete} />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openCompete ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-2 space-y-1 border-l-2 border-white/10 pl-4">
                {competeLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      setOpenCompete(false);
                    }}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-[#88cc14]/20 text-[#88cc14] border-l-2 border-[#88cc14] -ml-[2px]"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <div>{item.name}</div>
                      <div className="text-[11px] text-gray-500 font-normal">{item.description}</div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-4 space-y-3 border-t border-white/10 mt-4">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 text-[14px] font-semibold text-[#88cc14] border-2 border-[#88cc14] rounded-full transition-all duration-300 hover:bg-[#88cc14]/10"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 text-[14px] font-bold text-black bg-[#88cc14] rounded-full transition-all duration-300 hover:bg-[#9fe01b]"
            >
              Join for FREE
            </Link>
          </div>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;