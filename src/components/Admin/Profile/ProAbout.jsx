import React, { useState } from "react";
import ProfileParts from "./parts/ProfileParts";

const ProAbout = () => {
    const [about, setAbout] = useState({
        "Full Name": "Pranta Barua",
        Email: "pranta@gmail.com",
        District: "Chittagong",
        "Phone Number": 5892515695,
        Pincode: 43453,
        Age: 20,
        "Blood Group": "B+",
        Address: "Karuvally Reenugeetham House...",
        "Last Donation Date": "11 - 10 - 2021",
    });

    return (
        <ProfileParts className={"!px-0"}>
            <h1 className="font-bold text-2xl text-center">About</h1>
            <table className="table-auto w-full">
                <tbody>
                    {about &&
                        Object.entries(about).map(([key, value]) => (
                            <tr key={key} className="border-b-2 border-gray-200 ">
                                <td className="py-2 text-end w-1/4">{key}</td>
                                <td className="py-2 text-start pl-20">{value}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </ProfileParts>
    );
};

export default ProAbout;
