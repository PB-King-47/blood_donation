import React from 'react';
import Navbar from 'src/components/Navbar';
import { Outlet } from 'react-router-dom';

const Master = () => {
    return (
        <>
            <header className=''>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
    
            </footer>
        </>
    );
};

export default Master;