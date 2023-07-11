/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import Blog from '../pages/Home/Blog/Blog';
import ChefsRecipeLayout from '../layout/ChefsRecipeLayout';
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
                element: <Home></Home>
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
            }
        ]
    },

    {
        path: '/recipes',
        element: <ChefsRecipeLayout></ChefsRecipeLayout>,
        children: [
            
            {
                path: '/recipes/:id',
                element: <Home></Home>
            },
        ]
    }
])
export default router;