
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
import ShowAssignment from "../Pages/Assignment/ShowAssignment";
import FAQs from "../Pages/FAQs/FAQs";
import MySubmission from "../Pages/Assignment/MySubmission";


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
                path: '/faqs',
                element: <FAQs></FAQs>,
                loader : () => fetch('http://localhost:5000/faqs')
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
               },
               {
                path: '/show-assignment/:id',
                element: <PrivateRoute><ShowAssignment></ShowAssignment></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
               },
               {
                path: '/my-submission',
                element: <PrivateRoute><MySubmission></MySubmission></PrivateRoute>,
                loader : () => fetch("http://localhost:5000/take-assignment")
               },
            ]
        }
    ]);

export default routes;