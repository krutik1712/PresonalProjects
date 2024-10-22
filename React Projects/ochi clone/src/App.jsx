import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import MovingEyes from './components/MovingEyes';
import FeatureProjects from './components/FeatureProjects';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import MovingEyes2 from './components/MovingEyes2';

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <MovingEyes />
      <FeatureProjects />
      <Cards />
      <MovingEyes2 />
      <Footer />
    </div>
  )
}

export default App;