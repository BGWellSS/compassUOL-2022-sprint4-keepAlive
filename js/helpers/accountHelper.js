// ---- Account functions Helper
// - Variables
const userIconDOM = document.querySelector(".user-container");
const passIconDOM = document.querySelector(".password-container");
const loginUserDOM = document.querySelector("#userInput");
const loginPassWDOM = document.querySelector("#pwInput");
const userMocKAuth = "admin";
const passMockAuth = "admin";

// - Verify Account
function verifyAccount(event) {
  event.preventDefault();
  clearInvalidAuth();
  if (
    loginUserDOM.value == userMocKAuth &&
    loginPassWDOM.value == passMockAuth
  ) {
    storageAuth();
    checkStorageAuth();
  } else {
    loginUserDOM.classList.add("invalid");
    loginPassWDOM.classList.add("invalid");
    invalidAuth("Ops, usuário ou senha inválidos. Tente novamente!");
  }
}

// - Input icon animation
loginUserDOM.addEventListener("input", function () {
  loginUserDOM.value.length > 0
    ? userIconDOM.classList.add("keydown")
    : userIconDOM.classList.remove("keydown");
});
loginPassWDOM.addEventListener("input", function () {
  loginPassWDOM.value.length > 0
    ? passIconDOM.classList.add("keydown")
    : passIconDOM.classList.remove("keydown");
});
