// Challenges.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============ STATIC DATA ============
const progressStats = {
  completed: 460,
  total: 1460,
  easy: 156,
  medium: 207,
  hard: 97,
};

const filterOptions = {
  type: ['All Types', 'Web', 'Crypto', 'Forensics', 'Reverse Engineering', 'Pwn', 'Misc'],
  sortBy: ['Newest', 'Oldest', 'Most Popular', 'Difficulty', 'Duration'],
  difficulty: ['All Difficulties', 'Easy', 'Medium', 'Hard'],
  status: ['All Status', 'Completed', 'In Progress', 'Not Started'],
  subscription: ['All', 'Free', 'Premium'],
};

const featuredChallenge = {
  id: 'pickle-rick',
  title: 'Pickle Rick',
  subtitle: 'A Rick and Morty CTF. Help turn Rick back into a human!',
  difficulty: 'Easy',
  image: '🥒',
  background: 'from-[#0f2027] via-[#203a43] to-[#2c5364]',
};

const fiveMinuteHacks = [
  { id: 1, name: 'Corridor', difficulty: 'Easy', time: '5 mins', icon: '🚪', category: 'Web', isFavorite: false },
  { id: 2, name: 'Neighbour', difficulty: 'Easy', time: '4 mins', icon: '🏠', category: 'OSINT', isFavorite: true },
  { id: 3, name: 'Lo-Fi', difficulty: 'Easy', time: '5 mins', icon: '🎵', category: 'Steganography', isFavorite: false },
  { id: 4, name: 'MD2PDF', difficulty: 'Easy', time: '5 mins', icon: '📄', category: 'Web', isFavorite: false },
  { id: 5, name: 'TokenBreak', difficulty: 'Easy', time: '4 mins', icon: '🔑', category: 'Crypto', isFavorite: true },
  { id: 6, name: 'EasyPass', difficulty: 'Easy', time: '3 mins', icon: '🔐', category: 'Reverse', isFavorite: false },
  { id: 7, name: 'BabyWeb', difficulty: 'Easy', time: '5 mins', icon: '🕸️', category: 'Web', isFavorite: false },
  { id: 8, name: 'Decode Me', difficulty: 'Easy', time: '4 mins', icon: '🧩', category: 'Crypto', isFavorite: false },
];

const easyChallenges = [
  { id: 1, name: 'Crack the Hash', difficulty: 'Easy', time: '15 mins', image: '🔓', category: 'Crypto', users: 12453, completionRate: 89 },
  { id: 2, name: 'Fowsniff CTF', difficulty: 'Easy', time: '20 mins', image: '🐦', category: 'Network', users: 8932, completionRate: 76 },
  { id: 3, name: 'Pickle Rick', difficulty: 'Easy', time: '25 mins', image: '🥒', category: 'Web', users: 15678, completionRate: 82 },
  { id: 4, name: 'HeartBleed', difficulty: 'Easy', time: '30 mins', image: '💔', category: 'Network', users: 9876, completionRate: 71 },
  { id: 5, name: 'Simple CTF', difficulty: 'Easy', time: '20 mins', image: '🎯', category: 'Web', users: 11234, completionRate: 85 },
  { id: 6, name: 'Basic Pentesting', difficulty: 'Easy', time: '25 mins', image: '🔍', category: 'Pentest', users: 7654, completionRate: 78 },
  { id: 7, name: 'Lazy Admin', difficulty: 'Easy', time: '20 mins', image: '😴', category: 'Web', users: 9123, completionRate: 80 },
  { id: 8, name: 'RootMe', difficulty: 'Easy', time: '15 mins', image: '🌱', category: 'Linux', users: 13456, completionRate: 88 },
];

