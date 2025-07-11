import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { useLoaderData, useParams } from 'react-router';





const Details = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const listing = data.find(item => item.id === parseInt(id));


    return (
        <div>
            <Navbar />

            <div className="card lg:card-side bg-base-100 my-20 gap-8 max-w-10/12 mx-auto">
                <div className='w-8/12'>
                    <figure>
                        <img className='rounded-2xl'
                            src={listing["img-url"]}
                            alt={listing.title}
                        />
                    </figure>
                </div>
                <div className="card-body shadow-xs border-1 border-gray-200 rounded-2xl">
                    <h2 className="text-2xl">{listing.title}</h2>
                    <p className="text-gray-600 border-b-1 border-gray-300"><i class="fa-solid fa-location-dot"></i> {listing.location}</p>
                    <div className=''>
                        <select className="select border-1 rounded-2xl">
                            <option disabled={false}>Guests</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="my-2 space-y-1">
                        <p className='flex justify-between border-1 border-gray-200 p-2 rounded-2xl font-bold'><span>Beds:</span> {listing.Beds}</p>
                        <p className='flex justify-between border-1 border-gray-200 p-2 rounded-2xl font-bold'><span>Bath:</span> {listing.bath}</p>
                        <p className='flex justify-between border-1 border-gray-200 p-2 rounded-2xl font-bold'><span>Guests:</span> {listing.Guests}</p>
                    </div>
                    <div>
                        <input className='p-2 w-full border-1 border-gray-200 rounded-lg' type="email" name="" id="" placeholder='Enter Your Email' />
                    </div>
                    <div className="flex justify-center items-center border-1 border-gray-200 p-2 rounded-2xl">
                        <p className='font-bold text-lg text-blue-500'>Price: ${listing.Price}/Night</p>
                        <button className="btn bg-amber-500 rounded-4xl">Book Now</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-around gap-4'>
                <div className='flex items-center gap-4 bg-orange-50 p-2 rounded-2xl'>
                    <div className='bg-blue-500 p-2 text-2xl text-amber-50 rounded-lg'>
                        <i class="fa-solid fa-city"></i>
                    </div>
                    <div>
                        <p>Type</p>
                        <h1 className='font-bold'>Private Room / Apartment</h1>
                    </div>
                </div>

                <div className='flex items-center gap-4 bg-orange-50 p-2 rounded-2xl'>
                    <div className='bg-orange-400 p-2 text-white text-2xl rounded-lg'>
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div>
                        <p>Accomodation</p>
                        <h1 className='font-bold'>16+ Guests</h1>
                    </div>
                </div>

                <div className='flex items-center gap-4 bg-orange-50 p-2 rounded-2xl'>
                    <div className='bg-cyan-300 p-2 text-2xl text-amber-50 rounded-lg'>
                        <i class="fa-solid fa-bed"></i>
                    </div>
                    <div>
                        <p>Bedrooms</p>
                        <h1 className='font-bold'>6 Bedrooms / 8 Beds</h1>
                    </div>
                </div>

                <div className='flex items-center gap-4 bg-orange-50 p-2 rounded-2xl'>
                    <div className='bg-purple-900 p-2 text-2xl text-amber-50 rounded-lg'>
                        <i class="fa-solid fa-bath"></i>
                    </div>
                    <div>
                        <p>Bathrooms</p>
                        <h1 className='font-bold'>4 Full 1 Half Baths</h1>
                    </div>
                </div>
            </div>


<div>
    <button>About this listing</button>
</div>



            <Footer />
        </div>
    );
};

export default Details;
