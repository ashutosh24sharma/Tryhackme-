// Footer.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const particleContainerRef = useRef(null);

  // Generate floating particles
  useEffect(() => {
    const container = particleContainerRef.current;
    if (!container) return;

    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'footer-particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: radial-gradient(circle, rgba(136, 204, 20, 0.8) 0%, rgba(136, 204, 20, 0) 70%);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5 + 0.2};
        animation: floatParticle ${Math.random() * 10 + 15}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
        pointer-events: none;
      `;
      container.appendChild(particle);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { name: 'Features', path: '/features' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Enterprise', path: '/enterprise' },
        { name: 'Security', path: '/security' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Documentation', path: '/docs' },
        { name: 'Community', path: '/community' },
        { name: 'Events', path: '/events' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Press', path: '/press' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy', path: '/privacy' },
        { name: 'Terms', path: '/terms' },
        { name: 'Security', path: '/security-policy' },
        { name: 'Cookies', path: '/cookies' },
      ],
    },
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Discord',
      href: 'https://discord.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      ),
    },
  ];

  // Shield Logo SVG
  const ShieldLogo = () => (
    <svg className="w-7 h-7 text-[#0B1E3B]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
    </svg>
  );

  return (
    <footer className="relative bg-gradient-to-b from-[#0B1E3B] via-[#07152B] to-[#061226] overflow-hidden">
      {/* Animated Particle Background */}
      <div 
        ref={particleContainerRef} 
        className="absolute inset-0 pointer-events-none overflow-hidden"
      />

      {/* Subtle Grid Lines Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(136, 204, 20, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(136, 204, 20, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#88cc14]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Section - Brand + Subscribe */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo & Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#88cc14] to-[#6ba10e] rounded-xl flex items-center justify-center shadow-lg shadow-[#88cc14]/20 group-hover:shadow-[#88cc14]/40 group-hover:scale-105 transition-all duration-300">
                <ShieldLogo />
              </div>
              <span className="text-2xl font-bold text-white tracking-wide">
                Cyber<span className="text-[#88cc14]">Learn</span>
              </span>
            </Link>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The world's leading cybersecurity training platform for individuals and organizations. 
              Master real-world skills through hands-on learning.
            </p>

            {/* Subscribe Form */}
            <div className="pt-2">
              <p className="text-white font-medium mb-3 text-sm">Subscribe to our newsletter</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-[#112A4B] border border-[#1e3a5f] rounded-l-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#88cc14]/50 focus:ring-1 focus:ring-[#88cc14]/30 transition-all duration-300 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#88cc14] to-[#6ba10e] text-[#0B1E3B] font-semibold rounded-r-xl hover:from-[#9de01b] hover:to-[#88cc14] hover:shadow-lg hover:shadow-[#88cc14]/30 transition-all duration-300 text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Footer Links (4 Columns) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.values(footerLinks).map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-white font-semibold text-sm tracking-wide uppercase">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.path}
                          className="text-gray-400 text-sm hover:text-white hover:pl-1 transition-all duration-300 inline-block relative group"
                        >
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#88cc14] group-hover:w-full transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent" />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm order-2 md:order-1">
            © {new Date().getFullYear()} CyberLearn. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 order-1 md:order-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 bg-[#112A4B] border border-[#1e3a5f] rounded-full flex items-center justify-center text-gray-400 hover:text-[#88cc14] hover:border-[#88cc14]/50 hover:bg-[#88cc14]/10 hover:shadow-lg hover:shadow-[#88cc14]/20 hover:-translate-y-1 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Keyframes for Particle Animation */}
      <style>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        .footer-particle {
          will-change: transform, opacity;
        }
      `}</style>
    </footer>
  );
};

export default Footer;