const times = {
  "2024-01-27": ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  "2024-01-28": ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
};

export const fetchAPI = (date) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(times[date] || []);
    }, 1000);
  });
};

export const submitAPI = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted with data:", formData);
      // You can add logic here to simulate various scenarios,
      // such as a successful submission or an error.
      resolve(true); // Simulates a successful submission.
    }, 1000);
  });
};
