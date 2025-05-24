import React, { useState } from "react";
import CheckIcon from "src/assets/check-circle.svg";
import CheckHoverIcon from "src/assets/check-circle-hover.svg";

const SubmitBtn = ({ onClick }) => {
    const [hover, setHover] = useState(false);
    return (
        <button
            type="button"
            className="btn flex items-center text-xl shadow-2xl px-8 py-3 cursor-pointer border-[1px] border-gray-300 rounded-md hover:bg-black hover:text-white"
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            Submit
            <span className="ml-3">
                {hover ? (
                    <img srcSet={CheckHoverIcon} alt="" className="w-[30px]" />
                ) : (
                    <img srcSet={CheckIcon} alt="" className="w-[30px]" />
                )}
            </span>
        </button>
    );
};

export default SubmitBtn;
