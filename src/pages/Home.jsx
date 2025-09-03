import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Tutorial App</h1>
        <p>Learn IT & Mechanical courses with step-by-step video tutorials.</p>
        
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/computer.png" alt="IT"/>
          <h3>IT Tutorials</h3>
          <p>Master React, Python, AI, and more with expert tutorials.</p>
        </div>
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/gear.png" alt="Mechanical"/>
          <h3>Mechanical Tutorials</h3>
          <p>Learn CAD, SolidWorks, and mechanical design step by step.</p>
        </div>
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/play-button-circled.png" alt="Videos"/>
          <h3>Video Learning</h3>
          <p>Watch structured video tutorials anytime, anywhere.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
