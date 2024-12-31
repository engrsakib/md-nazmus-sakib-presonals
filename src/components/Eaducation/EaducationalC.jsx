import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const EaducationalC = () => {
  const { dark } = useContext(AuthContext);

  const experiences = [
    {
      title: "BSc in Computer Science and Engineering",
      company: "Dhaka International University",
      duration: "April 2023 - Running",
      time: "4 Years",
      result: "CGPA: promoted",
      bgColor: "bg-info",
      details: [
        "💻 Programming and Software Development: Learning core programming languages (Python, Java, C++), algorithms, and modern software development practices.",
        "🌐 Web and Mobile App Development: Building responsive websites and feature-rich mobile applications with cutting-edge technologies.",
      ],
    },
    {
      title: "Diploma in Computer Science and Engineering",
      company: "Jhenaidah Polytechnic Institute",
      duration: "Aug 2018 - Feb 2023",
      time: "4 Years",
      result: "CGPA: 3.21",
      bgColor: "bg-error",
      details: [
        "💻 Core Programming: Learning programming languages like Python, Java, C++, and web development (HTML, CSS, JavaScript).",
        "🛠️ Practical Projects: Applying my skills to real-world challenges, including software development, system configuration, and web solutions.",
      ],
    },
    {
      title: "Dakhil (Science)",
      company: "Tanthonia Nurun Ala Nur Fazil Madrasah",
      duration: "Jan 2015 - Mar 2017",
      time: "2 Years",
      result: "GPA: 4.72",
      bgColor: "bg-success",
      details: [
        "The Dakhil (Science) course is a specialized secondary-level education program offered under the Madrasa Education Board in Bangladesh. This program is designed to provide students with foundational knowledge in science and Islamic studies, preparing them for higher education and technical careers.",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen lg:px-4 py-8 ${
        dark ? "bg-[#171212] text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-center text-2xl sm:text-4xl font-bold mb-10">
        What I Have Done So Far
        <br />
        <span className="text-info">Educational Qualification</span>
      </h1>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute hidden 2xl:block left-1/2 transform -translate-x-1/2 h-full border-l-4 border-info"></div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center md:items-start`}
            >
              {/* Content */}
              <div
                className={`w-full max-w-[90%] sm:max-w-md p-4 sm:p-6 shadow-lg rounded-lg ${
                  dark ? "bg-[#2A2A2A]" : "bg-white"
                } ${
                  index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                } text-center md:text-left`}
              >
                <h3 className="text-lg sm:text-2xl font-semibold">
                  {experience.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  {experience.company}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  {experience.duration}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Result: {experience.result} | Duration: {experience.time}
                </p>
                <ul className="list-disc ml-4 mt-4 space-y-2 text-xs sm:text-sm">
                  {experience.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EaducationalC;
