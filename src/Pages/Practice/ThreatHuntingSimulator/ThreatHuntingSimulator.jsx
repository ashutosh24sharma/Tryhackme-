// ThreatHuntingSimulator.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============ CONFIGURATION ============
const EXTERNAL_NAVBAR_HEIGHT = 64; // Adjust based on your external Navbar height

// ============ STATIC DATA ============
const quickLinks = [
  { name: 'Home', href: '#overview', icon: '🏠' },
  { name: 'Scenarios', href: '#scenarios', icon: '🎯' },
  { name: 'Progress & Stats', href: '#progress', icon: '📊' },
  { name: 'Leaderboard', href: '#leaderboard', icon: '🏆' },
];

const trustLogos = [
  { name: 'Google', icon: '🔍' },
  { name: 'KPMG', icon: '📊' },
  { name: 'SS&C', icon: '💼' },
  { name: 'Network Intelligence', icon: '🌐' },
  { name: 'ThreatLocker', icon: '🔒' },
  { name: 'CompTIA', icon: '🎓' },
];

const coreValueCards = [
  {
    id: 1,
    title: 'Build real-world detection skills and strengthen investigative instincts',
    description: 'Learn to identify early indicators of compromise before threats escalate. Reduce dwell time by recognizing subtle signs that automated tools often miss.',
    icon: '🔴',
    accentColor: '#ef4444',
    features: ['Early threat detection', 'Reduced dwell time', 'Pattern recognition'],
  },
  {
    id: 2,
    title: 'Break attacker patterns by learning how they move',
    description: 'Understand modern attacker techniques, from initial access to lateral movement. Map adversary behavior to defense strategies that actually work.',
    icon: '🌐',
    accentColor: '#88cc14',
    features: ['Attack chain analysis', 'Lateral movement tracking', 'Adversary emulation'],
  },
];

const threatHunterFeatures = [
  {
    id: 1,
    title: 'Compete with your team',
    description: 'Challenge colleagues and track rankings on the threat hunting leaderboard.',
    icon: '🏆',
    preview: 'leaderboard',
  },
  {
    id: 2,
    title: 'Learn through real-world incidents',
    description: 'Investigate scenarios based on actual APT campaigns and attack patterns.',
    icon: '📚',
    preview: 'scenarios',
  },
  {
    id: 3,
    title: 'Master MITRE ATT&CK framework',
    description: 'Build fluency in tactics, techniques, and procedures used by real adversaries.',
    icon: '🎯',
    preview: 'mitre',
  },
];

const attackSteps = [
  {
    step: 1,
    title: 'Launch your simulator',
    description: 'Select a threat hunting scenario based on attack type, adversary group, or skill level.',
    icon: '🚀',
  },
  {
    step: 2,
    title: 'Investigate the scenario',
    description: 'Use threat intel, SIEM queries, and timeline analysis to uncover hidden threats.',
    icon: '🔬',
  },
  {
    step: 3,
    title: 'Reconstruct the attack chain',
    description: 'Map the complete attack path from initial access to objectives, documenting every finding.',
    icon: '🔗',
  },
];

const scenariosLibrary = [
  {
    id: 1,
    title: 'Chasing APT28 Shadows',
    difficulty: 'Medium',
    time: '1 hr',
    description: 'Hunt for traces of APT28 activity in a compromised enterprise network. Identify persistence mechanisms and C2 channels.',
    icon: '🕵️',
    category: 'APT Investigation',
    color: '#f59e0b',
  },
  {
    id: 2,
    title: 'Typo Snare',
    difficulty: 'Medium',
    time: '2 hrs',
    description: 'Investigate a typosquatting campaign targeting your organization. Trace the attack from phishing to data exfiltration.',
    icon: '🪤',
    category: 'Social Engineering',
    color: '#ef4444',
  },
  {
    id: 3,
    title: 'Health Hazard',
    difficulty: 'Easy',
    time: '15 mins',
    description: 'A healthcare organization suspects a breach. Hunt for indicators of compromise in patient data systems.',
    icon: '🏥',
    category: 'Healthcare Security',
    color: '#88cc14',
  },
  {
    id: 4,
    title: 'Supply Chain Shadows',
    difficulty: 'Hard',
    time: '3 hrs',
    description: 'Investigate a suspected supply chain attack. Identify compromised software components and trace the blast radius.',
    icon: '📦',
    category: 'Supply Chain',
    color: '#8b5cf6',
  },
  {
    id: 5,
    title: 'Ransomware Remnants',
    difficulty: 'Hard',
    time: '2.5 hrs',
    description: 'Post-incident investigation of a ransomware attack. Reconstruct the attack timeline and identify patient zero.',
    icon: '🔐',
    category: 'Ransomware',
    color: '#ef4444',
  },
  {
    id: 6,
    title: 'Insider Threat',
    difficulty: 'Medium',
    time: '1.5 hrs',
    description: 'Hunt for signs of malicious insider activity. Analyze user behavior anomalies and data access patterns.',
    icon: '👤',
    category: 'Insider Threat',
    color: '#f59e0b',
  },
];

