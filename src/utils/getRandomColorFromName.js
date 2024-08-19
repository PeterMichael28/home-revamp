export function getRandomColorFromName(name) {
  // Convert the name to a lowercase string and remove spaces
  const processedName = name.toLowerCase().replace(/\s/g, "");

  // Create a hash value based on the name using a seed value
  let hash = 0;
  for (let i = 0; i < processedName.length; i++) {
    hash = (hash << 5) - hash + processedName.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Extract RGB values from the hash and convert to hex format
  const r = (hash & 0xff0000) >> 16;
  const g = (hash & 0x00ff00) >> 8;
  const b = hash & 0x0000ff;
  const hexColor =
    "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");

  return hexColor;
}

// FORMAT DATE TIME
export const formatDateTime = (dateString) => {
  const dateTimeOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dateDayOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    year: "numeric", // numeric year (e.g., '2023')
    month: "2-digit", // abbreviated month name (e.g., 'Oct')
    day: "2-digit", // numeric day of the month (e.g., '25')
  };

  const dateOptions = {
    month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
  };

  const timeOptions = {
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const customDateOptions = {
    month: "short", // abbreviated month name (e.g., 'Mar')
    day: "2-digit", // numeric day of the month with leading zero (e.g., '12')
    year: "numeric", // numeric year (e.g., '2024')
  };

  const formattedDateTime = new Date(dateString).toLocaleString("en-US", dateTimeOptions);

  const formattedDateDay = new Date(dateString).toLocaleString("en-US", dateDayOptions);

  const formattedDate = new Date(dateString).toLocaleString("en-US", dateOptions);

  const formattedTime = new Date(dateString).toLocaleString("en-US", timeOptions);

  const formattedCustomDate = new Date(dateString).toLocaleString("en-US", customDateOptions);

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
    customDate: formattedCustomDate,
    //  customDate: formattedCustomDate.replace(',', ''),
  };
};
