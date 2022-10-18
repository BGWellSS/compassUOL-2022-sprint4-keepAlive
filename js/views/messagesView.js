// ---- Messages View
// - Invalid User/Password message
function invalidAuth(message = "") {
  const invalidMessageDOM = document.querySelector(".message-text");
  invalidMessageDOM.textContent = message;
}

// - Clear Invalid message
function clearInvalidAuth() {
  const invalidMessageDOM = document.querySelector(".message-text");
  invalidMessageDOM.textContent = "";
}
