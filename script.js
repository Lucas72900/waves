const currentTime = document.getElementById("current-time");

function updateTime() {
  const date = new Date();
  // Format the date to EST using toLocaleTimeString with options
  const formattedTime = date.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
  currentTime.textContent = "Current Time in EST: " + formattedTime;
}

// Call the updateTime function initially to display the time on page load
updateTime();

// Update the time every second (you can adjust the interval as needed)
setInterval(updateTime, 1000);
