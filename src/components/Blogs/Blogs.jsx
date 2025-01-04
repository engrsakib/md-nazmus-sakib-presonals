import { use, useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Blogs = () => {
    const {dark} = useContext(AuthContext);
    const[tabs, setTabs] = useState("all");
    const handleButton = (ctg) => {
        setTabs(ctg);
    }
  return (
    <div className="my-24 w-full bg-white p-8 rounded-lg shadow-lg">
      <div
        role="tablist"
        className="tabs tabs-lifted max-sm:flex max-sm:flex-col justify-center items-center gap-6"
      >
        <button
          role="tab"
          className={`tab uppercase font-black text-info ${
            tabs == "all" && "tab-active"
          }`}
          onClick={() => handleButton("all")}
        >
          All
        </button>
        <button
          role="tab"
          className={`tab uppercase font-black text-info ${
            tabs == "Developments" && "tab-active"
          }`}
          onClick={() => handleButton("Developments")}
        >
          Developments
        </button>
        <button
          role="tab"
          className={`tab uppercase font-black text-info ${
            tabs == "Problem solving" && "tab-active"
          }`}
          onClick={() => handleButton("Problem solving")}
        >
          Problem solving
        </button>
        <button
          role="tab"
          className={`tab uppercase font-black text-info ${
            tabs == "News paper" && "tab-active"
          }`}
          onClick={() => handleButton("News paper")}
        >
          News paper
        </button>
      </div>
    </div>
  );
};

export default Blogs;
