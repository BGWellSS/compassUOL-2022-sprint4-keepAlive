// ---- App Controller
// - Variables
const buttonLoginDOM = document.querySelector(".submit-input");

// - Check current login section
loginCheckStorageAuth();

// - Login Button
buttonLoginDOM.addEventListener("click", verifyAccount);
