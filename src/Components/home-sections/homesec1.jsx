import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const words = ['CYBER SECURITY'];

  // Typing effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWordIndex]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    // ✅ avoid mouse tracking on mobile devices
    if (window.innerWidth > 1024) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-sans antialiased overflow-x-hidden pt-16"
    >
      {/* ✅ GLOBAL RESPONSIVENESS FIX */}
      <style>{`
        html, body {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(140px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        .float-animation { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .blink { animation: blink 1s step-end infinite; }
        .orbit { animation: orbit 12s linear infinite; }
        .gradient-text {
          background-size: 200% auto;
          animation: gradient-shift 3s linear infinite;
        }
        .glass-effect {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(74, 222, 128, 0.2);
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-5px);
          border-color: rgba(74, 222, 128, 0.5);
        }
      `}</style>

      {/* ✅ Subtle Background Gradient Orbs (mobile safe) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col overflow-x-hidden">

        {/* Hero Section */}
        <main className="flex-1 flex items-center px-4 sm:px-6 lg:px-12 xl:px-20 py-12 sm:py-16 lg:py-20 overflow-x-hidden">
          <div className="max-w-7xl mx-auto w-full overflow-x-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 overflow-x-hidden">

              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-400/10 border border-green-400/30 rounded-full mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="text-green-400 text-xs sm:text-sm font-semibold">
                    #1 Cyber Security Training Platform
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
                  Master{' '}
                  <span className="block sm:inline">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 gradient-text">
                      {typedText}
                    </span>
                    <span className="text-green-400 blink">|</span>
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                  Hands-on training through real-world attack scenarios. Learn ethical hacking with our gamified platform.
                </p>

                {/* Email Form */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-md mx-auto lg:mx-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-4 text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                  />
                  <button
                    onClick={() => navigate("/signup")}
                    className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-slate-900 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-green-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Start Free
                  </button>
                </div>

                {/* Features */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                  {[
                    { icon: '✓', text: 'No credit card required' },
                    { icon: '✓', text: '500+ hands-on labs' },
                    { icon: '✓', text: 'Beginner friendly' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center text-green-400 text-xs">
                        {item.icon}
                      </span>
                      <span className="text-gray-400 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 pt-8 border-t border-slate-800">
                  {[
                    { value: '2M+', label: 'Active Users' },
                    { value: '500+', label: 'Labs' },
                    { value: '50+', label: 'Paths' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center lg:text-left">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                        {stat.value}
                      </div>
                      <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual - Robot */}
              <div className="flex-shrink-0 order-1 lg:order-2 flex justify-center w-full lg:w-auto overflow-hidden">
                <div
                  className="relative max-w-full overflow-hidden"
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg) translateZ(0)`,
                    transition: 'transform 0.1s ease-out',
                  }}
                >
                  {/* Orbital Ring */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[480px] lg:h-[480px] border border-green-400/20 rounded-full" />
                  </div>

                  {/* Orbiting Icons */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute orbit" style={{ animationDuration: '10s' }}>
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-400/30">
                        <span className="text-lg">🔒</span>
                      </div>
                    </div>
                    <div className="absolute orbit" style={{ animationDuration: '15s', animationDelay: '-5s' }}>
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/30">
                        <span className="text-lg">💻</span>
                      </div>
                    </div>
                    <div className="absolute orbit" style={{ animationDuration: '12s', animationDelay: '-8s' }}>
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-400/30">
                        <span className="text-lg">🛡️</span>
                      </div>
                    </div>
                  </div>

                  {/* Robot */}
                  <div className="relative float-animation">
                    {/* Glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-green-400/20 rounded-full blur-3xl" />
                    </div>

                    {/* Shadow */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 sm:w-48 lg:w-56 h-6 bg-cyan-400/20 rounded-full blur-xl" />

                    {/* Robot SVG */}
                    <svg
                      className="relative w-64 h-80 sm:w-80 sm:h-[400px] lg:w-[420px] lg:h-[520px] max-w-full"
                      viewBox="0 0 400 500"
                      fill="none"
                    >
                      {/* KEEPING YOUR SVG EXACTLY SAME */}
                      {/* (SVG content unchanged below) */}

                      <defs>
                        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1e3a5f" />
                          <stop offset="50%" stopColor="#0f172a" />
                          <stop offset="100%" stopColor="#1e3a5f" />
                        </linearGradient>

                        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#cbd5e1" />
                          <stop offset="30%" stopColor="#f1f5f9" />
                          <stop offset="50%" stopColor="#e2e8f0" />
                          <stop offset="70%" stopColor="#94a3b8" />
                          <stop offset="100%" stopColor="#64748b" />
                        </linearGradient>

                        <linearGradient id="neonGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="50%" stopColor="#4ade80" />
                          <stop offset="100%" stopColor="#22c55e" />
                        </linearGradient>

                        <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="50%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>

                        <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.9" />
                          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                        </linearGradient>

                        <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4ade80">
                            <animate attributeName="stop-color" values="#4ade80;#22d3ee;#4ade80" dur="2s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="100%" stopColor="#22d3ee">
                            <animate attributeName="stop-color" values="#22d3ee;#4ade80;#22d3ee" dur="2s" repeatCount="indefinite" />
                          </stop>
                        </linearGradient>

                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>

                        <filter id="strongGlow">
                          <feGaussianBlur stdDeviation="6" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>

                        <clipPath id="screenClip">
                          <rect x="145" y="190" width="110" height="70" rx="8" />
                        </clipPath>
                      </defs>

                      {/* Head */}
                      <g>
                        <ellipse cx="200" cy="95" rx="68" ry="58" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="3" />
                        <ellipse cx="200" cy="80" rx="45" ry="30" fill="rgba(255,255,255,0.03)" />

                        {/* Antenna */}
                        <rect x="185" y="32" width="30" height="22" rx="8" fill="url(#metalGrad)" />
                        <rect x="193" y="8" width="14" height="28" rx="7" fill="url(#metalGrad)" />
                        <circle cx="200" cy="10" r="10" fill="url(#neonGreen)" filter="url(#strongGlow)">
                          <animate attributeName="r" values="8;11;8" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="200" cy="10" r="5" fill="white" />

                        {/* Ears */}
                        <rect x="126" y="78" width="14" height="40" rx="7" fill="url(#metalGrad)" />
                        <rect x="260" y="78" width="14" height="40" rx="7" fill="url(#metalGrad)" />
                        <circle cx="133" cy="98" r="4" fill="url(#neonCyan)" filter="url(#glow)">
                          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="267" cy="98" r="4" fill="url(#neonCyan)" filter="url(#glow)">
                          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="1s" />
                        </circle>

                        {/* Visor */}
                        <path d="M148 96 Q200 72 252 96 Q252 128 200 138 Q148 128 148 96" fill="url(#neonCyan)" opacity="0.9" filter="url(#glow)" />
                        <path d="M155 99 Q200 80 245 99 Q245 124 200 132 Q155 124 155 99" fill="#0f172a" opacity="0.85" />

                        {/* Eyes */}
                        <g filter="url(#glow)">
                          <ellipse cx="175" cy="108" rx="16" ry="12" fill="#0f172a" />
                          <ellipse cx="175" cy="108" rx="12" ry="9" fill="url(#neonGreen)">
                            <animate attributeName="rx" values="12;14;12" dur="3s" repeatCount="indefinite" />
                          </ellipse>
                          <ellipse cx="175" cy="105" rx="5" ry="4" fill="white" />

                          <ellipse cx="225" cy="108" rx="16" ry="12" fill="#0f172a" />
                          <ellipse cx="225" cy="108" rx="12" ry="9" fill="url(#neonGreen)">
                            <animate attributeName="rx" values="12;14;12" dur="3s" repeatCount="indefinite" begin="0.5s" />
                          </ellipse>
                          <ellipse cx="225" cy="105" rx="5" ry="4" fill="white" />
                        </g>
                      </g>

                      {/* Neck */}
                      <rect x="178" y="150" width="44" height="28" rx="10" fill="url(#metalGrad)" />

                      {/* Torso */}
                      <g>
                        <path d="M132 178 L268 178 L282 292 L262 322 L138 322 L118 292 Z" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />

                        {/* Screen */}
                        <rect x="145" y="190" width="110" height="70" rx="8" fill="#0a0a0a" stroke="url(#neonGreen)" strokeWidth="1.5" />

                        <g clipPath="url(#screenClip)">
                          <rect x="145" y="190" width="110" height="70" fill="#0a0a0a" />
                          <text x="152" y="208" fill="#4ade80" fontSize="7" fontFamily="monospace">$ nmap -sS target</text>
                          <text x="152" y="220" fill="#22d3ee" fontSize="7" fontFamily="monospace">[*] Scanning...</text>
                          <text x="152" y="232" fill="#4ade80" fontSize="7" fontFamily="monospace">PORT   STATE</text>
                          <text x="152" y="244" fill="#fbbf24" fontSize="7" fontFamily="monospace">22/tcp  open</text>
                          <rect x="152" y="250" width="4" height="6" fill="#4ade80">
                            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
                          </rect>
                        </g>

                        {/* Core */}
                        <circle cx="200" cy="292" r="18" fill="#0f172a" stroke="url(#neonCyan)" strokeWidth="2" />
                        <circle cx="200" cy="292" r="13" fill="url(#coreGrad)" filter="url(#strongGlow)">
                          <animate attributeName="r" values="11;14;11" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="200" cy="292" r="6" fill="white" opacity="0.9" />

                        {/* LEDs */}
                        <circle cx="162" cy="270" r="3" fill="#4ade80" filter="url(#glow)">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="175" cy="270" r="3" fill="#22d3ee" filter="url(#glow)">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" begin="0.33s" />
                        </circle>
                        <circle cx="188" cy="270" r="3" fill="#fbbf24" filter="url(#glow)">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" begin="0.66s" />
                        </circle>
                      </g>

                      {/* Shoulders */}
                      <ellipse cx="118" cy="188" rx="26" ry="16" fill="url(#metalGrad)" />
                      <ellipse cx="282" cy="188" rx="26" ry="16" fill="url(#metalGrad)" />

                      {/* Left Arm */}
                      <g>
                        <rect x="78" y="198" width="38" height="65" rx="16" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />
                        <rect x="82" y="263" width="30" height="50" rx="14" fill="url(#metalGrad)" />
                        <ellipse cx="97" cy="318" rx="20" ry="16" fill="url(#metalGrad)" />
                        <ellipse cx="97" cy="318" rx="12" ry="10" fill="url(#neonCyan)" opacity="0.25" filter="url(#glow)" />
                        <rect x="84" y="215" width="26" height="6" rx="3" fill="url(#neonGreen)" opacity="0.5" />
                      </g>

                      {/* Right Arm */}
                      <g>
                        <rect x="284" y="198" width="38" height="65" rx="16" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />
                        <rect x="288" y="263" width="30" height="50" rx="14" fill="url(#metalGrad)" />
                        <ellipse cx="303" cy="318" rx="20" ry="16" fill="url(#metalGrad)" />
                        <ellipse cx="303" cy="318" rx="12" ry="10" fill="url(#neonCyan)" opacity="0.25" filter="url(#glow)" />
                        <rect x="290" y="215" width="26" height="6" rx="3" fill="url(#neonGreen)" opacity="0.5" />
                      </g>

                      {/* Hip */}
                      <ellipse cx="200" cy="332" rx="52" ry="20" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />

                      {/* Left Leg */}
                      <g>
                        <rect x="148" y="348" width="36" height="70" rx="16" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />
                        <rect x="152" y="418" width="28" height="42" rx="12" fill="url(#metalGrad)" />
                        <ellipse cx="166" cy="465" rx="24" ry="14" fill="url(#metalGrad)" />

                        {/* Thruster */}
                        <ellipse cx="166" cy="480" rx="16" ry="28" fill="url(#flameGrad)" opacity="0.8" filter="url(#strongGlow)">
                          <animate attributeName="ry" values="24;32;24" dur="0.4s" repeatCount="indefinite" />
                        </ellipse>
                        <ellipse cx="166" cy="480" rx="8" ry="16" fill="white" opacity="0.9">
                          <animate attributeName="ry" values="14;20;14" dur="0.35s" repeatCount="indefinite" />
                        </ellipse>
                      </g>

                      {/* Right Leg */}
                      <g>
                        <rect x="216" y="348" width="36" height="70" rx="16" fill="url(#bodyGrad)" stroke="url(#metalGrad)" strokeWidth="2" />
                        <rect x="220" y="418" width="28" height="42" rx="12" fill="url(#metalGrad)" />
                        <ellipse cx="234" cy="465" rx="24" ry="14" fill="url(#metalGrad)" />

                        {/* Thruster */}
                        <ellipse cx="234" cy="480" rx="16" ry="28" fill="url(#flameGrad)" opacity="0.8" filter="url(#strongGlow)">
                          <animate attributeName="ry" values="24;32;24" dur="0.4s" repeatCount="indefinite" begin="0.1s" />
                        </ellipse>
                        <ellipse cx="234" cy="480" rx="8" ry="16" fill="white" opacity="0.9">
                          <animate attributeName="ry" values="14;20;14" dur="0.35s" repeatCount="indefinite" begin="0.1s" />
                        </ellipse>
                      </g>

                      {/* Accent Lines */}
                      <path d="M130 238 L120 275" stroke="url(#neonGreen)" strokeWidth="3" strokeLinecap="round" filter="url(#glow)" />
                      <path d="M270 238 L280 275" stroke="url(#neonGreen)" strokeWidth="3" strokeLinecap="round" filter="url(#glow)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section className="relative z-10 px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-t border-slate-800/50 overflow-x-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Why choose{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  HackYard?
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                Everything you need to become a cyber security expert
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎮',
                  title: 'Gamified Learning',
                  description: 'Earn points, badges, and compete on leaderboards as you learn.',
                },
                {
                  icon: '🔬',
                  title: 'Real Labs',
                  description: 'Practice in safe, isolated environments with real vulnerabilities.',
                },
                {
                  icon: '🏴',
                  title: 'CTF Challenges',
                  description: 'Test your skills with capture the flag competitions.',
                },
                {
                  icon: '📚',
                  title: 'Learning Paths',
                  description: 'Structured courses from beginner to advanced levels.',
                },
                {
                  icon: '👥',
                  title: 'Community',
                  description: 'Connect with security professionals worldwide.',
                },
                {
                  icon: '📜',
                  title: 'Certifications',
                  description: 'Industry-recognized certificates for your career.',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl glass-effect card-hover"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
