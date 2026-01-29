import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [openCompete, setOpenCompete] = useState(false);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  const navLinks = [
    { name: "Learn", path: "/learn" },
    { name: "Practice", path: "/practice" },
    { name: "Education", path: "/education" },
  ];

  const competeLinks = [
    { name: "King of the Hill", path: "/compete/king-of-the-hill" },
    { name: "Leaderboard", path: "/compete/leaderboard" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenCompete(false);
      }
    };
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  const CloudIcon = () => (
    <img
      src="/Logo.jpeg"
      alt="Cloud Icon"
      className="w-9 h-10 md:w-9 md:h-9 text-[#88cc14]"
    />
  );

  const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
      />
    </svg>
  );

  const ChevronDown = ({ open }) => (
    <svg
      className={`w-4 h-4 transition-transform duration-300 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#0a0a1a] via-[#0d1525] to-[#0a1628] shadow-2xl"
          : "bg-gradient-to-r from-[#12122a] via-[#141b2d] to-[#0f1d32]"
      }`}
    >
      {/* ✅ Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* ✅ Mobile height: h-16 | Desktop height: h-20 */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ✅ Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative">
              <CloudIcon />
              <div className="absolute inset-0 bg-[#88cc14] blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>

            {/* ✅ Mobile font smaller, Desktop bigger */}
            <span className="text-white font-bold text-lg md:text-2xl tracking-wide leading-none">
              <span className="text-[#88cc14]">Hack</span>Yard
            </span>
          </Link>

          {/* ✅ Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-[15px] font-semibold transition-all duration-300 rounded-lg group ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#88cc14] transition-all duration-300 ${
                        isActive
                          ? "w-3/4 opacity-100"
                          : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                      }`}
                    />
                    {isActive && <span className="absolute inset-0 bg-[#88cc14]/10 rounded-lg" />}
                  </>
                )}
              </NavLink>
            ))}

            {/* ✅ Desktop Compete Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpenCompete((prev) => !prev)}
                onMouseEnter={() => setOpenCompete(true)}
                className="relative px-4 py-2 text-[15px] font-semibold text-gray-400 hover:text-white transition-all duration-300 rounded-lg group flex items-center gap-1"
              >
                <span className="relative z-10">Compete</span>
                <ChevronDown open={openCompete} />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#88cc14] transition-all duration-300 w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100" />
              </button>

              <div
                onMouseLeave={() => setOpenCompete(false)}
                className={`absolute top-14 left-0 w-60 rounded-xl overflow-hidden border border-white/10 bg-[#0b1220]/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
                  openCompete
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {competeLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpenCompete(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-[14px] font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-[#88cc14]/15 text-[#88cc14]"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* ✅ Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            <Link
              to="/login"
              className="relative px-6 py-2.5 text-[14px] font-semibold text-[#88cc14] border-2 border-[#88cc14] rounded-full transition-all duration-300 hover:bg-[#88cc14]/10 hover:shadow-lg hover:shadow-[#88cc14]/30 group overflow-hidden"
            >
              <span className="relative z-10">Log In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#88cc14]/0 via-[#88cc14​​o8cc14]/20 to-[#88cc14]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Link>

            <Link
              to="/signup"
              className="relative px-6 py-2.5 text-[14px] font-bold text-black bg-[#88cc14] rounded-full transition-all duration-300 hover:bg-[#9fe01b] hover:shadow-lg hover:shadow-[#88cc14]/50 hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10">Join for FREE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
          </div>

          {/* ✅ Mobile Actions (Aligned Properly) */}
          <div className="flex md:hidden items-center gap-1">
            <button
              className="p-1.5 text-gray-400 hover:text-white rounded-full transition-colors hover:bg-white/10"
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen((prev) => !prev);
              }}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg transition-colors hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-b from-[#0d1525] to-[#0a1222] border-t border-white/10 px-4 py-4 space-y-2">
          {/* Mobile Navigation Links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-[16px] font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#88cc14]/20 text-[#88cc14] border-l-4 border-[#88cc14]"
                    : "text-gray-400 hover:text-white hover:bg-white/5 hover:pl-6"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Compete Dropdown */}
          <div className="pt-2">
            <button
              onClick={() => setOpenCompete((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-[16px] font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <span>Compete</span>
              <ChevronDown open={openCompete} />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openCompete ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-4 space-y-2 border-l border-white/10 pl-4">
                {competeLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      setOpenCompete(false);
                    }}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-lg text-[15px] font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-[#88cc14]/20 text-[#88cc14]"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-4 space-y-3 border-t border-white/10 mt-4">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 text-[14px] font-semibold text-[#88cc14] border-2 border-[#88cc14] rounded-full transition-all duration-300 hover:bg-[#88cc14]/10"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 text-[14px] font-bold text-black bg-[#88cc14] rounded-full transition-all duration-300 hover:bg-[#9fe01b]"
            >
              Join for FREE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
