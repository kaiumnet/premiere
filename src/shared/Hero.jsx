import React from 'react';
import bgImage from "../assets/Hero.png";

const Hero = () => {
    return (
        <div>

            <div
                className="bg-cover bg-no-repeat h-[70vh] flex items-center justify-center relative"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className='text-center w-6/12 mx-auto'>
                    <h2 className="text-white text-4xl my-6">Experience 5-Star Vacation Living with Premier Stays Miami</h2>
                    <p className='text-yellow-400'>Unlock the full potential of your property with our expert management services. We prioritize your success and satisfaction, ensuring a seamless experience every step of the way.</p>
                </div>

                <div className="absolute bottom-0 w-10/12 bg-gray-50 bg-opacity-80 flex justify-center rounded-t-2xl">
                    <fieldset className="fieldset p-10 flex">
                        <input className="input rounded-lg" type="text" placeholder="Search by location" />
                        <input className="input rounded-lg" type="text" placeholder="Check-in  |  Check-out" />
                        <input className="input rounded-lg" type="text" placeholder="Guests" />
                        <button className='btn bg-amber-500 rounded-4xl'>Search Properties</button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Hero;
