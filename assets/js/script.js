var apiKey = '87192d2b0714c779e50e13cecd225c8a';
var geoCodingApi = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=5&appid={apiKey}`;
var searchList = document.querySelectorAll("#searchlist");
var sectionList = document.querySelector("#sectionList");
var searchBtn = document.querySelector("#searchBtn");
var cityInput = document.querySelector("#cityInput");
var searchCities =JSON.parse(localStorage.getItem('searchList')) || [];
var timeEl = document.getElementById('time');
var dateEl = document.getElementById('date');
var currentWeatherItemsEl = document.getElementById('current-weather-items');
var weatherForecastEl = document.getElementById('weather-forecast');
var todayTempEl = document.getElementById('today-temp');
var todayHumidityEl = document.getElementById('today-humidity');
var todayWindEl = document.getElementById('today-wind');
var todayIconEl = document.getElementById('today-icon');
var todayDescriptionEl = document.getElementById('today-description');
var currentCityEl = document.getElementById('current-city');
var day1El = document.getElementById("day-1");
var day1Description = document.getElementById("day1-description");
var day1Icon = document.getElementById("day1-icon");
var day1Temp = document.getElementById("day1-temp");
var day1Humidity = document.getElementById("day1-humidity");
var day1Wind = document.getElementById("day1-wind");
var day2El = document.getElementById("day-2");
var day2Description = document.getElementById("day2-description");
var day2Icon = document.getElementById("day2-icon");
var day2Temp = document.getElementById("day2-temp");
var day2Humidity = document.getElementById("day2-humidity");
var day2Wind = document.getElementById("day2-wind");
var day3El = document.getElementById("day-3");
var day3Description = document.getElementById("day3-description");
var day3Icon = document.getElementById("day3-icon");
var day3Temp = document.getElementById("day3-temp");
var day3Humidity = document.getElementById("day3-humidity");
var day3Wind = document.getElementById("day3-wind");
var day4El = document.getElementById("day-4");
var day4Description = document.getElementById("day4-description");
var day4Icon = document.getElementById("day4-icon");
var day4Temp = document.getElementById("day4-temp");
var day4Humidity = document.getElementById("day4-humidity");
var day4Wind = document.getElementById("day4-wind");
var day5El = document.getElementById("day-5");
var day5Description = document.getElementById("day5-description");
var day5Icon = document.getElementById("day5-icon");
var day5Temp = document.getElementById("day5-temp");
var day5Humidity = document.getElementById("day5-humidity");
var day5Wind = document.getElementById("day5-wind");



//date function
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
var months = ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(() => {
    var time = new Date();
    var month = time.getMonth();
    var date = time.getDate();
    var day = time.getDay();
    
    dateEl.textContent = days[day] + ', ' + date + ' ' + months[month]
    
}, 1000);

function convertKelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 1.8 + 32).toFixed(0) + "°F";
  }

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8 + 32).toFixed(2) + "°F";
}

function getCurrentWeather(cityName) {
    var currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  
    fetch(currentWeatherApi)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        displayTodayWeather(data);
      });
  
    function displayTodayWeather(data) {
      var currentHumidity = data.main.humidity;
      var currentTempKelvin = data.main.temp;
      var currentTempFahrenheit = convertKelvinToFahrenheit(currentTempKelvin);
      var currentDescription = data.weather[0].description;
      var currentCity = cityName;


      var currentIcon = data.weather[0].icon;
      var iconUrl = `http://openweathermap.org/img/w/${currentIcon}.png`;
      document.getElementById("weatherIcon").setAttribute("src", iconUrl);
      todayTempEl.textContent = `${currentTempFahrenheit}`;
      todayHumidityEl.textContent = `${currentHumidity}%`;
      todayWindEl.textContent = `${data.wind.speed} m/s`;
      todayDescriptionEl.textContent = `${currentDescription}`;
      currentCityEl.textContent = `${currentCity}`;
      //todayIconEl.textContent = `${currentIcon}`;


    
    }
  }

// function displayTodayWeather() {
//     currentHumidity = data.main.humidity;
//     console.log(currentHumidity);


// }



// function getForecast (cityName) {
//     var fiveDayApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    
//     fetch(fiveDayApi)
//     .then((response) => {
//         if (response.ok) {
//             return response.json()
//         } 
//     })
    
    
// }

