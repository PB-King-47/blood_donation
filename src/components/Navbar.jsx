import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav className='nav content py-4 z-1'>
            <div class="flex items-center justify-between">
                <div className='bg-red-100 w-[30px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg>
                </div>

                <div className="flex items-center justify-center text-[20px]">
                    <Link to={"/"} className='px-8 py-2'>Home</Link>
                    <Link to={"/"} className='px-8 py-2'>About</Link>
                    <Link to={"/"} className='px-8 py-2'>Find Blood</Link>
                    <Link to={"/"} className='px-8 py-2'>Register Now</Link>
                    <Link to={"/"} className='px-8 py-2 btn border-2 rounded'>
                        Log In 
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;