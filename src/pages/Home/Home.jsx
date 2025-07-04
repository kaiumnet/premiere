import React from 'react';
import logo1 from "../../assets/Airbnb.png";
import logo2 from "../../assets/Booking.png";
import logo3 from "../../assets/Expedia.png";
import logo4 from "../../assets/Hotels.png";
import logo5 from "../../assets/Vrbo.png";
import aboutPhoto from "../../assets/about.png"
import featurePhoto from "../../assets/Feature.png"
import { FaFileInvoiceDollar, FaHouse, FaLocationDot, FaShield } from 'react-icons/fa6';


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
                    <h3 className='text-2xl text-fuchsia-400'>About Us</h3>
                    <h2 className='text-4xl my-4'>We offer Unique Places Suitable for your Comfort</h2>
                    <p className='text-sm'>At Premierestays Miami, our mission is to deliver exceptional property management services that exceed guest expectations through Careful attention to detail and unwavering commitment to quality. We strive to maintain the highest standards in the industry, ensuring every property we manage is not only maintained but elevated, creating seamless and memorable guest experiences that reflect our dedication to excellence.</p>
                    <button className='btn bg-amber-500 rounded-4xl my-6'>Learn More</button>
                </div>
            </div>


            <div className='bg-orange-50 text-center py-20'>
                <div>
                    <h3 className='text-2xl text-fuchsia-400'>Our Feature</h3>
                    <h2 className='text-4xl my-6'>Our Featured Properties</h2>
                </div>


                <div className="w-10/12 mx-auto grid grid-cols-2 gap-10 py-20">
                    <div className='grid grid-cols-2 grid-rows-2 gap-4 mx-auto'>
                        <div className="card bg-base-100 card-lg shadow-sm text-left">
                            <div className="card-body">
                                <FaHouse className="text-6xl text-orange-500 bg-blue-100 p-2 rounded-full" />
                                <h2 className="text-lg">1 Direct Booking with No Service Fees</h2>
                                <p className='text-xs'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            </div>
                        </div>



                        <div className="card bg-base-100 card-lg shadow-sm text-left">
                            <div className="card-body">
                                <FaLocationDot className="text-6xl text-blue-500 bg-orange-200 p-2 rounded-full" />
                                <h2 className="text-lg">2 Direct Booking with No Service Fees</h2>
                                <p className='text-xs'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            </div>
                        </div>




                        <div className="card bg-base-100 card-lg shadow-sm text-left">
                            <div className="card-body">
                                <FaShield className="text-6xl text-white bg-indigo-400 p-2 rounded-full" />
                                <h2 className="text-lg">3 Direct Booking with No Service Fees</h2>
                                <p className='text-xs'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            </div>
                        </div>



                        <div className="card bg-base-100 card-lg shadow-sm text-left">
                            <div className="card-body">
                                <FaFileInvoiceDollar className="text-6xl text-indigo-500 bg-orange-300 p-2 rounded-full" />
                                <h2 className="text-lg">4 Direct Booking with No Service Fees</h2>
                                <p className='text-xs'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            </div>
                        </div>
                    </div>






                    <div className='grid grid-cols-2 grid-rows-2'>
                        <div className="card bg-linear-to-b from-cyan-50 to-blue-100 card-lg shadow-sm text-left col-span-2 row-span-2 relative">
                            <div className="card-body justify-center">
                                <img src={featurePhoto} alt="" />
                                <div className='bg-base-100 p-4 w-6/12 rounded-lg absolute bottom-[-30px] left-56'>
                                    <h3 className='font-bold'>Find the best deal</h3>
                                    <p className='text-xs'>Browse thousands of properties</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Home;