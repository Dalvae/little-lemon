import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Main, { updateTimes } from "../Main";
import { BrowserRouter as Router } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

jest.mock("../fakeApi", () => ({
  fetchAPI: jest.fn().mockResolvedValue(["19:00", "20:00", "21:00"]),
}));

describe("timesFunctions", () => {
  test("updateTimes sets times correctly", () => {
    const initialState = [];
    const action = {
      type: "SET_TIMES",
      availableTimes: ["19:00", "20:00", "21:00"],
    };
    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(["19:00", "20:00", "21:00"]);
  });
  test("updateAvailableTimes updates times for a selected date", async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={["/bookings"]}>
          <Main />
        </MemoryRouter>
      );
    });

    // Navega al componente BookingForm
    const bookingLink = screen.getByText(/bookings /i); // Asegúrate de que este texto coincida con el enlace o botón en tu UI
    fireEvent.click(bookingLink);

    await waitFor(() => {
      // Ahora busca el input de fecha
      const dateInput = screen.getByLabelText(/choose date/i);
      fireEvent.change(dateInput, { target: { value: "2024-01-27" } });

      // Verifica que los tiempos disponibles se hayan actualizado correctamente
      expect(fetchAPI).toHaveBeenCalledWith("2024-01-27");
      // Otras verificaciones según sea necesario
    });
  });
});
