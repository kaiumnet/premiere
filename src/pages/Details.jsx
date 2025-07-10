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
                <div>
                    <figure className="w-full h-full">
                        <img className='rounded-2xl'
                            src={listing["img-url"]}
                            alt={listing.title}
                        />
                    </figure>
                </div>
                <div className="card-body shadow-md">
                    <h2 className="text-2xl">{listing.title}</h2>
                    <p className="text-gray-600 border-b-1 border-gray-300"><i class="fa-solid fa-location-dot"></i> {listing.location}</p>
                    <div className="my-4 space-y-1">
                        <p>Beds: {listing.Beds}</p>
                        <p>Bath: {listing.bath}</p>
                        <p>Guests: {listing.Guests}</p>
                        <p>Price: {listing.Price}</p>
                        <p>{listing["Last minute"]}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>

            <div className="dropdown mb-20">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <div
                    tabIndex={0}
                    className="dropdown-content bg-base-100 z-50">
                    <div className="card-body">
                        <p>Feel Free to Come and Go as you please. We have 2 awesome Grills to throw a BBQ and will provide any assistance to help you have the Miami Vacation of your dreams!
                            Smoking is allowed outside only. Smoking of any substance is not allowed in the apartment. Guest will be held responsible for all damage caused by the smoking including, but not limited to, stains, burns, odors, and removal of debris. Guest acknowledges that in order to remove odor caused by smoking, the Host may need to replace blinds, drapes and paint the interior walls regardless of when these items were last cleaned, replaced, or repainted.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Details;
