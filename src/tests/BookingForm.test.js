// BookingForm.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";
import { BrowserRouter as Router } from "react-router-dom";

describe("BookingForm Component", () => {
  test('renders the heading "Book Now"', () => {
    const mockAvailableTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    render(
      <Router>
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={() => {}}
          updateAvailableTimes={() => {}}
          onSubmit={() => {}}
        />
      </Router>
    );
    const headingElement = screen.getByText(/book now/i);
    expect(headingElement).toBeInTheDocument();
  });
});
