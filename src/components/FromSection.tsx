
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
              {[...Array(12)].map((_, i) => (
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
              <h3 className="text-4xl font-pacifico bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent animate-neon-pulse">
                With Love
              </h3>
            </div>

            {/* Message Content */}
            <div className="space-y-6 text-white font-poppins leading-relaxed">
              <p className="text-xl font-semibold">
                🧡 <span className="text-orange-400 font-bold">From your well-wisher,</span>
              </p>
              
              <p className="text-lg font-medium">
                <span className="text-pink-300 font-bold text-xl">Jeevan</span> – <span className="font-dancing text-lg italic">the irritating, worst fellow of your BE 2022 batch</span> 😑
              </p>
              
              <p className="text-lg text-blue-300 font-medium italic border-l-4 border-blue-500 pl-4">
                It's been 3 years we've been friends, <span className="font-bold">and strangers too.</span>
              </p>
              
              <p className="text-lg text-purple-300 font-semibold">
                But I've always been your <span className="text-purple-200 font-bold">well-wisher.</span>
              </p>
              
              <p className="text-lg text-pink-300 font-medium bg-pink-900/20 p-3 rounded-lg border border-pink-500/30">
                I'm the <span className="font-bold text-pink-200">happiest</span> when I see you <span className="font-bold text-yellow-300">smiling.</span>
              </p>
              
              <p className="text-lg text-cyan-300 font-medium italic">
                Maybe I'll be there in the upcoming years, <span className="font-bold">maybe not.</span>
              </p>
              
              <p className="text-lg text-yellow-300 font-semibold border border-yellow-500/30 p-3 rounded-lg bg-yellow-900/20">
                But my <span className="font-bold text-yellow-200">intentions</span> and <span className="font-bold text-red-300">heart</span> for you are <span className="font-bold text-green-300">true.</span>
              </p>
              
              <p className="text-lg text-green-300 font-medium italic">
                These days, I believe in <span className="font-bold">silence</span> and <span className="font-bold">presence.</span>
              </p>
              
              <p className="text-2xl text-center mt-10 font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-pacifico animate-neon-pulse">
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
