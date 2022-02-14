import React, { useState } from 'react';
import './PropertyCard.css';
import { getFormattedPrice } from '../../utils/get-formatted-price';
import { getFormattedDate } from 'utils/get-formatted-date';
import { getBathCount } from 'utils/get-bath-count';
import heartFill from '../../assets/heart-fill.svg';
import heartStroke from '../../assets/heart-stroke.svg';

const PropertyCard = ({
  address,
  photos,
  property,
  listPrice,
  listDate,
  mlsId,
  isSavedFav,
  onToggleFav,
}) => {
  const { bedrooms, bathsFull, bathsHalf, area } = property;
  const { streetNumberText, streetName, city, state } = address;

  const [isFav, setIsFav] = useState(isSavedFav);

  const toggleFav = (id) => {
    console.log('isFav: ', isFav);
    setIsFav(!isFav);
    onToggleFav(id);
  };

  return (
    <div className="card">
      <div className="img_container">
        <img className="property_img" src={photos[0]} alt="house pic" />
        <img
          data-testid="heartIcon"
          src={isFav ? heartFill : heartStroke}
          className="heart-icon"
          alt="favorite icon"
          onClick={() => toggleFav(mlsId)}
        />
      </div>
      <div className="info">
        <div className="info_area">
          {bedrooms} BR | {getBathCount(bathsFull, bathsHalf)} Bath | {area} Sq
          Ft
        </div>
        <div className="info_price">{getFormattedPrice(listPrice)}</div>
        <div className="info_address">
          {streetNumberText} {streetName}, {city}, {state}
        </div>
        <div className="info_date">Listed: {getFormattedDate(listDate)}</div>
      </div>
    </div>
  );
};

export default PropertyCard;
