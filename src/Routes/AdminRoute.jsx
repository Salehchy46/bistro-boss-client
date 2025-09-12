import React from 'react';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = (children) => {
    
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-xl mx-auto flex justify-center my-[209px]"></span>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace />
    return (
        <div>
            
        </div>
    );
};

export default AdminRoute;