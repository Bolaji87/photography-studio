import React from "react";

import "./hero.css";

function Hero() {
  return (
    <div id="hero">
      <div className="hero-cont">
        <div className="hero-text">
          <h1>slacrane shot it</h1>
          <p>
            Capture life's beautiful moments with us. At {""}
            <strong>Slacrane shot it</strong>, we specialize in creating
            stunning images that tell your unique story. Whether it's a
            cherished family portrait or an unforgettable event, our passion is
            to deliver timeless photography you'll treasure forever. Explore our
            portfolio and let us turn your vision into art.
          </p>
          <button className="hero-btn">
            <a href="#">
              Book a session <span>&rarr;</span>
            </a>
          </button>
        </div>
        <div className="hero-image">
          <img src="./slacrane/slacrane-1.jpg" width="500p" alt="slacrane" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
