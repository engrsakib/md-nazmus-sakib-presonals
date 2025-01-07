import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Footer = () => {
  const {dark} = useContext(AuthContext);
  const links = (
    <>
      <NavLink
        to="/"
        
      >
        Home
      </NavLink>

      <NavLink
        
        to={`/about`}
      >
        About
      </NavLink>

      <NavLink
        
        to={`/service`}
      >
        Service
      </NavLink>

      <NavLink
        
        to={`/project`}
      >
        Project
      </NavLink>

      <NavLink
        
        to={`/blogs`}
      >
        Blogs
      </NavLink>

      <NavLink
        
        to={`/contact`}
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <>
      <footer className="footer mx-auto text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Menu</h6>
          {links}
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a
            href="http://localhost:5173/sitemap.html"
            className="link link-hover"
          >
            Sites map
          </a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved. Design
            and develop by Md. Nazmus Sakib
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
