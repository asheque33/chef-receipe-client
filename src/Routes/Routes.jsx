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


// import Main from '../layout/Main';
// import Home from '../pages/Home/Home/Home';
// import Login from "../pages/Home/Login/Login";
// import Register from "../pages/Home/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children:[
                    {
                        path: '/',
                        element: <Chefs></Chefs>,
                        loader: () => fetch('http://localhost:5000/chefs'),
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
                element: <ChefDetails></ChefDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
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
    },
    // chef layout
    


])
export default router;