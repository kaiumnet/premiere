import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { useLoaderData, useParams } from 'react-router';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';






const Details = () => {
    const [date, setDate] = useState(new Date());
    const [activeTab, setActiveTab] = useState("ABOUT");
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
                <div className='flex items-center shadow-sm gap-4 bg-orange-50 p-2 rounded-2xl'>
                    <div className='bg-blue-500 p-2 text-2xl text-amber-50 rounded-lg'>
                        <i class="fa-solid fa-city"></i>
                    </div>
                    <div>
                        <p>Type</p>
                        <h1 className='font-bold'>Private Room / Apartment</h1>
                    </div>
                </div>

                <div className='flex items-center shadow-sm gap-4 bg-orange-50 p-2 rounded-2xl'>
                    <div className='bg-orange-400 p-2 text-white text-2xl rounded-lg'>
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div>
                        <p>Accomodation</p>
                        <h1 className='font-bold'>16+ Guests</h1>
                    </div>
                </div>

                <div className='flex items-center shadow-sm gap-4 bg-orange-50 p-2 rounded-2xl'>
                    <div className='bg-cyan-300 p-2 text-2xl text-amber-50 rounded-lg'>
                        <i class="fa-solid fa-bed"></i>
                    </div>
                    <div>
                        <p>Bedrooms</p>
                        <h1 className='font-bold'>6 Bedrooms / 8 Beds</h1>
                    </div>
                </div>

                <div className='flex items-center shadow-sm gap-4 bg-orange-50 p-2 rounded-2xl'>
                    <div className='bg-purple-900 p-2 text-2xl text-amber-50 rounded-lg'>
                        <i class="fa-solid fa-bath"></i>
                    </div>
                    <div>
                        <p>Bathrooms</p>
                        <h1 className='font-bold'>4 Full 1 Half Baths</h1>
                    </div>
                </div>
            </div>




            <section>
                <div className='my-10 flex justify-around flex-wrap gap-2'>
                    <button
                        onClick={() => setActiveTab("ABOUT")}
                        className={`btn rounded-4xl ${activeTab === "ABOUT" ? 'bg-blue-500 text-white' : ''}`}
                    >
                        ABOUT THIS LISTING
                    </button>
                    <button
                        onClick={() => setActiveTab("DETAILS")}
                        className={`btn rounded-4xl ${activeTab === "DETAILS" ? 'bg-blue-500 text-white' : ''}`}
                    >
                        DETAILS
                    </button>
                    <button
                        onClick={() => setActiveTab("FEATURES")}
                        className={`btn rounded-4xl ${activeTab === "FEATURES" ? 'bg-blue-500 text-white' : ''}`}
                    >
                        FEATURES
                    </button>
                    <button
                        onClick={() => setActiveTab("TERMS")}
                        className={`btn rounded-4xl ${activeTab === "TERMS" ? 'bg-blue-500 text-white' : ''}`}
                    >
                        TERMS & RULES
                    </button>
                    <button
                        onClick={() => setActiveTab("CONTACT")}
                        className={`btn rounded-4xl ${activeTab === "CONTACT" ? 'bg-blue-500 text-white' : ''}`}
                    >
                        CONTACT THE HOST
                    </button>
                </div>



                <div className="bg-base-100 w-10/12 mx-auto rounded-box p-6">
                    {activeTab === "ABOUT" && (

                        <div>
                            <h1 className='text-3xl font-bold border-b-1 border-gray-200 py-4'>
                                About this listing
                            </h1>

                            <h3 className='text-2xl font-bold my-4'>About this space</h3>


                            <p>
                                Enjoy a stylish experience at this centrally-located place in Miami’s Design District/Wynwood. Each side has 3BR/2.5BA (6 bdrms, 4 baths, 2 half baths)with an amazing heated pool. Ideal for large gatherings. Pick your side! Located just a short walk away from the Design District Shops, Wynwood and Midtown Miami Restaurants and Nightlife.
                            </p>

                            <h3 className='text-2xl font-bold my-3'>The space</h3>

                            <p>
                                Feel Free to Come and Go as you please. We have 2 awesome Grills to throw a BBQ and will provide any assistance to help you have the Miami Vacation of your dreams!
                                <br />
                                <br />
                                Smoking is allowed outside only. Smoking of any substance is not allowed in the apartment. Guest will be held responsible for all damage caused by the smoking including, but not limited to, stains, burns, odors, and removal of debris. Guest acknowledges that in order to remove odor caused by smoking, the Host may need to replace blinds, drapes and paint the interior walls regardless of when these items were last cleaned, replaced, or repainted.
                            </p>

                            <h3 className='text-2xl font-bold my-3'>Guest access</h3>
                            <p>
                                Upon request: Outside guests are more than welcome to come join you to enjoy the property, backyard/ pool area for small get togethers.
                                Upon checkout: please leave gate key/opener on the glass table at the entryway. Failure to do so will result in a $100 replacement fee.
                            </p>


                        </div>
                    )}

                    {activeTab === "DETAILS" && (
                        <div>
                            <h1 className='text-3xl font-bold border-b-1 border-gray-200 py-4'>
                                DETAILS
                            </h1>

                            <h3 className='text-2xl font-bold my-4'>DETAILS</h3>


                            <p>
                                Enjoy a stylish experience at this centrally-located place in Miami’s Design District/Wynwood. Each side has 3BR/2.5BA (6 bdrms, 4 baths, 2 half baths)with an amazing heated pool. Ideal for large gatherings. Pick your side! Located just a short walk away from the Design District Shops, Wynwood and Midtown Miami Restaurants and Nightlife.
                            </p>

                            <h3 className='text-2xl font-bold my-3'>DETAILS</h3>

                            <p>
                                Feel Free to Come and Go as you please. We have 2 awesome Grills to throw a BBQ and will provide any assistance to help you have the Miami Vacation of your dreams!
                                <br />
                                <br />
                                Smoking is allowed outside only. Smoking of any substance is not allowed in the apartment. Guest will be held responsible for all damage caused by the smoking including, but not limited to, stains, burns, odors, and removal of debris. Guest acknowledges that in order to remove odor caused by smoking, the Host may need to replace blinds, drapes and paint the interior walls regardless of when these items were last cleaned, replaced, or repainted.
                            </p>

                            <h3 className='text-2xl font-bold my-3'>DETAILS</h3>
                            <p>
                                Upon request: Outside guests are more than welcome to come join you to enjoy the property, backyard/ pool area for small get togethers.
                                Upon checkout: please leave gate key/opener on the glass table at the entryway. Failure to do so will result in a $100 replacement fee.
                            </p>


                        </div>
                    )}

                    {activeTab === "FEATURES" && (
                        <div>
                            <h1 className='text-3xl font-bold border-b-1 border-gray-200 py-4'>
                                FEATURES
                            </h1>

                            <h3 className='text-2xl font-bold my-4'>FEATURES</h3>


                            <p>
                                Enjoy a stylish experience at this centrally-located place in Miami’s Design District/Wynwood. Each side has 3BR/2.5BA (6 bdrms, 4 baths, 2 half baths)with an amazing heated pool. Ideal for large gatherings. Pick your side! Located just a short walk away from the Design District Shops, Wynwood and Midtown Miami Restaurants and Nightlife.
                            </p>

                            <h3 className='text-2xl font-bold my-3'>FEATURES</h3>

                            <p>
                                Feel Free to Come and Go as you please. We have 2 awesome Grills to throw a BBQ and will provide any assistance to help you have the Miami Vacation of your dreams!
                                <br />
                                <br />
                                Smoking is allowed outside only. Smoking of any substance is not allowed in the apartment. Guest will be held responsible for all damage caused by the smoking including, but not limited to, stains, burns, odors, and removal of debris. Guest acknowledges that in order to remove odor caused by smoking, the Host may need to replace blinds, drapes and paint the interior walls regardless of when these items were last cleaned, replaced, or repainted.
                            </p>

                            <h3 className='text-2xl font-bold my-3'>FEATURES</h3>
                            <p>
                                Upon request: Outside guests are more than welcome to come join you to enjoy the property, backyard/ pool area for small get togethers.
                                Upon checkout: please leave gate key/opener on the glass table at the entryway. Failure to do so will result in a $100 replacement fee.
                            </p>


                        </div>
                    )}

                    {activeTab === "TERMS" && (
                        <div>
                            <h1 className='text-3xl font-bold border-b-1 border-gray-200 py-4'>
                                Terms & rules
                            </h1>

                            <h3 className='text-2xl font-bold my-4'>Terms & rules</h3>


                            <p>
                                Enjoy a stylish experience at this centrally-located place in Miami’s Design District/Wynwood. Each side has 3BR/2.5BA (6 bdrms, 4 baths, 2 half baths)with an amazing heated pool. Ideal for large gatherings. Pick your side! Located just a short walk away from the Design District Shops, Wynwood and Midtown Miami Restaurants and Nightlife.
                            </p>

                            <h3 className='text-2xl font-bold my-3'>Terms & rules</h3>

                            <p>
                                Feel Free to Come and Go as you please. We have 2 awesome Grills to throw a BBQ and will provide any assistance to help you have the Miami Vacation of your dreams!
                                <br />
                                <br />
                                Smoking is allowed outside only. Smoking of any substance is not allowed in the apartment. Guest will be held responsible for all damage caused by the smoking including, but not limited to, stains, burns, odors, and removal of debris. Guest acknowledges that in order to remove odor caused by smoking, the Host may need to replace blinds, drapes and paint the interior walls regardless of when these items were last cleaned, replaced, or repainted.
                            </p>

                            <h3 className='text-2xl font-bold my-3'>Terms & rules</h3>
                            <p>
                                Upon request: Outside guests are more than welcome to come join you to enjoy the property, backyard/ pool area for small get togethers.
                                Upon checkout: please leave gate key/opener on the glass table at the entryway. Failure to do so will result in a $100 replacement fee.
                            </p>


                        </div>
                    )}

                    {activeTab === "CONTACT" && (
                        <div>
                            <h1 className='text-3xl font-bold border-b-1 border-gray-200 py-4'>
                                Contact the host
                            </h1>

                            <h3 className='text-2xl font-bold my-4'>Contact the host</h3>


                            <p>
                                Phone: (123) 767-2068
                                <br />
                                <br />
                                Email : imfo@premierestaysmiami.com
                                <br />
                                <br />
                                #1 Darling Street, St. Thomas Village, Chaguanas, Trinidad &
                            </p>


                        </div>
                    )}
                </div>
            </section>



            <section className="my-10 w-10/12 mx-auto p-6 rounded-box bg-base-100 shadow">
                <div className='flex items-center gap-4'>
                    <h2 className="text-3xl font-bold mb-4">Availability</h2>
                    <p><i class="fa-solid fa-calendar-days"></i>The minimum stay is 2 Nights</p>
                    <p><i class="fa-solid fa-calendar-days"></i>The maximum stay is 365 Nights</p>
                </div>
                
                <Calendar
                    onChange={setDate}
                    value={date}
                />
                <p className="mt-4">Selected date: {date.toDateString()}</p>
            </section>







            <Footer />
        </div>
    );
};

export default Details;
