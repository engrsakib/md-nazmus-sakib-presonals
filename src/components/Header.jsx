import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../Firebase/firebase.congig";
import DownloadResume from "./Button/DownloadResume";



const Header = () => {
  const { setdark, dark, user, setUser } = useContext(AuthContext);
  // console.log(user?.photo);
   const singOut = () => {
     Swal.fire({
       title: "Are You want to Sing Out",
       showDenyButton: true,
       showCancelButton: false,
       confirmButtonText: "SignOut",
       denyButtonText: `Cancel`,
     }).then((result) => {
       /* Read more about isConfirmed, isDenied below */
       if (result.isConfirmed) {
         signOut(auth)
           .then(() => {
             // Sign-out successful.
             setUser(null);
             Swal.fire("SingOut!", "", "success");
           })
           .catch((error) => {
             // An error happened.
           });
       } else if (result.isDenied) {
         Swal.fire("You are stay LogIn", "", "info");
       }
     });
   };
  
  const handletheme = () => {
    setdark(!dark);
  };
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded ${
            isActive ? "bg-info" : "bg-transparent hover:bg-red-400"
          } ${dark ? "text-gray-50" : "text-gray-800"}`
        }
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded ${
            isActive
              ? "bg-info text-white"
              : "bg-transparent hover:bg-red-400"
          } ${dark ? "text-gray-50" : "text-gray-800"}`
        }
        to={`/about`}
      >
        About
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded ${
            isActive
              ? "bg-info text-white"
              : "bg-transparent hover:bg-red-400"
          } ${dark ? "text-gray-50" : "text-gray-800"}`
        }
        to={`/service`}
      >
        Service
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded ${
            isActive
              ? "bg-info text-white"
              : "bg-transparent hover:bg-red-400"
          } ${dark ? "text-gray-50" : "text-gray-800"}`
        }
        to={`/project`}
      >
        Project
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded ${
            isActive
              ? "bg-info text-white"
              : "bg-transparent hover:bg-red-400"
          } ${dark ? "text-gray-50" : "text-gray-800"}`
        }
        to={`/blogs`}
      >
        Blogs
      </NavLink>
      

      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded ${
            isActive
              ? "bg-info text-white"
              : "bg-transparent hover:bg-red-400"
          } ${dark ? "text-gray-50" : "text-gray-800"}`
        }
        to={`/contact`}
      >
        Contact
      </NavLink>
    </>
  );

   const menuLinks = (
     <>
       <NavLink
         className={({ isActive }) =>
           `px-4 py-2 rounded ${
             isActive
               ? "bg-info text-white"
               : "bg-transparent hover:bg-red-400"
           } ${dark ? "text-gray-50" : "text-gray-800"}`
         }
         to={`/auth/user/blogs/add`}
       >
         Add Blogs
       </NavLink>
       <NavLink
         className={({ isActive }) =>
           `px-4 py-2 rounded ${
             isActive
               ? "bg-info text-white"
               : "bg-transparent hover:bg-red-400"
           } ${dark ? "text-gray-50" : "text-gray-800"}`
         }
         to={`/auth/user/skils/add`}
       >
         Add Skils
       </NavLink>
       <NavLink
         className={({ isActive }) =>
           `px-4 py-2 rounded ${
             isActive
               ? "bg-info text-white"
               : "bg-transparent hover:bg-red-400"
           } ${dark ? "text-gray-50" : "text-gray-800"}`
         }
         to={`/auth/massage/addProject`}
       >
         Add Projects
       </NavLink>
       <NavLink
         className={({ isActive }) =>
           `px-4 py-2 rounded ${
             isActive
               ? "bg-info text-white"
               : "bg-transparent hover:bg-red-400"
           } ${dark ? "text-gray-50" : "text-gray-800"}`
         }
         to={`/auth/massage/watch`}
       >
         watch Massage
       </NavLink>

       <button onClick={singOut}>Logout</button>
     </>
   );

  
  return (
    <>
      <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to={`/`}
            className={`text-2xl ${dark ? "text-gray-50" : "text-gray-800"}`}
          >
            <div className="flex items-center">
              <img className="w-20 max-sm:w-16 px-3" src="/personal.png" alt="LOGO engrsakib" />
              <p className="logo max-sm:text-3xl text-4xl italic text-[#00B5FF]">engrsakib</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">{links}</ul>
        </div>
        <div className="navbar-end">
          {/* logIn */}
          {user && (
            // Profile Image Dropdown
            <div
              className="dropdown dropdown-end space-x-3 tooltip"
              data-tip={user?.name}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Profile" src={user?.photo} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={`/auth/users/profile`} className="justify-between">
                    {user?.name}
                  </Link>
                </li>
                <li>{menuLinks}</li>
              </ul>
            </div>
          )}
          {/* Dowenload resume */}
          <DownloadResume></DownloadResume>
          {/* theme controlat start */}
          <div className="flex items-center gap-2 space-x-3">
            <button onClick={handletheme}>
              {dark ? (
                <GoSun className="text-yellow-400 text-2xl" />
              ) : (
                <FaMoon className="text-indigo-950 text-2xl" />
              )}
            </button>
          </div>

          {/* theme controlat end */}
        </div>
      </div>
    </>
  );
};

export default Header;
