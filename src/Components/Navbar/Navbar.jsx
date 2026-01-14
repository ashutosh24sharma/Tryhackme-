import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
  menuItems,
}) {
  const navigate = useNavigate();

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 lg:px-16 py-5">
      {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <span className="text-xl font-bold text-white">
          Try<span className="text-green-400">Hack</span>Me
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8">
        {menuItems.map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-300 hover:text-green-400 transition-all duration-300 font-medium relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        {/* Desktop Login */}
        <button
          onClick={() => navigate("/login")}
          className="hidden sm:block px-6 py-2.5 border-2 border-green-400 
                     text-green-400 rounded-full hover:bg-green-400 
                     hover:text-slate-900 transition-all duration-300 font-semibold"
        >
          Log In
        </button>

        <button
          className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 
                     text-sm sm:text-base bg-gradient-to-r from-green-400 
                     to-green-500 text-slate-900 rounded-full font-semibold 
                     sm:font-bold transition-all duration-300"
        >
          Join for FREE
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-300 hover:text-green-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-t border-gray-800 lg:hidden shadow-2xl">
          <div className="flex flex-col p-6 gap-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-green-400 py-3 px-4 rounded-xl hover:bg-slate-800/50"
              >
                {item}
              </a>
            ))}

            {/* Mobile Login */}
            <button
              onClick={() => {
                navigate("/login");
                setMobileMenuOpen(false);
              }}
              className="sm:hidden mt-4 px-6 py-3 border-2 border-green-400 
                         text-green-400 rounded-full font-semibold"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
