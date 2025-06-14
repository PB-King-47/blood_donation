import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Button from 'src/components/Button';
import ProfileParts from "./parts/ProfileParts";

const ProNameSec = () => {
    return (
        <ProfileParts>
            <div className="flex items-end gap-6">
                <div className="bg-white p-2 shadow-xl">
                    <img
                        srcSet=""
                        className="bg-gray-300 w-[150px] h-[150px]"
                        alt="Image"
                    />
                </div>
                <div className="flex w-full justify-between">
                    <h1 className="font-bold text-3xl">Pranta Devloper</h1>
                    <div className="flex items-center gap-6">
                        <FontAwesomeIcon
                            icon={faBell}
                            className="text-2xl text-gray-600"
                        />

                        <Button className={"!px-6 !py-2 !rounded-md font-bold"}>
                            Edit Profile
                        </Button>
                    </div>
                </div>
            </div>
        </ProfileParts>
    );
};

export default ProNameSec;