const mitreCategories = [
  { name: 'Reconnaissance', techniques: 10, level: 'low' },
  { name: 'Resource Development', techniques: 8, level: 'low' },
  { name: 'Initial Access', techniques: 12, level: 'medium' },
  { name: 'Execution', techniques: 14, level: 'high' },
  { name: 'Persistence', techniques: 19, level: 'high' },
  { name: 'Privilege Escalation', techniques: 13, level: 'medium' },
  { name: 'Defense Evasion', techniques: 42, level: 'critical' },
  { name: 'Credential Access', techniques: 17, level: 'high' },
  { name: 'Discovery', techniques: 31, level: 'medium' },
  { name: 'Lateral Movement', techniques: 9, level: 'high' },
  { name: 'Collection', techniques: 17, level: 'medium' },
  { name: 'Exfiltration', techniques: 9, level: 'critical' },
  { name: 'Impact', techniques: 13, level: 'critical' },
];

const earlyDetectionBenefits = [
  {
    icon: '🧠',
    title: 'Think like an adversary, act like a hunter',
    description: 'Develop the mindset needed to anticipate attacker moves and proactively hunt threats.',
  },
  {
    icon: '🎯',
    title: 'Become fluent in MITRE ATT&CK techniques',
    description: 'Master the framework used globally to describe adversary behaviors and tactics.',
  },
  {
    icon: '⚡',
    title: 'Stress-test readiness with simulated incidents',
    description: 'Practice incident response procedures in a safe environment before real attacks occur.',
  },
];

const leaderboardData = [
  { rank: 1, name: 'Alex Hunter', avatar: '🦊', points: 15420, hunts: 48, accuracy: '97%', badge: '🥇' },
  { rank: 2, name: 'Sarah Trace', avatar: '🔍', points: 14200, hunts: 42, accuracy: '95%', badge: '🥈' },
  { rank: 3, name: 'Mike Recon', avatar: '🎯', points: 13890, hunts: 39, accuracy: '94%', badge: '🥉' },
  { rank: 4, name: 'Emily Detect', avatar: '🛡️', points: 12750, hunts: 35, accuracy: '93%', badge: '⭐' },
  { rank: 5, name: 'James Intel', avatar: '📡', points: 11200, hunts: 31, accuracy: '91%', badge: '⭐' },
];

const progressMetrics = [
  { label: 'Threats Hunted', value: '156', icon: '🎯', trend: '+24%' },
  { label: 'Attack Chains Mapped', value: '89', icon: '🔗', trend: '+18%' },
  { label: 'Detection Accuracy', value: '94%', icon: '✅', trend: '+5%' },
  { label: 'Hunter Score', value: '12,450 XP', icon: '⭐', trend: '+32%' },
];

const contactFormBenefits = [
  'Investigate real-world cyber threats safely',
  'Get instant feedback on performance',
  'Track progress with advanced metrics',
  'Compete on leaderboards',
  'Access exclusive APT scenarios',
  'Team analytics dashboard',
];

const faqCategories = [
  { id: 'general', name: 'General use' },
  { id: 'reporting', name: 'Reporting & Analytics' },
  { id: 'content', name: 'Content and tooling' },
];

