import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import BloodBanksTab from "../FindBloodTabs/BloodBanksTab";

const BloodBank = () => {
    return (
        <TabGroup className={"content"}>
            <TabList className="flex space-x-1 justify-center p-1">
                <div className="w-fit bg-[#EAEAEA] rounded-full">

                <Tab
                    className={({ selected }) =>
                        `py-2 px-6 mr-0.5 shadow-inner text-sm font-medium leading-5 text-black rounded-l-full
          ${
              selected
                  ? "text-white bg-black shadow-inner rounded-full"
                  : "text-black bg-[#EAEAEA]"
          }`
                    }
                >
                    Blood Donors
                </Tab>
                <Tab
                    className={({ selected }) =>
                        `py-2 px-6 shadow-inner text-sm font-medium leading-5 text-black rounded-r-full
          ${
              selected
                  ? "text-white bg-black shadow-inner rounded-full"
                  : "text-black bg-[#EAEAEA]"
          }`
                    }
                >
                    Blood Banks
                </Tab>
                </div>
            </TabList>
            <TabPanels className="mt-2">
                <TabPanel>Content 1</TabPanel>
                <TabPanel>
                    <BloodBanksTab />
                </TabPanel>
            </TabPanels>
        </TabGroup>
    );
};

export default BloodBank;
