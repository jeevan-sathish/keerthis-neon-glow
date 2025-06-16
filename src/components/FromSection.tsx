
const FromSection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Floating Scroll Effect */}
        <div className="relative group">
          {/* Glowing Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
          
          {/* Main Card */}
          <div className="relative bg-black border border-orange-500/30 rounded-xl p-10 backdrop-blur-sm">
            {/* Floating Sparkles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-yellow-400 text-sm animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${1 + Math.random() * 3}s`
                  }}
                >
                  ✨
                </div>
              ))}
            </div>

            {/* From Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-pacifico bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                With Love
              </h3>
            </div>

            {/* Message Content */}
            <div className="space-y-6 text-white font-poppins leading-relaxed">
              <p className="text-lg">
                🧡 <span className="text-orange-400 font-semibold">From your well-wisher,</span>
              </p>
              
              <p className="text-lg">
                <span className="text-pink-300">Jeevan</span> – the irritating, worst fellow of your BE 2022 batch 😑
              </p>
              
              <p className="text-lg text-blue-300">
                It's been 3 years we've been friends, and strangers too.
              </p>
              
              <p className="text-lg text-purple-300">
                But I've always been your well-wisher.
              </p>
              
              <p className="text-lg text-pink-300">
                I'm the happiest when I see you smiling.
              </p>
              
              <p className="text-lg text-cyan-300">
                Maybe I'll be there in the upcoming years, maybe not.
              </p>
              
              <p className="text-lg text-yellow-300">
                But my intentions and heart for you are true.
              </p>
              
              <p className="text-lg text-green-300">
                These days, I believe in silence and presence.
              </p>
              
              <p className="text-xl text-center mt-8 font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Once again, a very Happy Birthday Keerthi... 🎂
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromSection;
