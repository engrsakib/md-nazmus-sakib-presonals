import React, { useEffect, useState } from "react";


const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(birth.getFullYear(), birth.getMonth() + 1, 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
};

const Presonal = () => {
    const [age, setAge] = useState("");

    useEffect(() => {
      const { years, months, days } = calculateAge("2002-12-23");
      setAge(`${years} years, ${months} months, ${days} days`);
    }, []);

  const working = [
    {
      interst: (
        <>
          <span className="font-bold">Father Name:</span> Md. Siddiqullah
        </>
      ),
    },
    {
      interst: (
        <>
          <span className="font-bold">Age:</span> {age}
        </>
      ),
    },
    {
      interst: (
        <>
          <span className="font-bold">Gender:</span> Male
        </>
      ),
    },
    {
      interst: (
        <>
          <span className="font-bold">Religion:</span> Islam
        </>
      ),
    },
    {
      interst: (
        <>
          <span className="font-bold">Nationality:</span> Bangladeshi
        </>
      ),
    },
    {
      interst: (
        <>
          <span className="font-bold">Blood Grupe:</span> B+
        </>
      ),
    },
    {
      interst: (
        <>
          <span className="font-bold">Height:</span> 1.75m
        </>
      ),
    },
    {
      interst: (
        <>
          <span className="font-bold">Weight:</span> 65kg
        </>
      ),
    },
    {
      interst: (
        <>
          <span className="font-bold">Marital Status:</span> Unmarried
        </>
      ),
    },
    {
      interst: (
        <>
          <span className="font-bold">Permanent Address:</span> Vill: Choto
          Joka, Post: Goyal-Bathan, P.S: Magura, Dist: Magura, Post: 7600
        </>
      ),
    },
    {
      interst: (
        <>
          <span className="font-bold">Current Location:</span> Dhaka, Bangladesh
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col items-start justify-start">
      {working.map((work, index) => (
        <div key={index} className="flex items-center justify-start gap-2">
          <p className="text-left">{work.interst}</p>
        </div>
      ))}
    </div>
  );
};

export default Presonal;
