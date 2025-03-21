import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import profile from "/sakib.png";
import { use } from "react";
import { useNavigate } from "react-router-dom";
const AboutSection = () => {
  const { dark } = useContext(AuthContext);
  const [currentYear, setCurrentYear] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  const navigete = useNavigate();
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setCurrentYear(year);
    setCurrentMonth(month);
  }, []);
  useEffect(()=>{
    Swal.fire({
      title: "Development in Progress",
      text: "This site is under development. Some features may not work properly.",
      icon: "question",
    });
  },[])

  const calculateDifference = () => {
    // September 2023 (month 8, because months are 0-based)
    const september2023 = new Date(2023, 8);
    const currentDate = new Date();

    let diffInYears = currentDate.getFullYear() - september2023.getFullYear();
    let diffInMonths = currentDate.getMonth() - september2023.getMonth();

    if (diffInMonths < 0) {
      diffInYears -= 1;
      diffInMonths += 12;
    }

    const totalMonthsDifference = diffInYears;
    return totalMonthsDifference;
  };

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-center py-16 lg:px-8  ${
        dark ? "bg-black text-white" : "bg-white p-8 text-black"
      }`}
    >
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
        <img
          src={profile}
          alt="Developer"
          className="rounded-lg shadow-lg w-64 lg:w-96"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h4 className="text-lg font-semibold uppercase tracking-wide mb-4">
          About Me
        </h4>
        <h1 className="text-3xl lg:text-5xl  font-bold mb-6">
          A Passionate Innovator Shaping the Future of Technology
        </h1>
        <p className="text-base lg:text-lg mb-6 p-3 leading-relaxed">
          I&#39;m a web designer, and I&#39;m very passionate and dedicated to
          my work. With {calculateDifference()} years {currentMonth} months of
          experience as a professional web developer, I have acquired the skills
          and knowledge necessary to make your project a success. I enjoy every
          step of the design process, from discussion to collaboration.
        </p>
        <button onClick={()=>{navigete(`/contact`)}} className="btn btn-info px-6 py-3 rounded-lg shadow">
          Hire Me Now
        </button>
        
      </div>
    </div>
  );
};

export default AboutSection;
