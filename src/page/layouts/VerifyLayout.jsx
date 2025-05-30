import React, { useEffect, useState } from "react";

const VerifyLayout = ({ children, error: propError = false  }) => {
    const [error, setError] = useState(propError);

    const handleOTPError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    return (
        <div className="mb-50 relative">
            <div className="w-3xl rounded-[20px] m-auto bg-white shadow-2xl py-30 px-20 my-20 text-center">
                {children}
            </div>

            {/* After funtion this trigger error remove this button */}
            <button
                onClick={handleOTPError}
                className="cursor-pointer px-4 py-2 rounded"
            >
                Trigger Error
            </button>

            {error && (
                <div className="absolute left-1/2 transform -translate-x-1/2  flex mx-auto bg-red-500 px-5 py-2 text-white rounded-lg w-fit">
                    <p className="mr-20 font-bold">Invalid OTP</p>
                    <button
                        type="button"
                        className="cursor-pointer font-bold"
                        onClick={() => setError(false)}
                    >
                        X
                    </button>
                </div>
            )}
        </div>
    );
};

export default VerifyLayout;
