import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Listings from "../pages/Listings";
import Details from "../pages/Details";

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
    path: '/listings',
    Component: Listings
  },

  {
    path: '/details/:ID',
    Component: Details
  }
]);

export default router;