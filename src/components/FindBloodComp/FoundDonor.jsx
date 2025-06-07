import { faL } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const FoundDonor = ({ isOpen, onClose, name, address, contact }) => {
    // Lock scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={onClose}
        >
            <div className="bg-green-600 rounded-xl shadow-lg w-full max-w-md p-10 mx-4">
                <h2 className="text-2xl font-bold text-white mb-4">{name}</h2>
                <p className="text-gray-200 mb-1">{address}</p>
                <p className="text-gray-200 mb-1">Contact: {contact}</p>
                <div className="mb-6 flex items-center justify-center space-x-2">
                    <span>is Ready To Donate Blood</span>
                    <svg
                        width="16"
                        height="20"
                        viewBox="0 0 27 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                    >
                        <path
                            d="M13.4922 1L22.3359 9.78941C24.0849 11.5265 25.2762 13.7401 25.7592 16.1502C26.2422 18.5603 25.9951 21.0586 25.0493 23.3291C24.1034 25.5996 22.5013 27.5403 20.4455 28.9058C18.3897 30.2712 15.9726 31 13.5 31C11.0274 31 8.61031 30.2712 6.55452 28.9058C4.49873 27.5403 2.89658 25.5996 1.95073 23.3291C1.00487 21.0586 0.75781 18.5603 1.24079 16.1502C1.72377 13.7401 2.91509 11.5265 4.66407 9.78941L13.4922 1Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default FoundDonor;