const mediumChallenges = [
  { id: 1, name: 'Mr Robot CTF', difficulty: 'Medium', time: '45 mins', image: '🤖', category: 'Web', users: 6543, completionRate: 54 },
  { id: 2, name: 'GoldenEye', difficulty: 'Medium', time: '60 mins', image: '🔫', category: 'Network', users: 5432, completionRate: 48 },
  { id: 3, name: 'UltraTech', difficulty: 'Medium', time: '50 mins', image: '💻', category: 'Web', users: 4321, completionRate: 52 },
  { id: 4, name: 'StuxCTF', difficulty: 'Medium', time: '75 mins', image: '⚡', category: 'Reverse', users: 3456, completionRate: 41 },
  { id: 5, name: 'Internal', difficulty: 'Medium', time: '55 mins', image: '🏢', category: 'Network', users: 4567, completionRate: 49 },
  { id: 6, name: 'Buffer Overflow', difficulty: 'Medium', time: '60 mins', image: '📊', category: 'Pwn', users: 3890, completionRate: 45 },
  { id: 7, name: 'Reversing ELF', difficulty: 'Medium', time: '40 mins', image: '🧝', category: 'Reverse', users: 5123, completionRate: 56 },
  { id: 8, name: 'SQL Injection', difficulty: 'Medium', time: '35 mins', image: '💉', category: 'Web', users: 7234, completionRate: 61 },
];

const hardChallenges = [
  { id: 1, name: 'Jurassic Park', difficulty: 'Hard', time: '90 mins', image: '🦖', category: 'Web', users: 2345, completionRate: 28 },
  { id: 2, name: 'Forensics', difficulty: 'Hard', time: '120 mins', image: '🔬', category: 'Forensics', users: 1876, completionRate: 22 },
  { id: 3, name: 'Brainpan 1', difficulty: 'Hard', time: '100 mins', image: '🧠', category: 'Pwn', users: 1654, completionRate: 19 },
  { id: 4, name: 'Adventure Time', difficulty: 'Hard', time: '80 mins', image: '⚔️', category: 'Misc', users: 2134, completionRate: 31 },
  { id: 5, name: 'HackNet', difficulty: 'Hard', time: '110 mins', image: '🌐', category: 'Network', users: 1432, completionRate: 17 },
  { id: 6, name: 'Kernel Exploit', difficulty: 'Hard', time: '120 mins', image: '🐧', category: 'Pwn', users: 987, completionRate: 12 },
  { id: 7, name: 'Malware Analysis', difficulty: 'Hard', time: '90 mins', image: '🦠', category: 'Reverse', users: 1567, completionRate: 24 },
  { id: 8, name: 'APT Hunter', difficulty: 'Hard', time: '100 mins', image: '🎯', category: 'Forensics', users: 1234, completionRate: 20 },
];

// ============ ANIMATION VARIANTS ============
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -8, transition: { duration: 0.3, ease: 'easeOut' } },
};

// ============ HELPER COMPONENTS ============

