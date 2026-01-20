// KingOfTheHill.jsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============ STATIC DATA ============
const machinePoolData = [
  { name: 'Shrek', os: 'linux' },
  { name: 'Panda', os: 'linux' },
  { name: 'Production', os: 'linux' },
  { name: 'Food', os: 'linux' },
  { name: 'Tyler', os: 'windows' },
  { name: 'Fortune', os: 'linux' },
  { name: 'Hackers', os: 'linux' },
  { name: 'Carnage', os: 'windows' },
  { name: 'Phantom', os: 'linux' },
  { name: 'Shadow', os: 'linux' },
  { name: 'Nexus', os: 'windows' },
  { name: 'Cipher', os: 'linux' },
];

const recentGamesData = [
  {
    id: 1,
    winner: { name: 'CyberNinja42', avatar: '🥷' },
    status: 'complete',
    date: '2024-01-15',
    users: 8,
    machine: { name: 'Shrek', icon: '🐸' },
    kingChanges: 12,
  },
  {
    id: 2,
    winner: { name: 'HackMaster99', avatar: '👨‍💻' },
    status: 'running',
    date: '2024-01-15',
    users: 6,
    machine: { name: 'Panda', icon: '🐼' },
    kingChanges: 5,
  },
  {
    id: 3,
    winner: { name: 'ShadowByte', avatar: '🦇' },
    status: 'complete',
    date: '2024-01-14',
    users: 10,
    machine: { name: 'Production', icon: '🏭' },
    kingChanges: 18,
  },
  {
    id: 4,
    winner: { name: 'PhantomHex', avatar: '👻' },
    status: 'running',
    date: '2024-01-14',
    users: 4,
    machine: { name: 'Tyler', icon: '🎭' },
    kingChanges: 3,
  },
  {
    id: 5,
    winner: { name: 'NullPointer', avatar: '🔮' },
    status: 'complete',
    date: '2024-01-13',
    users: 12,
    machine: { name: 'Fortune', icon: '🎰' },
    kingChanges: 24,
  },
  {
    id: 6,
    winner: { name: 'ByteRunner', avatar: '🏃' },
    status: 'complete',
    date: '2024-01-13',
    users: 7,
    machine: { name: 'Hackers', icon: '💀' },
    kingChanges: 9,
  },
];

const faqData = [
  {
    question: 'Rules',
    answer: 'King of the Hill is a competitive hacking game where players compete to maintain control of vulnerable machines. The player who holds the "king" position the longest wins. All participants must follow ethical hacking guidelines and only target designated machines.',
  },
  {
    question: 'Points',
    answer: 'Points are awarded based on: Time spent as King (10 points/minute), Successfully patching vulnerabilities (50 points each), Finding flags (100 points each), and King takeovers (75 points). Bonus points are awarded for maintaining king status for extended periods.',
  },
  {
    question: 'Game Machines',
    answer: 'Our machine pool includes various vulnerable systems running Linux and Windows operating systems. Each machine has different vulnerabilities and difficulty levels. Machines are rotated regularly to keep challenges fresh and engaging.',
  },
  {
    question: 'Who can play?',
    answer: 'Anyone with a TryHackMe account can participate in King of the Hill games. Premium members get access to exclusive machines and private game creation. Free users can join public games and compete for rankings.',
  },
  {
    question: 'Joining Public Games',
    answer: 'Public games are open to all users. Simply click "Join Game" and you will be placed in the next available lobby. Games typically have 4-12 players and run for 1-2 hours. You can view ongoing games before joining.',
  },
  {
    question: 'Running Privately',
    answer: 'Premium members can create private games with custom settings including machine selection, game duration, and player limits. Private games are perfect for training sessions, team competitions, or friendly matches.',
  },
  {
    question: 'Inviting your friends',
    answer: 'When creating a private game, you will receive a unique game code. Share this code with friends to invite them. You can also send direct invites to TryHackMe users. Private lobbies support up to 20 players.',
  },
  {
    question: 'Spectators',
    answer: 'Games can be watched in spectator mode. Spectators can view the scoreboard, king changes, and game progress in real-time. This feature is great for learning and tournament broadcasting.',
  },
  {
    question: 'Streaming and Writeups',
    answer: 'You are allowed to stream King of the Hill games, but please avoid showing exploit details during active games. Writeups are encouraged after games conclude. Use #KOTHWriteup when sharing.',
  },
  {
    question: '1v1s and Solo Play',
    answer: 'While KOTH is designed for multiplayer, you can practice on machines solo or challenge a friend to a 1v1. Create a private game and set the player limit to 2 for head-to-head competitions.',
  },
  {
    question: 'Tips and Tricks',
    answer: 'Stay updated with the latest CVEs and exploits. Practice on regular TryHackMe rooms first. Learn both offensive and defensive techniques. Monitor the scoreboard and adapt your strategy. Patch vulnerabilities after gaining access.',
  },
  {
    question: 'Feedback and Reporting',
    answer: 'We value your feedback! Report bugs, suggest improvements, or report rule violations through our Discord or support portal. Cheating and unsportsmanlike conduct will result in bans.',
  },
];

