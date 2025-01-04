import React, { useState, useEffect } from "react";

const testimonialsData = [
  {
    id: 1,
    text: "Md. Nazmus Sakib completely revamped our user interface, resulting in a 40% increase in engagement. His expertise in modern frameworks like React and Tailwind CSS is evident in his work.",
    name: "James Carter",
    name: "Md. Hedayetullah Al Hadi",
    role: "Assistant Professor",
    institute: "Shahjalal University of Science and Technology",
    image: "https://i.imgur.com/ky9xaZp.jpeg",
  },
  {
    id: 2,
    text: "Working with Md. Nazmus Sakib was a fantastic experience. He delivered a pixel-perfect, responsive website that exceeded my expectations. His attention to detail and creative problem-solving are top-notch.",
    role: "Product Manager",
    institute: "Shahjalal University of Science and Technology",
    image: "https://randomuser.me/api/portraits/men/74.jpg",
  },
  {
    id: 3,
    text: "Sakib’s ability to turn complex designs into fully functional front-end systems is remarkable. He is an exceptional team player, always willing to go the extra mile to meet deadlines.",
    name: "Emily Chen",
    role: "UI/UX Designer",
    institute: "Shahjalal University of Science and Technology",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    id: 4,
    text: "Nazmus has a unique ability to combine aesthetics and functionality seamlessly. The web app he developed for us was fast, responsive, and visually stunning. Highly recommended!",
    name: "Daniel Kim",
    role: "Tech Entrepreneur",
    institute: "Shahjalal University of Science and Technology",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 10000); // Change every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const { text, name, role, image, institute } = testimonialsData[currentTestimonial];

  return (
    <div className=" py-12 px-4 sm:px-8 lg:px-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 uppercase">
          My <span className="text-sky-500 uppercase">recommendation</span>
        </h2>
        <div className="h-1 w-20 bg-sky-500 mx-auto mb-8"></div>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center gap-6">
        <img
          className="w-24 h-24 rounded-full border-2 border-gray-300"
          src={image}
          alt={`${name}`}
        />
        <div>
          <p className="text-gray-700 text-lg mb-4">"{text}"</p>
          <div>
            <h4 className="text-lg font-bold">{name}</h4>
            <p className="text-gray-500 text-sm">{role}</p>
            <p className="text-gray-500 text-sm">{institute}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
