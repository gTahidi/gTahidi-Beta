import React from 'react';
import './header.css';
const Header = () => {
  return (
    <header>
      <div className="logo">
        
        <a href="//ddf71fd65dc344da0df37faacf4ba5a7.cdn.bubble.io/f1687266456808x607026856842455700/gTahidi.png"><img src="#" alt="gTahidi Logo" /></a>
      </div>
      <nav>
        <ul>
          <li><a href="#">Benefits</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#" className="start-button">Start Creating</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
