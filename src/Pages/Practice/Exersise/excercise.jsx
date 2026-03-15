import React, { useState } from 'react';

// Sample card data array
const exercisesData = [
  {
    id: 1,
    title: 'APT29',
    description: 'A bank in the financial services industry recently discovered suspicious network activities during a routine audit.',
    tags: ['data exfiltration', 'Finance'],
    creator: 'THM',
    icon: '🎯'
  },
  {
    id: 2,
    title: 'FIN7: Clouded Judgment',
    description: 'Your finance team flags irregularities in payment records that appear to originate from internal systems.',
    tags: ['Financial Fraud', 'Financial Services'],
    creator: 'THM',
    icon: '☁️'
  },
  {
    id: 3,
    title: 'LockBit Pipeline Paralysis',
    description: 'Engineering teams report failed deployments and system instability across multiple environments.',
    tags: ['Ransomware', 'Technology & SaaS'],
    creator: 'THM',
    icon: '🔒'
  },
  {
    id: 4,
    title: 'Scattered Spider',
    description: 'Customer support escalates a surge in complaints about suspicious account activity.',
    tags: ['Data theft', 'Telecommunications'],
    creator: 'THM',
    icon: '🕷️'
  },
  {
    id: 5,
    title: 'APT34: Zeroed Out by OilRig',
    description: 'A national cyber authority notifies your organization of suspected unauthorized access to internal email systems.',
    tags: ['Espionage', 'Legal services'],
    creator: 'THM',
    icon: '🛢️'
  }
];

