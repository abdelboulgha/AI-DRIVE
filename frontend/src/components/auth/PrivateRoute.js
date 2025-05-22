import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import authService from '../../api/authService';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = authService.isAuthenticated();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
  
  // Si l'utilisateur est connecté, afficher le contenu protégé
  return children;
};

export default PrivateRoute;