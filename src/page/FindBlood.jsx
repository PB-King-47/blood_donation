import React, { useState } from "react";
import BgImage from "src/assets/GradientPanel.png";
import { bloodGroupOptions, stateOptions } from "src/utils/options.jsx";
import SelectionInput from "./../components/SelectionInput";
import Button from "./../components/Button";

const FindBlood = () => {
    const [formData, setFormData] = useState({
        bloodGrop: "",
        state: "",
        district: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        alert("Submit Click");
    };

    return (
        <div className="content bg-white shadow-2xl">
            <div className="grid grid-cols-12 gap-20">
                <div className="col-span-5">
                    <img
                        srcSet={BgImage}
                        alt="Cover Image"
                        className="w-full m-4 shadow-2xl"
                    />
                </div>
                <div className="col-span-7 py-10">
                    <h1 className="font-bold text-4xl text-center capitalize">
                        Recipient Details
                    </h1>

                    {/* Blood Group */}
                    <SelectionInput
                        label="Blood Group"
                        name="bloodGrop"
                        value={formData.bloodGrop}
                        onChange={(e) => setFormData(e.target.value)}
                        options={bloodGroupOptions}
                    />
                    <Button
                        className={"text-2xl font-bold mt-15"}
                        text={"Current location"}
                        style={{
                            paddingY: '2px!importent',
                        }}
                    />
                    <p className="text-center">Or</p>
                    {/* State */}
                    <SelectionInput
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={(e) => setFormData(e.target.value)}
                        options={stateOptions}
                    />

                    {/* District */}
                    <SelectionInput
                        label="District"
                        name="district"
                        value={formData.district}
                        onChange={(e) => setFormData(e.target.value)}
                        options={stateOptions}
                    />
                </div>
            </div>
        </div>
    );
};

export default FindBlood;
