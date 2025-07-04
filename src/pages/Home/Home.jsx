import React from 'react';
import logo1 from "../../assets/Airbnb.png";
import logo2 from "../../assets/Booking.png";
import logo3 from "../../assets/Expedia.png";
import logo4 from "../../assets/Hotels.png";
import logo5 from "../../assets/Vrbo.png";
import aboutPhoto from "../../assets/about.png"


const Home = () => {
    return (
        <div>
            <div className=' bg-amber-50'>
                <div className='flex justify-between items-center w-10/12 mx-auto py-10'>
                    <h2 className='font-bold text-2xl'>Our Trusted Partners</h2>
                    <p className='w-4/12 text-sm'>We proudly partner with leading booking platforms to ensure maximum visibility for our properties. Check out the platforms where you can find us!</p>
                </div>
                <div className='w-10/12 mx-auto flex justify-around gap-5 pb-30'>
                    <button className='bg-white p-2 rounded-2xl'><img src={logo1} alt="" /></button>
                    <button className='bg-white p-2 rounded-2xl'><img src={logo2} alt="" /></button>
                    <button className='bg-white p-2 rounded-2xl'><img src={logo3} alt="" /></button>
                    <button className='bg-white p-2 rounded-2xl'><img src={logo4} alt="" /></button>
                    <button className='bg-white p-2 rounded-2xl'><img src={logo5} alt="" /></button>
                </div>
            </div>


            <div className='flex justify-between gap-20 p-10 w-11/12 mx-auto my-20'>
                <img className='w-4/12 rounded-2xl' src={aboutPhoto} alt="" />
                <div>
                    <h3 className='text-2xl'>About Us</h3>
                    <h2 className='text-4xl my-4'>We offer Unique Places Suitable for your Comfort</h2>
                    <p className='text-sm'>At Premierestays Miami, our mission is to deliver exceptional property management services that exceed guest expectations through Careful attention to detail and unwavering commitment to quality. We strive to maintain the highest standards in the industry, ensuring every property we manage is not only maintained but elevated, creating seamless and memorable guest experiences that reflect our dedication to excellence.</p>
                    <button className='btn bg-amber-500 rounded-4xl my-6'>Learn More</button>
                </div>
            </div>

        </div>
    );
};

export default Home;