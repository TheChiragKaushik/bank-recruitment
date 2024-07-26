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
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 grid-rows-5 gap-6 p-5 justify-items-center">
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Educational Qualification:
          <input
            type="text"
            name="eduQualification"
            value={formData.eduQualification}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Experience:
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Position Applied For:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Preferred Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Upload Resume:
          <input type="file" name="resume" onChange={handleChange} required />
        </label>
      </div>
      <button className="bg-blue-600 p-4 rounded-md" type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
