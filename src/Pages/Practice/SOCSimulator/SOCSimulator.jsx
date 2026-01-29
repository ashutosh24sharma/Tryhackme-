// SOCSimulator.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============ CONFIGURATION ============
// Adjust this value based on your external Navbar height
const EXTERNAL_NAVBAR_HEIGHT = 64; // in pixels (h-16 = 64px)

// ============ STATIC DATA ============
const quickLinks = [
  { name: 'Overview', href: '#overview', icon: '🏠' },
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
];

const siemPlatforms = [
  { name: 'Splunk', icon: '⚡', color: '#88cc14' },
  { name: 'Elastic', icon: '🔎', color: '#00bcd4' },
  { name: 'Microsoft Sentinel', icon: '🛡️', color: '#0078d4' },
];

const featureHighlights = [
  {
    id: 1,
    icon: '🔍',
    title: 'Sharpen investigative skills with case reports',
    description: 'Build detailed case reports that mirror real-world SOC documentation standards and improve your analytical thinking.',
    image: '📋',
  },
  {
    id: 2,
    icon: '🤖',
    title: 'Leverage AI to optimize your reports',
    description: 'Get intelligent suggestions and feedback on your investigation reports to continuously improve your analysis quality.',
    image: '✨',
  },
  {
    id: 3,
    icon: '📊',
    title: 'Monitor progress with advanced metrics',
    description: 'Track your performance across key SOC metrics including MTTR, accuracy rates, and alert handling efficiency.',
    image: '📈',
  },
];

const howItWorksSteps = [
  {
    step: 1,
    title: 'Launch your simulator',
    description: 'Choose scenarios based on attack type, complexity level, and the specific skills you want to develop.',
    icon: '🚀',
  },
  {
    step: 2,
    title: 'Investigate and triage alerts',
    description: 'Analyze security alerts, identify true vs false positives, document your findings, and close cases effectively.',
    icon: '🔬',
  },
  {
    step: 3,
    title: 'Monitor your progress',
    description: 'Track real-world performance metrics, identify areas for improvement, and share results with your team.',
    icon: '📈',
  },
];

const scenarioCards = [
  { title: 'Phishing Unfolding', difficulty: 'Medium', icon: '🎣' },
  { title: 'Initial Drift', difficulty: 'Easy', icon: '🌊' },
  { title: 'Upload and Conquer', difficulty: 'Hard', icon: '📤' },
];

const scenariosLibrary = [
  {
    id: 1,
    title: 'Phishing Unfolding',
    difficulty: 'Easy',
    time: '1-2 hrs',
    description: 'Investigate a sophisticated phishing campaign targeting your organization\'s employees.',
    icon: '🎣',
    category: 'Email Security',
  },
  {
    id: 2,
    title: 'Initial Drift',
    difficulty: 'Medium',
    time: '2-3 hrs',
    description: 'Detect and respond to lateral movement activities within your network infrastructure.',
    icon: '🌊',
    category: 'Network Security',
  },
  {
    id: 3,
    title: 'Upload and Conquer',
    difficulty: 'Hard',
    time: '3-4 hrs',
    description: 'Analyze a complex file upload vulnerability exploitation and subsequent system compromise.',
    icon: '📤',
    category: 'Web Security',
  },
  {
    id: 4,
    title: 'Ransomware Response',
    difficulty: 'Hard',
    time: '4-5 hrs',
    description: 'Handle a live ransomware incident from detection to containment and recovery.',
    icon: '🔐',
    category: 'Incident Response',
  },
  {
    id: 5,
    title: 'Credential Theft',
    difficulty: 'Medium',
    time: '2-3 hrs',
    description: 'Investigate credential harvesting attempts and unauthorized access patterns.',
    icon: '🔑',
    category: 'Identity Security',
  },
  {
    id: 6,
    title: 'Data Exfiltration',
    difficulty: 'Hard',
    time: '3-4 hrs',
    description: 'Detect and investigate data exfiltration attempts through various channels.',
    icon: '📊',
    category: 'Data Security',
  },
];

const coreMetrics = [
  { label: 'Closed alerts', value: '1,247', icon: '✅', trend: '+12%' },
  { label: 'Mean time to resolve', value: '14.2m', icon: '⏱️', trend: '-23%' },
  { label: 'Mean dwell time', value: '2.1h', icon: '🕐', trend: '-18%' },
  { label: 'Points collected', value: '8,450 XP', icon: '⭐', trend: '+45%' },
];

