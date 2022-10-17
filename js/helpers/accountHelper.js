// ---- Account functions Helper
// - Variables
const userContainerDOM = document.querySelector(".user-container");
const passContainerDOM = document.querySelector(".password-container");
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
    console.log("ok");
  } else {
    loginUserDOM.classList.add("invalid");
    loginPassWDOM.classList.add("invalid");
    invalidAuth("Ops, usuário ou senha inválidos. Tente novamente!");
  }
}

// - Input icon animation
loginUserDOM.addEventListener("input", function () {
  loginUserDOM.value.length > 0
    ? userContainerDOM.classList.add("keydown")
    : userContainerDOM.classList.remove("keydown");
});
loginPassWDOM.addEventListener("input", function () {
  loginPassWDOM.value.length > 0
    ? passContainerDOM.classList.add("keydown")
    : passContainerDOM.classList.remove("keydown");
});
