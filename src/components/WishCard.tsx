
const WishCard = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto">
        {/* Floating Card */}
        <div className="relative group">
          {/* Glowing Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          {/* Main Card */}
          <div className="relative bg-black border border-purple-500/30 rounded-xl p-8 backdrop-blur-sm animate-float">
            {/* Decorative Icons */}
            <div className="flex justify-center space-x-4 mb-6 text-3xl">
              <span className="animate-bounce">🌸</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎈</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💗</span>
              <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>✨</span>
            </div>

            {/* Wish Text */}
            <div className="text-center space-y-6 relative z-10">
              <h3 className="text-3xl font-pacifico bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-8 animate-neon-pulse">
                Birthday Wishes
              </h3>
              
              <p className="text-xl font-poppins font-medium text-white leading-relaxed tracking-wide">
                💖 <span className="text-pink-400 font-bold text-shadow-pink">Many more happy returns of the day Keerthi</span> 💗
              </p>
              
              <p className="text-lg font-dancing font-semibold text-purple-300 leading-relaxed italic">
                Stay blessed, stay khush,
              </p>
              
              <p className="text-lg font-dancing font-semibold text-blue-300 leading-relaxed italic">
                May your smile last infinite.
              </p>
              
              <p className="text-lg font-poppins font-medium text-cyan-300 leading-relaxed mt-8 border border-cyan-500/30 rounded-lg p-4 bg-cyan-900/20">
                All the best for your 6th Sem final exams too – do it well! ✨
                ಚೆನ್ನಾಗಿ ಬರಿ ಎಕ್ಸಾಮ್ ನಾ..☺️
              </p>
            </div>

            {/* Limited Floating Hearts - positioned at edges only */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-pink-400 text-lg animate-pulse"
                  style={{
                    left: `${i < 2 ? 5 + Math.random() * 10 : 85 + Math.random() * 10}%`, // Keep to edges
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                >
                  💖
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