const caseReports = [
  { id: 'CR-2024-001', severity: 'Critical', classification: 'Correct', type: 'Malware', status: 'Closed' },
  { id: 'CR-2024-002', severity: 'High', classification: 'Correct', type: 'Phishing', status: 'Closed' },
  { id: 'CR-2024-003', severity: 'Medium', classification: 'Incorrect', type: 'False Positive', status: 'Review' },
  { id: 'CR-2024-004', severity: 'Low', classification: 'Correct', type: 'Policy Violation', status: 'Closed' },
  { id: 'CR-2024-005', severity: 'Critical', classification: 'Correct', type: 'Ransomware', status: 'Closed' },
];

const leaderboardData = [
  { rank: 1, name: 'Alex Thompson', avatar: '👨‍💻', points: 12450, alerts: 234, accuracy: '98%', badge: '🥇' },
  { rank: 2, name: 'Sarah Chen', avatar: '👩‍💻', points: 11200, alerts: 198, accuracy: '96%', badge: '🥈' },
  { rank: 3, name: 'Mike Rodriguez', avatar: '👨‍🔬', points: 10890, alerts: 187, accuracy: '95%', badge: '🥉' },
  { rank: 4, name: 'Emily Davis', avatar: '👩‍🔬', points: 9750, alerts: 165, accuracy: '94%', badge: '⭐' },
  { rank: 5, name: 'James Wilson', avatar: '🧑‍💻', points: 9200, alerts: 156, accuracy: '93%', badge: '⭐' },
];

const whoItsFor = [
  {
    role: 'SOC Analysts',
    description: 'Develop hands-on experience with real-world scenarios, improve your triage speed, and master investigation techniques.',
    icon: '👨‍💻',
    color: '#88cc14',
  },
  {
    role: 'SOC Managers',
    description: 'Assess team readiness, identify skill gaps, and track improvement metrics across your entire security operations team.',
    icon: '👔',
    color: '#00bcd4',
  },
  {
    role: 'Cyber Security Directors',
    description: 'Demonstrate ROI on training investments, ensure compliance readiness, and build a world-class security operations center.',
    icon: '🎯',
    color: '#9c27b0',
  },
];

const testimonials = [
  {
    quote: 'SOC Simulator has transformed how we train our analysts. The realistic scenarios and immediate feedback have cut our onboarding time in half.',
    author: 'Joshua Balentine',
    role: 'SOC Lead',
    company: 'Tucson Electric Power',
    avatar: '👨‍💼',
  },
  {
    quote: 'The metrics and progress tracking have given us unprecedented visibility into our team\'s capabilities and areas for improvement.',
    author: 'Sarah Chen',
    role: 'Security Director',
    company: 'Fortune 500 Tech Company',
    avatar: '👩‍💼',
  },
  {
    quote: 'Finally, a training platform that replicates the pressure and complexity of real SOC operations. Our MTTD has improved by 40%.',
    author: 'Michael Rodriguez',
    role: 'CISO',
    company: 'Healthcare Enterprise',
    avatar: '👨‍⚕️',
  },
];