const faqData = {
  general: [
    {
      question: 'Is Threat Hunting Simulator available for Free and Premium users?',
      answer: 'The Threat Hunting Simulator is available exclusively for Premium and Business subscribers. Free users can access a limited demo scenario to experience the platform.',
    },
    {
      question: 'Can I use the Threat Hunting Simulator any time?',
      answer: 'Yes! The simulator is available 24/7. You can launch scenarios, pause your progress, and continue at any time that fits your schedule.',
    },
    {
      question: 'Do I need to use my own VM or tooling?',
      answer: 'No, everything runs in your browser. We provide all the tools you need including simulated SIEM, threat intel feeds, and investigation interfaces.',
    },
    {
      question: 'Will I accrue points on the TryHackMe leaderboard?',
      answer: 'Yes! Completing threat hunting scenarios earns you XP points that contribute to your overall TryHackMe rank and the dedicated Threat Hunter leaderboard.',
    },
    {
      question: 'Can I buy access separately?',
      answer: 'The Threat Hunting Simulator is included with TryHackMe Premium and Business plans. Contact our sales team for enterprise licensing options.',
    },
  ],
  reporting: [
    {
      question: 'How are my threat hunting reports evaluated?',
      answer: 'Reports are evaluated against expert-created rubrics covering completeness, accuracy, MITRE ATT&CK mapping, and actionable recommendations.',
    },
    {
      question: 'Can I export my progress and reports?',
      answer: 'Yes, you can export detailed PDF reports of your investigations, progress metrics, and certificates of completion.',
    },
    {
      question: 'How do team analytics work?',
      answer: 'Managers can view aggregated team performance, identify skill gaps, and track improvement over time through the admin dashboard.',
    },
  ],
  content: [
    {
      question: 'How often are new scenarios added?',
      answer: 'We add new threat hunting scenarios monthly, often based on recent real-world APT campaigns and emerging threat patterns.',
    },
    {
      question: 'Are scenarios based on real attacks?',
      answer: 'Yes, our scenarios are designed by threat intelligence experts and based on documented APT campaigns, malware families, and attack techniques.',
    },
    {
      question: 'What tools are available in the simulator?',
      answer: 'The simulator includes a simulated SIEM (Splunk-like interface), threat intel platform, network traffic analyzer, and investigation timeline tool.',
    },
  ],
};

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// ============ HELPER COMPONENTS ============

// Animated Background with Threat Theme
const AnimatedBackground = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    color: Math.random() > 0.7 ? '#ef4444' : '#88cc14', // Mix of red and green
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(136, 204, 20, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(136, 204, 20, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.3, 0.1],
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

// Quick Links Navigation Component
const QuickLinksNav = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - EXTERNAL_NAVBAR_HEIGHT - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`sticky z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0f18]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/10'
          : 'bg-[#0a0f18]/80 backdrop-blur-md'
      }`}
      style={{ top: `${EXTERNAL_NAVBAR_HEIGHT}px` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Quick Links */}
        <div className="hidden md:flex items-center justify-between h-14">
          {/* Logo/Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">Threat Hunting Simulator</span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-1">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#88cc14] bg-[#88cc14]/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-base">{link.icon}</span>
                <span>{link.name}</span>
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeQuickLink"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#88cc14] rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-[#88cc14] text-[#0b1220] font-semibold rounded-lg hover:bg-[#a3e635] transition-colors text-sm"
          >
            Get Started Today
          </motion.button>
        </div>

        {/* Mobile Quick Links */}
        <div className="md:hidden">
          {/* Mobile Header */}
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-white">Threat Hunter</span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
            >
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-t border-white/10"
              >
                <div className="py-3 space-y-1">
                  {quickLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeSection === link.href.substring(1)
                          ? 'text-[#88cc14] bg-[#88cc14]/10'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="text-xl">{link.icon}</span>
                      <span>{link.name}</span>
                    </a>
                  ))}
                  <div className="pt-3 px-4">
                    <button className="w-full py-3 bg-[#88cc14] text-[#0b1220] font-semibold rounded-lg hover:bg-[#a3e635] transition-colors text-sm">
                      Get Started Today
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Horizontal Scroll Quick Links */}
        <div className="md:hidden overflow-x-auto scrollbar-hide border-t border-white/5">
          <div className="flex items-center gap-2 py-2 px-1 min-w-max">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#0b1220] bg-[#88cc14]'
                    : 'text-gray-400 bg-white/5 hover:bg-white/10'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Section Label Component
