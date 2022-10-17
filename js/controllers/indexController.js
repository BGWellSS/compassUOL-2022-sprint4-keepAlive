// ---- App Controller
// - Variables
const buttonLoginDOM = document.querySelector(".submit-input");

// - Check current login section
checkStorageAuth();

// - Login Button
buttonLoginDOM.addEventListener("click", verifyAccount);
