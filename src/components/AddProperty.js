/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:4000/api/v1/PropertyListing/`, { ...fields })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <div>Add a Property</div>
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            placeholder="Excalibur Cottage"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="type">
          Property Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terrace">Terrace</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          Bedrooms
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="bathrooms">
          Bathrooms
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            placeholder="£300,000"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            value={fields.email}
            placeholder="joebloggs@gmail.com"
            onChange={handleFieldChange}
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
