import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AuthContext } from "../provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import SocilLink from "./SocilLink";

const Slider = () => {
  const { dark } = useContext(AuthContext);
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        dark ? "bg-[#171212] text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, <span className="text-yellow-500">I AM </span>
              <Typewriter
                words={[
                  "Md. Nazmus Sakib",
                  "Software Engineer",
                  "Programmer",
                  "Problem Solver",
                  "Developer",
                  "Designer",
                  "Coder",
                  "Columnist",
                ]}
                loop={1000}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="text-lg md:text-xl mb-6 p-3">
              I'm Md. Nazmus Sakib, born on December 23, 2002, is a rising star
              in the field of problem-solving and technology. My journey through{" "}
              <Link
                to={`https://diu.ac/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500"
              >
                Dhaka International University's
              </Link>{" "}
              Department of{" "}
              <Link
                to={`https://diu.ac/department/department-of-cse`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500"
              >
                Computer Science and Engineering
              </Link>{" "}
              has equipped me with the knowledge and skills to tackle complex
              challenges and drive innovation in the digital world. From a young
              age, I exhibited an inquisitive mind and a natural aptitude for
              problem-solving. I'm a passionate at react, node, express, mongoDB
              and Firebase
            </p>
            <div className="flex justify-center gap-y-4 md:justify-start space-x-4 flex-wrap mb-6">
              <SocilLink></SocilLink>
            </div>
            <button className="btn btn-info">Hire Now</button>
          </div>

          {/* Right Section */}
          <div className="flex-1 mt-8 md:mt-0">
            <img
              src="https://i.ibb.co.com/nMDcPpZ/467675085-570061879133815-2123370292224643458-n-1.jpg"
              alt="Hero"
              className="rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Dark/Light Mode Toggle */}
        <div className="flex justify-center mt-8">
          <label className="swap swap-rotate">
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64 17.36A9 9 0 0112 3v1a8 8 0 100 16 9 9 0 01-6.36-2.64z"></path>
            </svg>
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 5.69l.94 1.88 2.07.3-1.5 1.46.36 2.06-1.87-.98-1.87.98.36-2.06-1.5-1.46 2.07-.3.94-1.88z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Slider;
