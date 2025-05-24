import React from "react";

const FromLayout = ({ title, children }) => {
    return (
        <div className="content">
            <div className="bg-gradient-to-r from-[#46052D] to-[#B32346] text-white px-8 py-16 mx-5">
                <h1 className="font-bold text-4xl capitalize">
                    {title}
                </h1>
            </div>
            <div className="grid grid-cols-12 gap-10 bg-white shadow-2xl p-10 mb-10">
                {children }
            </div>
        </div>
    );
};

export default FromLayout;