const contactFormBenefits = [
  'Unlimited access to all scenarios',
  'Team progress dashboards',
  'Custom scenario creation',
  'Priority support',
  'SIEM integrations',
  'Compliance reporting',
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// ============ HELPER COMPONENTS ============

// Animated Background
const AnimatedBackground = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
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

      {/* Floating Particles - Reduced for performance */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#88cc14]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
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

// Quick Links Navigation Component - Fully Responsive
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
          ? 'bg-[#0b1220]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/10'
          : 'bg-[#0b1220]/80 backdrop-blur-md'
      }`}
      style={{ top: `${EXTERNAL_NAVBAR_HEIGHT}px` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Quick Links */}
        <div className="hidden md:flex items-center justify-between h-14">
          {/* Logo/Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#88cc14] to-[#6ba10e] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#0b1220]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">SOC Simulator</span>
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
            Launch Simulator
          </motion.button>
        </div>

        {/* Mobile Quick Links */}
        <div className="md:hidden">
          {/* Mobile Header */}
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#88cc14] to-[#6ba10e] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#0b1220]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-base font-bold text-white">SOC Simulator</span>
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
                      {activeSection === link.href.substring(1) && (
                        <div className="ml-auto w-2 h-2 bg-[#88cc14] rounded-full" />
                      )}
                    </a>
                  ))}
                  <div className="pt-3 px-4">
                    <button className="w-full py-3 bg-[#88cc14] text-[#0b1220] font-semibold rounded-lg hover:bg-[#a3e635] transition-colors text-sm">
                      Launch Simulator
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Horizontal Scroll Quick Links (Alternative - always visible) */}
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
const SectionLabel = ({ children }) => (
  <motion.span
    variants={fadeInUp}
    className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#88cc14]/10 border border-[#88cc14]/30 rounded-full text-[#88cc14] text-xs sm:text-sm font-medium uppercase tracking-wider"
  >
    {children}
  </motion.span>
);

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

// Severity Badge
const SeverityBadge = ({ severity }) => {
  const colors = {
    Critical: 'bg-red-500/20 text-red-400',
    High: 'bg-orange-500/20 text-orange-400',
    Medium: 'bg-yellow-500/20 text-yellow-400',
    Low: 'bg-blue-500/20 text-blue-400',
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${colors[severity]}`}>
      {severity}
    </span>
  );
};

// Classification Badge
const ClassificationBadge = ({ classification }) => {
  const isCorrect = classification === 'Correct';
  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${
      isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
    }`}>
      {classification}
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

// SIEM Icon Component
const SIEMIcon = ({ platform }) => (
  <motion.div
    whileHover={{ scale: 1.1, boxShadow: `0 0 40px ${platform.color}40` }}
    className="relative group"
  >
    <div
      className="w-16 h-16 sm:w-20 md:w-24 sm:h-20 md:h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl cursor-pointer transition-all duration-300 group-hover:border-[#88cc14]/50"
      style={{ boxShadow: `0 0 20px ${platform.color}20` }}
    >
      {platform.icon}
    </div>
    <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
      {platform.name}
    </div>
  </motion.div>
);

// Feature Card Component
const FeatureCard = ({ feature, index }) => (
  <motion.div
    variants={scaleIn}
    whileHover={{ y: -10 }}
    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 overflow-hidden hover:border-[#88cc14]/30 hover:shadow-xl hover:shadow-[#88cc14]/5 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#88cc14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#88cc14]/20 to-[#88cc14]/5 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#88cc14] transition-colors">
        {feature.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-4 sm:mb-5">
        {feature.description}
      </p>

      <div className="bg-[#0b1220] rounded-xl p-3 sm:p-4 border border-white/5">
        <div className="h-24 sm:h-32 flex items-center justify-center text-4xl sm:text-6xl opacity-50">
          {feature.image}
        </div>
      </div>
    </div>
  </motion.div>
);

// Step Card Component
const StepCard = ({ step, index, isLast }) => (
  <motion.div
    variants={fadeInUp}
    className="relative flex gap-4 sm:gap-6"
  >
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#88cc14] to-[#6ba10e] rounded-full flex items-center justify-center text-[#0b1220] font-bold text-base sm:text-lg shadow-lg shadow-[#88cc14]/30">
        {step.step}
      </div>
      {!isLast && (
        <div className="w-0.5 h-full bg-gradient-to-b from-[#88cc14]/50 to-transparent mt-4" />
      )}
    </div>

    <div className="flex-1 pb-8 sm:pb-12">
      <div className="flex items-center gap-2 sm:gap-3 mb-2">
        <span className="text-xl sm:text-2xl">{step.icon}</span>
        <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
      </div>
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{step.description}</p>
    </div>
  </motion.div>
);

// Floating Scenario Card
const FloatingScenarioCard = ({ scenario, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 50, y: 20 * index }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, x: -10 }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:border-[#88cc14]/30 transition-all duration-300 cursor-pointer"
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#88cc14]/20 to-cyan-400/10 rounded-lg flex items-center justify-center text-xl sm:text-2xl">
      {scenario.icon}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-white font-medium text-sm sm:text-base truncate">{scenario.title}</h4>
      <DifficultyBadge difficulty={scenario.difficulty} size="sm" />
    </div>
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </motion.div>
);

// Scenario Library Card
const ScenarioLibraryCard = ({ scenario }) => (
  <motion.div
    variants={scaleIn}
    whileHover={{ y: -10 }}
    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 overflow-hidden hover:border-[#88cc14]/30 hover:shadow-xl hover:shadow-[#88cc14]/5 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#88cc14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10">
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#88cc14]/20 to-cyan-400/10 rounded-full flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-4 sm:mb-5"
      >
        {scenario.icon}
      </motion.div>

      <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-2 group-hover:text-[#88cc14] transition-colors">
        {scenario.title}
      </h3>

      <p className="text-[#88cc14] text-xs sm:text-sm text-center mb-2 sm:mb-3">{scenario.category}</p>

      <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed mb-4 sm:mb-5">
        {scenario.description}
      </p>

      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10">
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
      index < 3 ? 'bg-[#88cc14]/5 border border-[#88cc14]/20' : 'bg-white/5 border border-white/10'
    } hover:bg-white/10`}
  >
    {/* Rank */}
    <div className="w-8 sm:w-10 text-center">
      <span className="text-xl sm:text-2xl">{player.badge}</span>
    </div>

    {/* Avatar & Name */}
    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#88cc14]/20 to-cyan-400/20 rounded-full flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
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
        <div className="text-white font-medium text-sm sm:text-base">{player.alerts}</div>
        <div className="text-gray-500 text-xs">Alerts</div>
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

