import React from "react";
import GetBloodComp from "./GetBloodComp";

import Image_1 from 'src/assets/getBlood/Group.png';
import BgImage from 'src/assets/getblood.png';


const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'auto 500px',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
};

const GetBlood = () => {
    return (
        <div className="content getBlood md:h-[100vh]" style={bgStyle}>
            <h1 className="font-bold text-4xl mb-5 capitalize">
                How to get blood?
            </h1>
            <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-6 sm:grid-cols-1">
                <div class="col-box sm:h-100 md:h-64 xl:flex items-end">
                    <GetBloodComp 
                        contextNum={'2'}
                        icon={Image_1}
                        contextText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                    />
                </div>

                <div class="col-box sm:h-100">
                     <GetBloodComp 
                        contextNum={'1'}
                        icon={Image_1}
                        contextText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                    />
                </div>

                <div class="col-box sm:h-100 md:h-64 xl:flex items-end">
                     <GetBloodComp 
                        contextNum={'3'}
                        icon={Image_1}
                        contextText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                    />
                </div>
            </div>
        </div>
    );
};

export default GetBlood;
