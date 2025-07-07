import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Listings from "../pages/Listings";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },

  {
    path: '/about',
    Component: About
  },

  {
    path: '/listings',
    Component: Listings
  }
]);

export default router;