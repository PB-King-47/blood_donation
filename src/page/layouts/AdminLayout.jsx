import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'src/components/Navbar';

const AdminLayout = () => {
    return (
        <div>
            <header className=''>
                <Navbar role={"admin"} />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;