import React, { useContext } from "react";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ContactNumber from "../components/ContactNumber";

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
              I am Indrojit Mondal, a passionate software engineer dedicated to
              building innovative software. I hold a Bachelor's degree in{" "}
              <span className="text-blue-500 underline">
                Computer Science and Engineering (CSE)
              </span>{" "}
              from the{" "}
              <span className="text-blue-500 underline">
                University of Barishal
              </span>
              .
            </p>
            <p className="mb-4">
              My areas of expertise include{" "}
              <span className="font-semibold">ReactJS, NodeJS,</span> and{" "}
              <span className="font-semibold">MongoDB</span>. In my free time, I
              enjoy solving problems on platforms like{" "}
              <span className="text-blue-500 underline">LeetCode</span> and{" "}
              <span className="text-blue-500 underline">Codeforces</span>.
            </p>

            {/* Skills Section */}
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            <p className="mb-4">
              With a focus on continuous learning and innovation, I stay
              up-to-date with the latest technologies to deliver top-quality
              solutions across my projects.
            </p>
            <div className="space-y-2">
              <div>
                <p>HTML/CSS</p>
                <progress
                  className="progress progress-info w-full"
                  value="90"
                  max="100"
                ></progress>
              </div>
              <div>
                <p>JavaScript</p>
                <progress
                  className="progress progress-info w-full"
                  value="80"
                  max="100"
                ></progress>
              </div>
              <div>
                <p>ReactJS</p>
                <progress
                  className="progress progress-info w-full"
                  value="85"
                  max="100"
                ></progress>
              </div>
              <div>
                <p>NodeJS</p>
                <progress
                  className="progress progress-info w-full"
                  value="75"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        
      </main>
    </div>
  );
};

export default About;
