import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from 'src/components/Admin/AdminNavbar';

const AdminLayout = () => {
    return (
        <div>
            <header className=''>
                <AdminNavbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;