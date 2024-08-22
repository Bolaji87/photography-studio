import React from "react";
import "./footer.css";

function Footer() {
  const getYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {getYear} copyright slacrane shot it. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
