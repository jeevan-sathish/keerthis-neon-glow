
const QuoteReply = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        {/* Quote Section */}
        <div className="relative group mb-8">
          {/* Glowing Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-xl blur opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse"></div>
          
          {/* Quote Card */}
          <div className="relative bg-black border border-yellow-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <span className="text-2xl">🍂</span>
                <h4 className="text-2xl font-pacifico bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-neon-pulse">
                  Quote
                </h4>
                <span className="text-2xl">🍂</span>
              </div>
              
              <blockquote className="text-xl font-poppins font-medium text-yellow-200 italic leading-relaxed">
                "A smile is happiness you'll find right under your nose"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Reply Section */}
        <div className="relative group">
          {/* Glowing Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl blur opacity-70 group-hover:opacity-90 transition duration-1000 animate-pulse"></div>
          
          {/* Reply Card */}
          <div className="relative bg-black border border-purple-500/30 rounded-xl p-8 backdrop-blur-sm">
            {/* Reply Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">J</span>
              </div>
              <div>
                <p className="text-sm font-poppins text-purple-300 font-medium">Jeevan replied</p>
                <p className="text-xs font-poppins text-gray-400">Your well-wisher</p>
              </div>
            </div>

            {/* Reply Content */}
            <div className="relative z-10">
              <p className="text-lg font-poppins font-medium text-white leading-relaxed">
                Your smile? It's not just happiness — it's a 
                <span className="text-pink-300 font-semibold"> memory</span>, a 
                <span className="text-purple-300 font-semibold"> melody</span>, a 
                <span className="text-blue-300 font-semibold"> moment</span> that stays. 
                <span className="text-xl ml-2">🎶💫</span>
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 text-purple-400 opacity-20">
              <span className="text-3xl">💭</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteReply;
