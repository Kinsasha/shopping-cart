import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import "./index.css";

//pages
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
