import React, { useContext, useState } from "react";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Project from "../Projects/Project";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../Loading";

const HomeProjects = () => {
  const { dark } = useContext(AuthContext); // Use the theme context

  // const [missions, setMissions] = useState([]);

  const {
    isPending,
    data: Homeprojects = [],
    refetch,
  } = useQuery({
    queryKey: ["Homeprojects"],
    queryFn: async () => {
      const response = await fetch(
        "https://protfolio-server-navy.vercel.app/Homeprojects"
      );
      const data = await response.json();
      return data;
    },
  });
  if (isPending) {
    return <Loading></Loading>;
  }
  refetch();
  return (
    <>
      <div className={`py-16 }`}>
        <Fade delay={1e3} cascade damping={1e-1}>
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-orange-500">
              My Letests Projects
            </h2>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:px-20">
          {Homeprojects?.map((mission) => (
            <Project key={mission._id} project={mission} />
          ))}
        </div>

        {/* <div className="flex justify-end items-center">
          <Link
            to="/projects"
            className="flex justify-center items-center bg-sky-600 text-white font-bold py-2 px-4 rounded-full hover:bg-sky-400 transition-all duration-300"
          >
            View All Projects
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default HomeProjects;
