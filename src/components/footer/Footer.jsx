import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} copyright slacrane shot it. All Rights
        Reserved.
      </p>
    </footer>
  );
}

export default Footer;