const SectionLabel = ({ children, variant = 'green' }) => {
  const variants = {
    green: 'bg-[#88cc14]/10 border-[#88cc14]/30 text-[#88cc14]',
    red: 'bg-[#ef4444]/10 border-[#ef4444]/30 text-[#ef4444]',
  };

  return (
    <motion.span
      variants={fadeInUp}
      className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider ${variants[variant]}`}
    >
      {children}
    </motion.span>
  );
};

// Difficulty Badge
const DifficultyBadge = ({ difficulty, size = 'md' }) => {
  const colors = {
    Easy: 'bg-green-500/20 text-green-400 border-green-500/30',
    Medium: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    Hard: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span className={`inline-flex items-center rounded-full font-medium border ${colors[difficulty]} ${sizes[size]}`}>
      {difficulty}
    </span>
  );
};

// Trust Logo Component
const TrustLogo = ({ logo }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 rounded-lg border border-white/10"
  >
    <span className="text-lg sm:text-xl">{logo.icon}</span>
    <span className="text-gray-400 text-xs sm:text-sm font-medium">{logo.name}</span>
  </motion.div>
);

// Core Value Card Component
const CoreValueCard = ({ card }) => (
  <motion.div
    variants={scaleIn}
    whileHover={{ y: -10 }}
    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden hover:border-opacity-50 transition-all duration-300"
    style={{ '--accent-color': card.accentColor }}
  >
    {/* Background Glow */}
    <div
      className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
      style={{ backgroundColor: card.accentColor }}
    />

    <div className="relative z-10">
      {/* Icon */}
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl mb-6"
        style={{ backgroundColor: `${card.accentColor}20` }}
      >
        {card.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
        {card.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {card.features.map((feature, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-xs font-medium border"
            style={{
              backgroundColor: `${card.accentColor}10`,
              borderColor: `${card.accentColor}30`,
              color: card.accentColor,
            }}
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// Feature Preview Card Component
const FeaturePreviewCard = ({ feature }) => {
  const previews = {
    leaderboard: (
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
            <span className="text-lg">{i === 1 ? '🥇' : i === 2 ? '🥈' : '🥉'}</span>
            <div className="flex-1">
              <div className="h-2 bg-white/20 rounded w-20"></div>
            </div>
            <span className="text-[#88cc14] text-xs font-bold">{15000 - i * 1000} XP</span>
          </div>
        ))}
      </div>
    ),
    scenarios: (
      <div className="grid grid-cols-2 gap-2">
        {['🕵️', '🪤', '🏥', '📦'].map((icon, i) => (
          <div key={i} className="p-3 bg-white/5 rounded-lg text-center">
            <span className="text-2xl">{icon}</span>
          </div>
        ))}
      </div>
    ),
    mitre: (
      <div className="grid grid-cols-4 gap-1">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 rounded ${
              i < 4 ? 'bg-green-500/40' : i < 10 ? 'bg-yellow-500/40' : 'bg-red-500/40'
            }`}
          ></div>
        ))}
      </div>
    ),
  };

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 overflow-hidden hover:border-[#88cc14]/30 hover:shadow-xl hover:shadow-[#88cc14]/5 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#88cc14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#88cc14]/20 to-[#88cc14]/5 rounded-xl flex items-center justify-center text-2xl sm:text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {feature.icon}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#88cc14] transition-colors">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {feature.description}
        </p>

        {/* Preview */}
        <div className="bg-[#0a0f18] rounded-xl p-3 border border-white/5">
          {previews[feature.preview]}
        </div>
      </div>
    </motion.div>
  );
};

