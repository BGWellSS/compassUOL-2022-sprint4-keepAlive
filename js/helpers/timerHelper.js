// ---- Timer functions Helper
// - Variables
let loginCounter = 600;

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
  console.dir(today.getDay());
  return `${weekDay[today.getDay()]}, ${today.getDate()} de ${
    months[today.getMonth()]
  } de ${today.getFullYear()}`;
}

// - Refresh counter
function refreshCounter() {
  loginCounter--;
  if (loginCounter < 0) {
    console.log("...Refresh");
  }
  return loginCounter;
}
