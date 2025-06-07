import { useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRotateRight,
    faChevronDown,
    faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const BloodDonorList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [donarData, setDonarData] = useState([
        {
            name: "ABC",
            contact: "XXXXXXXXXXXXXX",
        },
        {
            name: "EFG",
            contact: "XXXXXXXXXXXXXX",
        },
        {
            name: "HIJ",
            contact: "XXXXXXXXXXXXXX",
        },
        {
            name: "KLM",
            contact: "XXXXXXXXXXXXXX",
        },
        {
            name: "NOP",
            contact: "XXXXXXXXXXXXXX",
        },
    ]);

    const handleAutoCall = () => {
        setIsAutoCall(true);
    };

    const handleCallConfirm = () => {};

    return (
        <div className="my-10 bg-white shadow-2xl rounded-2xl">
            <div className="relative px-10 py-6">
                <Button
                    className={
                        "absolute right-4 top-4 !px-6 !py-3 !rounded-xl bg-white shadow-xl"
                    }
                    onClick={handleAutoCall}
                >
                    <span className="text-black mr-2">Refresh</span>
                    <FontAwesomeIcon
                        icon={faArrowRotateRight}
                        className="text-black"
                    />
                </Button>

                <ul className="list-disc pl-5">
                    {donarData &&
                        donarData.map((item, key) => (
                            <li className="mb-2" key={key}>
                                <p>{item.name}</p>
                                <p>{item.contact}</p>
                            </li>
                        ))}
                </ul>
            </div>

            <div className="px-10 py-4 border-t-1">
                <div className="flex items-center justify-between">
                    <div className="flex items-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="size-4 text-gray-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                            />
                        </svg>

                        <p className="ml-2 text-xs text-gray-600">
                            Call Main Coordinator If The Above Contacts Are Not
                            Available
                        </p>
                    </div>
                    <button
                        className="btn cursor-pointer"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen === true ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                    </button>
                </div>

                {/* Dropdown Content */}
                {isOpen && (
                    <div className="mt-4">
                        <h1 className="uppercase font-bold text-2xl">Name</h1>
                        <p className="text-gray-600">Place</p>
                        <p className="text-gray-600">
                            Contact Number: XXXXXXXXXXXXXX
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BloodDonorList;
