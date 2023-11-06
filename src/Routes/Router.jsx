
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AddAssignment from "../Pages/Assignment/AddAssignment";
import PrivateRoute from "../Auth/PrivateRoute";


    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Root></Root>,
            errorElement: <Error></Error>,
            children: [
               {
                path: '/',
                element: <Home></Home>
               },
               {
                path: '/login',
                element:<Login></Login>
               },
               {
                path: '/register',
                element: <Register></Register>
               },
               {
                path: '/all-assignment',
                element: <Register></Register>
               },
               {
                path: '/add-assignment',
                element: <PrivateRoute><AddAssignment></AddAssignment></PrivateRoute>
               }
            ]
        }
    ]);

export default routes;