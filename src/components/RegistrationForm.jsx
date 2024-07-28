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
    const resumeUrl = formData.resume ? URL.createObjectURL(formData.resume) : null;

    dispatch(addUser({...formData, resumeUrl}));
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
          <select
            name="eduQualification"
            value={formData.eduQualification}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          >
            <option value="" disabled>
              Select your qualification
            </option>
            <option value="B.Tech">B.Tech</option>
            <option value="B.Sc">B.Sc</option>
            <option value="M.Sc">M.Sc</option>
            <option value="MBA">MBA</option>
          </select>
        </label>
        <label className="flex flex-col">
          Experience (in years):
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          >
            <option value="" disabled>
              Select years of experience
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10+</option>
          </select>
        </label>
        <label className="flex flex-col">
          Position Applied For:
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          >
            <option value="" disabled>
              Select a position
            </option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Machine Learning Engineer">
              Machine Learning Engineer
            </option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Systems Analyst">Systems Analyst</option>
          </select>
        </label>

        <label className="flex flex-col">
          Preferred Location:
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 border border-gray-300 rounded px-2 py-1"
          >
            <option value="" disabled>
              Select a city
            </option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Pune">Pune</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
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
