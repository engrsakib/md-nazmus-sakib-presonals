import axios from 'axios';
import React, { useState } from 'react';

const AddSkils = () => {
    
    const [formData, setFormData] = useState({
      title: "",
      description: "",
      link: "",
      icon: null,
    });

    const [imagePreview, setImagePreview] = useState(null);

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
        }));
        setImagePreview(URL.createObjectURL(file));
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!formData.icon) {
        alert("Please upload an icon.");
        return;
      }

      try {
        // Upload image to ImgBB
        const imgFormData = new FormData();
        imgFormData.append("image", formData.icon);
        const imgbbResponse = await axios.post(
          "https://api.imgbb.com/1/upload?key=ff3d9127cce3eed275891ef32d478736",
          imgFormData
        );

        const iconUrl = imgbbResponse.data.data.url;

        // Send data to the database
        const payload = {
          title: formData.title,
          description: formData.description,
          link: formData.link,
          iconUrl,
        };

        await axios.post("http://localhost:5000/skils", payload);

        

        // Reset the form
        setFormData({
          title: "",
          description: "",
          link: "",
          icon: null,
        });
        setImagePreview(null);
      } catch (error) {
        console.error("Error uploading image or sending data:", error);
        alert("Failed to submit data. Please try again.");
      }
    };
    return (
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Add Item</h2>
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
            <label className="block font-medium mb-1">
              Icon (PNG, max 500KB)
            </label>
            <input
              type="file"
              accept=".png"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full"
              required
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 w-32 h-32 object-contain rounded-md"
              />
            )}
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    );
};

export default AddSkils;