import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const listing = data.find(item => item.id === parseInt(id));


    if (!listing) {
        return <div className="text-center text-red-500 mt-10">Listing not found!</div>;
    }

    return (
        <div className='max-w-10/12 mx-auto'>
            <Navbar />

            <div className="card lg:card-side bg-base-100 my-20 gap-8">
                <div>
                    <figure className="w-full h-full">
                        <img className='rounded-2xl'
                            src={listing["img-url"]}
                            alt={listing.title}
                            />
                    </figure>
                </div>
                <div className="card-body shadow-md">
                    <h2 className="card-title">{listing.title}</h2>
                    <p className="text-gray-600 border-b-1"><i class="fa-solid fa-location-dot"></i> {listing.location}</p>
                    <ul className="my-4 space-y-1">
                        <li>Beds: {listing.Beds}</li>
                        <li>Bath: {listing.bath}</li>
                        <li>Guests: {listing.Guests}</li>
                        <li>Price: {listing.Price}</li>
                        <li>{listing["Last minute"]}</li>
                    </ul>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>

            <div>
                <button className='btn rounded-4xl'>About this listing</button>
                <button className='btn rounded-4xl'>Details</button>
                <button className='btn rounded-4xl'>Features</button>
                <button className='btn rounded-4xl'>Terms & rules</button>
                <button className='btn rounded-4xl'>Contact the host</button>
            </div>

            <Footer />
        </div>
    );
};

export default Details;
