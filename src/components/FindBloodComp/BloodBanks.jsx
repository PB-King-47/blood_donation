import { useState } from "react";
import Button from "../Button";

const BloodBanks = ({ name, address, contactNum }) => {
    return (
        <div className="shadow-2xl rounded-2xl bg-white px-10 py-7 my-10"
        >
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-8">
                    <h1 className="font-bold text-4xl mb-4 uppercase">
                       Name: {name}
                    </h1>
                    <p className="text-2xl mb-4">
                        {address}
                    </p>
                    <p className="text-2xl">
                        {`Contact Number: ${contactNum}`}
                    </p>
                </div>

                <div className="col-span-4 flex justify-end">
                    <div>
                        <Button
                            className={"text-xl font-bold !py-2"}
                            text={"View Location"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloodBanks;
