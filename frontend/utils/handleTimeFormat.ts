const formatTime = (isoString: string) => {
  const date = new Date(isoString);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  //   @ts-ignore
  const formattedTime = date.toLocaleTimeString([], options);

  // Thay thế dấu cách không ngắt dòng (U+202F) bằng dấu cách bình thường (U+0020)
  return formattedTime.replace(/\u202F/g, " ");
};

export default formatTime;

function convertToISOString(timeString: string) {
  const today = new Date();

  const [time, period] = timeString.split(" "); // Split "2:50" and "AM"
  const [hour, minute] = time.split(":").map(Number);
  let hours = hour;

  // Convert 12-hour format to 24-hour format
  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0; // 12 AM is midnight
  }

  // Set the time on today's date object
  today.setHours(hours);
  today.setMinutes(minute);
  today.setSeconds(0);
  today.setMilliseconds(0);

  // Convert the local date and time to UTC and return the ISO string
  const utcDate = new Date(today.toISOString());
  return utcDate.toISOString();
}
export { convertToISOString };
