// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth'; // Import your authentication utility

const PrivateRoute = ({ element: Element}) => {
    const location = useLocation();

    return isAuthenticated() ? (
        Element
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    );
};

export default PrivateRoute;
