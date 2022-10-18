// ---- Account functions Helper
// - Variables
const userIconDOM = document.querySelector(".user-container");
const passIconDOM = document.querySelector(".password-container");
const loginUserDOM = document.querySelector("#userInput");
const loginPassWDOM = document.querySelector("#pwInput");
const userMocKAuth = "admin@compass.com.br";
const passMockAuth = "admin";
const refreshDefault = 600;

// - Verify Account
function verifyAccount(event) {
  event.preventDefault();
  clearInvalidAuth();
  if (
    loginUserDOM.value == userMocKAuth &&
    loginPassWDOM.value == passMockAuth
  ) {
    storageAuth();
    setCounterStorage(refreshDefault);
    checkStorageAuth();
  } else if (
      loginUserDOM.value == "" &&
      loginPassWDOM.value == ""
    ) {
      loginUserDOM.classList.remove("invalid");
      loginPassWDOM.classList.remove("invalid");
      clearInvalidAuth();
  } else {
    loginUserDOM.classList.add("invalid");
    loginPassWDOM.classList.add("invalid");
    loginUserDOM.value = "";
    loginPassWDOM.value = "";
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
