import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loading from "../Loading";
import { AuthContext } from "../../provider/AuthProvider";
import Project from "./Project";
import { Helmet } from "react-helmet";

const Projects = () => {
  const { dark } = useContext(AuthContext);

  const {
    isPending,
    data: projects,
    refetch,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch(
        "https://protfolio-server-navy.vercel.app/projects"
      );
      const data = await response.json();
      return data;
    },
  });

  if (isPending) {
    return <Loading />;
  }

  refetch();

  return (
    <div
      className={`p-4 ${
        dark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects?.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project</title>
      </Helmet>
    </div>
  );
};

export default Projects;
