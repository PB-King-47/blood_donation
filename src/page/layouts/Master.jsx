import React from 'react';
import Navbar from 'src/components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from 'src/components/Footer';

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
                <Footer />
            </footer>
        </>
    );
};

export default Master;