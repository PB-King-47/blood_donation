import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faBell,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import AdminNotification from "./parts/AdminNotification";
import AdminInbox from "./parts/AdminInbox";

const AdminNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMailOpen, setIsMailOpen] = useState(false);
    const [isNotifyOpen, setIsNotifyOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNewNotification, setIsNewNotification] = useState(true);

    // If new notification massage got work on here to new notificaiton

    return (
        <div className="flex items-center justify-between">
            {/* admin menu */}
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

            <div
                className="relative px-8 py-2 hover:underline hover:decoration-3 hover:underline-offset-8"
                onMouseEnter={() => setIsNotifyOpen(true)}
                onMouseLeave={() => setIsNotifyOpen(false)}
            >
                {isNewNotification && (
                    <div className="absolute left-10">
                        <div className="rounded-full w-3 h-3 bg-red-600"></div>
                    </div>
                )}

                <FontAwesomeIcon
                    icon={faBell}
                    className="text-lg text-gray-400"
                />
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
                    <div className="absolute -left-20 mt-2 bg-white rounded-md shadow-lg z-10">
                        <Link to={"/home"} className="flex items-center px-4 py-2">
                            <span className="mr-3">Log Out</span>
                            <FontAwesomeIcon
                                icon={faRightFromBracket}
                                className="text-xl"
                            />
                        </Link>
                        
                        <Link to={"/admin/profile"} className="flex items-center px-4 py-2">
                            <span className="ml-3">Profile</span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminNavbar;
