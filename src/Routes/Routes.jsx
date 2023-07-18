/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from '../pages/Blog/Blog';
import Chefs from '../pages/Home/Chefs/Chefs';
import Chef from '../pages/Home/Chef/Chef';
import ChefDetails from '../pages/ChefDetails/ChefDetails';
import LoadingSpinner from '../pages/Home/LoadingSpinner/LoadingSpinner';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';


// import Main from '../layout/Main';
// import Home from '../pages/Home/Home/Home';
// import Login from "../pages/Home/Login/Login";
// import Register from "../pages/Home/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children:[
                    {
                        path: '/',
                        element: <Chefs></Chefs>,
                        loader: () => fetch('https://b7a10-chef-recipe-hunter-server-side-asheque33-asheque33.vercel.app/chefs'),
                        children: [
                            {
                                path: '/chef',
                                element: <Chef></Chef>
                            },
                           
                        ]
                    },
                ]
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b7a10-chef-recipe-hunter-server-side-asheque33-asheque33.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/spinner',
                element:<LoadingSpinner/>
            }

        ]
    }


])
export default router;