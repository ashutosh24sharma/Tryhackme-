// App.jsx - Complete Single File Component
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// ============ MAIN APP COMPONENT ============
const Homesec2  = () => {
  // ============ STATE & REFS ============
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Section refs for scroll animations
  const trainingRef = useRef(null);
  const trustedRef = useRef(null);
  const communityRef = useRef(null);
  const pathsRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  const footerRef = useRef(null);
  
  // InView hooks
  const trainingInView = useInView(trainingRef, { once: true, margin: "-100px" });
  const trustedInView = useInView(trustedRef, { once: true, margin: "-50px" });
  const communityInView = useInView(communityRef, { once: true, margin: "-100px" });
  const pathsInView = useInView(pathsRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-50px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });
  const footerInView = useInView(footerRef, { once: true });

  // ============ CUSTOM HOOKS ============
  const useCountUp = (end, duration = 2000, startCounting = false) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!startCounting) return;
      
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration, startCounting]);
    
    return count;
  };

  const userCount = useCountUp(6000000, 2500, communityInView);

  // ============ EFFECTS ============
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ============ ANIMATION VARIANTS ============
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // ============ DATA ============
  const navLinks = ["Learning Paths", "Pricing", "Business", "Resources"];

  const trainingCards = [
    {
      id: 1,
      title: "For Business",
      subtitle: "Enterprise Training",
      description: "Upskill your security team with tailored training programs, progress tracking, and team management features designed for enterprise needs.",
      features: ["Custom learning paths", "Team analytics dashboard", "SSO integration", "Dedicated support"],
      buttonText: "Learn More",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "For Education",
      subtitle: "Academic Programs",
      description: "Prepare students for cybersecurity careers with curriculum-aligned content, academic tools, and industry-recognized certifications.",
      features: ["LMS integration", "Student progress tracking", "Academic pricing", "Certification prep"],
      buttonText: "Learn More",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    }
  ];

  const logos = [
    { name: "Microsoft", id: 1 },
    { name: "Google", id: 2 },
    { name: "Amazon", id: 3 },
    { name: "Meta", id: 4 },
    { name: "IBM", id: 5 },
    { name: "Cisco", id: 6 },
    { name: "Oracle", id: 7 },
    { name: "Deloitte", id: 8 }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Security Analyst at TechCorp",
      content: "This platform transformed my career. The hands-on labs and real-world scenarios gave me skills that I use every day in my job.",
      avatar: "SC"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Penetration Tester",
      content: "The gamified learning keeps me engaged, and the difficulty progression is perfect. I went from beginner to certified professional.",
      avatar: "MJ"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "IT Manager",
      content: "We trained our entire team here. The business features made it easy to track progress and ensure everyone was learning effectively.",
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Park",
      role: "Student",
      content: "As a student, this platform helped me land my first internship. The practical experience you gain is invaluable.",
      avatar: "DP"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "CISO",
      content: "The quality of content is exceptional. It's my go-to recommendation for anyone wanting to enter cybersecurity.",
      avatar: "LT"
    }
  ];

  const learningPaths = [
    {
      id: 1,
      title: "Complete Beginner",
      description: "Start your cybersecurity journey with foundational knowledge and basic skills that will prepare you for advanced topics.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
      difficulty: "Beginner",
      modules: 12,
      hours: 40
    },
    {
      id: 2,
      title: "Offensive Pentesting",
      description: "Learn to think like a hacker and discover vulnerabilities in systems using industry-standard tools and techniques.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop",
      difficulty: "Intermediate",
      modules: 18,
      hours: 65
    },
    {
      id: 3,
      title: "SOC Level 1",
      description: "Become a Security Operations Center analyst and learn to defend against cyber threats in real-time.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      difficulty: "Intermediate",
      modules: 15,
      hours: 55
    }
  ];

  const features = [
    {
      id: 1,
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Hands-On Labs",
      description: "Real virtual environments"
    },
    {
      id: 2,
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Learn by Doing",
      description: "Practical challenges"
    },
    {
      id: 3,
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      title: "Earn Badges",
      description: "Track your progress"
    },
    {
      id: 4,
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Community",
      description: "Learn with peers"
    },
    {
      id: 5,
      icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
      title: "Custom Paths",
      description: "Personalized learning"
    },
    {
      id: 6,
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "Certifications",
      description: "Industry recognized"
    }
  ];

  const footerLinks = {
    Product: ["Features", "Pricing", "Enterprise", "Education"],
    Resources: ["Blog", "Documentation", "Community", "Events"],
    Company: ["About", "Careers", "Press", "Contact"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"]
  };

  const socialLinks = [
    { name: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
    { name: "GitHub", icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" },
    { name: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z" },
    { name: "Discord", icon: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" }
  ];

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800"
  };

  // ============ FLOATING DOTS DATA ============
  const floatingDots = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5
  }));

  const footerDots = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5
  }));

  // ============ RENDER ============
  return (
    <div className="min-h-screen bg-[#0b1c3d]">
      
      <main>
        {/* ==================== SECTION 1: HERO ==================== */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b1c3d] via-[#0f2a5c] to-[#0b1c3d]">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(159, 239, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(159, 239, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Floating Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingDots.map((dot) => (
              <motion.div
                key={dot.id}
                className="absolute rounded-full bg-[#9FEF00]"
                style={{
                  width: dot.size,
                  height: dot.size,
                  left: `${dot.left}%`,
                  top: `${dot.top}%`,
                  opacity: 0.4
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: dot.duration,
                  repeat: Infinity,
                  delay: dot.delay,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Learn Cyber Security
                <span className="block text-[#9FEF00] mt-2">Hands-On</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                Develop real-world cybersecurity skills through hands-on training, 
                interactive labs, and gamified learning experiences.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <button className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#9FEF00] text-[#0b1c3d] hover:bg-[#8BD600] hover:shadow-lg hover:shadow-[#9FEF00]/30 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center">
                  Start Learning Free
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-[#9FEF00] text-[#9FEF00] hover:bg-[#9FEF00] hover:text-[#0b1c3d] transition-all duration-300">
                  View Learning Paths
                </button>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-8 text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#9FEF00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#9FEF00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free starter content</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
          
          {/* Gradient fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b1c3d] to-transparent" />
        </section>

        {/* ==================== SECTION 2: TRAINING CARDS ==================== */}
        <section ref={trainingRef} className="py-20 bg-gradient-to-b from-[#0b1c3d] to-[#0f2a5c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={trainingInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="space-y-8"
            >
              {trainingCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  variants={index === 0 ? slideInLeft : slideInRight}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="bg-[#1a3a6e]/50 rounded-2xl overflow-hidden border border-[#2a4a7e]/50 hover:shadow-2xl hover:shadow-[#9FEF00]/10 transition-shadow duration-500"
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <span className="text-[#9FEF00] font-semibold text-sm uppercase tracking-wider mb-2">
                        {card.subtitle}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {card.title}
                      </h2>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {card.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {card.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 text-[#9FEF00] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div>
                        <button className="px-6 py-3 font-semibold rounded-lg bg-[#9FEF00] text-[#0b1c3d] hover:bg-[#8BD600] hover:shadow-lg hover:shadow-[#9FEF00]/30 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center">
                          {card.buttonText}
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px]">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-[#1a3a6e]/80 via-transparent to-transparent`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ==================== SECTION 3: TRUSTED BY ==================== */}
        <section ref={trustedRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={trustedInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c3d] mb-4">
                Trusted by Industry Leaders
              </h2>
              <div className="w-20 h-1 bg-[#9FEF00] mx-auto rounded-full" />
            </motion.div>

            {/* Desktop: Grid */}
            <motion.div
              initial="hidden"
              animate={trustedInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-8 items-center"
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={logo.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1, duration: 0.5 }
                    }
                  }}
                  className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 hover:border-[#9FEF00] transition-colors duration-300">
                    <span className="text-gray-600 font-semibold text-sm">{logo.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile: Swiper */}
            <div className="md:hidden">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                spaceBetween={20}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop
                className="py-4"
              >
                {logos.map((logo) => (
                  <SwiperSlide key={logo.id}>
                    <div className="flex items-center justify-center p-4">
                      <div className="w-28 h-14 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="text-gray-600 font-semibold text-sm">{logo.name}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* ==================== SECTION 4: COMMUNITY & REVIEWS ==================== */}
        <section ref={communityRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial="hidden"
                animate={communityInView ? "visible" : "hidden"}
                variants={slideInLeft}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c3d] mb-6">
                  Join Our Global Community
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Connect with millions of cybersecurity enthusiasts, professionals, and learners 
                  from around the world. Learn together, grow together.
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-[#9FEF00] text-3xl font-bold">500+</div>
                    <div className="text-gray-600">Learning Rooms</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-[#9FEF00] text-3xl font-bold">50+</div>
                    <div className="text-gray-600">Learning Paths</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-[#9FEF00] text-3xl font-bold">24/7</div>
                    <div className="text-gray-600">Community Support</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={communityInView ? "visible" : "hidden"}
                variants={slideInRight}
                className="text-center lg:text-right"
              >
                <div className="inline-block bg-[#0b1c3d] rounded-2xl p-8 md:p-12 shadow-xl">
                  <div className="text-5xl md:text-7xl font-bold text-[#9FEF00] mb-2">
                    {userCount.toLocaleString()}+
                  </div>
                  <div className="text-xl text-white">Active Learners Worldwide</div>
                </div>
              </motion.div>
            </div>

            {/* Reviews Slider */}
            <motion.div
              initial="hidden"
              animate={communityInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-[#0b1c3d] text-center mb-8">
                What Our Community Says
              </h3>
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={24}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 }
                }}
                className="pb-12"
              >
                {reviews.map((review) => (
                  <SwiperSlide key={review.id}>
                    <motion.div
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0b1c3d] to-[#1a3a6e] flex items-center justify-center text-white font-bold">
                          {review.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-[#0b1c3d]">{review.name}</div>
                          <div className="text-sm text-gray-500">{review.role}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{review.content}</p>
                      <div className="flex text-[#9FEF00]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </section>

        {/* ==================== SECTION 5: LEARNING PATHS ==================== */}
        <section ref={pathsRef} className="py-20 bg-gradient-to-b from-[#0b1c3d] to-[#0f2a5c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={pathsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Structured Learning Paths
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Follow our curated paths to develop skills systematically, from beginner to expert level.
              </p>
            </motion.div>

            {/* Desktop: Grid */}
            <motion.div
              initial="hidden"
              animate={pathsInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="hidden md:grid md:grid-cols-3 gap-8"
            >
              {learningPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.15, duration: 0.6 }
                    }
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-[#1a3a6e]/60 rounded-xl overflow-hidden border border-[#2a4a7e]/50 hover:shadow-2xl hover:shadow-[#9FEF00]/10 transition-shadow duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={path.image} 
                      alt={path.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a6e] to-transparent" />
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[path.difficulty]}`}>
                      {path.difficulty}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{path.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{path.description}</p>
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        {path.modules} Modules
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {path.hours} Hours
                      </span>
                    </div>
                    <button className="w-full px-6 py-3 font-semibold rounded-lg bg-[#9FEF00] text-[#0b1c3d] hover:bg-[#8BD600] hover:shadow-lg hover:shadow-[#9FEF00]/30 transition-all duration-300">
                      Enroll in Path
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile: Swiper */}
            <div className="md:hidden">
              <Swiper
                modules={[Pagination]}
                slidesPerView={1.15}
                spaceBetween={16}
                centeredSlides
                pagination={{ clickable: true }}
                className="pb-12"
              >
                {learningPaths.map((path) => (
                  <SwiperSlide key={path.id}>
                    <div className="bg-[#1a3a6e]/60 rounded-xl overflow-hidden border border-[#2a4a7e]/50">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={path.image} 
                          alt={path.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a6e] to-transparent" />
                        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[path.difficulty]}`}>
                          {path.difficulty}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3">{path.title}</h3>
                        <p className="text-gray-300 mb-4 text-sm">{path.description}</p>
                        <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                          <span>{path.modules} Modules</span>
                          <span>{path.hours} Hours</span>
                        </div>
                        <button className="w-full px-6 py-3 font-semibold rounded-lg bg-[#9FEF00] text-[#0b1c3d] hover:bg-[#8BD600] transition-all duration-300">
                          Enroll in Path
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <motion.div
              initial="hidden"
              animate={pathsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mt-12"
            >
              <button className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-[#9FEF00] text-[#9FEF00] hover:bg-[#9FEF00] hover:text-[#0b1c3d] transition-all duration-300">
                View All Learning Paths
              </button>
            </motion.div>
          </div>
        </section>

        {/* ==================== SECTION 6: FEATURES ==================== */}
        <section ref={featuresRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c3d] mb-4">
                Why Choose Us
              </h2>
              <div className="w-20 h-1 bg-[#9FEF00] mx-auto rounded-full" />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: index * 0.1, duration: 0.4 }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-[#0b1c3d] group transition-colors duration-300 cursor-pointer"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#9FEF00]/20 flex items-center justify-center mb-3 md:mb-4 text-[#0b1c3d] group-hover:bg-[#9FEF00]/30 group-hover:text-[#9FEF00] transition-colors duration-300">
                    <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#0b1c3d] group-hover:text-white transition-colors duration-300 mb-1 text-sm md:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ==================== SECTION 7: CTA ==================== */}
        <section ref={ctaRef} className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1c3d] leading-tight">
                Start Your Cybersecurity
                <span className="block text-[#9FEF00]">Journey Today</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join millions of learners and professionals who have transformed their careers 
                through hands-on cybersecurity training. No experience required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#9FEF00] text-[#0b1c3d] hover:bg-[#8BD600] hover:shadow-lg hover:shadow-[#9FEF00]/30 hover:-translate-y-0.5 transition-all duration-300">
                  Create Free Account
                </button>
                <button className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#1a3a6e] text-white hover:bg-[#234785] transition-all duration-300">
                  Talk to Sales
                </button>
              </div>
              
              <p className="text-sm text-gray-500">
                Free forever • No credit card required • Cancel anytime
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ==================== SECTION 8: FOOTER ==================== */}
      <footer ref={footerRef} className="relative bg-gradient-to-b from-[#0f2a5c] to-[#0b1c3d] overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(159, 239, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(159, 239, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {footerDots.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute rounded-full bg-[#9FEF00]"
              style={{
                width: dot.size,
                height: dot.size,
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                opacity: 0.4
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <motion.div
          initial="hidden"
          animate={footerInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-6 lg:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#9FEF00] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0b1c3d]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-bold text-xl">CyberLearn</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                The world's leading cybersecurity training platform for individuals and organizations.
              </p>
              {/* Newsletter */}
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-[#1a3a6e] text-white placeholder-gray-400 border border-[#2a4a7e] focus:outline-none focus:border-[#9FEF00]"
                />
                <button className="px-4 py-2 bg-[#9FEF00] text-[#0b1c3d] rounded-r-lg font-semibold hover:bg-[#8BD600] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-semibold mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-[#9FEF00] transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#1a3a6e] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 CyberLearn. All rights reserved.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a3a6e] flex items-center justify-center text-gray-400 hover:bg-[#9FEF00] hover:text-[#0b1c3d] transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </footer>

      {/* ==================== GLOBAL STYLES ==================== */}
      <style jsx global>{`
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0b1c3d;
        }

        ::-webkit-scrollbar-thumb {
          background: #1a3a6e;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #2a4a7e;
        }

        /* Swiper custom pagination */
        .swiper-pagination-bullet {
          background: #9FEF00 !important;
          opacity: 0.4;
        }

        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Focus visible for accessibility */
        *:focus-visible {
          outline: 2px solid #9FEF00;
          outline-offset: 2px;
        }

        /* Selection color */
        ::selection {
          background-color: #9FEF00;
          color: #0b1c3d;
        }

        /* Base styles */
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default Homesec2;