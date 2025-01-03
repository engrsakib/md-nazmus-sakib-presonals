import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import LogIn from "../auth/LogIn";

import Fourzero from "../components/Fourzero";
import Public from "./Public";
import Privete from "./Privete";
import AddSkils from "../pages/AddSkils";
import Contact from "../pages/Contact";
import WatchMassage from "../pages/WatchMassage";
import About from "../pages/About";
import Services from "../pages/Services";
import DeveloperProfile from "../components/DeveloperProfiles/DeveloperProfile";
import AddProject from "../pages/AddProject";
import Projects from "../components/Projects/Projects";




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
        element: (
          <Privete>
            <AddSkils></AddSkils>
          </Privete>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/project",
        element: <Projects></Projects>,
      },
      {
        path: "/skils",
        element: <DeveloperProfile></DeveloperProfile>,
      },
      {
        path: "/auth/massage/watch",
        element: (
          <Privete>
            <WatchMassage></WatchMassage>
          </Privete>
        ),
      },
      {
        path: "/auth/massage/addProject",
        element: (
          <Privete>
            <AddProject></AddProject>
          </Privete>
        ),
      },
    ],
  },
]);

export default router;
