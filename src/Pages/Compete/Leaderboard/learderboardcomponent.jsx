// Leaderboard.jsx - Complete All-in-One Component

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Crown,
  Medal,
  Flame,
  Star,
  Zap,
  Search,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Info,
  Sparkles,
  Users,
  Globe,
  Target,
} from 'lucide-react';

// ==================== MOCK DATA ====================
const leaderboardData = [
  {
    id: 1,
    rank: 1,
    username: "0xCyberNinja",
    tag: "MYTHIC",
    tagColor: "#ff6b6b",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ninja1",
    points: 2847593,
    rooms: 1247,
    country: "US",
    countryName: "United States",
    level: 99,
    streak: 365,
    badges: ["Elite", "Pioneer", "Master"],
  },
  {
    id: 2,
    rank: 2,
    username: "H4ckM4ster",
    tag: "LEGEND",
    tagColor: "#ffd93d",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hacker2",
    points: 2156847,
    rooms: 1089,
    country: "GB",
    countryName: "United Kingdom",
    level: 95,
    streak: 280,
    badges: ["Elite", "Veteran"],
  },
  {
    id: 3,
    rank: 3,
    username: "Ph4nt0mR00t",
    tag: "LEGEND",
    tagColor: "#ffd93d",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=phantom3",
    points: 1987654,
    rooms: 956,
    country: "DE",
    countryName: "Germany",
    level: 92,
    streak: 210,
    badges: ["Expert", "Mentor"],
  },
  {
    id: 4,
    rank: 4,
    username: "BinaryGh0st",
    tag: "ELITE",
    tagColor: "#6bcb77",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=binary4",
    points: 1756321,
    rooms: 845,
    country: "CA",
    countryName: "Canada",
    level: 88,
    streak: 156,
    badges: ["Pro"],
  },
  {
    id: 5,
    rank: 5,
    username: "N3tW4rri0r",
    tag: "ELITE",
    tagColor: "#6bcb77",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=warrior5",
    points: 1654987,
    rooms: 798,
    country: "AU",
    countryName: "Australia",
    level: 85,
    streak: 134,
    badges: ["Expert"],
  },
  {
    id: 6,
    rank: 6,
    username: "CryptoWiz",
    tag: "PRO",
    tagColor: "#4d96ff",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=crypto6",
    points: 1543210,
    rooms: 723,
    country: "FR",
    countryName: "France",
    level: 82,
    streak: 98,
    badges: ["Rising Star"],
  },
  {
    id: 7,
    rank: 7,
    username: "ShellSh0ck",
    tag: "PRO",
    tagColor: "#4d96ff",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=shell7",
    points: 1432109,
    rooms: 687,
    country: "JP",
    countryName: "Japan",
    level: 79,
    streak: 87,
    badges: [],
  },
  {
    id: 8,
    rank: 8,
    username: "ZeroDayHunter",
    tag: "PRO",
    tagColor: "#4d96ff",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zero8",
    points: 1321098,
    rooms: 654,
    country: "NL",
    countryName: "Netherlands",
    level: 76,
    streak: 76,
    badges: [],
  },
  {
    id: 9,
    rank: 9,
    username: "ExploitKing",
    tag: "ADVANCED",
    tagColor: "#9b59b6",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=exploit9",
    points: 1210987,
    rooms: 612,
    country: "SE",
    countryName: "Sweden",
    level: 73,
    streak: 65,
    badges: [],
  },
  {
    id: 10,
    rank: 10,
    username: "P3n3tr4t0r",
    tag: "ADVANCED",
    tagColor: "#9b59b6",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pen10",
    points: 1109876,
    rooms: 589,
    country: "ES",
    countryName: "Spain",
    level: 70,
    streak: 54,
    badges: [],
  },
  {
    id: 11,
    rank: 11,
    username: "M4lw4r3M4st3r",
    tag: "ADVANCED",
    tagColor: "#9b59b6",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=malware11",
    points: 1008765,
    rooms: 567,
    country: "IT",
    countryName: "Italy",
    level: 68,
    streak: 43,
    badges: [],
  },
  {
    id: 12,
    rank: 12,
    username: "R00tK1t",
    tag: "HACKER",
    tagColor: "#1abc9c",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=root12",
    points: 987654,
    rooms: 534,
    country: "BR",
    countryName: "Brazil",
    level: 65,
    streak: 32,
    badges: [],
  },
  {
    id: 13,
    rank: 13,
    username: "BufferOverfl0w",
    tag: "HACKER",
    tagColor: "#1abc9c",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=buffer13",
    points: 876543,
    rooms: 498,
    country: "KR",
    countryName: "South Korea",
    level: 62,
    streak: 28,
    badges: [],
  },
  {
    id: 14,
    rank: 14,
    username: "SQLInj3ct0r",
    tag: "HACKER",
    tagColor: "#1abc9c",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sql14",
    points: 765432,
    rooms: 467,
    country: "IN",
    countryName: "India",
    level: 59,
    streak: 21,
    badges: [],
  },
  {
    id: 15,
    rank: 15,
    username: "XSSNinja",
    tag: "HACKER",
    tagColor: "#1abc9c",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=xss15",
    points: 654321,
    rooms: 423,
    country: "PL",
    countryName: "Poland",
    level: 56,
    streak: 14,
    badges: [],
  },
  {
    id: 16,
    rank: 16,
    username: "CipherBreaker",
    tag: "SKILLED",
    tagColor: "#e74c3c",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cipher16",
    points: 543210,
    rooms: 398,
    country: "RU",
    countryName: "Russia",
    level: 53,
    streak: 12,
    badges: [],
  },
  {
    id: 17,
    rank: 17,
    username: "F1rew4ll",
    tag: "SKILLED",
    tagColor: "#e74c3c",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=fire17",
    points: 498765,
    rooms: 376,
    country: "CN",
    countryName: "China",
    level: 50,
    streak: 10,
    badges: [],
  },
  {
    id: 18,
    rank: 18,
    username: "Tr0j4nH0rs3",
    tag: "SKILLED",
    tagColor: "#e74c3c",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=trojan18",
    points: 456789,
    rooms: 354,
    country: "MX",
    countryName: "Mexico",
    level: 47,
    streak: 8,
    badges: [],
  },
  {
    id: 19,
    rank: 19,
    username: "K3yL0gg3r",
    tag: "LEARNER",
    tagColor: "#3498db",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=key19",
    points: 398765,
    rooms: 312,
    country: "AR",
    countryName: "Argentina",
    level: 44,
    streak: 6,
    badges: [],
  },
  {
    id: 20,
    rank: 20,
    username: "B4ckd00r",
    tag: "LEARNER",
    tagColor: "#3498db",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=back20",
    points: 356789,
    rooms: 289,
    country: "ZA",
    countryName: "South Africa",
    level: 41,
    streak: 5,
    badges: [],
  },
];

