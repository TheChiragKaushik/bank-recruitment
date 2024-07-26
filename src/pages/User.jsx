import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.user.users.find((user) => user.id === id)
  );

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p><strong>Full Name:</strong> {user.name}</p>
      <p><strong>Date of Birth:</strong> {user.dob}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone Number:</strong> {user.number}</p>
      <p><strong>Educational Qualification:</strong> {user.eduQualification}</p>
      <p><strong>Experience:</strong> {user.experience}</p>
      <p><strong>Position Applied For:</strong> {user.position}</p>
      <p><strong>Preferred Location:</strong> {user.location}</p>
      <p><strong>Resume:</strong> {user.resume.name}</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default User;
