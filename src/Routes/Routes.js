import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import UserDetails from "../Pages/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/item/:id",
        element: <UserDetails></UserDetails>,
      },
    ],
  },
]);

export default router;
