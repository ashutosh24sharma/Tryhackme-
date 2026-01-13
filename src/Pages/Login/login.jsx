// pages/Login.jsx
import React, { useState } from 'react';
import {
  Cloud,
  Binary,
  Search,
  Eye,
  EyeOff,
  Check,
  Menu,
  X,
  ChevronDown,
  Shield,
  Lock,
  Mail,
  ExternalLink,
  Sparkles,
  KeyRound
} from 'lucide-react';

// ============================================
// NAVBAR COMPONENT
// ============================================
const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Learn', hasDropdown: true },
    { name: 'Practice', hasDropdown: true },
    { name: 'Compete', hasDropdown: false },
    { name: 'Education', hasDropdown: true },
    { name: 'Business', hasDropdown: true },
    { name: 'Pricing', hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800 shadow-lg shadow-black/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Cloud className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <Binary className="w-4 h-4 text-emerald-300 absolute -bottom-1 -right-1" />
            </div>
            <span className="text-xl font-bold text-white">
              TryHack<span className="text-emerald-400">Me</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                className="flex items-center gap-1 px-4 py-2 text-gray-300 hover:text-white 
                         transition-colors duration-200 text-sm font-medium rounded-lg
                         hover:bg-slate-800/50"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 
                             rounded-lg transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => onNavigate('/login')}
              className="px-5 py-2 text-sm font-medium text-emerald-400 border border-emerald-400/50 
                       rounded-full hover:bg-emerald-400/10 transition-all duration-200"
            >
              Log In
            </button>
            
            <button
              onClick={() => onNavigate('/signup')}
              className="px-5 py-2 text-sm font-bold text-slate-900 bg-emerald-400 
                       rounded-full hover:bg-emerald-300 transition-all duration-200
                       shadow-lg shadow-emerald-400/20"
            >
              Join for FREE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className="flex items-center justify-between px-4 py-3 text-gray-300 
                           hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-3 px-4">
              <button
                onClick={() => {
                  onNavigate('/login');
                  setIsMenuOpen(false);
                }}
                className="w-full py-3 text-center text-emerald-400 border border-emerald-400/50 
                         rounded-full font-medium"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  onNavigate('/signup');
                  setIsMenuOpen(false);
                }}
                className="w-full py-3 text-center font-bold text-slate-900 bg-emerald-400 
                         rounded-full"
              >
                Join for FREE
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// ============================================
// GOOGLE ICON COMPONENT
// ============================================
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

