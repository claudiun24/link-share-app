import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import {
  AuthLoginPage,
  AuthRegisterPage,
  LinksPage,
  PreviewPage,
  ProfilePage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LinksPage,
  },
  {
    path: "/preview/:userId",
    Component: PreviewPage,
  },
  {
    path: "/profile/:userId",
    Component: ProfilePage,
  },
  {
    path: "/auth",
    children: [
      {
        path: "/auth/login",
        Component: AuthLoginPage,
      },
      {
        path: "/auth/register",
        Component: AuthRegisterPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
