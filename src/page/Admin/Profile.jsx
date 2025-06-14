import ProAbout from "../../components/Admin/Profile/ProAbout";
import ProDonationHistory from "../../components/Admin/Profile/ProDonationHistory";
import ProNameSec from "../../components/Admin/Profile/ProNameSec";
import DateCalendarServerRequest from "./../../components/DateCalendarServerRequest";

const Profile = () => {
    return (
        <div className="content">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                    <div className="mb-10">
                        <ProNameSec />
                    </div>
                    <ProAbout />
                </div>
                <div className="col-span-4">
                    <div className="mb-10">
                        <ProDonationHistory />
                    </div>

                    <DateCalendarServerRequest />
                </div>
            </div>
        </div>
    );
};

export default Profile;
