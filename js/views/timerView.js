// ---- Timer View
// - Variables
const timerContainerDOM = document.querySelector(".timer-container");
const timerHourDOM = timerContainerDOM.querySelector(".timer-hour");
const timerDayDOM = timerContainerDOM.querySelector(".timer-day");
const refreshCounterDOM = document.querySelector(".refresh-counter");

// - Update Time
function updateCurrentTime() {
  timerHourDOM.textContent = getCurrentTime();
}
// - Update Day
function updateCurrentDay() {
  timerDayDOM.textContent = getCurrentDay();
}

// - Update Counter
function updateCounter() {
  refreshCounterDOM.textContent = refreshCounter();
}
