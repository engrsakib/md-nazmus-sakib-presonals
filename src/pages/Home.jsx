import React, { useContext } from "react";
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
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {/* MouseTrail effect */}
      <MouseTrail strokeColor={"#FF8541"} />

      {/* Page Content */}
      <LazyLoad height={200} once>
        {/* Slider Section */}
        <section className="mt-3">
          <Slider></Slider>
        </section>

        {/* About Section */}
        <section>
          <AboutSection></AboutSection>

          {/* Our Mission */}
          <Mission></Mission>

          {/* Projects */}
          <HomeProjects></HomeProjects>

          {/* Blogs */}
          <HomeBlogs></HomeBlogs>

          {/* Testimonials */}
          <Testomonials></Testomonials>

          {/* Services */}
          <Services></Services>
        </section>

        {/* Helmet for Meta Info */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
      </LazyLoad>
    </>
  );
};

export default Home;
