import React from "react";
import "./pagenotfound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="notfound">
      <h1>Page not found</h1>

      <p>
        <Link to="/">Go back to home</Link>
      </p>
    </div>
  );
}

export default PageNotFound;
