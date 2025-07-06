import React from 'react';
import { useEffect } from 'react';

const Listings = () => {

  useEffect(() => {
    fetch('Listing.json')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log('Error:', err));
  }, []);

    return (
        <div>
            
        </div>
    );
};

export default Listings;