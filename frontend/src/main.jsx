import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import "./styles/theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/Layout/Layout.jsx";
import { MainPage } from "./views/MainPage.jsx";
import { PostsPage } from "./views/PostsPage.jsx";
import { Favourites } from "./views/Favourites.jsx";
import { AboutPage } from "./views/AboutPage.jsx";

import { postsListLoader } from "./api/postsListLoader.js";
import { favouritesPostsLoader } from "./api/favouritesPostsLoader.js";
import { favouritesAction } from "./api/favouritesAction.js";

const router = createBrowserRouter([
  {
    path: "/favourites/:postId",
    action: favouritesAction,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "posts",
        element: <PostsPage />,
        loader: postsListLoader,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "favourites",
        element: <Favourites />,
        loader: favouritesPostsLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
