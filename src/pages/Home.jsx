import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to LearnTube</h1>
          <p>Learn Technologies with step-by-step video tutorials.</p>
        </div>
        <div className="hero-gif">
          <img 
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" 
            alt="Learning GIF" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
