import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import BookingForm from "./BookingForm";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    const selectedDate = action.selectedDate;

    // Implement logic to update times based on selectedDate
    if (selectedDate === "2023-07-04") {
      return ["18:00", "19:00", "20:00"]; // Example for a specific date
    } else {
      return initializeTimes(); // Return default times for other dates
    }
  }

  return state; // No change for other actions
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/bookings"
          element={
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
