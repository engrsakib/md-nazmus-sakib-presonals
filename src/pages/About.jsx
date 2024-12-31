import React, { useContext } from "react";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ContactNumber from "../components/ContactNumber";
import { Link } from "react-router-dom";
import SkilsBar from "../components/skilsBar/SkilsBar";
import EaducationalC from "../components/Eaducation/EaducationalC";
import profile from "/sakib.png";
import WorkingInterest from "../components/working interest/WorkingInterest";
import Extra from "../components/extra caricluam/Extra";
import Presonal from "../components/personalInfromation/Presonal";

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

      <main className="lg:p-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <section className="w-full lg:w-1/4">
            {/* Profile Image */}
            <div className="w-full">
              <img src={profile} className="rounded-lg shadow-lg" />
            </div>
            <div>
              <p className="text-justify mt-4">
                As a Computer Science and Engineering graduate and a passionate
                programmer, I stay up-to-date with emerging technologies and
                embrace challenges to adapt and solve real-world problems
                effectively. I specialize in web application development using
                the MERN stack, combining technical expertise with a passion for
                innovation. Becoming an engineer has been my dream since
                childhood, and I am proud to be on this journey, continually
                striving to turn my aspirations into reality.
              </p>
            </div>
            {/* workingInterested */}
            <div className="mt-4">
              <p className="uppercase font-black"> Working Interested</p>
              <WorkingInterest></WorkingInterest>
            </div>
            {/* Other skils */}
            <div className="mt-4">
              <p className="uppercase font-black">extracurricular activities</p>
              <Extra></Extra>
            </div>
            {/* Presonal Information */}
            <div className="mt-4">
              <p className="uppercase font-black">preSonal Infromation</p>
              <Presonal></Presonal>
            </div>
          </section>

          {/* About Section */}
          <div className="w-full lg:w-3/4 lg:p-6 rounded-lg lg:shadow-lg">
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
            {/* eaducation */}
            <EaducationalC></EaducationalC>
          </div>
        </div>

        {/* Links Section */}
      </main>
    </div>
  );
};

export default About;
