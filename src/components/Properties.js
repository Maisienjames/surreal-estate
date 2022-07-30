import { React, useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing/`)
      .then((response) => setProperties(response.data))
      .catch((error) => {
        console.log(error);
        setAlert({
          message: "Server error :(",
        });
      });
  }, []);

  return (
    <div>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="properties">
        <h2>Properties Available</h2>
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
