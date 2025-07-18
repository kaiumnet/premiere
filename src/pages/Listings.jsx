import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Hero2 from '../shared/Hero2';

import { NavLink } from 'react-router-dom';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    fetch('Listing.json')
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.log('Error:', err));
  }, []);

  const totalPages = Math.ceil(listings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentListings = listings.slice(startIndex, endIndex);

  return (
    <div>
      <Navbar />
      <Hero2 />
      <div>
        <h2 className='text-2xl text-center'>Properties</h2>
        <div className='p-10'>
          <div className="listings-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentListings.length === 0 ? (
              <p>Loading listings...</p>
            ) : (
              currentListings.map((item, index) => (

                <NavLink key={item.id} to={`/details/${item.id}`}>
                  <div className="card bg-base-100 shadow-sm cursor-pointer">
                    <figure className="relative">
                      <img
                        src={item['img-url']}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-0 bg-[#d81159] text-white text-m font-bold px-3 py-2 rounded-tr-2xl rounded-bl-lg shadow-md">
                        FOR RENT
                      </div>
                      <div
                        className="absolute w-8/12 bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 text-white font-bold p-2 flex space-x-2 rounded-2xl"
                        style={{ maxWidth: '80%', backgroundColor: 'rgba(223, 230, 233, 0.5)' }}
                      >
                        <p className="mb-0 text-center flex items-center space-x-1">
                          <i className="fa-solid fa-bed"></i>
                          <span>Beds: {item.Beds}</span>
                        </p>
                        <p className="mb-0 text-center flex items-center space-x-1">
                          <i className="fa-solid fa-bath"></i>
                          <span>Bath: {item.bath}</span>
                        </p>
                      </div>
                    </figure>

                    <div className="card-body space-y-0">
                      <h2 className="mb-0 font-bold">{item.title}</h2>
                      <p className=" text-xs mb-0">
                        <i className="fa-solid fa-location-dot"></i> {item.location}
                      </p>
                      <p className="mb-0">{item['Last minute']}</p>
                    </div>
                  </div>
                </NavLink>

              ))
            )}
          </div>


          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-md cursor-pointer ${currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-black'
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Listings;
