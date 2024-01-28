import React, { useState, useEffect } from "react";

function BookingForm({ availableTimes, updateAvailableTimes, onSubmit }) {
  const getCurrentDate = () => new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    date: getCurrentDate(),
    time: availableTimes.length > 0 ? availableTimes[0] : "",
    guests: 1,
    occasion: "Birthday",
  });
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    updateAvailableTimes(formData.date);
    // Validate time whenever available times change
    if (!availableTimes.includes(formData.time)) {
      setFormData({
        ...formData,
        time: availableTimes.length > 0 ? availableTimes[0] : "",
      });
    }
  }, [formData.date, updateAvailableTimes, availableTimes]);

  useEffect(() => {
    // Perform additional validation here if needed
    setIsFormValid(
      formData.date &&
        availableTimes.includes(formData.time) &&
        formData.guests > 0
    );
  }, [formData, availableTimes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit(formData);
    } else {
      console.error("The form is invalid.");
    }
  };

  return (
    <>
      <h1>Book Now</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleInputChange}
          min="1"
          max="10"
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleInputChange}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your Reservation"
          disabled={!isFormValid}
        />
      </form>
    </>
  );
}

export default BookingForm;
