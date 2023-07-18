import React, { useContext } from 'react';
import LoadingSpinner from '../pages/Home/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

        const {user, loading} = useContext(AuthContext);
        const location = useLocation();
        console.log('user in private route', user);
        if(loading){
            return <LoadingSpinner/>
        }
    
        if(user){
            return children;
        }
        return <Navigate state={{from: location}} to="/login" replace></Navigate>;
    };
    

export default PrivateRoute;