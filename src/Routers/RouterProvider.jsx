import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import LogIn from "../auth/LogIn";

import Fourzero from "../components/Fourzero";
import Public from "./Public";
import Privete from "./Privete";
import AddSkils from "../pages/AddSkils";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Fourzero></Fourzero>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/auth/users/admin/login",
        element: (
          <Public>
            <LogIn></LogIn>
          </Public>
        ),
      },
      {
        path: "/auth/user/skils/add",
        element:(<Privete>
          <AddSkils></AddSkils>
        </Privete>)
      },
    ],
  },
]);

export default router;
