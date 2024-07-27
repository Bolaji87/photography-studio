import React from "react";
import "./portfolio.css";
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

function Portfolio() {
  return (
    <div className="album-cont">
      <h1>Our Portfolio</h1>
      <div className="albums-images">
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
      <img src={item.image} width="500px" alt={item.name} />
      {/* <h4> Catalogue {item.name}</h4> */}
      <button>
        <a href="#">Book a session</a>
      </button>
    </li>
  );
}

export default Portfolio;
