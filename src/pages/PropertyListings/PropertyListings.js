import PropertyCard from 'components/PropertyCard/PropertyCard';
import React, { useState, useEffect } from 'react';
import './PropertyListings.css';

const PropertyListings = () => {
  const [propertyListings, setPropertyListings] = useState([]);
  const saved = localStorage.getItem('favoriteList');
  const [favList, setFavList] = useState(JSON.parse(saved) || []);

  useEffect(() => {
    getAllProperties();
  }, []);

  const getAllProperties = async () => {
    const config = {
      headers: new Headers({
        Authorization: 'Basic ' + btoa('simplyrets:simplyrets'),
      }),
    };
    try {
      const response = await fetch(
        'https://api.simplyrets.com/properties?status=Active',
        config,
      );
      const data = await response.json();
      setPropertyListings(data);
    } catch (error) {
      throw new Error(`fetch data fail with error message: ${error.message}`);
    }
  };

  const toggleFav = (mlsId) => {
    let favListCopy = [...favList];

    if (favList.includes(mlsId)) {
      favListCopy = favListCopy.filter((id) => id !== mlsId);
    } else {
      favListCopy.push(mlsId);
    }

    localStorage.setItem('favoriteList', JSON.stringify(favListCopy));
    setFavList(favListCopy);
  };

  const propertiesToDisplay = propertyListings.map((listedProperty) => {
    const { address, photos, property, listPrice, listingId, listDate, mlsId } =
      listedProperty;
    return (
      <PropertyCard
        key={listingId}
        address={address}
        photos={photos}
        property={property}
        listPrice={listPrice}
        listDate={listDate}
        mlsId={mlsId}
        isSavedFav={favList.includes(mlsId)}
        onToggleFav={toggleFav}
      />
    );
  });

  return <div className="list_container">{propertiesToDisplay}</div>;
};

export default PropertyListings;
