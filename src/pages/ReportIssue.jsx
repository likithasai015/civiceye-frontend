import { useState } from "react";
import axios from "axios";

function ReportIssue() {
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    location: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://civiceye-backend-thol.onrender.com/api/complaints",
        formData
      );

      setMessage(
        `Complaint Submitted Successfully! Complaint ID: ${response.data.complaint.complaintId}`
      );

      setFormData({
        category: "",
        description: "",
        location: "",
      });

    } catch (error) {
      setMessage("Failed to submit complaint.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Report a Civic Issue
        </h1>

        {message && (
          <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block font-medium mb-2">
              Issue Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            >
              <option value="">Select Issue</option>
              <option>Pothole</option>
              <option>Garbage Overflow</option>
              <option>Broken Streetlight</option>
              <option>Water Leakage</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border rounded-lg p-3"
              placeholder="Describe the issue..."
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter location"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Complaint
          </button>

        </form>
      </div>
    </div>
  );
}

export default ReportIssue;