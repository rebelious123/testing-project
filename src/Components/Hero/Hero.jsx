import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero_text">
        <h1>We Ensure Better Education For A Better World</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          Knowledge, Skills, and experiences needed to excel in the dynamic
          field of Education
        </p>
        <button className="btn">Explore More<img src={dark_arrow} alt="more_arrow"/></button>
      </div>
    </div>
  );
};

export default Hero;
