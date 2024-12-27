import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Fade } from "react-awesome-reveal";

const Mission = () => {
  const { dark } = useContext(AuthContext); // Use the theme context

  const [missions, setMissions] = useState([]);

  

  return (
    <>
      <div className={`py-16 }`}>
        <Fade delay={1e3} cascade damping={1e-1}>
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-orange-500">
              My preferable technology
            </h2>

            <p
              className={`mt-4 text-lg ${
                dark ? "text-gray-300" : "text-gray-700"
              } max-w-2xl mx-auto`}
            >
              The technology I prefer is one that is innovative, efficient, and
              has the potential to solve real-world problems. Whether it's AI
              (Artificial Intelligence), blockchain, or cloud computing, I value
              technologies that enhance productivity, connectivity, and offer
              new opportunities for growth. My preferred technology is one that
              not only meets current needs but also anticipates future
              challenges, helping create a smarter, more sustainable world.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-6 lg:px-20">
          {missions?.map((mission) => (
            <div
              key={mission.id}
              className="group relative bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 border border-gray-200 dark:border-gray-600"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl shadow-lg group-hover:bg-orange-600 transition-colors duration-300">
                {mission.icon}
              </div>
              <div className="p-6 pt-14">
                <h3 className="text-xl font-bold text-center text-orange-500 dark:text-orange-400">
                  {mission.title}
                </h3>
                <p
                  className={`mt-4 text-center ${
                    dark ? "text-gray-300" : "text-gray-300"
                  }`}
                >
                  {mission.description}
                </p>
                <div className="mt-6 text-center">
                  <button className="btn btn-sm btn-outline btn-primary group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mission;
