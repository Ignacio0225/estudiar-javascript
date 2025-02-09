const API_KEY = "be5b611037a81067b24e38466af449f6";

function onGetoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("can`t find you");
}

navigator.geolocation.getCurrentPosition(onGetoOk, onGeoError); //좌표를 가져옴

//api.openweathermap.org/data/2.5/weather?lat=37.6146539&lon=126.6604996&appid=be5b611037a81067b24e38466af449f6

// be5b611037a81067b24e38466af449f6;
