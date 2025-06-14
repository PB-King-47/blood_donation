import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Logo from 'src/assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="nav content py-4 z-1">
            <div className="flex items-center justify-between">
                <div >
                    <img 
                        className="shadow-2xl rounded-full"
                        srcSet={Logo} 
                        alt="Logo" 
                    />
                </div>

                <div className="flex items-center justify-center text-[20px]">
                    <Link to={"/"} className="px-8 py-2 hover:underline hover:decoration-3 hover:underline-offset-8">
                        Home
                    </Link>
                    <Link to={"/"} className="px-8 py-2 hover:underline hover:decoration-3 hover:underline-offset-8">
                        About
                    </Link>
                    <Link to={"/findblood"} className="px-8 py-2 hover:underline hover:decoration-3 hover:underline-offset-8">
                        Find Blood
                    </Link>
                    
                    <div
                        className="relative px-8 py-2 hover:underline hover:decoration-3 hover:underline-offset-8"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <span className="mr-3">Register Now</span> 
                        <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
                        {/* Dropdown menu */}
                        {isOpen && (
                            <ul className="absolute -left-20 mt-2 w-fit bg-white rounded-md shadow-lg z-10">
                                <li className="py-4">
                                    <Link
                                        to={"/registerdoner"}
                                        className="px-8 hover:underline hover:decoration-3 hover:underline-offset-8"
                                    >
                                        Register As Doner
                                    </Link>
                                </li>

                                <li className="py-4">
                                    <Link
                                        to={"/registerorg"}
                                        className="px-8 hover:underline hover:decoration-3 hover:underline-offset-8"
                                    >
                                        Register As Organiger
                                    </Link>
                                </li>

                                <li className="py-4">
                                    <Link
                                        to={"/otp-reg-verify"}
                                        className="px-8 hover:underline hover:decoration-3 hover:underline-offset-8"
                                    >
                                        Register OTP Verify Page
                                    </Link>
                                </li>

                                <li className="py-4">
                                    <Link
                                        to={"/blood-bank"}
                                        className="px-8 hover:underline hover:decoration-3 hover:underline-offset-8"
                                    >
                                        Blood Bank Page
                                    </Link>
                                </li>

                                <li className="py-4">
                                    <Link
                                        to={"/admin/dashboard"}
                                        className="px-8 hover:underline hover:decoration-3 hover:underline-offset-8"
                                    >
                                        Admin Page
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                    <Link
                        to={"/"}
                        className="px-8 py-2 btn border-2 rounded hover:bg-gray-800 hover:text-white hover:rounded"
                    >
                        Log In
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
