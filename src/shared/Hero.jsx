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
                    <fieldset className="fieldset p-4 flex">
                        <input type="text" placeholder="neutral" className="input input-neutral" />
                        <input type="text" placeholder="Primary" className="input input-primary" />
                        <input type="text" placeholder="Secondary" className="input input-secondary" />
                        <input type="text" placeholder="Accent" className="input input-accent" />
                    </fieldset>
                </div>

            </div>
        </div>
    );
};

export default Hero;
