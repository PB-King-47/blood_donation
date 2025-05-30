import React, { useState } from "react";
import VerifyLayout from "./layouts/VerifyLayout";
import InputField from "./../components/InputField";
import Button from "src/components/Button";

const RegisterVerify = () => {
    const [formData, setFormData] = useState('');

    const handleChange = (e) => {
        setFormData(e.target.value);
    };

      const handleSubmit = () => {
        console.log("Entered Mobile Number", formData);
        // Call API or handle OTP verification here
    };
    return (
        <VerifyLayout>
            <h1 className="text-4xl font-bold mb-5">Registration</h1>
            <p className="mb-10 text-xl">
                An OTP has been sent to your mobile number for verification
            </p>

            <InputField
                name="orgName"
                type="text"
                value={formData}
                onChange={handleChange}
                placeholder="Enter your mobile number"
            />
            <p className="my-5">
                <span className="text-red-500 mr-2">*</span>Lorem Ipsum is
                simply dummy text of the printing and typesetting industry
            </p>

            <Button
                className={"text-xl font-bold mt-15 !px-20 !py-3 hover:bg-gray-800"}
                text={"Get OTP"}
                onClick={handleSubmit}
            />
        </VerifyLayout>
    );
};

export default RegisterVerify;
