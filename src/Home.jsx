import React from 'react';
import heroImg from './assets/hero.png'; // Use '../assets/hero.png' if Home.jsx is inside a 'pages' subfolder

const Home = () => {
  return (
    <div>
      <h1>First comment- Hello World!</h1>
      <img src={heroImg} alt="Random Unsplash" />
    </div>
  );
};

export default Home; // <-- MUST have 'export default'