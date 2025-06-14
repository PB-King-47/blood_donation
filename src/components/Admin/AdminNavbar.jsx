import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faEnvelope,
    faBell,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "src/assets/logo.png";
import AdminNotification from "./parts/AdminNotification";
import AdminInbox from "./parts/AdminInbox";

const AdminNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMailOpen, setIsMailOpen] = useState(false);
    const [isNotifyOpen, setIsNotifyOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNewNotification, setIsNewNotification] = useState(true);

    return (
        <nav className="nav content py-4 z-1">
            <div className="flex items-center justify-between">
                <div>
                    <img
                        className="shadow-2xl rounded-full"
                        srcSet={Logo}
                        alt="Logo"
                    />
                </div>

                <div className="flex items-center justify-center text-[20px]">
                    <Link
                        to={"/"}
                        className="px-8 py-2 hover:underline hover:decoration-3 hover:underline-offset-8"
                    >
                        Home
                    </Link>
                    <Link
                        to={"/"}
                        className="px-8 py-2 hover:underline hover:decoration-3 hover:underline-offset-8"
                    >
                        About
                    </Link>
                    <Link
                        to={"/findblood"}
                        className="px-8 py-2 hover:underline hover:decoration-3 hover:underline-offset-8"
                    >
                        Find Blood
                    </Link>

                    <div
                        className="relative px-8 py-2 hover:underline hover:decoration-3 hover:underline-offset-8"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <span className="mr-3">Register Now</span>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="text-sm"
                        />
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
                            </ul>
                        )}
                    </div>

                    <div
                        className="relative px-8 py-2 hover:underline hover:decoration-3 hover:underline-offset-8"
                        onMouseEnter={() => setIsMailOpen(true)}
                        onMouseLeave={() => setIsMailOpen(false)}
                    >
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-lg text-gray-400"
                        />
                        {/* Dropdown menu */}
                        {isMailOpen && (
                            <div className="absolute -left-20 mt-2 w-fit bg-white rounded-md shadow-lg z-10 p-4">
                                <AdminInbox />
                            </div>
                        )}
                    </div>

                    {/* admin menu */}
                    <div
                        className="relative px-8 py-2 hover:underline hover:decoration-3 hover:underline-offset-8"
                        onMouseEnter={() => setIsNotifyOpen(true)}
                        onMouseLeave={() => setIsNotifyOpen(false)}
                    >
                        {isNewNotification &&
                        (<div className="absolute left-10">
                            <div className="rounded-full w-3 h-3 bg-red-600"></div>
                        </div>
                        )}

                        <FontAwesomeIcon icon={faBell} className="text-lg text-gray-400" />
                        {/* Dropdown menu */}
                        {isNotifyOpen && (
                            <div className="absolute -left-20 mt-2 w-fit bg-white rounded-md shadow-lg z-10 p-4">
                                <AdminNotification />
                            </div>
                        )}
                    </div>

                    <div
                        className="relative px-8 py-2 hover:underline hover:decoration-3 hover:underline-offset-8"
                        onMouseEnter={() => setIsProfileOpen(true)}
                        onMouseLeave={() => setIsProfileOpen(false)}
                    >
                        <div className="rounded-full w-8 h-8 bg-red-500"></div>
                        {/* Dropdown menu */}
                        {isProfileOpen && (
                            <div className="absolute -left-20 mt-2 bg-white rounded-md shadow-lg z-10 p-4">
                                <Link
                                    to={"/home"}
                                    className="flex items-center px-3"
                                >
                                    <span className="mr-3">Log Out</span>
                                    <FontAwesomeIcon
                                        icon={faRightFromBracket}
                                        className="text-xl"
                                    />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
