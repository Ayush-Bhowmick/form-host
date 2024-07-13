import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const state = location.state;

  if (!state) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h3>Details</h3>
      <p>First Name: {state.firstName}</p>
      <p>Last Name: {state.lastName}</p>
      <p>Username: {state.username}</p>
      <p>Email: {state.emailAddress}</p>
      <p>Phone Number: {state.phoneNo}</p>
      <p>Country: {state.country}</p>
      <p>City: {state.city}</p>
      <p>PAN: {state.panNo}</p>
      <p>Aadhar: {state.aadharNo}</p>
    </div>
  );
};

export default Details;
