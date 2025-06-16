
const Footer = () => {
  return (
    <footer className="relative z-10 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Glowing Card */}
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg blur opacity-60 animate-pulse"></div>
            <div className="relative bg-black border border-purple-500/30 rounded-lg px-8 py-6 backdrop-blur-sm">
              <p className="text-lg font-poppins text-white mb-2">
                Made with Love 💗
              </p>
              <p className="text-xl font-dancing text-pink-300 font-semibold italic">
                ಇಂತಿ ನಿಮ್ಮ ಅಪರಿಚಿತ, ಜೀವನ್ ಎಸ್
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
