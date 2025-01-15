export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
  return phoneRegex.test(phoneNumber);
};

export const handleFormatDate = (selectedDate) => {
  if (selectedDate) {
    // Create a new Date object from the selected date
    const date = new Date(selectedDate);
    // Format the date as yyyy-mm-dd
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 because getMonth() returns 0-11
    const day = String(date.getDate()).padStart(2, "0");
    const formatted = `${year}-${month}-${day}`;
    // Set the formatted date to the state
    return formatted;
  }
};
