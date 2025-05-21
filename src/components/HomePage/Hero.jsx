import React from 'react';
import Blood from 'src/assets/blood.png'
import Button from 'src/components/Button';
const Hero = () => {
    return (
        <div className='h-[100vh]'>
            <div className="bg-image relative">
                <img src={Blood} className='object-cover absolute translate-x-[-30%] translate-y-[-10%] z-[-10]' alt="Image" srcset="" />
            </div>
  
            <div className="content flex justify-end pt-[12%]"> 
                <div className="w-full max-w-2xl text-right"> 
                    <h1 className='capitalize font-bold text-5xl'>
                        Save life donate <br/> blood
                    </h1>
                    <p className='mt-15 text-2xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius necessitatibus, laudantium quas sit pariatur cupiditate rerum distinctio quo, enim magnam qui perferendis ex ipsum, incidunt labore odio nihil ducimus.
                    </p>

                    <Button className={'text-3xl font-bold mt-15'} text={'Get blood now'} />
                </div>
            </div>
        </div>
    );
};

export default Hero;