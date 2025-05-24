import { React, useState } from "react";
import InputField from "src/components/InputField";
import SelectionInput from "src/components/SelectionInput";
import Textarea from "src/components/Textarea";

import FromLayout from "src/page/layouts/FromLayout";
import SubmitBtn from "src/components/SubmitBtn";
import {bloodGroupOptions, stateOptions} from "src/utils/options.jsx";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        phone: "",
        email: "",
        address: "",
        age: "",
        bloodGrop: "",
        district: "",
        state: "",
        pinCode: "",
        lastDonateMonth: "",
        lastDonateYear: "",
        tarms: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        alert("Submit Click");
    };

    return (
        <FromLayout
            title={'Register as donor'}
        >
                {/* First Name with Full Name Label */}
                <div className="col-span-6">
                    <InputField
                        label="Full name"
                        name="fName"
                        type="text"
                        value={formData.fName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                </div>

                {/* Last Name */}
                <div className="col-span-6">
                    <InputField
                        name="lName"
                        type="text"
                        value={formData.lName}
                        onChange={handleChange}
                        placeholder="Last Name"
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
                        size="w-1/10"
                    />
                </div>

                {/* Email */}
                <div className="col-span-12">
                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        size="w-1/10"
                    />
                </div>

                {/* Address */}
                <div className="col-span-6">
                    {/* <InputField
                        label="Address"
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                    /> */}
                    <Textarea
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="address"
                    />
                </div>

                <div className="col-span-6">
                    {/* Age */}
                    <InputField
                        label="Age"
                        name="age"
                        type="text"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Age"
                    />
                    <br />
                    {/* Blood group  */}
                    <SelectionInput
                        label="Blood Group"
                        name="bloodGrop"
                        value={formData.bloodGrop}
                        onChange={(e) => setFormData(e.target.value)}
                        options={bloodGroupOptions}
                    />
                </div>

                {/* District  (============ drop down ==========) */}
                <div className="col-span-6">
                    <InputField
                        label="District"
                        name="district"
                        type="text"
                        value={formData.district}
                        onChange={handleChange}
                        placeholder="District"
                    />
                </div>

                {/* State */}
                <div className="col-span-6">
                    <SelectionInput
                        label="State"
                        name="customSelect"
                        value={formData.state}
                        onChange={(e) => setFormData(e.target.value)}
                        options={stateOptions}
                    />
                </div>

                {/* Pin Code */}
                <div className="col-span-6">
                    <InputField
                        label="Pin Code"
                        name="pinCode"
                        type="text"
                        value={formData.pinCode}
                        onChange={handleChange}
                        placeholder="Pin Code"
                    />
                </div>

                <br />

                <div className="col-span-6">
                    {/* Last Donation */}
                    <InputField
                        label="Last Donation"
                        name="lastDonateMonth"
                        type="text"
                        value={formData.lastDonateMonth}
                        onChange={handleChange}
                        placeholder="Month"
                    />
                </div>
                <div className="col-span-6">
                    {/* Year */}
                    <InputField
                        name="lastDonateYear"
                        type="text"
                        value={formData.lastDonateYear}
                        onChange={handleChange}
                        placeholder="Year"
                    />
                </div>
                <div className="col-span-12 flex justify-center">
                    <label className="w-fit text-2xl flex justify-center">
                        <input
                            type="checkbox"
                            name="tarms"
                            value={formData.tarms}
                            onChange={handleChange}
                            className="mr-4 transform scale-150 accent-black"
                        />
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </span>
                    </label>
                </div>
                <div className="col-span-12 flex justify-end">
                    <SubmitBtn onClick={handleClick} />
                </div>
            </FromLayout>
    );
};

export default RegisterPage;
