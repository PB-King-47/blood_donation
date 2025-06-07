import BloodDonorAutoCall from 'src/components/FindBloodComp/BloodDonorAutoCall';
import BloodDonorList from '../../components/FindBloodComp/BloodDonorList';

const BloodDonorsTab = () => {
    return (
        <div>
            <BloodDonorAutoCall />
            <BloodDonorList />
        </div>
    );
};

export default BloodDonorsTab;