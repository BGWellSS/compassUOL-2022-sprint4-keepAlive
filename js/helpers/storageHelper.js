// ---- Localstorage functions Helper
// - variables
const storageAuthName = "authentication";
const authStoreValue = "OK";

// - Save authentication to storage
function storageAuth() {
  if (typeof Storage !== "undefined") {
    localStorage.setItem(storageAuthName, authStoreValue);
  } else {
    console.log("Sorry, no LocalStorage suport");
  }
}

// - Check authentication from storage
function checkStorageAuth() {
  if (typeof Storage !== "undefined") {
    const storedAuth = localStorage.getItem(storageAuthName);
    if (storedAuth == authStoreValue) {
      window.location.replace("home.html");
    }
  } else {
    console.log("Sorry, no LocalStorage suport");
  }
}

// - Storage cleaning
function clearStorageAuth() {
  if (typeof Storage !== "undefined") {
    localStorage.clear();
  } else {
    console.log("Sorry, no LocalStorage suport");
  }
}