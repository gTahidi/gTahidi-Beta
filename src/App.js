// eslint-disable-next-line no-unused-vars
import React, { Component }  from 'react';

import Preloader from './Components/Preloader';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Features from './Components/Features';
import Features from './Components/Funfacts';
import Features from './Components/Howitworks';
import Features from './Components/Pricing';
import Features from './Components/Faq';
import Features from './Components/Testimonials';
import Features from './Components/Contact';
import Features from './Components/Footer';
import Features from './Components/ThemeToggle';
import Features from './Components/VideoPopup';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Preloader/>
       <Features/>
       <Funfacts/>
       <Howitworks/>
       <Pricing/>
       <Faq/>
       <Testimonials/>
       <Contact/>
       <Footer/>
       <ThemeToggle/>
       <VideoPopup/>
      
    </div>
  );
}

export default App;