const howToPlaySteps = [
  { step: 1, title: 'Join a lobby', description: 'Enter a public game or create a private lobby with friends' },
  { step: 2, title: 'Hack', description: 'Find vulnerabilities and exploit them to gain access to the machine' },
  { step: 3, title: 'Record your username', description: 'Place your TryHackMe username in /root/king.txt to become King' },
  { step: 4, title: 'Patch vulnerabilities', description: 'Secure the machine to prevent others from taking your crown' },
  { step: 5, title: 'Earn points', description: 'Accumulate points by staying King and finding flags' },
  { step: 6, title: 'Hunt for flags', description: 'Discover hidden flags throughout the system for bonus points' },
  { step: 7, title: 'Duration', description: 'Games typically last 1-2 hours. Highest score wins!' },
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// ============ HELPER COMPONENTS ============

// Floating Cyber Cube Component
const CyberCube = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {/* Cube Faces */}
        <div className="absolute inset-0 transform-style-3d">
          {/* Front */}
          <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#88cc14]/30 to-[#88cc14]/10 border border-[#88cc14]/50 backdrop-blur-sm left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ transform: 'translateZ(64px)' }}>
            <span className="text-4xl">👑</span>
          </div>
          {/* Back */}
          <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-cyan-500/30 to-cyan-500/10 border border-cyan-500/50 backdrop-blur-sm left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ transform: 'rotateY(180deg) translateZ(64px)' }}>
            <span className="text-4xl">🛡️</span>
          </div>
          {/* Right */}
          <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-500/30 to-purple-500/10 border border-purple-500/50 backdrop-blur-sm left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ transform: 'rotateY(90deg) translateZ(64px)' }}>
            <span className="text-4xl">⚔️</span>
          </div>
          {/* Left */}
          <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-pink-500/30 to-pink-500/10 border border-pink-500/50 backdrop-blur-sm left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}>
            <span className="text-4xl">🎯</span>
          </div>
          {/* Top */}
          <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#88cc14]/30 to-cyan-500/10 border border-[#88cc14]/50 backdrop-blur-sm left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ transform: 'rotateX(90deg) translateZ(64px)' }}>
            <span className="text-4xl">🏆</span>
          </div>
          {/* Bottom */}
          <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-orange-500/30 to-orange-500/10 border border-orange-500/50 backdrop-blur-sm left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ transform: 'rotateX(-90deg) translateZ(64px)' }}>
            <span className="text-4xl">💻</span>
          </div>
        </div>
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[#88cc14]/20 blur-3xl rounded-full animate-pulse" />
    </div>
  );
};

// Animated Background Particles
const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#88cc14]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: 0.3,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.6, 0.2],
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

// Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'bg-white/10 shadow-lg shadow-[#88cc14]/10' : 'bg-white/5 hover:bg-white/8'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <span className={`font-medium transition-colors ${isOpen ? 'text-[#88cc14]' : 'text-white'}`}>
          {question}
        </span>
        <motion.svg
          className={`w-5 h-5 transition-colors ${isOpen ? 'text-[#88cc14]' : 'text-gray-400'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// OS Icon Component
const OSIcon = ({ os }) => {
  if (os === 'linux') {
    return (
      <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.503 0c-.155 0-.315.008-.48.022-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.117.752.476 1.457 1.129 2.022.66.572 1.588.98 2.863 1.088 2.024.173 3.495-.245 4.676-.798 1.211-.566 2.11-1.34 2.744-2.07.632-.73.973-1.383 1.063-1.665.09-.285.082-.393.082-.45a2.59 2.59 0 00-.064-.394c-.108-.53-.422-1.13-.876-1.705-.498-.633-1.14-1.238-1.82-1.756-.68-.52-1.393-.952-2.01-1.244-.308-.147-.588-.256-.822-.318-.207-.054-.365-.067-.485-.037-.12.03-.2.098-.25.227-.05.128-.053.318-.002.564.05.247.157.544.325.873.167.33.388.687.66 1.045.271.358.59.712.946 1.032.356.32.744.6 1.148.825.404.227.82.396 1.23.502.41.106.81.15 1.18.131.37-.02.707-.1.99-.24.283-.14.514-.335.684-.575.17-.24.28-.52.318-.828.04-.31.01-.645-.075-.988a4.018 4.018 0 00-.45-1.066 5.028 5.028 0 00-.757-.927 6.368 6.368 0 00-1.022-.79 8.378 8.378 0 00-1.225-.617 9.86 9.86 0 00-1.366-.42 10.719 10.719 0 00-1.43-.21 11.12 11.12 0 00-1.418-.007 10.938 10.938 0 00-1.33.15 10.225 10.225 0 00-1.167.28 9.213 9.213 0 00-.937.372 8.063 8.063 0 00-.642.378 7.048 7.048 0 00-.487.37 6.4 6.4 0 00-.347.32 5.986 5.986 0 00-.28.303c-.078.093-.146.18-.203.26-.057.08-.103.153-.138.22a1.96 1.96 0 00-.095.195c-.023.057-.04.107-.053.15a.756.756 0 00-.024.117.414.414 0 00-.002.09c.004.028.01.054.02.076.01.022.022.04.035.055.014.014.03.024.047.032a.208.208 0 00.06.015c.022.002.044.001.066-.002.023-.003.047-.01.072-.018a.803.803 0 00.156-.073c.056-.033.116-.075.18-.124.063-.05.13-.106.2-.17.071-.065.145-.136.222-.213.076-.078.155-.162.236-.251.08-.09.163-.184.248-.282.17-.197.35-.41.538-.633.188-.224.385-.458.587-.696.203-.238.412-.48.623-.72.21-.238.423-.473.635-.698.212-.226.423-.44.63-.64.207-.2.41-.385.607-.551.197-.167.388-.315.57-.44.183-.126.357-.23.52-.312.164-.08.316-.14.456-.175.14-.036.267-.048.38-.038.114.01.213.043.298.095.084.053.154.123.209.21.055.087.095.19.12.307.024.118.032.25.024.39a2.09 2.09 0 01-.098.452c-.056.16-.138.332-.244.514-.106.182-.237.373-.391.571-.154.198-.333.402-.534.608-.2.206-.424.413-.667.616-.244.203-.51.4-.794.587-.284.188-.588.365-.906.526-.319.162-.654.306-1.001.43-.347.125-.706.228-1.072.308-.367.08-.74.136-1.117.168-.378.032-.758.04-1.139.023-.38-.018-.76-.06-1.135-.127-.375-.067-.746-.16-1.108-.276-.362-.117-.714-.26-1.052-.427-.338-.168-.662-.361-.967-.577a7.264 7.264 0 01-.846-.697 6.47 6.47 0 01-.692-.8 5.46 5.46 0 01-.51-.868 4.287 4.287 0 01-.305-.896 3.093 3.093 0 01-.082-.878c.016-.281.078-.544.183-.788.106-.244.256-.468.447-.67.192-.202.424-.38.693-.532.27-.152.577-.278.916-.375a6.57 6.57 0 011.098-.213c.38-.04.773-.05 1.173-.028.4.022.806.075 1.213.16.407.084.815.2 1.217.348.402.148.798.33 1.182.545.384.216.755.467 1.106.753.352.286.684.608.99.965.308.357.59.75.84 1.178.252.428.47.89.653 1.385.182.495.327 1.021.432 1.577.105.556.17 1.14.19 1.75.02.61-.006 1.245-.081 1.903-.075.658-.198 1.337-.374 2.035-.176.698-.407 1.413-.697 2.142-.29.729-.642 1.469-1.06 2.217-.418.748-.905 1.5-1.466 2.253-.56.752-1.198 1.5-1.918 2.24-.72.74-1.524 1.466-2.418 2.176-.895.71-1.882 1.4-2.968 2.066-1.086.666-2.273 1.305-3.567 1.913-1.293.608-2.695 1.183-4.21 1.72" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  );
};

// Status Badge Component
const StatusBadge = ({ status }) => {
  const isRunning = status === 'running';
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        isRunning
          ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
          : 'bg-green-500/20 text-green-400 border border-green-500/30'
      }`}
    >
      {isRunning ? 'Running' : 'Complete'}
    </span>
  );
};

