// src/Pages/Education/education.jsx
import React, { useState, useEffect } from 'react';

// ============ DATA ============
const trustedLogos = ['CompTIA', 'Google', 'EPITECH', 'Education Scotland', 'KPMG'];

const featureCardsData = [
  {
    icon: '📚',
    title: 'For your courses',
    description: 'Supporting Course Labs',
    bullets: ['Assessments & Exams', 'Real-world Challenges'],
  },
  {
    icon: '👥',
    title: 'Student Management',
    description: 'Organize your classroom efficiently',
    bullets: ['Assign students to groups', 'Allocate cybersecurity labs and challenges'],
  },
  {
    icon: '📊',
    title: 'Monitor',
    description: 'Track learning progress',
    bullets: ['Track student activity', 'Monitor assignment progress'],
  },
  {
    icon: '🔄',
    title: 'Reusable Lab Content',
    description: 'Build once, teach many times',
    bullets: ['Access 1.1K+ cybersecurity labs', 'Reuse exercises across classes'],
  },
];

const labSuggestionsData = [
  {
    week: 1,
    objective: 'Introduction to Linux command line and basic operations',
    category: 'Linux Fundamentals',
    categoryColor: 'bg-blue-100 text-blue-700',
    labs: [
      { title: 'Linux Fundamentals Part 1', desc: 'Basic commands and navigation' },
      { title: 'Linux Fundamentals Part 2', desc: 'File operations and permissions' },
    ],
  },
  {
    week: 2,
    objective: 'Understanding web vulnerabilities and exploitation techniques',
    category: 'Web Exploitation',
    categoryColor: 'bg-purple-100 text-purple-700',
    labs: [
      { title: 'OWASP Top 10', desc: 'Common web vulnerabilities' },
      { title: 'SQL Injection', desc: 'Database attack techniques' },
    ],
  },
  {
    week: 3,
    objective: 'Network protocols and traffic analysis fundamentals',
    category: 'Network Fundamentals',
    categoryColor: 'bg-green-100 text-green-700',
    labs: [
      { title: 'Intro to Networking', desc: 'OSI model and protocols' },
      { title: 'Wireshark Basics', desc: 'Packet analysis fundamentals' },
    ],
  },
];

const testimonialsData = [
  {
    quote: "TryHackMe has transformed how we teach cybersecurity. The hands-on labs provide students with real-world experience that textbooks simply cannot match.",
    author: "Dr. Sarah Johnson",
    role: "Head of Cybersecurity Department",
    org: "Stanford University",
    image: "👩‍🏫",
  },
  {
    quote: "The browser-based labs eliminate all the setup headaches we used to face. Students can start learning immediately.",
    author: "Prof. Michael Chen",
    role: "Computer Science Professor",
    org: "MIT",
    image: "👨‍🏫",
  },
  {
    quote: "We've seen remarkable improvement in our students' practical skills. The gamified approach keeps them motivated.",
    author: "Emily Rodriguez",
    role: "Cybersecurity Instructor",
    org: "Georgia Tech",
    image: "👩‍💻",
  },
];

const categoryTags = [
  { icon: '🔒', label: 'Network Security' },
  { icon: '🔍', label: 'Nmap' },
  { icon: '🚪', label: 'Initial Access' },
  { icon: '⬆️', label: 'Privilege Escalation' },
  { icon: '💻', label: 'Computer Exploitation' },
  { icon: '🛡️', label: 'Security Operations' },
  { icon: '🦠', label: 'Malware Analysis' },
  { icon: '🪟', label: 'Windows Exploitation' },
  { icon: '🔬', label: 'Vulnerability Research' },
];

const pricingFeatures = [
  { feature: 'Unlimited access to 1.1k+ browser-based labs*', premium: true, education: true },
  { feature: 'Unlimited access to TryHackMe premium content', premium: true, education: true },
  { feature: 'Access to TryHackMe learning paths', premium: true, education: true },
  { feature: 'Management dashboard to track students progress', premium: false, education: true },
  { feature: 'Create assignments', premium: false, education: true },
  { feature: 'Flexible user seats', premium: false, education: true },
  { feature: 'Clone and modify rooms', premium: false, education: true },
  { feature: 'Dedicated customer success manager', premium: false, education: true },
  { feature: 'Onboarding and ongoing support', premium: false, education: true },
  { feature: 'Create customised learning paths', premium: false, education: true },
];

