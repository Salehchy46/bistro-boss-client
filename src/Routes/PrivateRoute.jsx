import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation();

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-xl mx-auto flex justify-center my-[209px]"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRoute;