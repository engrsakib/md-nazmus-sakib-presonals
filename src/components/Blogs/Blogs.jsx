import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Loading from "../Loading";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const { dark } = useContext(AuthContext);
  const [tabs, setTabs] = useState("all");
  const [blogs, setBlogs] = useState([]);

  const handleButton = (ctg) => {
    setTabs(ctg);
  };

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["blogs", tabs],
    queryFn: async () => {
      const response = await fetch(
        `https://protfolio-server-navy.vercel.app/blogs?type=${tabs}`
      );
      const data = await response.json();
      return data;
    },
    staleTime: 5000, // ক্যাশ ধরে রাখার সময়
  });

  useEffect(() => {
    if (data) {
      setBlogs(data);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [tabs, refetch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="my-24 w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">
            My <span className="text-sky-500">Blogs</span>
          </h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto mb-8"></div>
        </div>
        <div
          role="tablist"
          className="tabs tabs-lifted max-sm:flex max-sm:flex-col justify-center items-center gap-6"
        >
          <button
            role="tab"
            className={`tab uppercase font-black text-info ${
              tabs === "all" && "tab-active"
            }`}
            onClick={() => handleButton("all")}
          >
            All
          </button>
          <button
            role="tab"
            className={`tab uppercase font-black text-info ${
              tabs === "Developments" && "tab-active"
            }`}
            onClick={() => handleButton("Developments")}
          >
            Developments
          </button>
          <button
            role="tab"
            className={`tab uppercase font-black text-info ${
              tabs === "Problem solving" && "tab-active"
            }`}
            onClick={() => handleButton("Problem solving")}
          >
            Problem solving
          </button>
          <button
            role="tab"
            className={`tab uppercase font-black text-info ${
              tabs === "News paper" && "tab-active"
            }`}
            onClick={() => handleButton("News paper")}
          >
            News paper
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      <Helmet>
        <title>Blogs</title>
      </Helmet>
    </>
  );
};

export default Blogs;