// ============ MAIN COMPONENT ============
const KingOfTheHill = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] via-[#0f1c2e] to-[#081224] text-white overflow-hidden">
      
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <ParticleBackground />
        
        {/* Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(136, 204, 20, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(136, 204, 20, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#88cc14]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#88cc14]/10 border border-[#88cc14]/30 rounded-full text-[#88cc14] text-sm font-medium">
                  <span className="w-2 h-2 bg-[#88cc14] rounded-full animate-pulse" />
                  Competitive Hacking Arena
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
              >
                King of the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#88cc14] via-[#a3e635] to-[#88cc14]">
                  Hill
                </span>
              </motion.h1>

              {/* Neon Underline */}
              <motion.div
                variants={fadeInUp}
                className="w-32 h-1.5 bg-gradient-to-r from-[#88cc14] to-[#a3e635] rounded-full mx-auto lg:mx-0 mb-8 shadow-lg shadow-[#88cc14]/50"
              />

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Challenge yourself to secure your digital throne against numerous adversaries 
                in this interactive and competitive hacking game. Battle, defend, and dominate!
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(136, 204, 20, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0b1220] font-bold rounded-xl shadow-lg shadow-[#88cc14]/30 transition-all duration-300"
                >
                  Play Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Cube */}
            <motion.div
              className="flex-1 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <CyberCube />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ============ ACTION CARDS SECTION ============ */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Create Private Game Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInLeft}
              whileHover={{ y: -10, rotateY: 5 }}
              className="relative group"
            >
              {/* Curved Neon Decoration - Left */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-32 bg-gradient-to-b from-[#88cc14] to-transparent rounded-full opacity-50 group-hover:opacity-100 group-hover:h-40 transition-all duration-500" />
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-[#88cc14]/50 to-transparent rounded-full opacity-30 group-hover:opacity-70 transition-all duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden group-hover:border-[#88cc14]/30 group-hover:shadow-2xl group-hover:shadow-[#88cc14]/10 transition-all duration-500">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#88cc14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#88cc14]/20 to-[#88cc14]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#88cc14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">Create a private game</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Create your own private lobby and invite your friends for an exclusive hacking battle.
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0b1220] font-bold rounded-xl shadow-lg shadow-[#88cc14]/30 hover:shadow-[#88cc14]/50 transition-all duration-300"
                  >
                    Create game
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Join Public Game Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInRight}
              whileHover={{ y: -10, rotateY: -5 }}
              className="relative group"
            >
              {/* Curved Neon Decoration - Right */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-32 bg-gradient-to-b from-cyan-400 to-transparent rounded-full opacity-50 group-hover:opacity-100 group-hover:h-40 transition-all duration-500" />
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-cyan-400/50 to-transparent rounded-full opacity-30 group-hover:opacity-70 transition-all duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden group-hover:border-cyan-400/30 group-hover:shadow-2xl group-hover:shadow-cyan-400/10 transition-all duration-500">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">Join a public game</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Battle other players and become King of The Hill in our public arenas.
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white/10 border border-cyan-400/50 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
                  >
                    Join game
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT + MACHINE POOL SECTION ============ */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* About Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInLeft}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-[#88cc14]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#88cc14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                About
              </h2>
              
              <p className="text-gray-400 leading-relaxed mb-8">
                King of the Hill is TryHackMe's competitive hacking arena where players battle 
                to maintain control of vulnerable machines. Test your offensive and defensive 
                skills against other hackers in real-time combat scenarios.
              </p>

              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-[#88cc14]">📋</span>
                How to play King of the Hill
              </h3>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {howToPlaySteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#88cc14]/20 hover:bg-white/8 transition-all duration-300"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#88cc14] to-[#6ba10e] rounded-lg flex items-center justify-center text-[#0b1220] font-bold text-sm">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                      <p className="text-gray-500 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Machine Pool Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInRight}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </span>
                Machine Pool
                <span className="ml-auto">
                  <svg className="w-5 h-5 text-gray-500 hover:text-[#88cc14] cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </h2>

              <div className="overflow-hidden rounded-xl border border-white/10">
                {/* Table Header */}
                <div className="grid grid-cols-2 bg-white/5 px-4 py-3 border-b border-white/10">
                  <span className="text-gray-400 font-medium text-sm">Name</span>
                  <span className="text-gray-400 font-medium text-sm text-right">OS</span>
                </div>
                
                {/* Table Body - Scrollable */}
                <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                  {machinePoolData.map((machine, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-2 px-4 py-3 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group"
                    >
                      <span className="text-white font-medium group-hover:text-[#88cc14] transition-colors">
                        {machine.name}
                      </span>
                      <span className="text-right flex items-center justify-end">
                        <OSIcon os={machine.os} />
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ MOST RECENT GAMES SECTION ============ */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">👑</span>
              <h2 className="text-3xl font-bold text-white">Most Recent Games</h2>
            </div>
            <p className="text-gray-400 mb-8">View or spectate on-going or previous games</p>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="hidden lg:grid lg:grid-cols-6 gap-4 px-6 py-4 bg-white/5 border-b border-white/10">
                <span className="text-gray-400 font-medium text-sm">Winner</span>
                <span className="text-gray-400 font-medium text-sm">Status</span>
                <span className="text-gray-400 font-medium text-sm">Date</span>
                <span className="text-gray-400 font-medium text-sm">Users</span>
                <span className="text-gray-400 font-medium text-sm">Machine</span>
                <span className="text-gray-400 font-medium text-sm">King Changes</span>
              </div>
              
              {/* Table Body */}
              <div className="divide-y divide-white/5">
                {recentGamesData.map((game, index) => (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`grid grid-cols-2 lg:grid-cols-6 gap-4 px-6 py-4 hover:bg-white/5 transition-colors cursor-pointer ${
                      index % 2 === 1 ? 'bg-white/[0.02]' : ''
                    }`}
                  >
                    {/* Winner */}
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 bg-gradient-to-br from-[#88cc14]/20 to-cyan-400/20 rounded-full flex items-center justify-center text-lg">
                        {game.winner.avatar}
                      </span>
                      <span className="text-white font-medium">{game.winner.name}</span>
                    </div>
                    
                    {/* Status */}
                    <div className="flex items-center">
                      <StatusBadge status={game.status} />
                    </div>
                    
                    {/* Date */}
                    <div className="flex items-center text-gray-400">
                      {game.date}
                    </div>
                    
                    {/* Users */}
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {game.users}
                    </div>
                    
                    {/* Machine */}
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-lg">{game.machine.icon}</span>
                      <span>{game.machine.name}</span>
                    </div>
                    
                    {/* King Changes */}
                    <div className="flex items-center text-[#88cc14] font-semibold">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                      {game.kingChanges}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-3xl">❓</span>
              <h2 className="text-3xl font-bold text-white">FAQ</h2>
            </div>
            <p className="text-gray-400">Frequently asked questions about King of the Hill</p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onClick={() => toggleFaq(index)}
                index={index}
              />
            ))}
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
              <h2 className="text-4xl font-bold text-white mb-4">Ready to become King?</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Join thousands of hackers competing for the crown. Test your skills, learn new techniques, 
                and dominate the leaderboard.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(136, 204, 20, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0b1220] font-bold rounded-xl shadow-lg shadow-[#88cc14]/30 transition-all duration-300"
                >
                  Start Playing Now
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

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(136, 204, 20, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(136, 204, 20, 0.5);
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default KingOfTheHill;