
import { useState } from 'react';

interface ProfileCardProps {
  onCandleBlow: () => void;
  candleBlown: boolean;
}

const ProfileCard = ({ onCandleBlow, candleBlown }: ProfileCardProps) => {
  const [showSmoke, setShowSmoke] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCandleClick = () => {
    if (!candleBlown) {
      setShowSmoke(true);
      setShowConfetti(true);
      onCandleBlow();
    }
  };

  return (
    <div className="relative pt-20">
      {/* Profile Image */}
      <div className="mb-8 relative z-20">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse">
          <img
            src="/lovable-uploads/17091394-789d-437f-9412-8111a8a9e098.png"
            alt="Keerthi"
            className="w-full h-full object-cover rounded-full bg-black"
          />
        </div>
        
        {/* Glowing Ring Effect */}
        <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full border-2 border-pink-400 animate-ping opacity-30"></div>
      </div>

      {/* Realistic Cake with Candle */}
      <div className="relative mb-8 z-10">
        {/* Cake Base */}
        <div className="relative inline-block">
          <div className="text-6xl mb-2">🎂</div>
          
          {/* Realistic Candle Wax */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-12 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-sm shadow-lg border-l border-yellow-300"></div>
            
            {/* Candle Wick */}
            <div className="w-0.5 h-2 bg-gray-800 mx-auto"></div>
            
            {/* Realistic Flame - disappears when blown */}
            {!candleBlown && (
              <div 
                className="relative mx-auto cursor-pointer hover:scale-110 transition-transform"
                onClick={handleCandleClick}
              >
                {/* Flame Core */}
                <div className="w-4 h-6 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-300 rounded-full opacity-90 animate-pulse"></div>
                {/* Flame Outer Glow */}
                <div className="absolute inset-0 w-5 h-7 bg-gradient-to-t from-red-400 via-orange-400 to-yellow-200 rounded-full blur-sm opacity-60 -top-0.5 -left-0.5"></div>
                {/* Flame Inner Light */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-yellow-100 rounded-full opacity-80"></div>
              </div>
            )}
            
            {/* Realistic Smoke Effect */}
            {showSmoke && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-40 animate-bounce"
                    style={{
                      left: `${Math.random() * 10 - 5}px`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${2 + Math.random()}s`,
                      transform: `translateY(-${i * 8}px) translateX(${Math.sin(i) * 3}px)`
                    }}
                  ></div>
                ))}
                {/* Additional smoke wisps */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`wisp-${i}`}
                    className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-20 animate-pulse"
                    style={{
                      left: `${Math.random() * 20 - 10}px`,
                      top: `${-20 - i * 10}px`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + Math.random()}s`
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Blow Candle Button */}
        {!candleBlown && (
          <button
            onClick={handleCandleClick}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-poppins font-semibold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-pink-500/50 border border-pink-400/30"
          >
            💨 Blow the Candle
          </button>
        )}
      </div>

      {/* Limited Confetti Effect - positioned away from text and image */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-lg animate-bounce"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${60 + Math.random() * 30}%`, // Keep confetti in lower area
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
                color: ['#ff69b4', '#9d4edd', '#06ffa5', '#ffb300', '#ff6b6b'][Math.floor(Math.random() * 5)]
              }}
            >
              {['✨', '🎉', '🎊', '💖', '🌟'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
