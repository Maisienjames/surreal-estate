/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState("");
  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((error) => {
        console.log(error);
        setAlert({
          message: "Server error :(",
        });
      });
  }, [search]);

  return (
    <div>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="properties">
        <Sidebar />
        <div className="properties__wrap">
          <h2>Properties Available</h2>
          {properties.map((property) => (
            <PropertyCard key={property._id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