// Who It's For Card
const RoleCard = ({ role, index }) => (
  <motion.div
    variants={scaleIn}
    whileHover={{ y: -10 }}
    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden hover:border-[#88cc14]/30 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#88cc14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10 text-center">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6"
      >
        <div
          className="absolute inset-0 rounded-full border-2 border-dashed"
          style={{ borderColor: `${role.color}40` }}
        />
        <div
          className="absolute inset-2 rounded-full border"
          style={{ borderColor: `${role.color}60` }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl">
          {role.icon}
        </div>
      </motion.div>

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#88cc14] transition-colors">
        {role.role}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
        {role.description}
      </p>
    </div>
  </motion.div>
);

// Testimonial Card
const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="text-center max-w-3xl mx-auto px-4"
  >
    <div className="text-4xl sm:text-5xl text-[#88cc14] mb-4 sm:mb-8">"</div>
    <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-6 sm:mb-8 italic">
      {testimonial.quote}
    </p>
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#88cc14]/20 to-cyan-400/20 rounded-full flex items-center justify-center text-2xl sm:text-3xl">
        {testimonial.avatar}
      </div>
      <div className="text-left">
        <div className="text-white font-semibold text-sm sm:text-base">{testimonial.author}</div>
        <div className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</div>
        <div className="text-[#88cc14] text-xs sm:text-sm">{testimonial.company}</div>
      </div>
    </div>
  </motion.div>
);

// Dashboard Preview Component
const DashboardPreview = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    variants={scaleIn}
    className="relative bg-[#0a0f1a] rounded-xl sm:rounded-2xl border border-[#88cc14]/30 overflow-hidden shadow-2xl shadow-[#88cc14]/10"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#88cc14]/5 to-cyan-500/5" />

    <div className="relative z-10 p-1 sm:p-2">
      {/* Window Header */}
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 rounded-t-lg sm:rounded-t-xl">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
        <div className="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm">SOC Simulator Dashboard</div>
      </div>

      {/* Dashboard Content */}
      <div className="flex flex-col sm:flex-row min-h-[250px] sm:min-h-[400px]">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden sm:block w-16 bg-white/5 border-r border-white/10 p-3 space-y-4">
          {['🏠', '🔔', '📊', '📋', '⚙️'].map((icon, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg cursor-pointer transition-colors ${
                i === 1 ? 'bg-[#88cc14]/20 border border-[#88cc14]/50' : 'hover:bg-white/10'
              }`}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-3 sm:p-6 space-y-4 sm:space-y-6">
          {/* Alert Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: 'Critical', count: 3, color: 'red' },
              { label: 'High', count: 12, color: 'orange' },
              { label: 'Medium', count: 28, color: 'yellow' },
              { label: 'Low', count: 45, color: 'blue' },
            ].map((alert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg p-2 sm:p-4"
                style={{
                  backgroundColor: `rgba(${
                    alert.color === 'red' ? '239,68,68' :
                    alert.color === 'orange' ? '249,115,22' :
                    alert.color === 'yellow' ? '234,179,8' : '59,130,246'
                  }, 0.1)`,
                  borderWidth: 1,
                  borderColor: `rgba(${
                    alert.color === 'red' ? '239,68,68' :
                    alert.color === 'orange' ? '249,115,22' :
                    alert.color === 'yellow' ? '234,179,8' : '59,130,246'
                  }, 0.3)`,
                }}
              >
                <div className="text-lg sm:text-2xl font-bold text-white">{alert.count}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{alert.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts Row - Simplified on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
            {/* Donut Chart */}
            <div className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10">
              <div className="text-white font-medium text-sm sm:text-base mb-2 sm:mb-3">Alert Types</div>
              <div className="relative w-20 h-20 sm:w-32 sm:h-32 mx-auto">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#1e293b" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#88cc14" strokeWidth="3" strokeDasharray="40 60" />
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="-40" />
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-65" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-base sm:text-xl font-bold text-white">88</div>
                    <div className="text-[10px] sm:text-xs text-gray-400">Total</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Open Alerts */}
            <div className="sm:col-span-2 bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10">
              <div className="text-white font-medium text-sm sm:text-base mb-2 sm:mb-3">Open Alerts</div>
              <div className="space-y-1 sm:space-y-2">
                {[
                  { id: 'ALR-001', type: 'Malware Detected', severity: 'Critical' },
                  { id: 'ALR-002', type: 'Suspicious Login', severity: 'High' },
                  { id: 'ALR-003', type: 'Data Exfiltration', severity: 'High' },
                ].map((alert, i) => (
                  <div key={i} className="flex items-center justify-between p-1.5 sm:p-2 bg-white/5 rounded text-xs sm:text-sm">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <span className="text-[#88cc14] text-xs sm:text-sm">{alert.id}</span>
                      <span className="text-white truncate">{alert.type}</span>
                    </div>
                    <SeverityBadge severity={alert.severity} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
            <option value="analyst">SOC Analyst</option>
            <option value="manager">SOC Manager</option>
            <option value="director">Security Director</option>
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

// ============ MAIN COMPONENT ============
const SOCSimulator = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] via-[#0f1c2e] to-[#081224] text-white overflow-hidden">
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
          className="absolute top-1/4 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#88cc14]/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#88cc14]/10 border border-[#88cc14]/30 rounded-full text-[#88cc14] text-xs sm:text-sm font-medium">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#88cc14] rounded-full animate-pulse" />
                Enterprise SOC Training Platform
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Build real-world expertise in a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#88cc14] via-[#a3e635] to-[#88cc14]">
                simulated SOC environment
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
            >
              Tackle authentic challenges, sharpen your investigative skills, and improve 
              performance through actionable feedback tailored to enhance your readiness.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(136, 204, 20, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0b1220] font-bold rounded-xl shadow-lg shadow-[#88cc14]/30 transition-all text-sm sm:text-base"
              >
                Launch Simulator
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm sm:text-base"
              >
                Get a free trial
              </motion.button>
            </motion.div>

            {/* Trust Signals */}
            <motion.div variants={fadeInUp}>
              <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">Trusted by the best SOC teams worldwide</p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {trustLogos.map((logo, i) => (
                  <TrustLogo key={i} logo={logo} />
                ))}
              </div>
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

      {/* ============ DASHBOARD PREVIEW SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <DashboardPreview />
        </div>
      </section>

      {/* ============ SIEM COMPATIBILITY SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            >
              Investigate smarter, and respond faster
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#88cc14] to-cyan-400">
                with your SIEM of choice
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base px-4"
            >
              Our simulator integrates seamlessly with industry-leading SIEM platforms, 
              allowing you to practice with the same tools you use in production.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-8 sm:gap-12"
            >
              {siemPlatforms.map((platform, i) => (
                <SIEMIcon key={i} platform={platform} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ FEATURE HIGHLIGHTS SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel>Features Highlights</SectionLabel>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
              >
                Conquer the daily challenges of a SOC team
              </motion.h2>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {featureHighlights.map((feature, index) => (
                <FeatureCard key={feature.id} feature={feature} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ HOW IT WORKS SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel>How It Works</SectionLabel>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
              >
                Accelerate SOC analyst skill development
                <span className="block text-[#88cc14]">in three steps</span>
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <motion.div variants={staggerContainer} className="space-y-0">
                {howItWorksSteps.map((step, index) => (
                  <StepCard
                    key={step.step}
                    step={step}
                    index={index}
                    isLast={index === howItWorksSteps.length - 1}
                  />
                ))}
              </motion.div>

              {/* Floating Scenario Cards - Hidden on mobile */}
              <div className="relative h-[300px] sm:h-[400px] hidden lg:block">
                <div className="absolute top-0 right-0 space-y-4 w-72 lg:w-80">
                  {scenarioCards.map((scenario, index) => (
                    <FloatingScenarioCard key={index} scenario={scenario} index={index} />
                  ))}
                </div>
                <div className="absolute top-1/2 right-20 w-64 h-64 bg-[#88cc14]/10 rounded-full blur-3xl" />
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
              <SectionLabel>Where To Start</SectionLabel>
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
                <ScenarioLibraryCard key={scenario.id} scenario={scenario} />
              ))}
            </motion.div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-[#88cc14]/30 transition-all text-sm sm:text-base"
              >
                Explore all scenarios →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ CORE BENEFITS / PROGRESS SECTION ============ */}
      <section id="progress" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel>Core Benefits</SectionLabel>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
              >
                Improve your triage and analysis capabilities
              </motion.h2>
            </div>

            {/* Metrics Cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              {coreMetrics.map((metric, index) => (
                <MetricCard key={index} metric={metric} />
              ))}
            </motion.div>

            {/* Case Reports Table */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10">
                <h3 className="text-base sm:text-lg font-semibold text-white">Recent Case Reports</h3>
              </div>

              {/* Desktop Table */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Case ID</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Type</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Severity</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Classification</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {caseReports.map((report) => (
                      <tr key={report.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-[#88cc14] font-medium">{report.id}</td>
                        <td className="px-6 py-4 text-white">{report.type}</td>
                        <td className="px-6 py-4"><SeverityBadge severity={report.severity} /></td>
                        <td className="px-6 py-4"><ClassificationBadge classification={report.classification} /></td>
                        <td className="px-6 py-4 text-gray-400">{report.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="sm:hidden divide-y divide-white/5">
                {caseReports.map((report) => (
                  <div key={report.id} className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#88cc14] font-medium text-sm">{report.id}</span>
                      <SeverityBadge severity={report.severity} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm">{report.type}</span>
                      <ClassificationBadge classification={report.classification} />
                    </div>
                    <div className="text-gray-400 text-xs">Status: {report.status}</div>
                  </div>
                ))}
              </div>
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
                Top Performers This Month
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base"
              >
                See how you stack up against other analysts
              </motion.p>
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

      {/* ============ WHO IT'S FOR SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel>Who It's For</SectionLabel>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
              >
                Empower every member of your SOC team
              </motion.h2>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {whoItsFor.map((role, index) => (
                <RoleCard key={index} role={role} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ TESTIMONIALS SECTION ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"
          >
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={activeTestimonial}
                testimonial={testimonials[activeTestimonial]}
              />
            </AnimatePresence>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeTestimonial
                      ? 'w-6 sm:w-8 bg-[#88cc14]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
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
                Get full access to SOC Simulator
                <span className="block text-[#88cc14]">with TryHackMe for Business</span>
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

      {/* ============ FOOTER CTA ============ */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scaleIn}
            className="relative bg-gradient-to-r from-[#88cc14]/10 to-cyan-400/10 backdrop-blur-xl border border-[#88cc14]/20 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#88cc14]/5 to-cyan-400/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-[#88cc14]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.span
                className="text-5xl sm:text-6xl mb-4 sm:mb-6 block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                🛡️
              </motion.span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                Ready to transform your SOC team?
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
                Join hundreds of enterprises already using SOC Simulator to build 
                world-class security operations teams.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(136, 204, 20, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0b1220] font-bold rounded-xl shadow-lg shadow-[#88cc14]/30 transition-all text-sm sm:text-base"
                >
                  Start Free Trial
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
          background: rgba(136, 204, 20, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(136, 204, 20, 0.5);
        }

        /* Select dropdown styling */
        select option {
          background: #0f1c2e;
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

export default SOCSimulator;