// ---- Weather View
// - Variables
const geoLocationDOM = document.querySelector(".weather-geoLocation");
const containerImgDOM = document.querySelector(".weather-icon");
const weatherNumberDOM = document.querySelector(".weather-number");

function updateWeather(weather) {
  let cityName = weather.name;

  geoLocationDOM.innerText = `${cityName} - ${weather.sys.country}`;
  let iconName = weather.weather[0].icon;
  containerImgDOM.innerHTML = `<img src="./images/weatherIcons/${iconName}.png">`;
  let temperature = `${Math.round(weather.main.temp)}`;
  weatherNumberDOM.innerHTML = `${temperature}°`;
}
