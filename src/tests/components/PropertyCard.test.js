/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "Stub title",
    type: "Stub type",
    bathrooms: 11,
    bedrooms: 5,
    price: 1111111,
    city: "Manchester",
    email: "joebloggs@gmail.com",
  };

  test("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders correct values for props", () => {
    const { getByText } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(getByText("Stub title")).toHaveClass("property-card__title");
    expect(getByText("Stub type")).toHaveClass("property-card__type");
    expect(getByText(11)).toHaveClass("property-card__bathrooms");
    expect(getByText(5)).toHaveClass("property-card__bedrooms");
    expect(getByText(1111111)).toHaveClass("property-card__price");
    expect(getByText("Manchester")).toHaveClass("property-card__city");
    expect(getByText("joebloggs@gmail.com")).toHaveClass("property-card__email");
  });
});
