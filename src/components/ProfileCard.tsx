
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
    <div className="relative">
      {/* Profile Image */}
      <div className="mb-8 relative">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse">
          <img
            src="/lovable-uploads/c5f6d190-f436-4768-a83d-b9aaa2eae783.png"
            alt="Keerthi"
            className="w-full h-full object-cover rounded-full bg-black"
          />
        </div>
        
        {/* Glowing Ring Effect */}
        <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full border-2 border-pink-400 animate-ping opacity-30"></div>
      </div>

      {/* Cake with Candle */}
      <div className="relative mb-8">
        <div className="text-6xl mb-4">🎂</div>
        
        {/* Candle */}
        <div className="relative inline-block">
          <div className="w-2 h-8 bg-yellow-200 rounded-sm mx-auto mb-1"></div>
          
          {/* Flame - disappears when blown */}
          {!candleBlown && (
            <div 
              className="w-3 h-4 bg-gradient-to-t from-red-500 to-yellow-400 rounded-full mx-auto animate-pulse cursor-pointer hover:scale-110 transition-transform"
              onClick={handleCandleClick}
            ></div>
          )}
          
          {/* Smoke Effect */}
          {showSmoke && (
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-gray-400 rounded-full opacity-50 animate-bounce"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    marginBottom: '2px'
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>
        
        {/* Blow Candle Button */}
        {!candleBlown && (
          <button
            onClick={handleCandleClick}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-poppins rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-pink-500/50"
          >
            Blow the Candle 💨
          </button>
        )}
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                color: ['#ff69b4', '#9d4edd', '#06ffa5', '#ffb300'][Math.floor(Math.random() * 4)]
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