// Attack Step Card Component
const AttackStepCard = ({ step, index, isLast }) => (
  <motion.div
    variants={fadeInUp}
    className="relative flex gap-4 sm:gap-6"
  >
    {/* Step Number */}
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-[#ef4444]/30">
        {step.step}
      </div>
      {!isLast && (
        <div className="w-0.5 h-full bg-gradient-to-b from-[#ef4444]/50 to-transparent mt-4" />
      )}
    </div>

    {/* Content */}
    <div className="flex-1 pb-8 sm:pb-12">
      <div className="flex items-center gap-2 sm:gap-3 mb-2">
        <span className="text-xl sm:text-2xl">{step.icon}</span>
        <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
      </div>
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{step.description}</p>
    </div>
  </motion.div>
);

// Scenario Card Component
const ScenarioCard = ({ scenario }) => (
  <motion.div
    variants={scaleIn}
    whileHover={{ y: -10 }}
    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#88cc14]/30 hover:shadow-xl transition-all duration-300"
  >
    {/* Header with Icon */}
    <div
      className="relative h-32 sm:h-40 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: `${scenario.color}10` }}
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at center, ${scenario.color}40 0%, transparent 70%)`,
        }}
      />
      
      <motion.span
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="text-5xl sm:text-6xl relative z-10"
      >
        {scenario.icon}
      </motion.span>
    </div>

    {/* Content */}
    <div className="p-4 sm:p-6">
      {/* Category Badge */}
      <span
        className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-2"
        style={{
          backgroundColor: `${scenario.color}20`,
          color: scenario.color,
        }}
      >
        {scenario.category}
      </span>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#88cc14] transition-colors">
        {scenario.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {scenario.description}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <DifficultyBadge difficulty={scenario.difficulty} size="sm" />
        <span className="text-gray-400 text-xs sm:text-sm flex items-center gap-1">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {scenario.time}
        </span>
      </div>
    </div>
  </motion.div>
);

// MITRE ATT&CK Matrix Preview
const MitreMatrixPreview = () => {
  const levelColors = {
    low: 'bg-green-500/40',
    medium: 'bg-yellow-500/40',
    high: 'bg-orange-500/40',
    critical: 'bg-red-500/40',
  };

  return (
    <motion.div
      variants={scaleIn}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🎯</span>
        <h4 className="text-white font-semibold">MITRE ATT&CK Coverage</h4>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {mitreCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-[#0a0f18] rounded-lg p-2 sm:p-3 border border-white/5 hover:border-[#88cc14]/30 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-1 mb-2">
              <div className={`w-2 h-2 rounded-full ${levelColors[category.level]}`} />
              <span className="text-[10px] sm:text-xs text-gray-500 truncate">{category.name}</span>
            </div>
            <div className="flex gap-0.5 flex-wrap">
              {Array.from({ length: Math.min(category.techniques, 8) }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-sm ${levelColors[category.level]} group-hover:opacity-80`}
                />
              ))}
              {category.techniques > 8 && (
                <span className="text-[8px] sm:text-[10px] text-gray-500">+{category.techniques - 8}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 pt-4 border-t border-white/10">
        {[
          { label: 'Low', color: 'green' },
          { label: 'Medium', color: 'yellow' },
          { label: 'High', color: 'orange' },
          { label: 'Critical', color: 'red' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-${item.color}-500/60`} />
            <span className="text-[10px] sm:text-xs text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Benefit Card for Early Detection Section
const BenefitCard = ({ benefit, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex gap-4 p-4 sm:p-5 bg-white/5 rounded-xl border border-white/10 hover:border-[#88cc14]/30 transition-all"
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#88cc14]/20 to-[#88cc14]/5 rounded-xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
      {benefit.icon}
    </div>
    <div>
      <h4 className="text-white font-semibold text-base sm:text-lg mb-1">{benefit.title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
    </div>
  </motion.div>
);

// Metric Card Component
const MetricCard = ({ metric }) => (
  <motion.div
    variants={scaleIn}
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-6 hover:border-[#88cc14]/30 transition-all duration-300"
  >
    <div className="flex items-start justify-between mb-2 sm:mb-3">
      <span className="text-2xl sm:text-3xl">{metric.icon}</span>
      <span className={`text-xs sm:text-sm font-medium ${
        metric.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
      }`}>
        {metric.trend}
      </span>
    </div>
    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{metric.value}</div>
    <div className="text-gray-400 text-xs sm:text-sm">{metric.label}</div>
  </motion.div>
);

// Leaderboard Row Component
const LeaderboardRow = ({ player, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all ${
      index < 3 ? 'bg-[#ef4444]/5 border border-[#ef4444]/20' : 'bg-white/5 border border-white/10'
    } hover:bg-white/10`}
  >
    {/* Rank */}
    <div className="w-8 sm:w-10 text-center">
      <span className="text-xl sm:text-2xl">{player.badge}</span>
    </div>

    {/* Avatar & Name */}
    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#ef4444]/20 to-[#88cc14]/20 rounded-full flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
        {player.avatar}
      </div>
      <div className="min-w-0">
        <div className="text-white font-medium text-sm sm:text-base truncate">{player.name}</div>
        <div className="text-gray-500 text-xs">Rank #{player.rank}</div>
      </div>
    </div>

    {/* Stats - Hidden on small mobile */}
    <div className="hidden sm:flex items-center gap-4 lg:gap-6">
      <div className="text-center">
        <div className="text-[#88cc14] font-bold text-sm sm:text-base">{player.points.toLocaleString()}</div>
        <div className="text-gray-500 text-xs">XP</div>
      </div>
      <div className="text-center">
        <div className="text-white font-medium text-sm sm:text-base">{player.hunts}</div>
        <div className="text-gray-500 text-xs">Hunts</div>
      </div>
      <div className="text-center">
        <div className="text-green-400 font-medium text-sm sm:text-base">{player.accuracy}</div>
        <div className="text-gray-500 text-xs">Accuracy</div>
      </div>
    </div>

    {/* Mobile Stats */}
    <div className="sm:hidden text-right">
      <div className="text-[#88cc14] font-bold text-sm">{player.points.toLocaleString()} XP</div>
      <div className="text-gray-500 text-xs">{player.accuracy} accuracy</div>
    </div>
  </motion.div>
);

// Simulator Dashboard Preview Component
const SimulatorPreview = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    variants={scaleIn}
    className="relative bg-[#080c14] rounded-xl sm:rounded-2xl border border-[#ef4444]/30 overflow-hidden shadow-2xl"
  >
    {/* Red Glow Effect for Active Threat */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#ef4444]/10 to-transparent" />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ef4444]/5 to-transparent" />

    <div className="relative z-10 p-1 sm:p-2">
      {/* Window Header */}
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 rounded-t-lg sm:rounded-t-xl">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse" />
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
        <div className="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm">Threat Hunting Simulator</div>
        <div className="ml-auto flex items-center gap-2">
          <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded-full animate-pulse">
            🔴 Active Threat
          </span>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex flex-col sm:flex-row min-h-[300px] sm:min-h-[450px]">
        {/* Sidebar */}
        <div className="hidden sm:block w-16 bg-white/5 border-r border-white/10 p-3 space-y-4">
          {[
            { icon: '📡', label: 'Threat Intel', active: false },
            { icon: '🔍', label: 'SIEM', active: true },
            { icon: '📊', label: 'Timeline', active: false },
            { icon: '📝', label: 'Report', active: false },
            { icon: '⚙️', label: 'Settings', active: false },
          ].map((item, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg cursor-pointer transition-colors ${
                item.active ? 'bg-[#ef4444]/20 border border-[#ef4444]/50' : 'hover:bg-white/10'
              }`}
              title={item.label}
            >
              {item.icon}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-3 sm:p-6 relative">
          {/* Threat Alert Banner */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-red-400">⚠️</span>
              <span className="text-red-400 text-sm font-medium">Suspicious activity detected in network segment 192.168.1.0/24</span>
            </div>
          </motion.div>

          {/* Investigation Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* Query Panel */}
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-white text-sm font-medium mb-2">SIEM Query</div>
              <div className="bg-[#0a0f18] rounded p-2 font-mono text-xs text-[#88cc14]">
                index=network sourcetype=firewall<br />
                action=blocked OR action=allowed<br />
                | stats count by src_ip, dest_ip
              </div>
            </div>

            {/* Results */}
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-white text-sm font-medium mb-2">Query Results</div>
              <div className="space-y-1">
                {[
                  { src: '192.168.1.105', dest: '10.0.0.45', status: 'blocked' },
                  { src: '192.168.1.105', dest: '10.0.0.12', status: 'allowed' },
                  { src: '192.168.1.200', dest: '8.8.8.8', status: 'allowed' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between text-xs p-1.5 bg-white/5 rounded">
                    <span className="text-gray-400">{row.src}</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-gray-400">{row.dest}</span>
                    <span className={row.status === 'blocked' ? 'text-red-400' : 'text-green-400'}>
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Welcome Modal Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg"
          >
            <div className="bg-[#0f1520] border border-white/20 rounded-xl p-6 sm:p-8 max-w-sm w-full mx-4 shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#ef4444]/20 to-[#88cc14]/20 rounded-full flex items-center justify-center text-3xl mb-4">
                  🔍
                </div>
                <h4 className="text-white text-lg sm:text-xl font-bold mb-2">
                  Welcome to the Threat Hunting Simulator!
                </h4>
                <p className="text-gray-400 text-sm mb-6">
                  Learn to track adversaries and uncover hidden threats in your network.
                </p>

                {/* Progress Indicator */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#88cc14]' : 'bg-white/20'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-500 text-xs mb-4">Step 1 of 15</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-[#88cc14] text-[#0b1220] font-bold rounded-lg hover:bg-[#a3e635] transition-colors"
                >
                  Next
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Attack Illustration Component
const AttackIllustration = () => (
  <motion.div
    variants={fadeInRight}
    className="relative h-[300px] sm:h-[400px] flex items-center justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Data Wall Visualization */}
      <div className="relative w-full max-w-sm">
        {/* Server/Data Blocks */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`aspect-square rounded-lg ${
                i === 5 || i === 9 ? 'bg-red-500/30 border-2 border-red-500/50' : 'bg-white/5 border border-white/10'
              } flex items-center justify-center`}
            >
              {i === 5 || i === 9 ? (
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-400"
                >
                  ⚠️
                </motion.span>
              ) : (
                <span className="text-gray-600 text-xs">📄</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Hand Pulling Data */}
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -right-8 top-1/2 -translate-y-1/2"
        >
          <span className="text-4xl sm:text-5xl">🖐️</span>
        </motion.div>

        {/* Attack Path Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
          <motion.path
            d="M 150 50 Q 170 100 150 150"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>
    </div>

    {/* Red Glow */}
    <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />
  </motion.div>
);

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobRole: '',
    seats: '',
    details: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#88cc14]/50 focus:ring-2 focus:ring-[#88cc14]/20 transition-all";

  return (
    <form className="space-y-3 sm:space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">First name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Last name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Business email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Company name</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Job role</label>
          <select
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            className={`${inputClasses} appearance-none`}
          >
            <option value="">Select role</option>
            <option value="threat-hunter">Threat Hunter</option>
            <option value="soc-analyst">SOC Analyst</option>
            <option value="security-engineer">Security Engineer</option>
            <option value="manager">Security Manager</option>
            <option value="ciso">CISO</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Seats required</label>
          <select
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            className={`${inputClasses} appearance-none`}
          >
            <option value="">Select seats</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-100">51-100</option>
            <option value="100+">100+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">More details</label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          rows={3}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your threat hunting training needs..."
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(136, 204, 20, 0.5)' }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0b1220] font-bold rounded-lg sm:rounded-xl shadow-lg shadow-[#88cc14]/30 transition-all text-sm sm:text-base"
      >
        Contact Sales
      </motion.button>
    </form>
  );
};

// FAQ Accordion Component
const FAQAccordion = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-white/10">
    <button
      onClick={onClick}
      className="w-full py-4 sm:py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
    >
      <span className="text-white font-medium text-sm sm:text-base pr-4">{question}</span>
      <motion.svg
        animate={{ rotate: isOpen ? 180 : 0 }}
        className="w-5 h-5 text-[#88cc14] flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
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
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <p className="text-gray-400 text-sm pb-4 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// FAQ Section Component
const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
      {/* Category Tabs */}
      <div className="flex flex-wrap border-b border-white/10">
        {faqCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setOpenQuestion(null);
            }}
            className={`px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium transition-all relative ${
              activeCategory === category.id
                ? 'text-[#88cc14]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {category.name}
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeFaqTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#88cc14]"
              />
            )}
          </button>
        ))}
      </div>

      {/* Questions */}
      <div className="p-4 sm:p-6">
        {faqData[activeCategory].map((faq, index) => (
          <FAQAccordion
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openQuestion === index}
            onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

// ============ MAIN COMPONENT ============
const ThreatHuntingSimulator = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'scenarios', 'progress', 'leaderboard'];
      const scrollPosition = window.scrollY + EXTERNAL_NAVBAR_HEIGHT + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080c14] via-[#0a1018] to-[#060a10] text-white overflow-hidden">
      {/* Quick Links Navigation */}
      <QuickLinksNav activeSection={activeSection} />

      {/* ============ HERO SECTION ============ */}
      <section
        id="overview"
        className="relative min-h-[calc(100vh-120px)] flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <AnimatedBackground />

        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-1/4 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#ef4444]/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] bg-[#88cc14]/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-full text-[#ef4444] text-xs sm:text-sm font-medium">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#ef4444] rounded-full animate-pulse" />
                Threat Hunting Simulator
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Uncover hidden threats and
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] via-[#f59e0b] to-[#88cc14]">
                expose blind spots
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 text-gray-300">
                with real attacker based training
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
            >
              Sharpen your threat hunting process and spot real adversary behavior 
              that evades traditional tools.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(136, 204, 20, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0b1220] font-bold rounded-xl shadow-lg shadow-[#88cc14]/30 transition-all text-sm sm:text-base"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm sm:text-base"
              >
                Get a Free Trial
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ============ SIMULATOR PREVIEW SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SimulatorPreview />
        </div>
      </section>

      {/* ============ TRUSTED BY SECTION ============ */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-gray-500 text-sm mb-6">Trusted by leading security teams worldwide</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {trustLogos.map((logo, i) => (
                <TrustLogo key={i} logo={logo} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ CORE VALUE CARDS SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {coreValueCards.map((card) => (
              <CoreValueCard key={card.id} card={card} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ STEP INTO THE ROLE SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel>Hands-On Experience</SectionLabel>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
              >
                Step into the role of a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#88cc14]"> Threat Hunter</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base"
              >
                Practice hands-on investigation techniques with real threat data 
                and learn to think like an adversary.
              </motion.p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {threatHunterFeatures.map((feature) => (
                <FeaturePreviewCard key={feature.id} feature={feature} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ HOW ATTACKS UNFOLD SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel variant="red">Attack Chain</SectionLabel>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
              >
                See how attacks unfold, and
                <span className="text-[#ef4444]"> learn how to stop them</span>
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Steps */}
              <motion.div variants={staggerContainer} className="space-y-0">
                {attackSteps.map((step, index) => (
                  <AttackStepCard
                    key={step.step}
                    step={step}
                    index={index}
                    isLast={index === attackSteps.length - 1}
                  />
                ))}

                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(136, 204, 20, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0b1220] font-bold rounded-xl shadow-lg shadow-[#88cc14]/30 transition-all text-sm sm:text-base"
                >
                  Launch a Scenario
                </motion.button>
              </motion.div>

              {/* Attack Illustration */}
              <div className="hidden lg:block">
                <AttackIllustration />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ SCENARIOS LIBRARY SECTION ============ */}
      <section id="scenarios" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel>Scenario Library</SectionLabel>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
              >
                Explore our library of diverse scenarios
              </motion.h2>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10"
            >
              {scenariosLibrary.map((scenario) => (
                <ScenarioCard key={scenario.id} scenario={scenario} />
              ))}
            </motion.div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0b1220] font-bold rounded-xl shadow-lg shadow-[#88cc14]/30 transition-all text-sm sm:text-base"
              >
                Launch a Scenario
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ EARLY DETECTION & MITRE ATT&CK SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel>MITRE ATT&CK</SectionLabel>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
              >
                Never miss early signs of
                <span className="text-[#88cc14]"> compromise</span>
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* MITRE Matrix Preview */}
              <MitreMatrixPreview />

              {/* Benefits */}
              <div className="space-y-4">
                {earlyDetectionBenefits.map((benefit, index) => (
                  <BenefitCard key={index} benefit={benefit} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ PROGRESS & STATS SECTION ============ */}
      <section id="progress" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel>Progress Tracking</SectionLabel>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
              >
                Track your threat hunting journey
              </motion.h2>
            </div>

            {/* Metrics Cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              {progressMetrics.map((metric, index) => (
                <MetricCard key={index} metric={metric} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ LEADERBOARD SECTION ============ */}
      <section id="leaderboard" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel>Leaderboard</SectionLabel>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
              >
                Top Threat Hunters This Month
              </motion.h2>
            </div>

            <motion.div
              variants={staggerContainer}
              className="space-y-3 sm:space-y-4"
            >
              {leaderboardData.map((player, index) => (
                <LeaderboardRow key={player.rank} player={player} index={index} />
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center mt-6 sm:mt-8"
            >
              <button className="px-6 py-3 bg-white/5 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-sm">
                View Full Leaderboard
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ CONTACT SALES SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="text-center mb-8 sm:mb-12">
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold"
              >
                Get full access to the
                <span className="text-[#88cc14]"> Threat Hunting Simulator</span>
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Benefits List */}
              <motion.div variants={fadeInLeft} className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">What you'll get:</h3>
                <div className="space-y-3 sm:space-y-4">
                  {contactFormBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#88cc14]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#88cc14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm sm:text-base">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Trust Logos */}
                <div className="pt-6 sm:pt-8">
                  <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">Trusted by leading organizations</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {trustLogos.slice(0, 4).map((logo, i) => (
                      <TrustLogo key={i} logo={logo} />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                variants={fadeInRight}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8"
              >
                <ContactForm />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel>Support</SectionLabel>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
              >
                Frequently Asked Questions
              </motion.h2>
            </div>

            <motion.div variants={fadeInUp}>
              <FAQSection />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ FOOTER CTA ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scaleIn}
            className="relative bg-gradient-to-r from-[#ef4444]/10 to-[#88cc14]/10 backdrop-blur-xl border border-[#ef4444]/20 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ef4444]/5 to-[#88cc14]/5" />
            <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#ef4444]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#88cc14]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.span
                className="text-5xl sm:text-6xl mb-4 sm:mb-6 block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                🔍
              </motion.span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                Ready to hunt threats like a pro?
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
                Join thousands of security professionals mastering threat hunting 
                with real-world adversary simulations.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(136, 204, 20, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0b1220] font-bold rounded-xl shadow-lg shadow-[#88cc14]/30 transition-all text-sm sm:text-base"
                >
                  Start Hunting Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm sm:text-base"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ CUSTOM STYLES ============ */}
      <style>{`
        /* Hide scrollbar for horizontal scroll */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Custom Scrollbar for main page */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(239, 68, 68, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(239, 68, 68, 0.5);
        }

        /* Select dropdown styling */
        select option {
          background: #0a0f18;
          color: white;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default ThreatHuntingSimulator;