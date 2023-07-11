import React from 'react';
import Menubar from '../pages/Shared/Navbar/Menubar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const ChefsRecipeLayout = () => {
    return (
        <div>
             <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefsRecipeLayout;