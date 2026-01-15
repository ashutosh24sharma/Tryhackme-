// pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, KeyRound } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1c3d] via-[#0f2a5c] to-[#0b1c3d]" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent Dot */}
      <div className="absolute right-32 top-40 w-3 h-3 bg-cyan-400 rounded-full opacity-70" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100">
            <Lock className="text-indigo-600" size={26} />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mt-4">
            Welcome back
          </h1>
          <p className="text-gray-500 text-base mt-1">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-base text-gray-600 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                required
                className="w-full pl-10 py-3 text-base border rounded-lg
                           focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-base text-gray-600 mb-1">
              Password
            </label>
            <div className="relative">
              <KeyRound className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full pl-10 pr-10 py-3 text-base border rounded-lg
                           focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg
                       text-lg font-medium hover:bg-indigo-700 transition"
          >
            {loading ? "Signing in..." : "Log In"}
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-base text-gray-500 mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign up
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
