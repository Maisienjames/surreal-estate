import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

test("renders Surreal Estate homepage", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const HTMLElement = screen.getByText("View Properties");
  expect(HTMLElement).toBeInTheDocument();
});
