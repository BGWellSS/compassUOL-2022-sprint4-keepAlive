// ---- Weathe app
// - Variables
const api = {
  key: "b5b3c06a66a6fd6452eba2b8f1f3eef0",
  base: "https://api.openweathermap.org/data/2.5/",
  lang: "pt_br",
  units: "metric",
};

// - Weather process
function weatherLocation() {
  // Browser "geolocation" test
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
  } else {
    console.log("navegador não suporta geolozalicação");
  }
  function setPosition(position) {
    let coordLat = position.coords.latitude;
    let coordLong = position.coords.longitude;
    console.log(coordLat, coordLong);
    weatherCall(coordLat, coordLong);
  }
  function showError(error) {
    console.log(`erro: ${error.message}`);
  }
}

// - API weather call
function weatherCall(coordLat, coordLong) {
  fetch(
    `${api.base}weather?lat=${coordLat}&lon=${coordLong}&lang=${api.lang}&units=${api.units}&appid=${api.key}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`http error: status ${response.status}`);
      }
      // Convert to Json
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
    })
    .then((response) => {
      updateWeather(response);
    });
}
