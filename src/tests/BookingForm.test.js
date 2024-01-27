// BookingForm.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

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
      <BookingForm availableTimes={mockAvailableTimes} dispatch={() => {}} />
    );
    const headingElement = screen.getByText(/book now/i);
    expect(headingElement).toBeInTheDocument();
  });
});
