import React from 'react';
import image from '../assets/kaium1.png'
import Similer from './Similer';
import { Link } from 'react-router';

const Rating = ({ rating }) => {
    return (
        <div className='mt-10'>

            <section>
                <h2 className='text-2xl font-bold'>
                    What Thousands of Clients Saying
                </h2>

                <div>
                    <div className='flex my-3'>
                        <p>4.9 OUT OF 5</p>

                        {[...Array(5)].map((_, i) => (
                            <span key={i}><i className="fa-solid fa-star text-amber-500"></i></span>
                        ))}

                        <p>10 REVIEWS</p>
                    </div>

                    <p>(88%) People Recommended this Property</p>
                </div>



                <div>
                    <h4 className='font-bold my-6'>All Comments (2,1k)</h4>



                    <div className='flex justify-start items-center gap-4 mt-10'>
                        <img className='max-w-1/12 rounded-full border-1' src={image} alt="" />
                        <div>
                            <p className='font-bold'>Cameron Williamson</p>
                            <p>July, 23 2020</p>
                        </div>
                        <div>
                            {[...Array(5)].map((_, i) => (
                                <span key={i}><i className="fa-solid fa-star text-amber-500"></i></span>
                            ))}
                        </div>
                    </div>

                    <div className='flex justify-start items-center gap-4 mt-10'>
                        <img className='max-w-1/12 rounded-full border-1' src={image} alt="" />
                        <div>
                            <p className='font-bold'>Cameron Williamson</p>
                            <p>July, 23 2020</p>
                        </div>
                        <div>
                            {[...Array(4)].map((_, i) => (
                                <span key={i}><i className="fa-solid fa-star text-amber-500"></i></span>
                            ))}
                        </div>
                    </div>

                    <div className='flex justify-start items-center gap-4 mt-10'>
                        <img className='max-w-1/12 rounded-full border-1' src={image} alt="" />
                        <div>
                            <p className='font-bold'>Cameron Williamson</p>
                            <p>July, 23 2020</p>
                        </div>
                        <div>
                            {[...Array(5)].map((_, i) => (
                                <span key={i}><i className="fa-solid fa-star text-amber-500"></i></span>
                            ))}
                        </div>
                    </div>

                </div>

            </section>

            <section className='mt-20 flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl font-bold my-20'>Explore Similar Listings</h2>
                </div>

                <div>
                    <Link to='/listings'>
                        <i className="fa-solid fa-arrow-left btn mx-2 rounded-full bg-amber-400 p-3 border-1 border-gray-200"></i>
                        <i className="fa-solid fa-arrow-right btn mx-2 rounded-full bg-amber-400 p-3 border-1 border-gray-200"></i></Link>
                </div>


            </section>

            <Similer></Similer>


        </div>
    );
};

export default Rating;
