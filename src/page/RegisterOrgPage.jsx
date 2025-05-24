import React from "react";
import { useState } from "react";
import InputField from "src/components/InputField";
import SelectionInput from "src/components/SelectionInput";
import Textarea from "src/components/Textarea";

import FromLayout from "./layouts/FromLayout";
import SubmitBtn from "../components/SubmitBtn";

const RegisterOrgPage = () => {
    const [formData, setFormData] = useState({
        orgName: "",
        phone: "",
        address: "",
        headOfOrg: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        alert("Submit Click");
    };

    return (
        <FromLayout
            title={'Register As Organization'}
        >
                {/* Organization Name */}
                <div className="col-span-12">
                    <InputField
                        label="Organization Name"
                        name="orgName"
                        type="text"
                        value={formData.orgName}
                        onChange={handleChange}
                        placeholder="First Name"
                        size='w-1/6'
                    />
                </div>

            {/* Address */}
                <div className="col-span-12">
                    <Textarea
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="address"
                        size="w-1/6"
                    />
                </div>

                {/* Phone Number */}
                <div className="col-span-12">
                    <InputField
                        label="Phone Number"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        size="w-1/6"
                    />
                </div>


                <div className="col-span-12">
                    {/* Head of Organization */}
                    <InputField
                        label="Head of Organization"
                        name="headOfOrg"
                        type="text"
                        value={formData.headOfOrg}
                        onChange={handleChange}
                        placeholder="Head of Organization"
                        size='w-1/6'
                    />
                </div>
                
                <div className="col-span-12 flex justify-end">
                    <SubmitBtn onClick={handleClick} />
                </div>
            </FromLayout>
    );
};

export default RegisterOrgPage;
