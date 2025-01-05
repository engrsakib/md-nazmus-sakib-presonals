import React, { useContext, useState } from "react";
import { IoLogoYoutube } from "react-icons/io5";
import { FaCalendarAlt, FaDesktop, FaTags, FaArrowRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import { AuthContext } from "../../provider/AuthProvider";

const BlogCard = ({ blog }) => {
  const { dark } = useContext(AuthContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const {
    title,
    category,
    type,
    platform,
    shortDescription,
    photoURL,
    viewLinks,
    date,
    fullDescription,
  } = blog;

  return (
    <div
      className={`card w-full mx-auto my-4 rounded-lg overflow-hidden relative border-[3px] ${
        dark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-xl transition-transform duration-300 hover:border-[#00B6FF] hover:shadow-lg`}
      style={{
        boxShadow: dark
          ? "5px 5px 15px rgba(0, 0, 0, 0.3)"
          : "5px 5px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Conditional Rendering: Show Image or Video */}
      {category === "article" && (
        <figure>
          <img
            src={photoURL}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>
      )}
      {category === "video" && (
        <figure className="relative">
          <img
            src={photoURL}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <button
            onClick={() => setModalOpen(true)}
            className="absolute inset-0 flex items-center justify-center text-[#FF0000] text-5xl hover:scale-110 transition-transform"
          >
            <IoLogoYoutube />
          </button>
        </figure>
      )}

      {/* Card Content */}
      <div className="card-body p-6 space-y-4">
        {/* Title */}
        <h2 className="card-title text-xl font-bold">{title}</h2>

        {/* Type and Platform */}
        <div className="flex justify-between items-center">
          <p className="text-sm flex items-center gap-2">
            <FaTags className={dark ? "text-gray-400" : "text-gray-500"} />{" "}
            <span>{type}</span>
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaDesktop className={dark ? "text-gray-400" : "text-gray-500"} />{" "}
            <span>{platform}</span>
          </p>
        </div>

        {/* Published Date */}
        <p className="text-xs flex items-center gap-2">
          <FaCalendarAlt className={dark ? "text-gray-400" : "text-gray-500"} />{" "}
          {date}
        </p>

        {/* Short Description */}
        <p className="text-sm leading-relaxed">
          {shortDescription.length > 100
            ? `${shortDescription.substring(0, 100)}...`
            : shortDescription}
        </p>

        {/* Actions */}
        <div className="card-actions justify-between mt-4">
          <button
            onClick={() => setShowFullDescription(true)}
            className={`btn btn-outline btn-sm flex items-center gap-2 ${
              dark ? "btn-info" : "btn-primary"
            }`}
          >
            <span>Show Details</span> <FaArrowRight />
          </button>
          <a
            href={viewLinks}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-outline btn-sm flex items-center gap-2 ${
              dark ? "btn-primary" : "btn-info"
            }`}
          >
            <span>View Original</span> <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Modal for Video */}
      {isModalOpen && category === "video" && (
        <div
          className="modal modal-open flex items-center justify-center"
          onClick={() => setModalOpen(false)}
        >
          <div
            className={`modal-box relative rounded-lg shadow-lg overflow-hidden border-8 ${
              dark ? "bg-gray-700 text-white" : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            <ReactPlayer
              url={viewLinks}
              controls={true}
              width="100%"
              height="360px"
              className="rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Modal for Full Description */}
      {showFullDescription && (
        <div
          className="modal modal-open flex items-center justify-center"
          onClick={() => setShowFullDescription(false)}
        >
          <div
            className={`modal-box relative rounded-lg shadow-lg p-6 ${
              dark ? "bg-gray-700 text-white" : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullDescription(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            <p className="text-sm">{shortDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
