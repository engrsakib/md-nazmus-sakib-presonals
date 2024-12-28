import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import axios from "axios";

const WatchMassage = () => {
  const { dark } = useContext(AuthContext);

  const {
    isPending,
    data: watchMessages,
    refetch,
  } = useQuery({
    queryKey: ["watch-massage"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/contact");
      const data = await response.json();
      return data;
    },
  });

  if (isPending) {
    return <Loading />;
  }

  const handleChangeStatus = async (id, currentStatus) => {
    try {
      await axios.patch(`http://localhost:5000/contact/${id}`, {
        status: !currentStatus,
      });
      alert("Status updated successfully!");
      refetch();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (confirm) {
      try {
        await axios.delete(`http://localhost:5000/contact/${id}`);
        alert("Message deleted successfully!");
        refetch();
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  const handleCopyToClipboard = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    });
  };

  return (
    <div
      className={`min-h-screen p-6 ${
        dark ? "bg-[#171212] text-orange-500" : "bg-white text-orange-500"
      }`}
    >
      <h1 className="text-2xl font-bold text-center mb-6">Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {watchMessages.map((message) => (
          <div
            key={message._id}
            className={`card bg-gray-800 shadow-md p-4 rounded-lg ${
              dark ? "bg-[#1e1e1e]" : "bg-white"
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{message.name}</h2>
            <p>
              <strong>Email:</strong>{" "}
              <span
                onClick={() => handleCopyToClipboard(message.email)}
                className="text-blue-500 underline cursor-pointer"
              >
                {message.email}
              </span>
            </p>
            <p>
              <strong>Phone:</strong> {message.phone || "N/A"}
            </p>
            <p>
              <strong>Subject:</strong> {message.subject}
            </p>
            <p>
              <strong>Message:</strong> {message.message}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`badge ${
                  message.status ? "badge-success" : "badge-error"
                }`}
              >
                {message.status ? "Active" : "Inactive"}
              </span>
            </p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleChangeStatus(message._id, message.status)}
                className="btn btn-sm btn-info"
              >
                Change Status
              </button>
              <button
                onClick={() => handleDelete(message._id)}
                className="btn btn-sm btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchMassage;
