import React, { useContext } from "react";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ContactNumber from "../components/ContactNumber";
import { Link } from "react-router-dom";
import SkilsBar from "../components/skilsBar/SkilsBar";

const About = () => {
  const { dark } = useContext(AuthContext);
  return (
    <div
      className={`min-h-screen ${
        dark ? "bg-[#171212] text-white" : "bg-white text-black"
      }`}
    >
      <header
        className={`p-6 text-center ${
          dark ? "bg-base-300 text-white" : "bg-base-content text-white"
        }`}
      >
        <h1 className="text-3xl font-bold">Md. Nazmus Sakib</h1>
        <p>Programmer || MERN Stack Developer || Problem Solver</p>
        <div className="mt-3 flex justify-center gap-4">
          <button className="btn btn-info btn-outline btn-sm">Resume</button>
          <button className="btn btn-info btn-outline btn-sm">CV</button>
        </div>
      </header>

      <main className="p-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Profile Image */}
          <div className="w-full lg:w-1/4">
            <img
              src="https://i.ibb.co.com/jztNZC4/Md-Nazmus-Sakib-pasport-size.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* About Section */}
          <div className="w-full lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Greetings!</h2>
            <p className="mb-4">
              I am Md. Nazmus Sakib, and engineering student at{" "}
              <Link
                to={`https://diu.ac/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00B5FF]"
              >
                Dhaka International University (DIU)
              </Link>{" "}
              with expertise in programming and problem-solving. Proficient in
              C, C++, Python, Data Structures, Algorithms, OOP, SQL, HTML, CSS,
              Tailwind, JavaScript, React, Node.js, Next.js, and MongoDB.
              Additionally, I am skilled in TypeScript, Mongoose, and RDBMS. .
            </p>
            <p className="mb-4">
              My areas of expertise include{" "}
              <span className="font-semibold">ReactJS, NodeJS,</span> and{" "}
              <span className="font-semibold">MongoDB</span>. In my free time, I
              enjoy solving problems on platforms like{" "}
              <Link
                to={`https://codeforces.com/profile/engrsakib`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00B5FF]"
              >
                CodeForce
              </Link>{" "}
              <Link
                to={`https://leetcode.com/u/engrsakib/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00B5FF]"
              >
                Leetcode
              </Link>{" "}
              <Link
                to={`https://www.codechef.com/users/engrsakib`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00B5FF]"
              >
                Codechef
              </Link>{" "}
              <Link
                to={`https://school.outsbook.com/rank/statistics/3418`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00B5FF]"
              >
                School Outsbook
              </Link>{" "}
            </p>

            {/* Skills Section */}
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            <p className="mb-4">
              With a focus on continuous learning and innovation, I stay
              up-to-date with the latest technologies to deliver top-quality
              solutions across my projects.
            </p>
            <SkilsBar></SkilsBar>
          </div>
        </div>

        {/* Links Section */}
      </main>
    </div>
  );
};

export default About;
