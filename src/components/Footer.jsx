import React from "react";
import Logo from "src/assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <div className="bg-[#1E2833] py-30 px-50 text-white">
            <div className="flex justify-between">
                <img
                    className="shadow-2xl rounded-full"
                    srcSet={Logo}
                    alt="Logo"
                />
                <div className="flex gap-10 items-center">
                    <h2 className="text-2xl">Ready to get started?</h2>

                    <button
                        onClick={handleClick}
                        type="button"
                        className="btn bg-white text-black px-15 py-3 text-2xl font-bold cursor-pointer rounded-md"
                    >
                        Donate
                    </button>
                </div>
            </div>

            <hr className="text-gray-500 my-10" />

            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 sm:grid-cols-1">
                <div className="col-box">
                    <h1 className="text-2xl mb-2">
                        Subscribe to our <br />
                        newsletter
                    </h1>

                    <div className="flex items-center border-b border-gray-700 bg-[#1f2937] p-2 w-full max-w-md rounded-lg">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none w-full px-2"
                        />
                        <button className="bg-pink-200 hover:bg-pink-300 text-black rounded-tr-md rounded-tl-md py-2 px-5 ml-2 transition-colors duration-200 cursor-pointer">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>

                <div className="col-box">
                    <h1 className="text-[#FFD2DD] text-xl mb-2">Services</h1>
                    <nav className="flex flex-col">
                        <Link
                            to={""}
                            className="my-2 capitalize hover:text-[#FFD2DD]"
                        >
                            Email Marketing
                        </Link>
                        <Link
                            to={""}
                            className="my-2 capitalize hover:text-[#FFD2DD]"
                        >
                            Campaigns
                        </Link>
                        <Link
                            to={""}
                            className="my-2 capitalize hover:text-[#FFD2DD]"
                        >
                            Branding
                        </Link>
                        <Link
                            to={""}
                            className="my-2 capitalize hover:text-[#FFD2DD]"
                        >
                            Offline
                        </Link>
                    </nav>
                </div>

                <div className="col-box">
                    <h1 className="text-[#FFD2DD] text-xl mb-2">About</h1>
                    <nav className="flex flex-col">
                        <Link
                            to={""}
                            className="my-2 capitalize hover:text-[#FFD2DD]"
                        >
                            Our Story
                        </Link>
                        <Link
                            to={""}
                            className="my-2 capitalize hover:text-[#FFD2DD]"
                        >
                            Benefits
                        </Link>
                        <Link
                            to={""}
                            className="my-2 capitalize hover:text-[#FFD2DD]"
                        >
                            Team
                        </Link>
                        <Link
                            to={""}
                            className="my-2 capitalize hover:text-[#FFD2DD]"
                        >
                            Careers
                        </Link>
                    </nav>
                </div>

                <div className="col-box">
                    <h1 className="text-[#FFD2DD] text-xl mb-2">Help</h1>
                    <nav className="flex flex-col">
                        <Link
                            to={""}
                            className="my-2 capitalize hover:text-[#FFD2DD]"
                        >
                            FAQs
                        </Link>
                        <Link
                            to={""}
                            className="my-2 capitalize hover:text-[#FFD2DD]"
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </div>

            <div className="flex justify-between">
                <nav>
                    <Link to={""} className="mr-8 hover:text-[#FFD2DD]">
                        Terms & Conditions
                    </Link>
                    <Link to={""} className="hover:text-[#FFD2DD]">
                        Privacy Policy
                    </Link>
                </nav>

                <div className="flex gap-10 items-center text-white">
                    <button
                        onClick={handleClick}
                        type="button"
                        className="btn text-2xl cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </button>
                    <button
                        onClick={handleClick}
                        type="button"
                        className="btn text-2xl cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                    <button
                        onClick={handleClick}
                        type="button"
                        className="btn text-2xl cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
