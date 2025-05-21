import React from 'react';
import Hero from 'src/components/HomePage/Hero';
import OurMission from 'src/components/HomePage/OurMission';
import OurCollaborators from '../components/HomePage/OurCollaborators';
import GetBlood from '../components/HomePage/GetBlood';

const HomePage = () => {
    return (
        <div className='mt-[-82px]'>
           <Hero />
           <OurMission />
           <OurCollaborators />
           <GetBlood />
        </div>
    );
};

export default HomePage;