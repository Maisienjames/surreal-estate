import React from "react";
import PropTypes from "prop-types";
import "../styles/property-card.css";

const PropertyCard = (props) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="property-card">
      <div className="property-card__title">{title}</div>
      <div className="property-card__type">{type}</div>
      <div className="property-card__bathrooms">{bathrooms}</div>
      <div className="property-card__bedrooms">{bedrooms}</div>
      <div className="property-card__price">{price}</div>
      <div className="property-card__city">{city}</div>
      <div className="property-card__email">{email}</div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
