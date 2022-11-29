// 
var apiKey = '87192d2b0714c779e50e13cecd225c8a';
var fiveDayApi = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={apiKey}`;
var geoCodingApi = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=5&appid={apiKey}`;
var searchList = document.querySelectorAll("#searchlist");
var sectionList = document.querySelector("#sectionList");
var searchBtn = document.querySelector("#searchBtn");
var cityInput = document.querySelector("#cityInput");
var searchCities = [];



searchBtn.addEventListener("click", function() {


    var cityName = document.getElementById("cityInput").value;
    //var sectionSet = document.getElementById("cityList");

    searchCities.push(cityName);

    console.log(cityName);
    console.log(searchCities);
    
    localStorage.setItem(searchList, cityName);


})

//this needs to be done on load as it's to append the page with buttons of past searches
/* for (i = 0; i < 5; i++) {
     var li = document.createElement("li");
     li.textContent = `cityName`;
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

