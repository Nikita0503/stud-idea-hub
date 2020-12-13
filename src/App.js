import React from 'react';
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import StatisticsPage from './pages/StatisticsPage'
import SpeakersPage from './pages/SpeakersPage'
import SchedulePage from './pages/ScheludePage'
import VideosPage from './pages/VideosPage'
import ContactsPage from './pages/ContactsPage'
import './App.css';

function App() {
  return (
    <div>
      <MainPage/>
      <AboutPage/>
      <StatisticsPage/>
      <SpeakersPage/>
      <SchedulePage/>
      <ContactsPage/>
    </div>
  );
}

export default App;
