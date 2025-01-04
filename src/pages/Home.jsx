import React, { useContext } from 'react';
import Slider from '../components/Slider';
import { Helmet } from 'react-helmet';
import Mission from '../components/Mission';

import { AuthContext } from '../provider/AuthProvider';
import AboutSection from '../components/AboutSection';
import HomeProjects from '../components/Home/HomeProjects';
import HomeBlogs from '../components/Blogs/HomeBlogs';
import Contact from './Contact';
import Services from './Services';
import Testomonials from '../components/Testomonials/Testomonials';
import LazyLoad from 'react-lazyload';


const Home = () => {
  const{user} = useContext(AuthContext)
    
    return (
      <>
        <LazyLoad height={200} once>
          {/* slider section */}
          <section className="mt-3">
            <Slider></Slider>
          </section>
          {/* type writer start*/}
          <section>
            <AboutSection></AboutSection>
            {/* weight loss */}

            {/* our mission */}
            <Mission></Mission>
            {/* active donations */}

            {/* projects */}
            <HomeProjects></HomeProjects>

            {/* blogs */}
            <HomeBlogs></HomeBlogs>

            {/* testomonial */}
            <Testomonials></Testomonials>

            {/* services */}
            <Services></Services>
          </section>
          {/* type writer end*/}
          <Helmet>
            <meta charSet="utf-8" />
            <title>Home</title>
          </Helmet>
        </LazyLoad>
      </>
    );
};

export default Home;