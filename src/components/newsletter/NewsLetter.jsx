import React, { useState } from "react";
import "./newsletter.css";

import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function NewsLetter() {
  const [subscribe, setSubscribe] = useState("");
  function handleSubcription(e) {
    e.preventDefault();

    setSubscribe("");
  }
  return (
    <div className="news-letter">
      <form onSubmit={handleSubcription} className="newsletter-form" action="">
        <input
          value={subscribe}
          onChange={(e) => setSubscribe(e.target.value)}
          type="email"
          placeholder="input your email to subscribe"
        />
        <button>
          <a href="#">Subscribe</a>
        </button>
      </form>
      <div className="social-links">
        <Link href="#">
          <FaSquareInstagram />
        </Link>
        <Link href="#">
          <FaSquareXTwitter />
        </Link>
      </div>
    </div>
  );
}

export default NewsLetter;
