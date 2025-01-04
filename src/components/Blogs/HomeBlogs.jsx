import React, { useContext, useState } from "react";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import Loading from "../Loading";
import { AuthContext } from "../../provider/AuthProvider";

const HomeBlogs = () => {
  const { dark } = useContext(AuthContext); // Use the theme context

  // const [missions, setMissions] = useState([]);

  const {
    isPending,
    data: Homeblogs = [],
    refetch,
  } = useQuery({
    queryKey: ["Homeblogs"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/Homeblogs");
      const data = await response.json();
      return data;
    },
  });
  if (isPending) {
    return <Loading></Loading>;
  }
  console.log(Homeblogs);
  return (
    <>
      <div className={`py-16 }`}>
        <Fade delay={1e3} cascade damping={1e-1}>
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-orange-500">
              My Letests Blogs
            </h2>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:px-20">
          {Homeblogs?.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>

        {/* <div className="flex justify-end items-center">
          <Link
            to="/blogs"
            className="flex justify-center items-center bg-sky-600 text-white font-bold py-2 px-4 rounded-full hover:bg-sky-400 transition-all duration-300"
          >
            View All Blogs
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default HomeBlogs;
