import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../hooks/useAuth';
import loader from '../assets/Lottie/loader.json';
import { useLottie } from 'lottie-react';

const PrivateRoute = ({children}) =>{
    const {currentUser,loading} = UseAuth();
    console.log(currentUser);
    const location = useLocation();

    const options = {
        animationData: loader,
        loop: true
    };
    const { View } = useLottie(options);

    if (loading) {
        return (
            <div>
                {View}
            </div>
        )
    }
    if (currentUser) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>

}

export default PrivateRoute;