function getForecast(cityName) {
  const fiveDayApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`;
  
  fetch(fiveDayApi)
    .then(response => response.json())
    .then(data => {
      const forecast = data.list.filter((weather, index) => index % 8 === 0);
      
      //Day 1
      var day1TempCelsius = forecast[0].main.temp;
      var day1TempFahrenheit = convertCelsiusToFahrenheit(day1TempCelsius)
      day1El.textContent = new Date(forecast[0].dt_txt).toLocaleDateString("en-US", { weekday: "long" });
      day1Description.textContent = forecast[0].weather[0].description;
      day1Icon.src = `http://openweathermap.org/img/w/${forecast[0].weather[0].icon}.png`;
      //day1Temp.lastElementChild.textContent = `${Math.round(forecast[0].main.temp)}°C`;
      day1Humidity.lastElementChild.textContent = `${forecast[0].main.humidity}%`;
      day1Wind.lastElementChild.textContent = `${forecast[0].wind.speed} m/s`;
      //var currentIcon = data.weather.icon;
      day1Temp.lastElementChild.textContent = `${day1TempFahrenheit}`;
      
      //Day 2
      var day2TempCelsius = forecast[1].main.temp;
      var day2TempFahrenheit = convertCelsiusToFahrenheit(day2TempCelsius)      
      day2El.textContent = new Date(forecast[1].dt_txt).toLocaleDateString("en-US", { weekday: "long" });
      day2Description.textContent = forecast[1].weather[0].description;
      day2Icon.src = `http://openweathermap.org/img/w/${forecast[1].weather[0].icon}.png`;
      day2Temp.lastElementChild.textContent = `${day2TempFahrenheit}`;
      day2Humidity.lastElementChild.textContent = `${forecast[1].main.humidity}%`;
      day2Wind.lastElementChild.textContent = `${forecast[1].wind.speed} m/s`;

      day3El.textContent = new Date(forecast[2].dt_txt).toLocaleDateString("en-US", { weekday: "long" });
      day3Description.textContent = forecast[2].weather[0].description;
      day3Icon.src = `http://openweathermap.org/img/w/${forecast[2].weather[0].icon}.png`;
      day3Temp.lastElementChild.textContent = `${Math.round(forecast[2].main.temp)}°C`;
      day3Humidity.lastElementChild.textContent = `${forecast[2].main.humidity}%`;
      day3Wind.lastElementChild.textContent = `${forecast[2].wind.speed} m/s`;

      day4El.textContent = new Date(forecast[3].dt_txt).toLocaleDateString("en-US", { weekday: "long" });
      day4Description.textContent = forecast[3].weather[0].description;
      day4Icon.src = `http://openweathermap.org/img/w/${forecast[3].weather[0].icon}.png`;
      day4Temp.lastElementChild.textContent = `${Math.round(forecast[3].main.temp)}°C`;
      day4Humidity.lastElementChild.textContent = `${forecast[3].main.humidity}%`;
      day4Wind.lastElementChild.textContent = `${forecast[3].wind.speed} m/s`;

      day5El.textContent = new Date(forecast[4].dt_txt).toLocaleDateString("en-US", { weekday: "long" });
      day5Description.textContent = forecast[4].weather[0].description;
      day5Icon.src = `http://openweathermap.org/img/w/${forecast[4].weather[0].icon}.png`;
      day5Temp.lastElementChild.textContent = `${Math.round(forecast[4].main.temp)}°C`;
      day5Humidity.lastElementChild.textContent = `${forecast[4].main.humidity}%`;
      day5Wind.lastElementChild.textContent = `${forecast[4].wind.speed} m/s`;




    
    })
    .catch(error => console.log(error));
}


searchBtn.addEventListener("click", function() {
    
    
    var cityName = document.getElementById("cityInput").value;
    getForecast(cityName);
    getCurrentWeather(cityName);
    //var sectionSet = document.getElementById("cityList");
    
    searchCities.push(cityName);
    
    console.log(cityName);
    console.log(searchCities);
    
    localStorage.setItem('searchList', JSON.stringify(searchCities));
    
    document.getElementById('cityInput').value = "";

    //todayHumidityEl.textContent = currentHumidity;
    
    
});



//this needs to be done on load as it's to append the page with buttons of past searches
/* for (i = 0; i < 5; i++) {
    var li = document.createElement("li");
    li.textContent = `searchCities`;
    searchList.append(li);
 }*/
 




    /*var cityList = document.getElementById("searchList");
    var searchedCity = document.createElement("li");

    searchedCity.appendChild(cityName);
    cityList.appendChild(searchedCity);*/


/*

//fetch api for five day forecast
fetch(fiveDayApi)
.then((response) => response.json())
.then((data) => console.log(data));/

//fetch api for cordinates to change city into lat and lon
fetch(geoCodingApi)
.then((response) => response.json())
.then((data) => console.log(data));

console.log(geoCodingApi);
*/
