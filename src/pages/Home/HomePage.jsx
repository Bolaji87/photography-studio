import React from "react";
import NavBar from "../../components/Header/NavBar.jsx";
import Hero from "../../components/hero/Hero.jsx";
import NewsLetter from "../../components/newsletter/NewsLetter.jsx";

function HomePage() {
  return (
    <div>
      <Hero />
      <NewsLetter />
    </div>
  );
}

export default HomePage;
