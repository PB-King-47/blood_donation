import React, { useRef, useState } from "react";
import Button from "../components/Button";
import VerifyLayout from "./layouts/VerifyLayout";
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(Array(4).fill(""));
    const inputsRef = useRef([]);

    const handleChange = (element, index) => {
        const value = element.value.replace(/[^0-9]/g, "");
        if (value) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (index < 3) inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
            if (index > 0) inputsRef.current[index - 1].focus();
        }
    };

    const handleSubmit = () => {
        const otpCode = otp.join("");
        console.log("Entered OTP:", otpCode);
        navigate("/otp-verify-success");
        // Call API or handle OTP verification here
    };

    return (
        <VerifyLayout>
            <h1 className="text-4xl font-bold mb-5">OTP Verification</h1>
            <p className="mb-2">An OTP has been sent to</p>
            <p className="mb-2">XXX XXX XXX</p>

            <div className="flex gap-2 mb-6 justify-center">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputsRef.current[index] = el)}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-12 h-12 text-center text-lg border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ))}
            </div>
            <p className="text-green-600">170 sec</p>

            <Button
                className={"text-xl font-bold mt-15 !py-3 hover:bg-gray-800"}
                text={"Verify & Proceed"}
                onClick={handleSubmit}
            />
        </VerifyLayout>
    );
};

export default OtpVerification;
