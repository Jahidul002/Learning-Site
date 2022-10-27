import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <button className='rounded-full bg-indigo-500' type="button" disabled>
            <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            </svg>
            Processing...
        </button>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;