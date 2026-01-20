import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 font-sans antialiased overflow-hidden">
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes shadow-move {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.4; }
          50% { transform: translateX(-50%) scale(0.85); opacity: 0.2; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .float-animation { animation: float 4s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
        .shadow-animation { animation: shadow-move 4s ease-in-out infinite; }
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 5s ease infinite;
        }
      `}</style>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 w-64 h-64 lg:w-96 lg:h-96 bg-green-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 w-72 h-72 lg:w-[500px] lg:h-[500px] bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-blue-900/20 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating Particles */}
        <div className="hidden md:block absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/60 rounded-full pulse-glow" />
        <div className="hidden md:block absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400/60 rounded-full pulse-glow" />
        <div className="hidden md:block absolute bottom-1/3 left-1/3 w-2 h-2 bg-green-400/50 rounded-full pulse-glow" />
      </div>

      {/* Main Container */}
      <div className="h-full flex flex-col">
        {/* Hero Section */}
        <main className="relative z-10 flex-1 flex items-center px-4 sm:px-6 lg:px-12 xl:px-20 py-2 lg:py-0">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl">
              {/* Badge */}
              <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-green-400/10 border border-green-400/40 rounded-full mb-3 lg:mb-5">
                <span className="w-2 h-2 bg-green-400 rounded-full pulse-glow" />
                <span className="text-green-400 text-xs lg:text-sm font-bold">#1 Cyber Security Training Platform</span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-white leading-tight mb-3 lg:mb-5">
                Anyone can learn{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 gradient-animate">
                  cyber security
                </span>{' '}
                with TryHackMe
              </h1>

              {/* Neon Underline */}
              <div className="w-20 lg:w-28 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full shadow-lg shadow-green-400/60 mx-auto lg:mx-0 mb-3 lg:mb-5" />

              {/* Subtitle */}
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300 leading-relaxed mb-3 lg:mb-5 max-w-xl mx-auto lg:mx-0">
                Hands-on cyber security training through real-world scenarios. Learn by doing with our gamified platform.
              </p>

              {/* Email Form */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 lg:mb-5 max-w-lg mx-auto lg:mx-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 lg:px-5 py-2 lg:py-2.5 text-sm bg-slate-800/70 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all duration-300"
                />
                <button 
                  onClick={() => navigate("/signup")}
                  className="px-5 lg:px-7 py-2 lg:py-2.5 bg-gradient-to-r from-green-400 to-green-500 text-slate-900 rounded-full font-bold text-sm hover:shadow-xl hover:shadow-green-400/50 hover:scale-105 active:scale-100 transition-all duration-300 whitespace-nowrap"
                >
                  Join for FREE
                </button>
              </div>

              {/* Checklist */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-5 mb-3 lg:mb-5">
                {['Beginner friendly', 'Guides & challenges', 'Real-world scenarios'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <div className="w-4 h-4 lg:w-5 lg:h-5 bg-green-400/20 rounded-full flex items-center justify-center border border-green-400/40">
                      <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-200 text-xs lg:text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-5 lg:gap-8 pt-3 lg:pt-5 border-t border-gray-800">
                {[
                  { value: '2M+', label: 'Users' },
                  { value: '500+', label: 'Labs' },
                  { value: '100+', label: 'Learning Paths' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs lg:text-sm font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual - Robot */}
            <div className="flex-shrink-0 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Robot Shadow */}
                <div className="absolute -bottom-6 lg:-bottom-10 left-1/2 w-40 sm:w-52 lg:w-72 xl:w-80 2xl:w-96 h-8 lg:h-12 bg-cyan-400/40 rounded-full blur-2xl shadow-animation" />

                {/* Robot with Float Animation */}
                <div className="float-animation">
                  <svg
                    className="w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[420px] xl:w-96 xl:h-[500px] 2xl:w-[440px] 2xl:h-[580px]"
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
                    <rect x="115" y="110" width="70" height="85" rx="10" fill="url(#bodyGrad)" stroke="#4ade80" strokeWidth="2" />
                    <rect x="125" y="120" width="50" height="25" rx="5" fill="#0f172a" stroke="#22d3ee" strokeWidth="1" />
                    <circle cx="138" cy="132" r="6" fill="#4ade80" filter="url(#glow)" className="pulse-glow" />
                    <circle cx="150" cy="132" r="6" fill="#22d3ee" filter="url(#glow)" className="pulse-glow" />
                    <circle cx="162" cy="132" r="6" fill="#4ade80" filter="url(#glow)" className="pulse-glow" />
                    <rect x="125" y="152" width="45" height="6" rx="3" fill="#4ade80" opacity="0.6" />
                    <rect x="125" y="164" width="30" height="6" rx="3" fill="#22d3ee" opacity="0.6" />
                    <rect x="125" y="176" width="38" height="6" rx="3" fill="#4ade80" opacity="0.6" />

                    {/* Head */}
                    <ellipse cx="150" cy="58" rx="55" ry="50" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="3" />
                    <path d="M97 48 Q150 25 203 48" stroke="url(#metalGrad)" strokeWidth="5" fill="none" />

                    {/* Visor */}
                    <path d="M105 58 Q150 42 195 58 Q195 92 150 98 Q105 92 105 58" fill="url(#visorGrad)" opacity="0.95" filter="url(#glow)" />
                    <path d="M115 62 Q150 50 185 62 Q185 86 150 92 Q115 86 115 62" fill="#0f172a" opacity="0.7" />

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
                    <rect x="112" y="145" width="76" height="55" rx="8" fill="#0f172a" stroke="#4ade80" strokeWidth="1.5" />
                    <circle cx="150" cy="172" r="22" fill="#0f172a" stroke="#22d3ee" strokeWidth="3" />
                    <circle cx="150" cy="172" r="16" fill="#22d3ee" opacity="0.3" filter="url(#strongGlow)" className="pulse-glow" />
                    <circle cx="150" cy="172" r="10" fill="#22d3ee" opacity="0.75" filter="url(#glow)" />
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
                      <ellipse cx="70" cy="272" rx="8" ry="18" fill="#fef3c7" opacity="0.95" />
                    </g>

                    {/* Right Arm */}
                    <rect x="215" y="138" width="30" height="60" rx="14" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />
                    <rect x="217" y="198" width="26" height="45" rx="12" fill="url(#metalGrad)" />
                    <ellipse cx="230" cy="246" rx="18" ry="16" fill="url(#metalGrad)" />
                    <g className="pulse-glow" filter="url(#strongGlow)">
                      <ellipse cx="230" cy="268" rx="14" ry="28" fill="url(#jetGrad)" />
                      <ellipse cx="230" cy="272" rx="8" ry="18" fill="#fef3c7" opacity="0.95" />
                    </g>

                    {/* Hip */}
                    <ellipse cx="150" cy="245" rx="45" ry="18" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />

                    {/* Left Leg */}
                    <rect x="105" y="258" width="30" height="62" rx="14" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />
                    <rect x="107" y="320" width="26" height="35" rx="12" fill="url(#metalGrad)" />
                    <ellipse cx="120" cy="358" rx="22" ry="14" fill="url(#metalGrad)" />
                    <g className="pulse-glow" filter="url(#strongGlow)">
                      <ellipse cx="120" cy="378" rx="16" ry="32" fill="url(#jetGrad)" />
                      <ellipse cx="120" cy="382" rx="9" ry="20" fill="#fef3c7" opacity="0.95" />
                    </g>

                    {/* Right Leg */}
                    <rect x="165" y="258" width="30" height="62" rx="14" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />
                    <rect x="167" y="320" width="26" height="35" rx="12" fill="url(#metalGrad)" />
                    <ellipse cx="180" cy="358" rx="22" ry="14" fill="url(#metalGrad)" />
                    <g className="pulse-glow" filter="url(#strongGlow)">
                      <ellipse cx="180" cy="378" rx="16" ry="32" fill="url(#jetGrad)" />
                      <ellipse cx="180" cy="382" rx="9" ry="20" fill="#fef3c7" opacity="0.95" />
                    </g>

                    {/* Accent Lines */}
                    <path d="M92 180 L82 210" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" filter="url(#glow)" />
                    <path d="M208 180 L218 210" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" filter="url(#glow)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}