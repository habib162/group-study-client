
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";


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
            //    {
            //     path: '/login',
            //     element: <Login></Login>
            //    },
            //    {
            //     path: '/register',
            //     element: <Register></Register>
            //    },
            //    {
            //     path: '/contact',
            //     element: <Contact></Contact>
            //    }
            ]
        }
    ]);

export default routes;