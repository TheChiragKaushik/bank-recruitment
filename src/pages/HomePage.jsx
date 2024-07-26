import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const registrations = useSelector((state) => state.user.users);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <h1 className="text-2xl font-bold mb-4">Bank Recruitment Registrations</h1>
    <Link to="/register">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add New</button>
    </Link>
    <h1>Registered Users</h1>
    <ul className="grid grid-cols-2 grid-rows-1 gap-20">
      {registrations.map((reg) => (
        <li key={reg.id} className="mb-2">
          <Link to={`/user/${reg.id}`} className="text-blue-500 hover:underline">
            {reg.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default HomePage;
