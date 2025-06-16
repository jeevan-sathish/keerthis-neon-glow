
import { useState } from 'react';
import LandingPage from '../components/LandingPage';
import BirthdayPage from '../components/BirthdayPage';

const Index = () => {
  const [showBirthday, setShowBirthday] = useState(false);

  const handleEnterSite = () => {
    setShowBirthday(true);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {!showBirthday ? (
        <LandingPage onEnter={handleEnterSite} />
      ) : (
        <BirthdayPage />
      )}
    </div>
  );
};

export default Index;
