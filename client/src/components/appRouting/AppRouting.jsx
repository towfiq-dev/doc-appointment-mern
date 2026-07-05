import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/Error";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index: true,
        Component: Home
      },
    ]
  },
  {
    path: '*',
    Component: ErrorPage
  }
]);
