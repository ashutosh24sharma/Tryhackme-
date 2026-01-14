import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

   const navigate = useNavigate();

  const menuItems = ['Learn', 'Practice', 'Compete', 'Education', 'Business', 'Pricing'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 font-sans antialiased overflow-hidden">
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes shadow-move {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.3; }
          50% { transform: translateX(-50%) scale(0.8); opacity: 0.15; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .float-animation { animation: float 3.5s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .shadow-animation { animation: shadow-move 3.5s ease-in-out infinite; }
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/50 rounded-full pulse-glow" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400/50 rounded-full pulse-glow" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-green-400/40 rounded-full pulse-glow" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-cyan-400/40 rounded-full pulse-glow" />
        <div className="absolute bottom-1/4 right-1/2 w-1 h-1 bg-green-400/60 rounded-full pulse-glow" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 lg:px-16 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
            </defs>
            <path
              d="M32 22c0-3.5-2.8-6.3-6.3-6.3-.8 0-1.6.1-2.3.4C22.1 12.5 18.6 10 14.5 10 9.3 10 5 14.3 5 19.5c0 .4 0 .7.1 1.1C3.2 21.5 2 23.6 2 26c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6 0-2-1-3.8-2.6-4.9-.2-.4-.3-.7-.4-1.1z"
              fill="url(#logoGrad)"
            />
            <text x="10" y="25" fill="#0f172a" fontSize="8" fontFamily="monospace" fontWeight="bold">
              0110
            </text>
          </svg>
          <span className="text-xl font-bold text-white">
            Try<span className="text-green-400">Hack</span>Me
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-green-400 transition-all duration-300 font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
       <div className="flex items-center gap-4">
  <button
    onClick={() => navigate("/login")}
    className="hidden sm:block px-6 py-2.5 border-2 border-green-400 
               text-green-400 rounded-full hover:bg-green-400 
               hover:text-slate-900 transition-all duration-300 font-semibold"
  >
    Log In
  </button>

  <button  onClick={() => navigate("/signup")}
    className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 
               text-sm sm:text-base bg-gradient-to-r from-green-400 
               to-green-500 text-slate-900 rounded-full font-semibold 
               sm:font-bold transition-all duration-300 active:scale-95 
               hover:shadow-lg hover:shadow-green-400/40 hover:scale-105 
               focus:outline-none focus:ring-2 focus:ring-green-400"
  >
    Join for FREE
  </button>


          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-green-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-t border-gray-800 lg:hidden shadow-2xl">
            <div className="flex flex-col p-6 gap-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors font-medium py-3 px-4 rounded-xl hover:bg-slate-800/50"
                >
                  {item}
                </a>
              ))}
              <button className="sm:hidden mt-4 px-6 py-3 border-2 border-green-400 text-green-400 rounded-full font-semibold">
                Log In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 lg:px-16 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-400/10 border border-green-400/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full pulse-glow" />
              <span className="text-green-400 text-sm font-medium">#1 Cyber Security Training Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Anyone can learn{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 gradient-animate">
                cyber security
              </span>{' '}
              with TryHackMe
            </h1>

            {/* Neon Underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full shadow-lg shadow-green-400/50 mx-auto lg:mx-0 mb-6" />

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Hands-on cyber security training through real-world scenarios. Learn by doing with our gamified platform.
            </p>

            {/* Email Form */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 px-6 py-4 bg-slate-800/70 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-slate-900 rounded-full font-bold hover:shadow-xl hover:shadow-green-400/30 hover:scale-105 active:scale-100 transition-all duration-300 whitespace-nowrap">
                Join for FREE
              </button>
            </div>

            {/* Checklist */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {['Beginner friendly', 'Guides and challenges', 'Real-world scenarios'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center border border-green-400/30">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10 pt-10 border-t border-gray-800">
              {[
                { value: '2M+', label: 'Users' },
                { value: '500+', label: 'Labs' },
                { value: '100+', label: 'Learning Paths' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Robot */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Robot Shadow */}
              <div className="absolute -bottom-8 left-1/2 w-48 h-8 bg-cyan-400/30 rounded-full blur-2xl shadow-animation" />

              {/* Robot with Float Animation */}
              <div className="float-animation">
                <svg
                  className="w-72 h-96 sm:w-80 sm:h-[420px] lg:w-[380px] lg:h-[500px]"
                  viewBox="0 0 300 400"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e3a5f" />
                      <stop offset="50%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#1e3a5f" />
                    </linearGradient>
                    <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#94a3b8" />
                      <stop offset="50%" stopColor="#e2e8f0" />
                      <stop offset="100%" stopColor="#64748b" />
                    </linearGradient>
                    <linearGradient id="visorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                    <linearGradient id="jetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="strongGlow">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Backpack */}
                  <rect x="115" y="110" width="70" height="85" rx="10" fill="url(#bodyGrad)" stroke="#4ade80" strokeWidth="1.5" />
                  <rect x="125" y="120" width="50" height="25" rx="5" fill="#0f172a" stroke="#22d3ee" strokeWidth="0.5" />
                  <circle cx="138" cy="132" r="6" fill="#4ade80" filter="url(#glow)" className="pulse-glow" />
                  <circle cx="150" cy="132" r="6" fill="#22d3ee" filter="url(#glow)" className="pulse-glow" />
                  <circle cx="162" cy="132" r="6" fill="#4ade80" filter="url(#glow)" className="pulse-glow" />
                  <rect x="125" y="152" width="45" height="6" rx="3" fill="#4ade80" opacity="0.5" />
                  <rect x="125" y="164" width="30" height="6" rx="3" fill="#22d3ee" opacity="0.5" />
                  <rect x="125" y="176" width="38" height="6" rx="3" fill="#4ade80" opacity="0.5" />

                  {/* Head */}
                  <ellipse cx="150" cy="58" rx="55" ry="50" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="3" />
                  <path d="M97 48 Q150 25 203 48" stroke="url(#metalGrad)" strokeWidth="5" fill="none" />

                  {/* Visor */}
                  <path d="M105 58 Q150 42 195 58 Q195 92 150 98 Q105 92 105 58" fill="url(#visorGrad)" opacity="0.9" filter="url(#glow)" />
                  <path d="M115 62 Q150 50 185 62 Q185 86 150 92 Q115 86 115 62" fill="#0f172a" opacity="0.6" />

                  {/* Eyes */}
                  <ellipse cx="130" cy="72" rx="12" ry="10" fill="#4ade80" filter="url(#glow)" className="pulse-glow" />
                  <ellipse cx="170" cy="72" rx="12" ry="10" fill="#4ade80" filter="url(#glow)" className="pulse-glow" />
                  <ellipse cx="130" cy="72" rx="6" ry="5" fill="#ffffff" />
                  <ellipse cx="170" cy="72" rx="6" ry="5" fill="#ffffff" />

                  {/* Antenna */}
                  <rect x="145" y="5" width="10" height="20" rx="4" fill="url(#metalGrad)" />
                  <circle cx="150" cy="3" r="8" fill="#4ade80" filter="url(#strongGlow)" className="pulse-glow" />
                  <circle cx="150" cy="3" r="4" fill="#ffffff" />

                  {/* Ear Modules */}
                  <rect x="88" y="48" width="12" height="32" rx="5" fill="url(#metalGrad)" />
                  <rect x="200" y="48" width="12" height="32" rx="5" fill="url(#metalGrad)" />
                  <circle cx="94" cy="64" r="4" fill="#22d3ee" filter="url(#glow)" className="pulse-glow" />
                  <circle cx="206" cy="64" r="4" fill="#22d3ee" filter="url(#glow)" className="pulse-glow" />

                  {/* Neck */}
                  <rect x="130" y="105" width="40" height="20" rx="8" fill="url(#metalGrad)" />

                  {/* Torso */}
                  <path d="M90 125 L210 125 L220 220 L205 240 L95 240 L80 220 Z" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />

                  {/* Chest Panel */}
                  <rect x="112" y="145" width="76" height="55" rx="8" fill="#0f172a" stroke="#4ade80" strokeWidth="1" />
                  <circle cx="150" cy="172" r="22" fill="#0f172a" stroke="#22d3ee" strokeWidth="2.5" />
                  <circle cx="150" cy="172" r="16" fill="#22d3ee" opacity="0.25" filter="url(#strongGlow)" className="pulse-glow" />
                  <circle cx="150" cy="172" r="10" fill="#22d3ee" opacity="0.7" filter="url(#glow)" />
                  <circle cx="150" cy="172" r="5" fill="#ffffff" />

                  {/* Shoulder Pads */}
                  <ellipse cx="85" cy="132" rx="22" ry="15" fill="url(#metalGrad)" />
                  <ellipse cx="215" cy="132" rx="22" ry="15" fill="url(#metalGrad)" />

                  {/* Left Arm */}
                  <rect x="55" y="138" width="30" height="60" rx="14" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />
                  <rect x="57" y="198" width="26" height="45" rx="12" fill="url(#metalGrad)" />
                  <ellipse cx="70" cy="246" rx="18" ry="16" fill="url(#metalGrad)" />
                  <g className="pulse-glow" filter="url(#strongGlow)">
                    <ellipse cx="70" cy="268" rx="14" ry="28" fill="url(#jetGrad)" />
                    <ellipse cx="70" cy="272" rx="8" ry="18" fill="#fef3c7" opacity="0.9" />
                  </g>

                  {/* Right Arm */}
                  <rect x="215" y="138" width="30" height="60" rx="14" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />
                  <rect x="217" y="198" width="26" height="45" rx="12" fill="url(#metalGrad)" />
                  <ellipse cx="230" cy="246" rx="18" ry="16" fill="url(#metalGrad)" />
                  <g className="pulse-glow" filter="url(#strongGlow)">
                    <ellipse cx="230" cy="268" rx="14" ry="28" fill="url(#jetGrad)" />
                    <ellipse cx="230" cy="272" rx="8" ry="18" fill="#fef3c7" opacity="0.9" />
                  </g>

                  {/* Hip */}
                  <ellipse cx="150" cy="245" rx="45" ry="18" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />

                  {/* Left Leg */}
                  <rect x="105" y="258" width="30" height="62" rx="14" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />
                  <rect x="107" y="320" width="26" height="35" rx="12" fill="url(#metalGrad)" />
                  <ellipse cx="120" cy="358" rx="22" ry="14" fill="url(#metalGrad)" />
                  <g className="pulse-glow" filter="url(#strongGlow)">
                    <ellipse cx="120" cy="378" rx="16" ry="32" fill="url(#jetGrad)" />
                    <ellipse cx="120" cy="382" rx="9" ry="20" fill="#fef3c7" opacity="0.9" />
                  </g>

                  {/* Right Leg */}
                  <rect x="165" y="258" width="30" height="62" rx="14" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />
                  <rect x="167" y="320" width="26" height="35" rx="12" fill="url(#metalGrad)" />
                  <ellipse cx="180" cy="358" rx="22" ry="14" fill="url(#metalGrad)" />
                  <g className="pulse-glow" filter="url(#strongGlow)">
                    <ellipse cx="180" cy="378" rx="16" ry="32" fill="url(#jetGrad)" />
                    <ellipse cx="180" cy="382" rx="9" ry="20" fill="#fef3c7" opacity="0.9" />
                  </g>

                  {/* Accent Lines */}
                  <path d="M92 180 L82 210" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
                  <path d="M208 180 L218 210" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </div>
  );
}