const countries = [
  { code: "ALL", name: "All Countries" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "JP", name: "Japan" },
  { code: "IN", name: "India" },
  { code: "BR", name: "Brazil" },
];

// ==================== HELPER FUNCTIONS ====================
const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toLocaleString();
};

const getRankColor = (rank) => {
  switch (rank) {
    case 2: return 'from-gray-300 to-gray-400';
    case 3: return 'from-amber-600 to-amber-700';
    case 4: return 'from-cyan-400 to-cyan-500';
    case 5: return 'from-purple-400 to-purple-500';
    default: return 'from-gray-400 to-gray-500';
  }
};

const getMedalColor = (rank) => {
  switch (rank) {
    case 2: return '#C0C0C0';
    case 3: return '#CD7F32';
    case 4: return '#22D3EE';
    case 5: return '#A855F7';
    default: return '#9CA3AF';
  }
};

// ==================== HERO SECTION ====================
const LeaderboardHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? '#a3e635' : '#22d3ee';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(163, 230, 53, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(163, 230, 53, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-[400px] overflow-hidden bg-gradient-to-b from-[#0b1220] via-[#0f1c2e] to-[#0d1526]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#a3e635]/5 via-transparent to-[#22d3ee]/5" />
      
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-[#a3e635]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-80 h-80 bg-[#22d3ee]/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3D Floating Element */}
      <motion.div
        className="absolute top-32 right-32 hidden lg:block"
        animate={{ rotateY: 360, rotateX: [0, 15, 0, -15, 0] }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ perspective: 1000 }}
      >
        <div className="w-32 h-32 relative">
          <div className="absolute inset-0 border-2 border-[#a3e635]/50 bg-[#a3e635]/5 backdrop-blur-sm rounded-lg transform rotate-45 shadow-[0_0_30px_rgba(163,230,53,0.3)]" />
          <div className="absolute inset-4 border border-[#22d3ee]/50 bg-[#22d3ee]/5 rounded-lg transform -rotate-12" />
          <Trophy className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-[#a3e635]" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-40 left-[15%] hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-8 h-8 text-[#a3e635]/40" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] px-4 py-16">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#a3e635] blur-xl opacity-50 rounded-full" />
            <div className="relative bg-gradient-to-br from-[#a3e635] to-[#84cc16] p-4 rounded-2xl">
              <Trophy className="w-10 h-10 text-black" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
            Leader
          </span>
          <span className="bg-gradient-to-r from-[#a3e635] to-[#84cc16] bg-clip-text text-transparent">
            boards
          </span>
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1.5 bg-gradient-to-r from-[#a3e635] via-[#84cc16] to-[#a3e635] rounded-full mb-6 shadow-[0_0_20px_rgba(163,230,53,0.5)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-400 text-lg md:text-xl text-center max-w-2xl leading-relaxed"
        >
          Welcome to the <span className="text-[#a3e635] font-semibold">wall of fame</span> — 
          Here are our top 50 users who have mastered the art of cyber security.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-8 mt-10"
        >
          {[
            { label: "Total Users", value: "2.5M+", icon: Users },
            { label: "Rooms Completed", value: "15M+", icon: Target },
            { label: "Countries", value: "180+", icon: Globe },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10"
            >
              <stat.icon className="w-6 h-6 text-[#a3e635] mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1526] to-transparent" />
    </div>
  );
};

// ==================== TABS SECTION ====================
const LeaderboardTabs = ({
  activeCategory,
  setActiveCategory,
  activeTime,
  setActiveTime,
  selectedCountry,
  setSelectedCountry,
  searchQuery,
  setSearchQuery,
}) => {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categoryTabs = [
    { id: 'general', label: 'General' },
    { id: 'koth', label: 'King of the Hill' },
  ];

  const timeTabs = [
    { id: 'alltime', label: 'All time' },
    { id: 'monthly', label: 'Monthly' },
  ];

  return (
    <div className="bg-[#0d1526] sticky top-0 z-40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Category Tabs */}
            <div className="flex bg-[#1a2744] rounded-xl p-1.5 shadow-lg">
              {categoryTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    activeCategory === tab.id ? 'text-black' : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: activeCategory === tab.id ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeCategory === tab.id && (
                    <motion.div
                      layoutId="categoryBg"
                      className="absolute inset-0 bg-gradient-to-r from-[#a3e635] to-[#84cc16] rounded-lg shadow-[0_0_20px_rgba(163,230,53,0.4)]"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              ))}
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/10" />

            {/* Time Tabs */}
            <div className="flex bg-[#1a2744] rounded-xl p-1.5 shadow-lg">
              {timeTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTime(tab.id)}
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    activeTime === tab.id ? 'text-black' : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: activeTime === tab.id ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeTime === tab.id && (
                    <motion.div
                      layoutId="timeBg"
                      className="absolute inset-0 bg-gradient-to-r from-[#a3e635] to-[#84cc16] rounded-lg shadow-[0_0_20px_rgba(163,230,53,0.4)]"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative">
              <AnimatePresence>
                {isSearchOpen ? (
                  <motion.div
                    initial={{ width: 40, opacity: 0 }}
                    animate={{ width: 250, opacity: 1 }}
                    exit={{ width: 40, opacity: 0 }}
                    className="flex items-center bg-[#1a2744] rounded-xl overflow-hidden border border-white/10 focus-within:border-[#a3e635]/50"
                  >
                    <Search className="w-5 h-5 text-gray-400 ml-3" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search username..."
                      className="flex-1 bg-transparent px-3 py-2.5 text-sm text-white placeholder-gray-500 outline-none"
                      autoFocus
                    />
                    <button
                      onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                      className="p-2 hover:bg-white/5"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2.5 bg-[#1a2744] rounded-xl text-gray-400 hover:text-white hover:bg-[#243656] transition-all duration-200 border border-transparent hover:border-[#a3e635]/30"
                  >
                    <Search className="w-5 h-5" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Country Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#1a2744] rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-[#243656] transition-all duration-200 border border-transparent hover:border-[#a3e635]/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {selectedCountry !== 'ALL' && (
                  <img
                    src={`https://flagcdn.com/24x18/${selectedCountry.toLowerCase()}.png`}
                    alt={selectedCountry}
                    className="w-5 h-4 rounded-sm object-cover"
                  />
                )}
                <span>{countries.find(c => c.code === selectedCountry)?.name || 'All Countries'}</span>
                <motion.div animate={{ rotate: isCountryOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isCountryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-[#1a2744] rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50"
                  >
                    <div className="max-h-64 overflow-y-auto">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => { setSelectedCountry(country.code); setIsCountryOpen(false); }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-all duration-200 ${
                            selectedCountry === country.code
                              ? 'bg-[#a3e635]/20 text-[#a3e635]'
                              : 'text-gray-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {country.code !== 'ALL' && (
                            <img
                              src={`https://flagcdn.com/24x18/${country.code.toLowerCase()}.png`}
                              alt={country.name}
                              className="w-6 h-4 rounded-sm object-cover"
                            />
                          )}
                          <span>{country.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Rank Status */}
            <motion.div
              className="flex items-center gap-2 px-4 py-2.5 bg-[#1a2744]/50 rounded-xl border border-[#a3e635]/20"
              whileHover={{ borderColor: 'rgba(163, 230, 53, 0.5)' }}
            >
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">You are </span>
              <span className="text-sm font-semibold text-[#a3e635]">unranked</span>
              <Info className="w-4 h-4 text-gray-500 cursor-help" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== TOP RANK CARD (RANK #1) ====================
const TopRankCard = ({ user }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -10);
    setRotateY(((x - centerX) / centerX) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-4xl mx-auto mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-[#1a2744] via-[#1e3a5f] to-[#1a2744] rounded-3xl overflow-hidden border border-[#a3e635]/30 shadow-2xl"
        animate={{ rotateX, rotateY, scale: isHovered ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(163, 230, 53, 0.25), 0 0 60px rgba(163, 230, 53, 0.1)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 0 10 L 40 10 M 10 0 L 10 40' fill='none' stroke='%23a3e635' opacity='0.2' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#a3e635]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Corner Design */}
        <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-[#a3e635] to-[#84cc16] transform rotate-45 translate-x-28 -translate-y-28" />
          <motion.div
            className="absolute top-6 right-6"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              rotate: isHovered ? [0, 10, -10, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Crown className="w-10 h-10 text-black drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Rank Number */}
            <motion.div className="relative" style={{ transform: 'translateZ(50px)' }}>
              <div className="text-[120px] md:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#a3e635] to-[#a3e635]/30 leading-none select-none">
                1
              </div>
              <div className="absolute inset-0 text-[120px] md:text-[160px] font-black text-[#a3e635]/10 blur-xl leading-none">
                1
              </div>
            </motion.div>

            {/* Avatar */}
            <motion.div className="relative" style={{ transform: 'translateZ(30px)' }}>
              <div className="absolute inset-0 bg-[#a3e635] rounded-full blur-xl opacity-50" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-r from-[#a3e635] via-[#84cc16] to-[#a3e635]">
                <div className="w-full h-full rounded-full p-1 bg-[#1a2744]">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#a3e635] to-[#84cc16] rounded-full px-3 py-1 shadow-lg"
                animate={{ y: isHovered ? -5 : 0 }}
              >
                <span className="text-black font-bold text-sm">LVL {user.level}</span>
              </motion.div>
            </motion.div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left" style={{ transform: 'translateZ(20px)' }}>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
                <h2 className="text-3xl md:text-4xl font-bold text-white">{user.username}</h2>
                <span
                  className="px-3 py-1 text-xs font-bold rounded-full"
                  style={{ backgroundColor: user.tagColor + '30', color: user.tagColor }}
                >
                  {user.tag}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
                {user.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                  >
                    <Star className="w-3 h-3 text-[#a3e635]" />
                    {badge}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <Trophy className="w-5 h-5 text-[#a3e635]" />
                    <span className="text-sm text-gray-400">Points</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {formatNumber(user.points)}
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <Zap className="w-5 h-5 text-[#22d3ee]" />
                    <span className="text-sm text-gray-400">Rooms</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {formatNumber(user.rooms)}
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-400">Streak</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-1">
                    {user.streak}
                    <span className="text-sm text-gray-400">days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Country */}
            <div className="hidden lg:flex flex-col items-center gap-2" style={{ transform: 'translateZ(40px)' }}>
              <img
                src={`https://flagcdn.com/80x60/${user.country.toLowerCase()}.png`}
                alt={user.countryName}
                className="w-16 h-12 rounded-lg shadow-lg object-cover border-2 border-white/20"
              />
              <span className="text-sm text-gray-400">{user.countryName}</span>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a3e635] to-transparent"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

// ==================== RANK CARD (RANK 2-5) ====================
const RankCard = ({ user, index }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -8);
    setRotateY(((x - centerX) / centerX) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl border border-gray-100"
        animate={{ rotateX, rotateY, scale: isHovered ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: isHovered
            ? '0 20px 40px -12px rgba(0, 0, 0, 0.2), 0 0 30px rgba(163, 230, 53, 0.15)'
            : '0 10px 30px -12px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Rank Badge */}
        <motion.div
          className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${getRankColor(user.rank)} flex items-center justify-center shadow-lg`}
          animate={{ rotate: isHovered ? 10 : 0 }}
          style={{ transform: 'translateZ(30px)' }}
        >
          <span className="text-xl font-bold text-white">{user.rank}</span>
        </motion.div>

        <motion.div
          className="absolute top-4 left-4"
          animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0, scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <Medal className="w-6 h-6" style={{ color: getMedalColor(user.rank) }} />
        </motion.div>

        <div className="p-6 pt-8">
          <motion.div
            className="relative mx-auto w-20 h-20 mb-4"
            animate={{ rotateY: isHovered ? 10 : 0 }}
            style={{ transform: 'translateZ(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#a3e635] to-[#84cc16] rounded-full blur-md opacity-50" />
            <div className="relative w-full h-full rounded-full p-0.5 bg-gradient-to-r from-[#a3e635] to-[#84cc16]">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#1a2744] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {user.level}
            </div>
          </motion.div>

          <div className="text-center mb-4" style={{ transform: 'translateZ(15px)' }}>
            <h3 className="text-lg font-bold text-gray-800 mb-1">{user.username}</h3>
            <span
              className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full"
              style={{ backgroundColor: user.tagColor + '20', color: user.tagColor }}
            >
              {user.tag}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3" style={{ transform: 'translateZ(10px)' }}>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <Trophy className="w-4 h-4 text-[#a3e635] mx-auto mb-1" />
              <div className="text-lg font-bold text-gray-800">{formatNumber(user.points)}</div>
              <div className="text-xs text-gray-500">Points</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <Zap className="w-4 h-4 text-[#22d3ee] mx-auto mb-1" />
              <div className="text-lg font-bold text-gray-800">{formatNumber(user.rooms)}</div>
              <div className="text-xs text-gray-500">Rooms</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-100">
            <img
              src={`https://flagcdn.com/24x18/${user.country.toLowerCase()}.png`}
              alt={user.countryName}
              className="w-6 h-4 rounded-sm object-cover"
            />
            <span className="text-sm text-gray-500">{user.countryName}</span>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a3e635] to-[#84cc16]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

// ==================== LEADERBOARD TABLE ====================
const LeaderboardTable = ({ users, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const currentUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const SkeletonRow = () => (
    <tr className="animate-pulse">
      <td className="px-6 py-4"><div className="w-8 h-8 bg-gray-200 rounded-lg" /></td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
          <div className="w-32 h-4 bg-gray-200 rounded" />
        </div>
      </td>
      <td className="px-6 py-4"><div className="w-8 h-6 bg-gray-200 rounded" /></td>
      <td className="px-6 py-4"><div className="w-20 h-4 bg-gray-200 rounded" /></td>
      <td className="px-6 py-4"><div className="w-16 h-4 bg-gray-200 rounded" /></td>
    </tr>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
    >
      <div className="bg-gradient-to-r from-[#1a2744] to-[#243656] px-6 py-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#a3e635]" />
          Full Rankings
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Country</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Points</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Rooms</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              [...Array(5)].map((_, i) => <SkeletonRow key={i} />)
            ) : (
              <AnimatePresence mode="wait">
                {currentUsers.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group hover:bg-[#a3e635]/5 transition-all duration-200 cursor-pointer relative"
                  >
                    <td className="relative px-6 py-4">
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#a3e635] origin-top"
                        initial={{ scaleY: 0 }}
                        whileHover={{ scaleY: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-[#a3e635]/20 group-hover:to-[#a3e635]/10 transition-all duration-200">
                        <span className="text-sm font-bold text-gray-600 group-hover:text-[#a3e635]">
                          {user.rank}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <motion.div className="relative" whileHover={{ scale: 1.1, rotate: 5 }}>
                          <img
                            src={user.avatar}
                            alt={user.username}
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 group-hover:border-[#a3e635] transition-colors"
                          />
                        </motion.div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-[#a3e635] group-hover:text-[#84cc16] transition-colors">
                              {user.username}
                            </span>
                            <span
                              className="px-2 py-0.5 text-xs font-medium rounded-full"
                              style={{ backgroundColor: user.tagColor + '20', color: user.tagColor }}
                            >
                              {user.tag}
                            </span>
                          </div>
                          <span className="text-xs text-gray-400">Level {user.level}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={`https://flagcdn.com/24x18/${user.country.toLowerCase()}.png`}
                          alt={user.countryName}
                          className="w-6 h-4 rounded-sm object-cover shadow-sm"
                        />
                        <span className="text-sm text-gray-500 hidden sm:inline">{user.country}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-800">{formatNumber(user.points)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">{formatNumber(user.rooms)}</span>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
          {Math.min(currentPage * itemsPerPage, users.length)} of {users.length} users
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {[...Array(totalPages)].map((_, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-lg font-medium transition-all ${
                currentPage === i + 1
                  ? 'bg-[#a3e635] text-black'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== MAIN LEADERBOARD COMPONENT ====================
const Leaderboard = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [activeTime, setActiveTime] = useState('alltime');
  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let data = [...leaderboardData];

      if (selectedCountry !== 'ALL') {
        data = data.filter((user) => user.country === selectedCountry);
      }

      if (searchQuery) {
        data = data.filter((user) =>
          user.username.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Re-assign ranks after filtering
      data = data.map((user, index) => ({ ...user, rank: index + 1 }));

      setFilteredData(data);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCountry, searchQuery, activeCategory, activeTime]);

  const topUser = filteredData[0];
  const topFourUsers = filteredData.slice(1, 5);
  const tableUsers = filteredData.slice(5);

  return (
    <div className="min-h-screen bg-[#0d1526]">
      {/* Hero Section */}
      <LeaderboardHero />

      {/* Tabs Section */}
      <LeaderboardTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeTime={activeTime}
        setActiveTime={setActiveTime}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-12 h-12 border-4 border-[#a3e635]/20 border-t-[#a3e635] rounded-full" />
            </motion.div>
          </div>
        ) : filteredData.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        ) : (
          <>
            {/* Top 1 Card */}
            {topUser && <TopRankCard user={topUser} />}

            {/* Top 2-5 Cards */}
            {topFourUsers.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {topFourUsers.map((user, index) => (
                  <RankCard key={user.id} user={user} index={index} />
                ))}
              </div>
            )}

            {/* Full Leaderboard Table */}
            {tableUsers.length > 0 && (
              <LeaderboardTable users={tableUsers} isLoading={false} />
            )}
          </>
        )}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#1a2744] to-[#243656] py-16"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to join the <span className="text-[#a3e635]">leaderboard</span>?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Start your cybersecurity journey today and compete with hackers worldwide.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(163, 230, 53, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#a3e635] to-[#84cc16] text-black font-bold rounded-full text-lg shadow-lg"
          >
            Start Hacking Now
          </motion.button>
        </div>
      </motion.div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Leaderboard;