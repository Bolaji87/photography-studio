import React from "react";

import "./hero.css";
const items = [
  {
    name: " work",
    image: "./slacrane/studio-1.jpg",
    id: crypto.randomUUID(),
  },
  {
    name: " work",
    image: "./slacrane/studio-2.jpg",
    id: crypto.randomUUID(),
  },
  {
    name: " work",
    image: "./slacrane/studio-3.jpg",
    id: crypto.randomUUID(),
  },

  {
    name: " work",
    image: "./slacrane/studio-4.jpg",
    id: crypto.randomUUID(),
  },
  {
    name: " work",
    image: "./slacrane/slacrane-1.jpg",
    id: crypto.randomUUID(),
  },
  {
    name: " work",
    image: "./slacrane/slacrane-3.jpg",
    id: crypto.randomUUID(),
  },
];

function Hero() {
  return (
    <div id="hero">
      <h1>Catalogue</h1>
      <div className="hero-images">
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <li className="list-images">
      <img src={item.image} alt={item.name} />
      {/* <h4> Catalogue {item.name}</h4> */}
      <button>
        <a href="#">Book a session</a>
      </button>
    </li>
  );
}
export default Hero;
