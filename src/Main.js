//Main.js
import React, { useEffect, useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./fakeApi";
import ConfirmedBooking from "./ConfirmedBooking";

// // Reducer para manejar los tiempos disponibles
// const timesReducer = (state, action) => {
//   if (action.type === "SET_TIMES") {
//     return action.availableTimes;
//   }
//   return state;
// };

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return action.availableTimes || [];
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const navigate = useNavigate();

  // Función para manejar la presentación del formulario
  const submitForm = async (formData) => {
    const isSubmitted = await submitAPI(formData);
    if (isSubmitted) {
      navigate("/confirmed-booking");
    }
  };

  // Función para actualizar los tiempos disponibles basados en la fecha seleccionada
  const updateAvailableTimes = async (selectedDate) => {
    try {
      const times = await fetchAPI(selectedDate);
      dispatch({ type: "SET_TIMES", availableTimes: times });
    } catch (error) {
      console.error("Error fetching times:", error);
    }
  };

  useEffect(() => {
    // Obtener los tiempos disponibles para el día actual al cargar el componente
    const today = new Date().toISOString().split("T")[0];
    updateAvailableTimes(today);
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/bookings"
          element={
            <BookingForm
              availableTimes={availableTimes}
              updateAvailableTimes={updateAvailableTimes}
              onSubmit={submitForm}
            />
          }
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
