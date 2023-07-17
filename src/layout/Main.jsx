import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Menubar from '../pages/Shared/Navbar/Menubar';



const Main = () => {
    return (
        <>
            <Menubar></Menubar>
            <div style={{
                minHeight: `calc(100vh - 261.5px)`,
            }}> <Outlet />
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;