import React, { useState } from "react";
import BgImage from "src/assets/GradientPanel.png";
import { bloodGroupOptions, stateOptions } from "src/utils/options.jsx";
import SelectionInput from "./../components/SelectionInput";
import Button from "./../components/Button2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const FindBlood = () => {
    const [formData, setFormData] = useState({
        bloodGrop: "",
        state: "",
        district: "",
    });

    const handleClick = () => {
        alert("Submit Click");
    };

    return (
        <div className="mx-40 my-10 md:mx-20 sm:mx-10 bg-white shadow-2xl ">
            <div className="grid grid-cols-12 gap-20">
                <div className="col-span-6 w-full p-10">
                    <div
                        className=""
                        style={{
                            backgroundImage: `url(${BgImage})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
                        }}
                    />
                </div>
                <div className="col-span-6 py-30 pr-30">
                    <h1 className="font-bold my-10 text-4xl text-center capitalize">
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
                    <div className="flex justify-center">
                        <Button
                            className={"text-2xl font-bold mt-15 !py-5  my-end"}
                            text={"Current location"}
                        />
                    </div>
                    <p className="text-center my-4">Or</p>
                    
                    {/* State */}
                    <div className="my-4">
                        <SelectionInput
                            label="State"
                            name="state"
                            value={formData.state}
                            onChange={(e) => setFormData(e.target.value)}
                            options={stateOptions}
                        />
                    </div>

                    {/* District */}
                    <div className="my-4">
                        <SelectionInput
                            label="District"
                            name="district"
                            value={formData.district}
                            onChange={(e) => setFormData(e.target.value)}
                            options={stateOptions}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button 
                        className={"text-2xl font-bold mt-15 !py-5"}
                        onClick={handleClick}
                        >
                            <span className="mr-5">Proceed</span>
                            <FontAwesomeIcon
                                icon={faAngleRight}
                                className="text-xl"
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindBlood;
