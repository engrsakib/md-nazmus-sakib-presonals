import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [clientsSide, setClientsSide] = useState("");
  const [serverSide, setServerSide] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [technologies, setTechnologies] = useState([]);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectData = {
      title,
      description,
      photoURL,
      clientsSide,
      serverSide,
      liveLink,
      youtubeLink,
      technologies,
    };

    try {
      const response = await axios.post(
        "https://protfolio-server-navy.vercel.app/projects",
        projectData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        // Clear the form fields if the response is successful
        navigate("/");
        setTitle("");
        setDescription("");
        setPhotoURL("");
        setClientsSide("");
        setServerSide("");
        setLiveLink("");
        setYoutubeLink("");
        setTechnologies([]);

        console.log(response.data); // handle response
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleTechnologyChange = (e) => {
    setTechnologies(e.target.value.split(","));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-6">Add a New Project</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-lg space-y-4"
      >
        <div className="form-control">
          <label htmlFor="title" className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="description" className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="photoURL" className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            id="photoURL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label htmlFor="clientsSide" className="label">
            <span className="label-text">Client-side Technology</span>
          </label>
          <input
            type="text"
            id="clientsSide"
            value={clientsSide}
            onChange={(e) => setClientsSide(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="serverSide" className="label">
            <span className="label-text">Server-side Technology</span>
          </label>
          <input
            type="text"
            id="serverSide"
            value={serverSide}
            onChange={(e) => setServerSide(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="liveLink" className="label">
            <span className="label-text">Live Link</span>
          </label>
          <input
            type="text"
            id="liveLink"
            value={liveLink}
            onChange={(e) => setLiveLink(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label htmlFor="youtubeLink" className="label">
            <span className="label-text">YouTube Link (Optional)</span>
          </label>
          <input
            type="text"
            id="youtubeLink"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label htmlFor="technologies" className="label">
            <span className="label-text">Technologies (Comma separated)</span>
          </label>
          <input
            type="text"
            id="technologies"
            onChange={handleTechnologyChange}
            className="input input-bordered w-full"
            placeholder="e.g., React, Node.js, Express"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProject;
