import React, { useState } from "react";
import { IoLogoYoutube } from "react-icons/io5";
import ReactPlayer from "react-player";

const BlogCard = ({ blog }) => {
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
      className={`card w-full bg-base-100 shadow-xl mx-auto my-4 rounded-lg overflow-hidden relative border-[3px] border-transparent transition-transform duration-300 hover:border-[#00B6FF]`}
    >
      {/* Conditional Rendering: Show Image or Video */}
      {category === "article" && (
        <figure>
          <img
            src={photoURL}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300"
          />
        </figure>
      )}
      {category === "video" && (
        <figure className="relative">
          <img
            src={photoURL}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300"
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
        <h2 className="card-title text-xl font-bold text-gray-800">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {/* Show Description Button */}
          <button
            onClick={() => setShowFullDescription(true)}
            className="btn btn-outline btn-primary btn-sm ml-2"
          >
            Show Description
          </button>
        </p>

        {/* See More */}

        {/* Type, Platform and Published Date */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm">
            <span className="font-semibold text-gray-700">Type:</span> {type}
          </p>
          <p className="text-sm">
            <span className="font-semibold text-gray-700">Platform:</span>{" "}
            {platform}
          </p>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          <span className="font-semibold text-gray-700">Published Date:</span>{" "}
          {date}
        </p>

        {/* Actions */}
        <div className="card-actions justify-end mt-4">
          <a
            href={viewLinks}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-info btn-sm"
          >
            See Orginal
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
            className="modal-box relative bg-white rounded-lg shadow-lg overflow-hidden border-8 border-[#00B6FF]"
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
          onClick={() => setModalOpen(false)}
        >
          <div
            className="modal-box relative bg-white rounded-lg shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullDescription(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            <p className="text-sm text-gray-600">{shortDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
