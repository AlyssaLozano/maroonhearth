import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Services from "../pages/services/page";
import CLS from "../pages/cls/page";
import Compliance from "../pages/compliance/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/cls",
    element: <CLS />,
  },
  {
    path: "/compliance",
    element: <Compliance />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
