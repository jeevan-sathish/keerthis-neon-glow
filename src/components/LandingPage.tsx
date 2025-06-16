
import { useState } from 'react';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage = ({ onEnter }: LandingPageProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onEnter();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Neon Border Animation */}
      <div className="absolute inset-4 border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg p-1 animate-pulse">
        <div className="w-full h-full bg-black rounded-lg"></div>
      </div>

      {/* Main Button */}
      <div className="relative z-10 text-center">
        <button
          onClick={handleClick}
          className={`relative group px-16 py-8 text-4xl font-pacifico text-white transition-all duration-500 ${
            isClicked ? 'scale-110 opacity-50' : 'hover:scale-105'
          }`}
        >
          {/* Button Background with Neon Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>
          <div className="absolute inset-1 bg-black rounded-full"></div>
          
          {/* Button Text */}
          <span className="relative z-10 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Welcome 2025
          </span>
          
          {/* Ripple Effect */}
          {isClicked && (
            <div className="absolute inset-0 rounded-full border-4 border-pink-400 animate-ping"></div>
          )}
        </button>
        
        {/* Subtitle */}
        <p className="mt-6 text-xl font-poppins text-gray-300 animate-fade-in">
          Something magical awaits...
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
