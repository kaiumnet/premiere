import React from 'react';
import bannerImage from '../assets/Hero2.png'

const Hero2 = () => {
    return (
        <div>

            <div
                className="bg-cover bg-no-repeat h-[60vh] flex items-center justify-center mb-6"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <div className='text-center w-6/12 mx-auto'>
                    <h2 className="text-white text-4xl my-6 font-bold">Book Now Luxury Listings</h2>
                    <p className='text-purple-600'>Immerse yourself in sophistication with our finest upscale properties—reserve now for an unforgettable experience.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero2;