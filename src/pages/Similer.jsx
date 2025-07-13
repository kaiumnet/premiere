import React, { useEffect, useState } from "react";

function Similer() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch("/Listing.json")
            .then((res) => res.json())
            .then((data) => setListings(data))
            .catch((error) => console.error("Error loading listings:", error));
    }, []);



    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.slice(0, 3).map((item) => (
                <div key={item.id} className="card bg-base-100 shadow-sm">
                    <figure>
                        <img src={item["img-url"]} alt={item.title} className="rounded-t-lg w-full h-full object-cover" />
                      <div className="absolute top-3 left-0 bg-[#d81159] text-white text-m font-bold px-3 py-2 rounded-tr-2xl rounded-bl-lg shadow-md">
                        FOR RENT
                      </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p className="text-sm text-gray-500"><i className="fa-solid fa-location-dot mx-1"></i>{item.location}</p>
                        <div className="flex justify-between mt-2 text-sm">
                            <span>{item.Beds} Beds</span>
                            <span>{item.bath} Baths</span>
                            <span>{item.Guests} Guests</span>
                        </div>
                        <p className="mt-2 font-bold">${item.Price} / night</p>
                        <p className="text-xs text-blue-500">{item["Last minute"]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Similer;