// Animated Background with Grid and Particles
const AnimatedBackground = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(136, 204, 20, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(136, 204, 20, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#88cc14]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: 0.2,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Mountain/Flag Decorative Illustration
const MountainIllustration = () => {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow Effect */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#88cc14" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Mountains */}
        <motion.path
          d="M50 250 L150 100 L200 150 L280 50 L350 200 L350 250 Z"
          stroke="url(#mountainGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        
        {/* Second Mountain Layer */}
        <motion.path
          d="M0 250 L80 180 L130 200 L180 120 L230 180 L280 140 L320 190 L400 150 L400 250 Z"
          stroke="#88cc14"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
        />
        
        {/* Flag */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <line x1="280" y1="50" x2="280" y2="10" stroke="#88cc14" strokeWidth="2" filter="url(#glow)" />
          <motion.path
            d="M280 10 L320 20 L280 30 Z"
            fill="#88cc14"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.g>
        
        {/* Stars */}
        {[
          { cx: 100, cy: 40, r: 1.5 },
          { cx: 320, cy: 80, r: 2 },
          { cx: 200, cy: 30, r: 1 },
          { cx: 380, cy: 60, r: 1.5 },
          { cx: 60, cy: 90, r: 1 },
        ].map((star, i) => (
          <motion.circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="#88cc14"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </svg>
    </div>
  );
};

// Progress Bar Component
const ProgressBar = ({ completed, total }) => {
  const percentage = (completed / total) * 100;
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400">Progress</span>
        <span className="text-sm font-semibold text-white">
          {completed} / {total} <span className="text-gray-400">Challenges Completed</span>
        </span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-[#88cc14] to-[#a3e635] rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
};

// Difficulty Badge Component
const DifficultyBadge = ({ difficulty, size = 'md' }) => {
  const colors = {
    Easy: 'bg-green-500/20 text-green-400 border-green-500/30',
    Medium: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    Hard: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span className={`inline-flex items-center rounded-full font-medium border ${colors[difficulty]} ${sizes[size]}`}>
      {difficulty}
    </span>
  );
};

// Stat Card Component
const StatCard = ({ count, label, color }) => {
  const colorClasses = {
    green: 'from-green-500/20 to-green-500/5 border-green-500/30 text-green-400',
    orange: 'from-orange-500/20 to-orange-500/5 border-orange-500/30 text-orange-400',
    red: 'from-red-500/20 to-red-500/5 border-red-500/30 text-red-400',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className={`bg-gradient-to-br ${colorClasses[color]} border rounded-xl px-6 py-4 backdrop-blur-sm`}
    >
      <div className={`text-3xl font-bold ${colorClasses[color].split(' ').pop()}`}>{count}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  );
};

// Filter Dropdown Component
const FilterDropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
      >
        <span>{value || label}</span>
        <motion.svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 bg-[#0f1c2e] border border-white/10 rounded-xl shadow-xl shadow-black/50 z-50 overflow-hidden"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-[#88cc14]/10 hover:text-[#88cc14] transition-colors"
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Search Bar Component
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative flex-1">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder="Find content by a keyword..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#88cc14]/50 focus:ring-2 focus:ring-[#88cc14]/20 transition-all duration-300"
      />
    </div>
  );
};

// Favorite Button Component
const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
    >
      <svg
        className={`w-5 h-5 transition-colors ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
        fill={isFavorite ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </motion.button>
  );
};

// Quick Hack Card Component (for 5 minute hacks)
const QuickHackCard = ({ challenge, index }) => {
  const [isFavorite, setIsFavorite] = useState(challenge.isFavorite);

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
      className="group relative"
    >
      <motion.div
        variants={cardHover}
        className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 overflow-hidden hover:border-[#88cc14]/30 hover:shadow-xl hover:shadow-[#88cc14]/5 transition-all duration-300"
      >
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#88cc14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#88cc14]/20 to-cyan-400/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
              {challenge.icon}
            </div>
            <FavoriteButton isFavorite={isFavorite} onClick={() => setIsFavorite(!isFavorite)} />
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#88cc14] transition-colors">
            {challenge.name}
          </h3>
          
          <div className="flex items-center gap-3">
            <DifficultyBadge difficulty={challenge.difficulty} size="sm" />
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {challenge.time}
            </span>
          </div>
          
          <div className="mt-3 pt-3 border-t border-white/5">
            <span className="text-xs text-gray-500">{challenge.category}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Challenge Card Component (for Easy/Medium/Hard sections)
const ChallengeCard = ({ challenge, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const difficultyColors = {
    Easy: 'group-hover:shadow-green-500/10 group-hover:border-green-500/30',
    Medium: 'group-hover:shadow-orange-500/10 group-hover:border-orange-500/30',
    Hard: 'group-hover:shadow-red-500/10 group-hover:border-red-500/30',
  };

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover="hover"
      className="group relative"
    >
      <motion.div
        variants={cardHover}
        className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-xl ${difficultyColors[challenge.difficulty]} transition-all duration-300`}
      >
        {/* Card Image Area */}
        <div className="relative h-40 bg-gradient-to-br from-[#0f1c2e] to-[#1a2f4a] flex items-center justify-center overflow-hidden">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(136, 204, 20, 0.3) 2px, transparent 0)`,
              backgroundSize: '50px 50px',
            }} />
          </div>
          
          {/* Challenge Icon */}
          <motion.div
            className="text-6xl z-10"
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {challenge.image}
          </motion.div>
          
          {/* Favorite Button */}
          <div className="absolute top-3 right-3">
            <FavoriteButton isFavorite={isFavorite} onClick={() => setIsFavorite(!isFavorite)} />
          </div>
          
          {/* Difficulty Badge */}
          <div className="absolute top-3 left-3">
            <DifficultyBadge difficulty={challenge.difficulty} size="sm" />
          </div>
        </div>
        
        {/* Card Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#88cc14] transition-colors">
            {challenge.name}
          </h3>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {challenge.time}
            </span>
            <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
              {challenge.category}
            </span>
          </div>
          
          {/* Stats Row */}
          <div className="flex items-center justify-between pt-3 border-t border-white/5">
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {challenge.users.toLocaleString()}
            </div>
            <div className="flex items-center gap-1 text-xs text-[#88cc14]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {challenge.completionRate}%
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Show More Button Component
const ShowMoreButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="mx-auto flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 hover:border-[#88cc14]/30 transition-all duration-300"
    >
      <span>Show More</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </motion.button>
  );
};

// Section Header Component
const SectionHeader = ({ icon, title, subtitle, titleColor = 'white' }) => {
  const colorClasses = {
    white: 'text-white',
    green: 'text-green-400',
    orange: 'text-orange-400',
    red: 'text-red-400',
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{icon}</span>
        <h2 className={`text-3xl font-bold ${colorClasses[titleColor]}`}>{title}</h2>
      </div>
      <p className="text-gray-400 max-w-2xl">{subtitle}</p>
    </motion.div>
  );
};

// ============ MAIN COMPONENT ============
const Challenges = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: 'All Types',
    sortBy: 'Newest',
    difficulty: 'All Difficulties',
    status: 'All Status',
    subscription: 'All',
  });

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] via-[#0f1c2e] to-[#081224] text-white overflow-hidden">
      
      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AnimatedBackground />
        
        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#88cc14]/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#88cc14]/10 border border-[#88cc14]/30 rounded-full text-[#88cc14] text-sm font-medium">
                  <span className="w-2 h-2 bg-[#88cc14] rounded-full animate-pulse" />
                  Capture The Flag
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              >
                Challenges
              </motion.h1>

              {/* Progress Bar */}
              <motion.div variants={fadeInUp} className="mb-8">
                <ProgressBar completed={progressStats.completed} total={progressStats.total} />
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-3 gap-4"
              >
                <StatCard count={progressStats.easy} label="Easy Challenges" color="green" />
                <StatCard count={progressStats.medium} label="Medium Challenges" color="orange" />
                <StatCard count={progressStats.hard} label="Hard Challenges" color="red" />
              </motion.div>
            </motion.div>

            {/* Right Content - Mountain Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block h-[400px]"
            >
              <MountainIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ SEARCH & FILTER SECTION ============ */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row gap-4"
          >
            {/* Search Bar */}
            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap gap-3">
              <FilterDropdown
                label="Type"
                options={filterOptions.type}
                value={filters.type}
                onChange={(v) => updateFilter('type', v)}
              />
              <FilterDropdown
                label="Sort by"
                options={filterOptions.sortBy}
                value={filters.sortBy}
                onChange={(v) => updateFilter('sortBy', v)}
              />
              <FilterDropdown
                label="Difficulty"
                options={filterOptions.difficulty}
                value={filters.difficulty}
                onChange={(v) => updateFilter('difficulty', v)}
              />
              <FilterDropdown
                label="Status"
                options={filterOptions.status}
                value={filters.status}
                onChange={(v) => updateFilter('status', v)}
              />
              <FilterDropdown
                label="Subscription"
                options={filterOptions.subscription}
                value={filters.subscription}
                onChange={(v) => updateFilter('subscription', v)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ FEATURED CHALLENGE SECTION ============ */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scaleIn}
          >
            <div className="relative bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-3xl overflow-hidden border border-white/10">
              {/* Background Decorations */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#88cc14]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 lg:p-12">
                {/* Content */}
                <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
                  <div className="mb-4">
                    <DifficultyBadge difficulty={featuredChallenge.difficulty} size="lg" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    {featuredChallenge.title}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-lg">
                    {featuredChallenge.subtitle}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(136, 204, 20, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0b1220] font-bold rounded-xl shadow-lg shadow-[#88cc14]/30 transition-all duration-300"
                  >
                    Log In and Play Now
                  </motion.button>
                </div>

                {/* Featured Image */}
                <motion.div
                  className="flex-shrink-0"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-[#88cc14]/20 to-cyan-400/20 rounded-full flex items-center justify-center border border-white/10 shadow-2xl shadow-[#88cc14]/20">
                    <span className="text-8xl lg:text-9xl">{featuredChallenge.image}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 5 MINUTE HACKS SECTION ============ */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            icon="⚡"
            title="5 Minute Hacks"
            subtitle="Find the weak spot and you're done. These are quick wins with a clear path and minimal resistance."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {fiveMinuteHacks.map((challenge, index) => (
              <QuickHackCard key={challenge.id} challenge={challenge} index={index} />
            ))}
          </motion.div>

          <div className="text-center">
            <ShowMoreButton onClick={() => console.log('Show more quick hacks')} />
          </div>
        </div>
      </section>

      {/* ============ EASY CHALLENGES SECTION ============ */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            icon="🟢"
            title="Easy Challenges"
            titleColor="green"
            subtitle="Perfect for beginners. Start your hacking journey with these straightforward challenges designed to teach fundamental concepts."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {easyChallenges.map((challenge, index) => (
              <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
            ))}
          </motion.div>

          <div className="text-center">
            <ShowMoreButton onClick={() => console.log('Show more easy challenges')} />
          </div>
        </div>
      </section>

      {/* ============ MEDIUM CHALLENGES SECTION ============ */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            icon="🟠"
            title="Medium Challenges"
            titleColor="orange"
            subtitle="Requires solid understanding of basics and thoughtful execution. These challenges will test your problem-solving skills."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {mediumChallenges.map((challenge, index) => (
              <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
            ))}
          </motion.div>

          <div className="text-center">
            <ShowMoreButton onClick={() => console.log('Show more medium challenges')} />
          </div>
        </div>
      </section>

      {/* ============ HARD CHALLENGES SECTION ============ */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            icon="🔴"
            title="Hard Challenges"
            titleColor="red"
            subtitle="Layered challenges with chained vulnerabilities. Minimal hints. Only for the most skilled hackers."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {hardChallenges.map((challenge, index) => (
              <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
            ))}
          </motion.div>

          <div className="text-center">
            <ShowMoreButton onClick={() => console.log('Show more hard challenges')} />
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scaleIn}
            className="relative bg-gradient-to-r from-[#88cc14]/10 to-cyan-400/10 backdrop-blur-xl border border-[#88cc14]/20 rounded-3xl p-12 text-center overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#88cc14]/5 to-cyan-400/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#88cc14]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.span
                className="text-6xl mb-6 block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                🚀
              </motion.span>
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Hacking?</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Join thousands of hackers improving their skills every day. Start with easy challenges and work your way up to becoming a master.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(136, 204, 20, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0b1220] font-bold rounded-xl shadow-lg shadow-[#88cc14]/30 transition-all duration-300"
                >
                  Start First Challenge
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  View Leaderboard
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ CUSTOM STYLES ============ */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(136, 204, 20, 0.3);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(136, 204, 20, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Challenges;