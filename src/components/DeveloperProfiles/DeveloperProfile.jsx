import React from "react";

const DeveloperProfile = () => {
  const profile = {
    name: "Nazmul Hossain",
    title: "Full-Stack Developer | Cloud Enthusiast | Problem Solver",
    skills: [
      "React",
      "NextJS",
      "Redux",
      "Express",
      "MySQL",
      "MongoDB",
      "Docker",
      "AWS",
      "TypeScript",
      "GraphQL",
      "Git",
      "Linux",
      "Discord Development",
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 4,
    hireable: function () {
      return (
        this.hardWorker &&
        this.problemSolver &&
        this.skills.length >= 5 &&
        this.yearsOfExperience >= 3
      );
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 text-gray-200 rounded-lg shadow-lg max-w-3xl w-full">
        {/* Header Section */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-cyan-400">{profile.name}</h1>
          <p className="text-lg text-gray-400 mt-2">{profile.title}</p>
        </div>

        {/* Skills Section */}
        <div className="border-t border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-cyan-400">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 text-sm px-3 py-1 rounded-full text-center"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="border-t border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-cyan-400">Details</h2>
          <div className="text-sm mt-2">
            <p>Hard Worker: {profile.hardWorker ? "Yes" : "No"}</p>
            <p>Quick Learner: {profile.quickLearner ? "Yes" : "No"}</p>
            <p>Problem Solver: {profile.problemSolver ? "Yes" : "No"}</p>
            <p>Years of Experience: {profile.yearsOfExperience}</p>
          </div>
        </div>

        {/* Hireable Section */}
        <div className="border-t border-gray-700 p-6 text-center">
          <p
            className={`text-lg font-bold ${
              profile.hireable() ? "text-green-400" : "text-red-400"
            }`}
          >
            {profile.hireable() ? "Hireable" : "Not Hireable"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
