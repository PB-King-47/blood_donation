import React, { useState } from "react";
import ProfileParts from "./parts/ProfileParts";

const ProDonationHistory = () => {
    const [donateHistory, setDonateHistory] = useState([
        {
            date: "13 Dec 2020",
            bloodUnit: 120,
        },
        {
            date: "28 Nov 2020",
            bloodUnit: 20,
        },
        {
            date: "28 Nov 2020",
            bloodUnit: 20,
        },
        {
            date: "04 Nov 2020",
            bloodUnit: 40,
        },
        {
            date: "15 Oct 2020",
            bloodUnit: 310,
        },
    ]);
    
    return (
        <ProfileParts className={"!px-0"}>
            <h1 className="font-bold text-center py-2">Donation History</h1>
            <table className="table-auto w-full">
                <thead>
                    <th className="text-start text-gray-500 px-5">Date</th>
                    <th className="text-center text-gray-500 px-5">Blood Units</th>
                </thead>
                <tbody>
                    {donateHistory &&
                        donateHistory.map((item, index) => (
                            <tr className="border-b-2 border-gray-300" key={index}>
                                <td className="px-5 py-2">{item.date}</td>
                                <td className="text-end px-10 py-2">{item.bloodUnit}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </ProfileParts>
    );
};

export default ProDonationHistory;