// Exercise Card Component
const ExerciseCard = ({ exercise }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl p-6 transition-all duration-300 ease-in-out cursor-pointer group"
      style={{ backgroundColor: '#13263f' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          boxShadow: '0 0 30px rgba(158, 255, 0, 0.3)',
          pointerEvents: 'none'
        }}
      />

      {/* Card Content */}
      <div className={`relative z-10 transition-transform duration-300 ${isHovered ? 'scale-[1.02]' : 'scale-100'}`}>
        {/* Icon Box */}
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4"
          style={{ backgroundColor: '#0b1a2b' }}
        >
          {exercise.icon}
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-lg mb-2">{exercise.title}</h3>

        {/* Description */}
        <p className="text-sm mb-4 line-clamp-3" style={{ color: '#9fb3c8' }}>
          {exercise.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {exercise.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: 'rgba(158, 255, 0, 0.1)',
                color: '#9eff00',
                border: '1px solid rgba(158, 255, 0, 0.3)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Creator */}
        <p className="text-xs" style={{ color: '#9fb3c8' }}>
          Created by <span className="text-white font-medium">{exercise.creator}</span>
        </p>
      </div>

      {/* Hover Overlay with Buttons */}
      <div
        className={`absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(19, 38, 63, 0.95)' }}
      >
        <button
          className="px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:brightness-110 hover:scale-105"
          style={{ backgroundColor: '#9eff00', color: '#0b1a2b' }}
        >
          Start exercise
        </button>
        <button
          className="px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:brightness-110 hover:scale-105 border"
          style={{ borderColor: '#9fb3c8', color: '#0b1a2b', backgroundColor: '#9eff00' }}
        >
          View details
        </button>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('all');

  // Filter exercises based on search term
  const filteredExercises = exercisesData.filter(exercise =>
    exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exercise.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exercise.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen mt-13 p-8 lg:p-12" style={{ backgroundColor: '#0b1a2b' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* ==================== HERO SECTION ==================== */}
        <div
          className="rounded-xl p-8 lg:p-12 mb-12"
          style={{ backgroundColor: '#13263f' }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-white text-3xl lg:text-4xl font-bold mb-4">
                Create your first tabletop exercise
              </h1>
              <p className="text-lg mb-8 max-w-xl" style={{ color: '#9fb3c8' }}>
                Create a realistic scenario for your team to explore. You provide the context 
                and the attack you want to see, and we'll take care of the rest.
              </p>
              <button
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-lg"
                style={{ 
                  backgroundColor: '#9eff00', 
                  color: '#0b1a2b',
                  boxShadow: '0 0 20px rgba(158, 255, 0, 0.3)'
                }}
              >
                Create your first exercise
              </button>
            </div>

            {/* Right Side - Abstract Cyber Illustration Placeholder */}
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div
                className="w-full h-64 lg:h-80 rounded-xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0b1a2b 0%, #1a3a5c 50%, #0b1a2b 100%)'
                }}
              >
                {/* Cyber Grid Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9eff00" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central Shield */}
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center animate-pulse"
                      style={{ 
                        backgroundColor: 'rgba(158, 255, 0, 0.1)',
                        border: '2px solid rgba(158, 255, 0, 0.5)'
                      }}
                    >
                      <svg className="w-12 h-12" fill="#9eff00" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                      </svg>
                    </div>
                    
                    {/* Orbiting Dots */}
                    <div 
                      className="absolute w-4 h-4 rounded-full animate-ping"
                      style={{ backgroundColor: '#9eff00', top: '-20px', left: '50%', transform: 'translateX(-50%)' }}
                    />
                    <div 
                      className="absolute w-3 h-3 rounded-full animate-ping"
                      style={{ backgroundColor: '#9eff00', bottom: '-15px', right: '-15px', animationDelay: '0.5s' }}
                    />
                    <div 
                      className="absolute w-3 h-3 rounded-full animate-ping"
                      style={{ backgroundColor: '#9eff00', bottom: '-15px', left: '-15px', animationDelay: '1s' }}
                    />
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 30%, #13263f 100%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ==================== EXERCISE LIST SECTION ==================== */}
        <div className="mb-8">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            
            {/* Title */}
            <h2 className="text-white text-2xl font-bold">Exercises</h2>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              {/* Search Input */}
              <div className="relative">
                <svg 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  fill="none"
                  stroke="#9fb3c8"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search for exercises"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64 pl-12 pr-4 py-3 rounded-xl border border-opacity-20 focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{ 
                    backgroundColor: '#13263f', 
                    borderColor: '#9fb3c8',
                    color: 'white'
                  }}
                />
              </div>
              
              {/* Dropdown Filter */}
              <div className="relative">
                <select
                  value={filterOption}
                  onChange={(e) => setFilterOption(e.target.value)}
                  className="w-full sm:w-48 px-4 py-3 rounded-xl border border-opacity-20 appearance-none cursor-pointer focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{ 
                    backgroundColor: '#13263f', 
                    borderColor: '#9fb3c8',
                    color: 'white'
                  }}
                >
                  <option value="all">All exercises</option>
                  <option value="ransomware">Ransomware</option>
                  <option value="finance">Finance</option>
                  <option value="espionage">Espionage</option>
                </select>
                <svg 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                  fill="none"
                  stroke="#9fb3c8"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Exercise Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredExercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>

          {/* Empty State */}
          {filteredExercises.length === 0 && (
            <div 
              className="rounded-xl p-12 text-center"
              style={{ backgroundColor: '#13263f' }}
            >
              <svg 
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="#9fb3c8"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-white text-lg font-semibold mb-2">No exercises found</h3>
              <p style={{ color: '#9fb3c8' }}>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Footer Stats */}
        <div 
          className="rounded-xl p-6 mt-8"
          style={{ backgroundColor: '#13263f' }}
        >
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: '#9eff00' }}>5</div>
              <div className="text-sm" style={{ color: '#9fb3c8' }}>Total Exercises</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">0</div>
              <div className="text-sm" style={{ color: '#9fb3c8' }}>Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">0</div>
              <div className="text-sm" style={{ color: '#9fb3c8' }}>In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">--</div>
              <div className="text-sm" style={{ color: '#9fb3c8' }}>Avg. Score</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;