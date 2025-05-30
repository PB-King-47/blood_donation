import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


const CollaborCardSlider = () => {
    const [imageData] = useState([
        'src/assets/collaborators/partnerts-1.png',
        'src/assets/collaborators/partnerts-2.png',
        'src/assets/collaborators/partnerts-3.png',
        'src/assets/collaborators/partnerts-4.png',
        'src/assets/collaborators/partnerts-5.png',
    ]);

    return (
        <div>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
                loop={true} 
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                {imageData.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="my-10 flex justify-center items-center h-48 transition-transform duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                            <img 
                            key={index} 
                            srcSet={src}
                            alt={`Partner ${index + 1}`}
                            className="lg:w-50 md:w-40 h-auto object-contain"
                         />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CollaborCardSlider;
