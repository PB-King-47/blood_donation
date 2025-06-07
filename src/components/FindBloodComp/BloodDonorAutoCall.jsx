import React, { useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import ConfirmAutoCall from "./ConfirmAutoCall";
import FoundDonor from "./FoundDonor";

const BloodDonorAutoCall = () => {
    const [isAutoCall, setIsAutoCall] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const handelAutoCall = () => {
        setIsAutoCall(true);
    };

    const handleCallConfirm = () => {
        setIsAutoCall(false);
        setTimeout(() => {
            setShowInfo(true);
        }, 200);
    };

    return (
        <div className="px-10 py-6 my-10 bg-white shadow-2xl rounded-2xl gap-2">
            <ConfirmAutoCall
                isOpen={isAutoCall}
                onConfirm={handleCallConfirm}
                onCancel={() => setIsAutoCall(false)}
            />

            <FoundDonor
                isOpen={showInfo}
                name={"Name"}
                address={"Place"}
                contact={"XXXXXXXXXXX"}
                onClose={() => setShowInfo(false)}
            />

            <div className="grid grid-cols-12">
                <div className="col-span-8">
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div className="col-span-4">
                    <div className="flex justify-end">
                        <Button
                            className={"!bg-green-600 !py-3 !px-5 !rounded-xl"}
                            onClick={handelAutoCall}
                        >
                            <span className="mr-2 font-bold">Auto-Call</span>
                            <FontAwesomeIcon icon={faPhone} />
                        </Button>
                    </div>
                    <div className="flex justify-end">
                        <p className="text-gray-600 mt-5">
                            <span className="mr-1">
                                <FontAwesomeIcon
                                    icon={faCircleExclamation}
                                    className="text-amber-400"
                                />
                            </span>{" "}
                            Use in case of emergency
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloodDonorAutoCall;