// ============================================
// RECAPTCHA COMPONENT
// ============================================
const ReCaptcha = ({ checked, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/50">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggle}
          className={`w-6 h-6 border-2 rounded flex items-center justify-center 
                    transition-all duration-200 ${
                      checked 
                        ? 'bg-emerald-500 border-emerald-500' 
                        : 'border-gray-300 hover:border-gray-400 bg-white'
                    }`}
        >
          {checked && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
        </button>
        <span className="text-sm text-gray-700">I'm not a robot</span>
        <div className="ml-auto flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 64 64" className="w-8 h-8">
              <path
                fill="#1C3AA9"
                d="M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0z"
              />
              <path
                fill="#2684FF"
                d="M32 8c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8z"
              />
              <path
                fill="#fff"
                d="M42 26l-12 12-6-6-2 2 8 8 14-14z"
              />
            </svg>
          </div>
          <span className="text-[10px] text-gray-400">reCAPTCHA</span>
        </div>
      </div>
    </div>
  );
};

// ============================================
// DIVIDER COMPONENT
// ============================================
const Divider = ({ text }) => (
  <div className="relative flex items-center my-6">
    <div className="flex-1 border-t border-gray-200"></div>
    <span className="px-4 text-sm text-gray-400 bg-white">{text}</span>
    <div className="flex-1 border-t border-gray-200"></div>
  </div>
);

// ============================================
// LOGIN CARD COMPONENT
// ============================================
const LoginCard = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    console.log('Login submitted:', formData);
    // Navigate to dashboard or home after successful login
    // onNavigate('/dashboard');
  };

  return (
    <div className="w-full max-w-[420px] mx-auto">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-gray-100 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                        bg-gradient-to-br from-emerald-400 to-cyan-500 mb-4 shadow-lg 
                        shadow-emerald-400/30">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back!</h1>
          <p className="text-gray-500">Sign into your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username or Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@example.com"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl 
                         text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-emerald-400/50 
                         focus:border-emerald-400 transition-all duration-200"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a 
                href="#" 
                className="text-sm text-emerald-600 hover:text-emerald-700 
                         font-medium transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <KeyRound className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl 
                         text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-emerald-400/50 
                         focus:border-emerald-400 transition-all duration-200"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center 
                         text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* reCAPTCHA */}
          <ReCaptcha 
            checked={isRobotChecked} 
            onToggle={() => setIsRobotChecked(!isRobotChecked)} 
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !isRobotChecked}
            className="w-full py-3.5 bg-emerald-500 text-white font-bold rounded-xl
                     hover:bg-emerald-600 focus:outline-none focus:ring-4 
                     focus:ring-emerald-400/30 transition-all duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed
                     shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40
                     flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg 
                  className="animate-spin w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" cy="12" r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Signing in...
              </>
            ) : (
              <>
                <Shield className="w-5 h-5" />
                Log In
              </>
            )}
          </button>

          {/* Magic Link */}
          <div className="text-center">
            <a 
              href="#" 
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 
                       hover:text-emerald-600 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              Having trouble logging in? 
              <span className="font-medium text-emerald-600">Send magic link</span>
            </a>
          </div>
        </form>

        {/* Divider */}
        <Divider text="Or" />

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full py-3 px-4 border border-gray-200 rounded-xl 
                     flex items-center justify-center gap-3
                     hover:bg-gray-50 hover:border-gray-300 
                     transition-all duration-200 group"
          >
            <GoogleIcon />
            <span className="text-gray-700 font-medium group-hover:text-gray-900">
              Continue with Google
            </span>
          </button>

          <button
            type="button"
            className="w-full py-3 px-4 border border-gray-200 rounded-xl 
                     flex items-center justify-center gap-3
                     hover:bg-gray-50 hover:border-gray-300 
                     transition-all duration-200 group"
          >
            <ExternalLink className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 font-medium group-hover:text-gray-900">
              Continue with SSO
            </span>
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-8 text-gray-500">
          Don't have an account?{' '}
          <button 
            onClick={() => onNavigate('/signup')}
            className="text-emerald-600 hover:text-emerald-700 font-semibold 
                     transition-colors"
          >
            Sign up
          </button>
        </p>
      </div>

      {/* Security Notice */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-gray-400">
          <Shield className="w-4 h-4" />
          <span>Protected by enterprise-grade security</span>
        </div>
      </div>
    </div>
  );
};

// ============================================
// BACKGROUND EFFECTS COMPONENT
// ============================================
const BackgroundEffects = () => (
  <>
    {/* Gradient Background */}
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-emerald-50/30 -z-10" />
    
    {/* Grid Pattern */}
    <div 
      className="fixed inset-0 -z-10 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
    
    {/* Floating Orbs */}
    <div className="fixed top-1/4 -left-32 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl -z-10" />
    <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl -z-10" />
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/20 rounded-full blur-3xl -z-10" />
  </>
);

// ============================================
// FOOTER COMPONENT
// ============================================
const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 py-4 text-center bg-white/50 backdrop-blur-sm border-t border-gray-100">
    <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
      <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
      <span>•</span>
      <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
      <span>•</span>
      <span>© 2024 TryHackMe</span>
    </div>
  </footer>
);

// ============================================
// MAIN LOGIN PAGE COMPONENT
// ============================================
const Login = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* Background */}
      <BackgroundEffects />
      
      {/* Navbar */}
      <Navbar onNavigate={onNavigate} />
      
      {/* Main Content */}
      <main className="pt-16 min-h-screen flex items-center justify-center px-4 py-12">
        <LoginCard onNavigate={onNavigate} />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;