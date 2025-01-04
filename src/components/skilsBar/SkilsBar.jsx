import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Loading";

const SkilsBar = () => {
  const { isLoading, data: missions } = useQuery({
    queryKey: ["missions"],
    queryFn: async () => {
      const response = await fetch(
        "https://protfolio-server-navy.vercel.app/skils"
      );
      const data = await response.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="space-y-4">
      {missions?.map((mission) => (
        <div key={mission._id} className="space-y-2">
          <p>{mission.title}</p>
          <progress
            className="progress progress-info w-full"
            value={mission.percentage}
            max="100"
          ></progress>
        </div>
      ))}
    </div>
  );
};

export default SkilsBar;
