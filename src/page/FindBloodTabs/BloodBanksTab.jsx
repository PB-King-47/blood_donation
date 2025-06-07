import { useState } from "react";
import BloodBanks from "src/components/FindBloodComp/BloodBanks";

const BloodBanksTab = () => {
    const [bloodBanksData, setBloodBanksData] = useState([
        {
            name: "Name of the Blood Bank",
            address: "ABC Hospital Building, XYZ Road, Place, District Pincode",
            contactNum: "XXXXXXXXXX",
        },
        {
            name: "Name of the Blood Bank",
            address: "ABC Hospital Building, XYZ Road, Place, District Pincode",
            contactNum: "XXXXXXXXXX",
        },
        {
            name: "Name of the Blood Bank",
            address: "ABC Hospital Building, XYZ Road, Place, District Pincode",
            contactNum: "XXXXXXXXXX",
        },
        {
            name: "Name of the Blood Bank",
            address: "ABC Hospital Building, XYZ Road, Place, District Pincode",
            contactNum: "XXXXXXXXXX",
        },
    ]);
    
    return (
        <div>
            {bloodBanksData &&
                bloodBanksData.map((item, key) => (
                <BloodBanks
                    key={key}
                    name={item.name}
                    address={item.address}
                    contactNum={item.contactNum}
                />
                ))}
        </div>
    );
};

export default BloodBanksTab;
