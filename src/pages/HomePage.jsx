import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const registrations = useSelector((state) => state.user.users);

  return (
    <div>
      <h1>Bank Recruitment Registrations</h1>
      <Link to="/register">
        <button>Add New</button>
      </Link>
      <ul>
        {registrations.map((reg) => (
          <li key={reg.id}>
            <Link to={`/user/${reg.id}`}>{reg.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
