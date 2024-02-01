let apiKey = "7816d9f235c88adc096427a68ca872f2";

const cityElement = document.getElementById("city-name");
const headlineElement = document.getElementById("headline");
const tempElement = document.getElementById("temperature");
const imageElement = document.getElementById("image-div");
const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");
const forecastElement = document.getElementById("forecast-area");

function handleButtonClick() {
  cityName = inputElement.value;
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let weatherIcon = data.list[0].weather[0].icon;
      imageElement.innerHTML = `<image src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png"></image>`;
      cityElement.innerText = data.city.name;
      headlineElement.innerText = data.list[0].weather[0].main;
      tempElement.innerText = `${data.list[0].main.temp}°C`;
    
      forecastElement.innerHTML = "";
      addForecast(data.list[7], 1);
      addForecast(data.list[15], 2);
      addForecast(data.list[23], 3);
      addForecast(data.list[31], 4);
    });
}

buttonElement.addEventListener("click", handleButtonClick);

function addForecast(data, days) {
  let headline = data.weather[0].main;
  let weatherIcon = data.weather[0].icon;
  let imgHtml = `<image src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png"></image>`;
  let temp = `${data.main.temp}°C`;

  let htmlString = `
    <div class="col-3">
        <span>${days} day(s) from now</span>
        <h3>${headline}</h3>
        ${imgHtml}
        <h4>${temp}</h4>
    </div>
    `;
    forecastElement.innerHTML += htmlString;
}
