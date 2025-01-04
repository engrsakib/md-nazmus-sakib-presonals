import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlogs = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "article",
    type: "",
    platform: "",
    shortDescription: "",
    photoURL: "",
    viewLinks: "",
    date: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/blogs",
        formData
      );
      alert("Blog added successfully!");
      navigate("/blogs");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to add blog. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Add a Blog</h1>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Category</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                value="article"
                checked={formData.category === "article"}
                onChange={handleChange}
                className="radio radio-primary"
              />
              <span className="ml-2">Article</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                value="video"
                checked={formData.category === "video"}
                onChange={handleChange}
                className="radio radio-primary"
              />
              <span className="ml-2">Video</span>
            </label>
          </div>
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="News paper">News paper</option>
            <option value="Developments">Developments</option>
            <option value="Problem solving">Problem solving</option>
          </select>
        </div>

        {/* Platform */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Platform</label>
          <input
            type="text"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            placeholder="Enter platform name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Short Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Short Description
          </label>
          <textarea
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            placeholder="Enter a short description"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* Photo URL */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Photo URL</label>
          <input
            type="url"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            placeholder="Enter photo URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* View Links */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">View Links</label>
          <input
            type="url"
            name="viewLinks"
            value={formData.viewLinks}
            onChange={handleChange}
            placeholder="Enter view link URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Date of Published
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="btn btn-primary w-full" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
