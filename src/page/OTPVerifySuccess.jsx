import React from 'react';
import VerifyLayout from './layouts/VerifyLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const OTPVerifySuccess = () => {
    return (
        <VerifyLayout>
            <div className='p-5 rounded-4xl border-gray-300 border-2 w-fit mx-auto'>
                <FontAwesomeIcon icon={faCheck} className='text-7xl text-green-700' />
            </div>
            <h1 className='text-2xl font-bold my-4'>OTP Verification Successful</h1>
        </VerifyLayout>
    );
};

export default OTPVerifySuccess;