import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "./pages/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const GameDetailsPage = lazy(() => import("./pages/GameDetailsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
