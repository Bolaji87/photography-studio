import React from "react";
import "./footer.css";

import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 slacrane shot it. All Rights Reserved.</p>
      <div className="social-links">
        <Link href="#">
          <FaSquareInstagram />
        </Link>
        <Link href="#">
          <FaSquareXTwitter />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
