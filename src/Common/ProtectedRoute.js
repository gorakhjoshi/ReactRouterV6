import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ authenticated, children }) => {
  return authenticated ? children : <Navigate to='/' />;
};

export default ProtectedRoute;
