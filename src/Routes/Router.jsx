
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
import AllAssignment from "../Pages/Assignment/AllAssignment";
import ManageAssignment from "../Pages/Assignment/ManageAssignment";
import UpdateAssignment from "../Pages/Assignment/UpdateAssignment";


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
                element: <AllAssignment></AllAssignment>
               },
               {
                path: '/add-assignment',
                element: <PrivateRoute><AddAssignment></AddAssignment></PrivateRoute>
               },
               {
                path: '/assignment-list',
                element: <PrivateRoute><ManageAssignment></ManageAssignment></PrivateRoute>,
                loader : () => fetch('http://localhost:5000/assignment')
               },
               {
                path: '/update-assignment/:id',
                element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
               }
            ]
        }
    ]);

export default routes;