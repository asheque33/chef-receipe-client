import React from 'react';
import Navbar from '../pages/Shared/Navbar/Menubar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Menubar from '../pages/Shared/Navbar/Menubar';


const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;