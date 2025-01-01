import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {
  FaCamera,
  FaCode,
  FaDesktop,
  FaLightbulb,
  FaMobile,
  FaPenFancy,
} from "react-icons/fa";
import { FaCodeMerge } from "react-icons/fa6";

const Services = () => {
  const { dark } = useContext(AuthContext);

  const services = [
    {
      icon: <FaCode className="text-4xl text-yellow-400" />,
      title: "WEB DESIGN",
      description:
        "Web design involves creating the visual layout and aesthetics of a website, focusing on user experience, graphics, and overall look. Front-end development, on the other hand, involves implementing the design into a functional website using coding languages like HTML, CSS, and JavaScript.",
    },
    {
      icon: <FaCodeMerge className="text-4xl text-yellow-400" />,
      title: "software engineer",
      description:
        "Software engineers apply engineering principles and knowledge of programming languages to build software solutions for end users. Software engineers design and develop computer games, business applications, operating systems, network control systems, and middleware—to name just a few of the many career paths available.",
    },
    {
      icon: <FaDesktop className="text-4xl text-yellow-400" />,
      title: "DESKTOP SOFTWARE",
      description:
        "Desktop software is a type of computer program that is designed to run directly on a user's desktop computer, without the need for a web browser. Examples of desktop software include word processors, spreadsheets, and media players.",
    },
    {
      icon: <FaMobile className="text-4xl text-yellow-400" />,
      title: "APP DEVELOPMENT",
      description:
        "App development is the process of creating software applications that run on a mobile device, such as a smartphone or tablet. Mobile app development involves designing, building, and testing apps for a variety of operating systems, including iOS and Android.",
    },
    {
      icon: <FaPenFancy className="text-4xl text-yellow-400" />,
      title: "GRAPHICS DESIGN",
      description:
        "Graphic design is the art and practice of planning and projecting ideas and experiences with visual and textual content. The form it takes can be physical or virtual and can include images, words, or graphics.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-400" />,
      title: "GUIDELINES",
      description:
        "Guidelines are general rules, recommendations, or principles that provide direction on how to achieve a specific goal. In the context of web design, guidelines help designers create websites that are visually appealing, user-friendly, and accessible to all users.",
    },
  ];

  return (
    <section
      className={`py-10 ${
        dark ? "bg-[#171212] text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          GET <span className="text-sky-500">SERVICE</span>
        </h2>
        <div className="h-1 w-20 bg-sky-500 mx-auto mb-8"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 shadow-md rounded-md transition-all duration-300 dark:bg-[#2b2b2b] hover:bg-sky-500 hover:shadow-xl text-white"
          >
            <div className="flex justify-center mb-4">
              <div className="transition-transform duration-300 transform hover:scale-105">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-center uppercase mb-2">
              {service.title}
            </h3>
            <p className="text-center text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;