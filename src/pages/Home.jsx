import React, { useContext } from 'react';
import Slider from '../components/Slider';
import { Helmet } from 'react-helmet';
import Mission from '../components/Mission';

import { AuthContext } from '../provider/AuthProvider';
import AboutSection from '../components/AboutSection';


const Home = () => {
  const{user} = useContext(AuthContext)
    
    return (
      <>
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
        
        </section>
        {/* type writer end*/}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
        
      </>
    );
};

export default Home;