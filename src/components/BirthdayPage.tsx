import { useState, useRef } from 'react';
import ProfileCard from './ProfileCard';
import Navigation from './Navigation';
import WishCard from './WishCard';
import FromSection from './FromSection';
import QuoteReply from './QuoteReply';
import Footer from './Footer';

const song = "/chalisuva.mp3";

const BirthdayPage = () => {
  const [candleBlown, setCandleBlown] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const audioRef = useRef(null);

  const handleCandleBlow = () => {
    setCandleBlown(true);

    // Try to play the song
    if (audioRef.current) {
      audioRef.current.volume = 1;
      audioRef.current.muted = false;
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }

    setTimeout(() => {
      setShowCelebration(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop preload="auto" style={{ display: 'none' }}>
        <source src={song} type="audio/mpeg" />
        <source src={song} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30"></div>

      {/* Floating Sparkles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() < 0.3 ? Math.random() * 20 : 80 + Math.random() * 20}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      {candleBlown && <Navigation />}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <ProfileCard onCandleBlow={handleCandleBlow} candleBlown={candleBlown} />

          {showCelebration && (
            <div className="mt-16 animate-fade-in relative z-20">
              <h1 className="text-6xl md:text-6xl font-pacifico bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-neon-pulse">
                ✨ Many More Happy Returns of the Day
              </h1>
              <h2 className="text-4xl md:text-5xl font-pacifico bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-neon-pulse">
                Keerthi (Keerthana)
              </h2>

              {/* Floating Butterflies */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-2xl animate-bounce"
                    style={{
                      left: `${i < 2 ? 10 + Math.random() * 15 : 75 + Math.random() * 15}%`,
                      top: `${20 + Math.random() * 20}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
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

      {/* Sections After Celebration */}
      {showCelebration && (
        <>
          <div id="wish" className="relative z-10 py-8"><WishCard /></div>
          <div id="from" className="relative z-10 py-8"><FromSection /></div>
          <div className="relative z-10 py-8"><QuoteReply /></div>
          <div className="relative z-10 py-8"><Footer /></div>
        </>
      )}
    </div>
  );
};

export default BirthdayPage;
