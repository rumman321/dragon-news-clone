import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    
    const location=useLocation()
    // console.log(location)
    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner text-warning"></span>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    
};

export default PrivateRoutes;