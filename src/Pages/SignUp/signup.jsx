// pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Check,
  User,
  Mail,
  KeyRound,
} from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // fake API delay
    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);
    navigate("/login"); // redirect after signup
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-emerald-500">
            <User className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold mt-4">Create account</h1>
          <p className="text-gray-500">Join us in seconds</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" />
            <input
              required
              type="text"
              placeholder="Full name"
              className="w-full pl-10 py-3 border rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full pl-10 py-3 border rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <KeyRound className="absolute left-3 top-3 text-gray-400" />
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-3 border rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Fake reCAPTCHA */}
          <button
            type="button"
            onClick={() => setChecked(!checked)}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <div
              className={`w-5 h-5 border rounded flex items-center justify-center ${
                checked ? "bg-emerald-500 border-emerald-500" : ""
              }`}
            >
              {checked && <Check className="w-4 h-4 text-white" />}
            </div>
            I'm not a robot
          </button>

          {/* Submit */}
          <button
            disabled={!checked || loading}
            type="submit"
            className="w-full py-3 bg-emerald-500 text-white rounded-xl font-bold
                       hover:bg-emerald-600 transition disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {/* Login link */}
        <p className="text-center mt-6 text-gray-500">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-emerald-600 font-semibold hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
