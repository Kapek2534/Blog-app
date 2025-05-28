import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import "./styles/theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/Layout/Layout.jsx";
import { MainPage } from "./views/MainPage.jsx";
import { PostsPage } from "./views/PostsPage.jsx";
import { Favourites } from "./views/Favourites.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostsPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
