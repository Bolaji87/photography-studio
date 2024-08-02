import HomePage from "./pages/Home/HomePage.jsx";
import Portfolio from "./pages/portfolio/Portfolio";
import About from "./pages/about/About.jsx";
import Services from "./pages/services/Services.jsx";
import Login from "./pages/login/Login.jsx";
import PageNotFound from "./pages/pagenotfound/PageNotFound.jsx";

export const appRoutes = [
  {
    path: "/",
    component: HomePage,
  },

  {
    path: "/about",
    component: About,
  },

  {
    path: "/services",
    component: Services,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "login",
    component: Login,
  },
  {
    path: "*",
    component: PageNotFound,
  },
];