// ============ HERO SECTION ============
const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Teach reverse engineering, penetration testing, and cyber defense.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              TryHackMe{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                Classrooms
              </span>
            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full mx-auto lg:mx-0 mb-6" />

            <p className="text-lg text-gray-300 mb-6 max-w-xl">
              Empower your students with hands-on security labs, real-time progress tracking,
              and interactive dashboards. The most effective way to teach cybersecurity.
            </p>

            <div className="h-12 mb-8">
              <p className="text-green-400 text-lg font-mono">
                {typedText}
                <span className="inline-block w-0.5 h-5 bg-green-400 ml-1 animate-pulse" />
              </p>
            </div>

            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-green-400 to-green-500 text-slate-900 font-bold text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300">
              Get a FREE trial
            </button>
          </div>

          {/* Right Side - Floating Cards */}
          <div className="relative h-[400px] lg:h-[500px] hidden md:block">
            {/* Analytics Card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 border border-slate-700 shadow-xl animate-bounce-slow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">Student Progress</span>
                <span className="text-green-400 text-sm">+24%</span>
              </div>
              <div className="flex items-end gap-1 h-20">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t"
                  />
                ))}
              </div>
            </div>

            {/* Terminal Card */}
            <div className="absolute bottom-20 left-0 w-72 bg-slate-900/95 backdrop-blur-sm rounded-2xl p-4 border border-slate-700 shadow-xl animate-bounce-slow animation-delay-500">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="font-mono text-sm text-gray-300 space-y-1">
                <p><span className="text-green-400">$</span> nmap -sV target</p>
                <p className="text-gray-500">Scanning ports...</p>
                <p className="text-green-400">Port 22 open</p>
              </div>
            </div>

            {/* File Explorer Card */}
            <div className="absolute bottom-0 right-0 w-56 bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 border border-slate-700 shadow-xl animate-bounce-slow animation-delay-1000">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>
                <span className="text-white text-sm font-medium">Lab Files</span>
              </div>
              <div className="space-y-2">
                {['challenge_1.py', 'exploit.sh', 'notes.txt'].map((file, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    {file}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ TRUSTED BY SECTION ============
const TrustedBySection = () => {
  return (
    <section className="py-12 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
          Trusted by leading institutions worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustedLogos.map((logo) => (
            <span
              key={logo}
              className="text-gray-400 hover:text-gray-600 font-semibold text-lg transition-colors duration-300 cursor-pointer"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ FEATURE CARDS SECTION ============
const FeatureCardsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to teach cybersecurity
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4 text-2xl">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <ul className="space-y-2">
                {card.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ CONTENT RICH LABS SECTION ============
const ContentRichLabsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Content-Rich Cyber Security Labs for Students
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full mb-6" />
            <p className="text-gray-600 text-lg mb-6">
              Access over 1.1K+ existing cybersecurity rooms ranging from beginner to advanced
              experience levels. Provide your students with hands-on, industry-relevant skills
              using cloud-based vulnerable virtual machines.
            </p>
            <p className="text-gray-600 text-lg">
              Our curriculum covers offensive and defensive security modules, suitable for
              all experience levels from complete beginners to seasoned professionals.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl animate-bounce-slow">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-green-400/20 rounded-full blur-3xl" />
              <div className="grid grid-cols-3 gap-4 items-end">
                <div className="text-center">
                  <div className="text-4xl mb-2">⌨️</div>
                  <p className="text-gray-400 text-sm">Keyboard</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🖱️</div>
                  <p className="text-gray-400 text-sm">Mouse</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🎧</div>
                  <p className="text-gray-400 text-sm">Headphones</p>
                </div>
              </div>
              <div className="mt-6 flex justify-center gap-4">
                <div className="text-3xl">🔧</div>
                <div className="text-3xl">💻</div>
                <div className="text-3xl">🔐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ BROWSER BASED LABS SECTION ============
const BrowserBasedLabsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Illustration */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-slate-900 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center justify-center py-8">
                  <div className="text-6xl">🐉</div>
                  <div className="ml-4">
                    <p className="text-green-400 font-bold text-xl">Kali Linux</p>
                    <p className="text-gray-400 text-sm">Ready in browser</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Access Anywhere with Just a Browser — No Software Required
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full mb-6" />
            <p className="text-gray-600 text-lg mb-6">
              Our browser-based cyber security labs come with a fully equipped Kali Linux
              environment. No complicated installations required.
            </p>
            <p className="text-gray-600 text-lg">
              Skip the OpenVPN configuration headaches. Students can start learning immediately
              from any device with a web browser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ LAB SUGGESTIONS SECTION ============
const LabSuggestionsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lab suggestions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Labs are personally recommended and mapped to your course syllabus,
            saving educators valuable time selecting content.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-20">Week</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Learning Objective</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">TryHackMe Lab Suggestions</th>
                </tr>
              </thead>
              <tbody>
                {labSuggestionsData.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      i % 2 === 1 ? 'bg-gray-50/50' : ''
                    }`}
                  >
                    <td className="px-6 py-5 text-2xl font-bold text-gray-900">{row.week}</td>
                    <td className="px-6 py-5">
                      <p className="text-gray-700 mb-2">{row.objective}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${row.categoryColor}`}>
                        {row.category}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <ul className="space-y-2">
                        {row.labs.map((lab, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                            <div>
                              <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
                                {lab.title}
                              </a>
                              <p className="text-gray-500 text-sm">{lab.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ TESTIMONIALS SECTION ============
const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonialsData[currentTestimonial];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-xl border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-xl border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Content */}
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="text-6xl text-green-400 mb-6 animate-pulse">"</div>
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">{testimonial.quote}</p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-2xl">
                {testimonial.image}
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.role}, {testimonial.org}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentTestimonial(i)}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === currentTestimonial
                  ? 'bg-green-400 w-8'
                  : 'bg-slate-600 hover:bg-slate-500 w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ UPLOAD LABS SECTION ============
const UploadLabsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Upload your labs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full mb-6" />
            <p className="text-gray-600 text-lg mb-6">
              Upload your own custom virtual machines and resources. Create your own courses
              with tasks and questions for private distribution to your students.
            </p>
            <p className="text-gray-600 text-lg">
              Save time and costs with platform-managed hosting, maintenance, and startup.
              Focus on teaching while we handle the infrastructure.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <div className="relative animate-bounce-slow">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-full blur-2xl" />
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-4 border-red-400">
                  <div className="text-center">
                    <div className="text-6xl mb-4">☁️</div>
                    <div className="font-mono text-sm text-gray-500 space-y-1">
                      <p>01001000 01100101</p>
                      <p>01101100 01101100</p>
                      <p>01101111 00100001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tags */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            {categoryTags.map((tag, i) => (
              <div
                key={i}
                className="bg-white rounded-xl px-4 py-3 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span className="text-lg">{tag.icon}</span>
                <span className="text-gray-700 font-medium">{tag.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ SHARE SWAG SECTION ============
const ShareSwagSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Share TryHackMe Labs & Get Swag!
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full mb-6" />
            <p className="text-gray-600 text-lg mb-6">
              Get free swag when someone you know commits to the teaching dashboard.
              It's our way of saying thanks for spreading the word!
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Share TryHackMe with your company, university, or college and earn exclusive
              merchandise as a reward.
            </p>

            {/* Share Message Box */}
            <div className="bg-slate-900 rounded-2xl p-6 shadow-xl hover:scale-[1.01] transition-transform duration-300">
              <p className="text-white text-sm leading-relaxed mb-4 font-mono">
                "Check out TryHackMe Classrooms! It has pre-built security labs, progress
                monitoring, gamified walkthroughs, and smart lab recommendations. Perfect
                for teaching cybersecurity!
                <span className="text-green-400"> tryhackme.com/classrooms</span>"
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">Copy/paste this to someone you know</span>
            </div>
          </div>

          {/* Right - T-Shirt Mockup */}
          <div className="flex justify-center">
            <div className="relative animate-bounce-slow">
              <div className="w-72 h-80 bg-slate-900 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">👕</div>
                  <div className="text-white">
                    <p className="text-2xl">☁️</p>
                    <p className="font-mono text-xs text-gray-400">01010100 01001000 01001101</p>
                    <p className="text-green-400 font-bold mt-2">TryHackMe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ PRICING SECTION ============
const PricingSection = () => {
  const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const XIcon = () => (
    <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pricing
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 text-lg mb-2">
            Give your students interactive, self-paced cyber training
          </p>
          <p className="text-gray-500 text-sm">
            Starting at $25 per user. For bulk discounts please{' '}
            <a href="#" className="text-blue-600 hover:underline">Contact us</a>
          </p>
        </div>

        {/* Pricing Table - Desktop */}
        <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-900 w-1/2">
                  Plan Features
                </th>
                <th className="px-6 py-5 text-center text-sm font-semibold text-gray-900">
                  Premium
                </th>
                <th className="px-6 py-5 text-center text-sm font-semibold text-gray-900 bg-green-50 border-l-2 border-r-2 border-t-2 border-green-400 rounded-t-lg">
                  <span className="text-green-600">Education</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingFeatures.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-700">{item.feature}</td>
                  <td className="px-6 py-4 text-center">
                    {item.premium ? <CheckIcon /> : <XIcon />}
                  </td>
                  <td className="px-6 py-4 text-center bg-green-50/50 border-l-2 border-r-2 border-green-400">
                    <CheckIcon />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="px-6 py-6"></td>
                <td className="px-6 py-6"></td>
                <td className="px-6 py-6 text-center bg-green-50/50 border-l-2 border-r-2 border-b-2 border-green-400 rounded-b-lg">
                  <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-400 to-green-500 text-slate-900 font-bold hover:from-green-300 hover:to-green-400 hover:scale-105 transition-all duration-300">
                    Get started
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pricing Cards - Mobile */}
        <div className="md:hidden space-y-6">
          {['Premium', 'Education'].map((plan, planIndex) => (
            <div
              key={plan}
              className={`rounded-2xl p-6 ${
                plan === 'Education'
                  ? 'bg-green-50 border-2 border-green-400'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className={`text-xl font-bold mb-4 ${
                plan === 'Education' ? 'text-green-600' : 'text-gray-900'
              }`}>
                {plan}
              </h3>
              <ul className="space-y-3">
                {pricingFeatures.map((item, i) => {
                  const included = plan === 'Education' ? item.education : item.premium;
                  return (
                    <li key={i} className="flex items-start gap-3">
                      {included ? (
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className={included ? 'text-gray-700' : 'text-gray-400'}>
                        {item.feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
              {plan === 'Education' && (
                <button className="w-full mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-green-400 to-green-500 text-slate-900 font-bold hover:scale-105 transition-all duration-300">
                  Get started
                </button>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm italic mt-6">
          *Excluding cloud enabled content
        </p>
      </div>
    </section>
  );
};

// ============ BOOK A MEETING SECTION ============
const BookMeetingSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Book a meeting
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full mb-6" />

              <p className="text-gray-300 text-lg mb-6">
                Learn how TryHackMe can enhance your cyber security education with tailored
                solutions, engaging learning paths, and hands-on training for students and educators.
              </p>

              <p className="text-gray-400 text-sm mb-8">
                For general enquiries contact us on{' '}
                <a href="mailto:education@tryhackme.com" className="text-blue-400 hover:underline">
                  education@tryhackme.com
                </a>
              </p>

              {/* Trusted By */}
              <div className="pt-6 border-t border-slate-700">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
                  Trusted by
                </p>
                <div className="flex items-center gap-6">
                  {['Google', 'CompTIA', 'KPMG'].map((logo) => (
                    <span key={logo} className="text-gray-400 font-semibold">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Loading Widget Placeholder */}
            <div className="bg-slate-800/50 p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-gray-400">Loading scheduling widget...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ MAIN EDUCATION PAGE COMPONENT ============
const Education = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <TrustedBySection />
        <FeatureCardsSection />
        <ContentRichLabsSection />
        <BrowserBasedLabsSection />
        <LabSuggestionsSection />
        <TestimonialsSection />
        <UploadLabsSection />
        <ShareSwagSection />
        <PricingSection />
        <BookMeetingSection />
      </main>
    </div>
  );
};

export default Education;