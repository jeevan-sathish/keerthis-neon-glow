
const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Profile Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/lovable-uploads/c5f6d190-f436-4768-a83d-b9aaa2eae783.png"
            alt="Keerthi"
            className="w-10 h-10 rounded-full border-2 border-pink-400"
          />
          <span className="font-pacifico text-xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Keerthi
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <button
            onClick={() => scrollToSection('wish')}
            className="px-4 py-2 font-poppins text-white hover:text-pink-400 transition-colors hover:glow-pink"
          >
            💌 Wish
          </button>
          <button
            onClick={() => scrollToSection('from')}
            className="px-4 py-2 font-poppins text-white hover:text-purple-400 transition-colors hover:glow-purple"
          >
            📝 From
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
