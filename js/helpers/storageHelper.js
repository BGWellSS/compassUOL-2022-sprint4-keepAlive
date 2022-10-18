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

// - Login Page authentication checker
function loginCheckStorageAuth() {
  if (typeof Storage !== "undefined") {
    const storedAuth = localStorage.getItem(storageAuthName);
    if (getStorageRefreshTag() == "ok") {
      setStorageRefreshTag("no");
      callLogout();
      checkStorageAuth();
    } else {
      checkStorageAuth();
    }
  } else {
    console.log("Sorry, no LocalStorage suport");
  }
}

// - Home Page login checker
function homeCheckStorageAuth() {
  if (typeof Storage !== "undefined") {
    const storedAuth = localStorage.getItem(storageAuthName);
    if (!(storedAuth == authStoreValue)) {
      window.location.replace("index.html");
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

// - Storage counter set
function setCounterStorage(value) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("storedCounter", value);
  } else {
    console.log("Sorry, no LocalStorage suport");
  }
}

// - Storage counter get
function getCounterStorage() {
  if (typeof Storage !== "undefined") {
    return localStorage.getItem("storedCounter");
  } else {
    console.log("Sorry, no LocalStorage suport");
  }
}

// - Stored refresh tag
function setStorageRefreshTag(value) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("refreshTag", value);
  } else {
    console.log("Sorry, no LocalStorage suport");
  }
}

// - 
function getStorageRefreshTag() {
  if (typeof Storage !== "undefined") {
    return localStorage.getItem("refreshTag");
  } else {
    console.log("Sorry, no LocalStorage suport");
  }
}