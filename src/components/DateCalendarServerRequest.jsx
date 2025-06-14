import * as React from "react";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ProfileParts from "./Admin/Profile/parts/ProfileParts";

export default function DateCalendarServerRequest() {
    const [value, setValue] = React.useState(dayjs("2022-04-17"));

    return (
        <ProfileParts className={"!px-2 !py-2"}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem>
                    <div className="w-full mx-auto">
                        <DateCalendar
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                        />
                    </div>
                </DemoItem>
            </LocalizationProvider>
        </ProfileParts>
    );
}
