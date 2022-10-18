// ---- Home page controller
// - Variables
const buttonLogoutDOM = document.querySelector(".logout-button");

// - Login check
homeCheckStorageAuth();

// - Update current time
setInterval(updateCurrentTime, 1000);

// Update current day
updateCurrentDay();

// Update weather
weatherLocation();

// - Update Refresh counter
setInterval(updateCounter, 1000);

// - Logout button
buttonLogoutDOM.addEventListener("click", callLogout);
