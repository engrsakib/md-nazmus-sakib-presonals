import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddSkills = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    percentage: "", // Added percentage field
    icon: null,
    photoURL: "", // Added photoURL field
  });
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "image/png") {
        alert("Only PNG images are allowed.");
        return;
      }
      if (file.size > 500 * 1024) {
        alert("Image size must not exceed 500 KB.");
        return;
      }
      setFormData((prevData) => ({
        ...prevData,
        icon: file,
        photoURL: "", // Clear photoURL if file is chosen
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.icon && !formData.photoURL) {
      alert("Please upload an icon or provide a photo URL.");
      return;
    }

    let iconUrl = formData.photoURL;

    try {
      if (formData.icon) {
        // Upload image to ImgBB
        const imgFormData = new FormData();
        imgFormData.append("image", formData.icon);
        const imgbbResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`,
          imgFormData
        );

        iconUrl = imgbbResponse.data.data.url;
      }

      // Send data to the database
      const payload = {
        title: formData.title,
        description: formData.description,
        link: formData.link,
        percentage: formData.percentage, // Include percentage field
        iconUrl,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "https://protfolio-server-navy.vercel.app/skils", // Replace with the correct API base URL
        payload,
        config
      );

      if (response.status === 201 || response.status === 200) {
        alert("Data successfully submitted!");

        // Reset the form
        setFormData({
          title: "",
          description: "",
          link: "",
          percentage: "",
          icon: null,
          photoURL: "",
        });
        setImagePreview(null);
        navigate("/");
      } else {
        console.error("Error response:", response);
        alert("Failed to submit data. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image or sending data:", error);
      alert("Failed to submit data. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Add Skill</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter title"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="textarea textarea-bordered w-full"
            placeholder="Enter description"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Link</label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter link"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Percentage</label>
          <input
            type="number"
            name="percentage"
            value={formData.percentage}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter percentage (0-100)"
            min="0"
            max="100"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            Icon (PNG, max 500KB)
          </label>
          <input
            type="file"
            accept=".png"
            onChange={handleFileChange}
            className="file-input file-input-bordered w-full"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2 w-32 h-32 object-contain rounded-md"
            />
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Photo URL</label>
          <input
            type="url"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter photo URL"
            disabled={!!formData.icon} // Disable if file is chosen
          />
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="btn btn-info w-full"
        >
          Choose Photo
        </button>

        <button type="submit" className="btn btn-info w-full">
          Submit
        </button>
      </form>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Choose Photo</h3>
            <div className="space-y-4">
              <input
                type="file"
                accept=".png"
                onChange={(e) => {
                  handleFileChange(e);
                  setIsModalOpen(false);
                }}
                className="file-input file-input-bordered w-full"
              />
              <input
                type="url"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                onChange={(e) => {
                  handleInputChange(e);
                  setIsModalOpen(false);
                }}
              />
            </div>
            <div className="modal-action">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Helmet>
        <title>Add Skills</title>
      </Helmet>
    </div>
  );
};

export default AddSkills;
