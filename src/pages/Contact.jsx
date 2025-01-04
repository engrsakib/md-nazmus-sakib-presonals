import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import ContactNumber from "../components/ContactNumber";

import animation from "/contact.gif";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Contact = () => {
  const { dark } = useContext(AuthContext);
  const { pathname } = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    status: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        status: true,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // Send data to the backend
      const response = await axios.post(
        "https://protfolio-server-navy.vercel.app/contact",
        payload,
        config
      );

      if (response.status === 200) {
        Swal.fire("Your massage recive successfully", "", "success");
        // Reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire(
          "Failed to send your message. Please try again.",
          "",
          "error"
        );
      }
    } catch (error) {
      // console.error("Error sending data to the backend:", error);

      Swal.fire("Failed to send your message. Please try again.", "", "error");
    }
  };

  return (
    <div
      className={`min-h-screen lg:p-8 ${
        dark ? "bg-[#171212] text-gray-300" : "bg-white text-gray-800"
      }`}
    >
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center justify-center ${
          pathname !== "/contact" && "hidden"
        }`}
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={animation}
            alt="Contact"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      {/* contact Section */}
      <section className="container mt-6 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="mt-6 w-full md:w-[50%]">
          <h2 className="text-3xl font-bold mb-4">MY CONTACT</h2>
          <p className="mb-6">
            As a dedicated web developer and problem solver, I offer a range of
            services tailored to meet your digital needs. From creating
            responsive and visually appealing websites using modern front-end
            technologies to solving complex programming challenges, I am
            committed to delivering high-quality solutions.
          </p>

          <ContactNumber></ContactNumber>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-center mb-6">CONTACT ME</h2>
          <p className="text-center mb-6">Let's Start A New Project</p>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white dark:bg-[#171212] p-6 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Your Phone"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Your Subject"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full"
              placeholder="Start Writing Message here"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="btn btn-info w-full">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
    </div>
  );
};

export default Contact;
