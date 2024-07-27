import React from "react";
import NavBar from "./components/Header/NavBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import { Routes, Route } from "react-router-dom";

import { appRoutes } from "./routes.js";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {appRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact
            element={<route.component />}
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
