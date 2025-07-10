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
    loader:()=>fetch('/listing.json'),
    Component: Listings
  },

  {
    path: '/details/:id',
    loader:()=>fetch('./Listing.json'),
    Component: Details
  }
]);

export default router;