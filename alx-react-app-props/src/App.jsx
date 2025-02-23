import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage';
import Counter from './components/Counter';

function App() {
  const userData = { name: "Melvin Freeman", email: "melvin.freeman@gmail.com" };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <UserProfile name={userData.name} age="26" bio="Software Developer from Accra" />
      <WelcomeMessage />
      <Counter />
      <ProfilePage />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
