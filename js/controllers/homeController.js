// ---- Home page controller
// - Variables
const buttonLogoutDOM = document.querySelector(".logout-button");

// - Update current time
setInterval(updateCurrentTime, 1000);

// Update current day
updateCurrentDay();

// - Update Refresh counter
setInterval(updateCounter, 1000);

// - Logout button
buttonLogoutDOM.addEventListener("click", callLogout);