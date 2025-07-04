import React from 'react';
import bgImage from "../assets/Hero.png";

const Hero = () => {
    return (
        <div className='h-screen'>
            <div
                className="bg-cover bg-no-repeat h-[70%] flex items-center justify-center relative"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className='text-center w-6/12 mx-auto'>
                    <h2 className="text-white text-4xl my-6">Experience 5-Star Vacation Living with Premier Stays Miami</h2>
                    <p className='text-yellow-400'>Unlock the full potential of your property with our expert management services. We prioritize your success and satisfaction, ensuring a seamless experience every step of the way.</p>

                </div>

                <div className="absolute bottom-0 w-8/12 bg-gray-50 bg-opacity-80 flex justify-center rounded-t-2xl">
                    <fieldset className="fieldset p-4 w-3/12">
                        <legend className="fieldset-legend font-semibold">What is your name?</legend>
                        <input type="text" className="input border border-gray-300 rounded p-2 w-full" placeholder="Search by location" />
                        <p className="label text-sm text-gray-700 mt-1">Optional</p>
                    </fieldset>
                </div>

            </div>
        </div>
    );
};

export default Hero;
