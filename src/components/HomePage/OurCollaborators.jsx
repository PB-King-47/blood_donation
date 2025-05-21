import React from 'react';
import CollaborCardSlider from './CollaborCardSlider';

const OurCollaborators = () => {
    return (
        <div className='content section-space'>
            <h1 className='font-bold text-4xl mb-5 capitalize'>Our collaborators</h1>
            
            {/* Carusal section */}
            <CollaborCardSlider />
        </div>
    );
};

export default OurCollaborators;