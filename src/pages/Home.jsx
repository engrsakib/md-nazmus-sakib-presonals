import React, { useContext, useEffect } from "react";
import Slider from "../components/Slider";
import { Helmet } from "react-helmet";
import Mission from "../components/Mission";

import { AuthContext } from "../provider/AuthProvider";
import AboutSection from "../components/AboutSection";
import HomeProjects from "../components/Home/HomeProjects";
import HomeBlogs from "../components/Blogs/HomeBlogs";
import Contact from "./Contact";
import Services from "./Services";
import Testomonials from "../components/Testomonials/Testomonials";
import LazyLoad from "react-lazyload";
import { clockCursor } from "cursor-effects";

const Home = () => {
  const { user } = useContext(AuthContext);

  // Add Clock Cursor Effect
  useEffect(() => {
    const clock = new clockCursor({
      fontSize: "16px", // Clock font size
      fontColor: "red", // Clock color updated to red
      enableShadow: true, // Enable shadow effect
    });

    // Cleanup when the component unmounts
    return () => {
      clock.destroy();
    };
  }, []);

  return (
    <>
      <LazyLoad height={200} once>
        {/* slider section */}
        <section className="mt-3">
          <Slider></Slider>
        </section>
        {/* type writer start */}
        <section>
          <AboutSection></AboutSection>
          {/* our mission */}
          <Mission></Mission>
          {/* projects */}
          <HomeProjects></HomeProjects>
          {/* blogs */}
          <HomeBlogs></HomeBlogs>
          {/* testimonial */}
          <Testomonials></Testomonials>
          {/* services */}
          <Services></Services>
        </section>
        {/* type writer end */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
      </LazyLoad>
    </>
  );
};

export default Home;
