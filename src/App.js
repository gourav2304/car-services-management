import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";
import Service from "./pages/service";
import Checkout from "./pages/checkout";
import Profile from "./pages/profile";
import SignIn from "./pages/signIn/login";
import SignUp from "./pages/signup/signup";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <createBrowserRouter>
        <RouterProvider router={router} />
      </createBrowserRouter>
    </>
  );
}

export default App;
