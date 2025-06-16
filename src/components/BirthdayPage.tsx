
import { useState, useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';
import Navigation from './Navigation';
import WishCard from './WishCard';
import FromSection from './FromSection';

const BirthdayPage = () => {
  const [candleBlown, setCandleBlown] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Audio placeholder - replace with your audio file path later
  const AUDIO_FILE_PATH = "/path/to/your/birthday-song.mp3"; // TODO: Replace with actual audio file path

  useEffect(() => {
    // Attempt to autoplay audio when component mounts
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log("Autoplay was prevented by browser:", error);
          // Fallback: play on first user interaction
          const handleFirstInteraction = () => {
            audioRef.current?.play();
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('touch', handleFirstInteraction);
          };
          document.addEventListener('click', handleFirstInteraction);
          document.addEventListener('touch', handleFirstInteraction);
        }
      }
    };

    playAudio();
  }, []);

  const handleCandleBlow = () => {
    setCandleBlown(true);
    setTimeout(() => {
      setShowCelebration(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Audio Element - Hidden */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src={AUDIO_FILE_PATH} type="audio/mpeg" />
        <source src={AUDIO_FILE_PATH.replace('.mp3', '.ogg')} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30"></div>
      
      {/* Floating Sparkles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation - Only show after candle is blown */}
      {candleBlown && <Navigation />}

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <ProfileCard onCandleBlow={handleCandleBlow} candleBlown={candleBlown} />
          
          {/* Celebration Title - Shows after candle is blown */}
          {showCelebration && (
            <div className="mt-16 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-pacifico bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-neon-pulse">
                ✨ Many More Happy Returns of the Day
              </h1>
              <h2 className="text-3xl md:text-5xl font-pacifico bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-neon-pulse">
                Keerthi (Keerthana)!
              </h2>
              
              {/* Floating Butterflies */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-3xl animate-bounce"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  >
                    🦋
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Wish Section - Only show after celebration */}
      {showCelebration && (
        <div id="wish" className="relative z-10 py-20">
          <WishCard />
        </div>
      )}

      {/* From Section - Only show after celebration */}
      {showCelebration && (
        <div id="from" className="relative z-10 py-20">
          <FromSection />
        </div>
      )}
    </div>
  );
};

export default BirthdayPage;
