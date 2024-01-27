// timesFunctions.test.js

import { initializeTimes, updateTimes } from "../Main"; // Adjust the path as necessary

describe("timesFunctions", () => {
  test("initializeTimes returns the correct initial times", () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });

  test("updateTimes returns the same value for the state when no action matches", () => {
    const state = ["17:00", "18:00"];
    const newState = updateTimes(state, { type: "UNKNOWN_ACTION" });
    expect(newState).toEqual(state);
  });
});
