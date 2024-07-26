import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  const users = useSelector((state) => state.user.users);
  const latestUser = users[users.length - 1];

  return (
    <div>
      <h1>Thank You!</h1>
      <p>Your registration ID is: {latestUser.id}</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default ThankYouPage;
