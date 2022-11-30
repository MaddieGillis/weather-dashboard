// 
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
var todayWindEl = document.getElementById('current-wind');



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


function getCurrentWeather (cityName) {
    var currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    
    fetch(currentWeatherApi)
    .then((response) => {
        if (response.ok) {
            return response.json()
        } 
    })
    .then((data) => console.log(data));
    displayTodayWeather(response);
}

function displayTodayWeather() {
    currentHumidity = data.main.humidity;
    console.log(currentHumidity);


}



function getForecast (cityName) {
    var fiveDayApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    
    fetch(fiveDayApi)
    .then((response) => {
        if (response.ok) {
            return response.json()
        } 
    })
    .then((data) => console.log(data));
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
    
    
})



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
.then((data) => console.log(data));

//fetch api for cordinates to change city into lat and lon
fetch(geoCodingApi)
.then((response) => response.json())
.then((data) => console.log(data));

console.log(geoCodingApi);
*/
