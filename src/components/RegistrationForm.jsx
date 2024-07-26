import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice.js";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
    email: "",
    number: "",
    eduQualification: "",
    experience: "",
    position: "",
    location: "",
    resume: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
    navigate("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="grid grid-cols-2 grid-rows-5 gap-6 p-5">
        <label className="flex flex-col">
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          />
        </label>
        <label className="flex flex-col">
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          />
        </label>
        <label className="flex flex-col">
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          />
        </label>
        <label className="flex flex-col">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          />
        </label>
        <label className="flex flex-col">
          Phone Number:
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          />
        </label>
        <label className="flex flex-col">
          Educational Qualification:
          <input
            type="text"
            name="eduQualification"
            value={formData.eduQualification}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          />
        </label>
        <label className="flex flex-col">
          Experience:
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          />
        </label>
        <label className="flex flex-col">
          Position Applied For:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          />
        </label>
        <label className="flex flex-col">
          Preferred Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          />
        </label>
        <label className="flex flex-col">
          Upload Resume:
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            required
            className="mt-1"
          />
        </label>
      </div>
      <button
        className="bg-blue-600 text-white p-4 rounded-md mt-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
