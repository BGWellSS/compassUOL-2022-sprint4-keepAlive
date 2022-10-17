// ---- Timer functions Helper
// - Get current time
function getCurrentTime() {
  const today = new Date();
  return `${today.getHours()}:${today.getMinutes()}`;
}

// - Get current time
function getCurrentDay() {
  const today = new Date();
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const weekDay = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  return `${weekDay[today.getDay()]}, ${today.getDate()} de ${
    months[today.getMonth()]
  } de ${today.getFullYear()}`;
}

// - Refresh counter
function refreshCounter() {
  let loginCounter = parseInt(getCounterStorage());
  loginCounter--;
  setCounterStorage(loginCounter);
  if (loginCounter <= 0) {
    setStorageRefreshTag("ok");
    window.location.replace("index.html");
  }
  return loginCounter;
}
