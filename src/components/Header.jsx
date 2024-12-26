import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";



const Header = () => {
  const { setdark, dark, user } = useContext(AuthContext);
  
  const handletheme = () => {
    setdark(!dark);
  };
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded ${
            isActive ? "bg-green-500" : "bg-transparent hover:bg-red-400"
          } ${dark ? "text-gray-50" : "text-gray-800"}`
        }
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded ${
            isActive
              ? "bg-green-500 text-white"
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
              ? "bg-green-500 text-white"
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
              ? "bg-green-500 text-white"
              : "bg-transparent hover:bg-red-400"
          } ${dark ? "text-gray-50" : "text-gray-800"}`
        }
        to={`/protfolio`}
      >
        Protfolio
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded ${
            isActive
              ? "bg-green-500 text-white"
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
              ? "bg-green-500 text-white"
              : "bg-transparent hover:bg-red-400"
          } ${dark ? "text-gray-50" : "text-gray-800"}`
        }
        to={`/testimonial`}
      >
        Testimonial
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded ${
            isActive
              ? "bg-green-500 text-white"
              : "bg-transparent hover:bg-red-400"
          } ${dark ? "text-gray-50" : "text-gray-800"}`
        }
        to={`/contact`}
      >
        Contact
      </NavLink>
    </>
  );

  
  return (
    <>
      <div className="navbar bg-base-100">
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
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">{links}</ul>
        </div>
        <div className="navbar-end">
        

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
