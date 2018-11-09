let apiKey = '0ba2a9b4f042b827d0dc4b09c98f99cb';

let citySearch =  document.querySelector("#citySearch");
let getWeatherNow = document.querySelector("#getWeatherNow");
let getWeatherFiveDay = document.querySelector("#getWeatherFiveDay");
let getWeatherIcon = document.querySelector("#getWeatherIcon");

const searchInput = (event) => {
    let element = event.target;
    let userInput = element.value;  

    let URL = 'http://api.openweathermap.org/data/2.5/weather?q=+${userInput} + "&appid=" + apiKey;

    const URL = "https://api.openweathermap.org/data/2.5/forecast/daily?" +
"q= + ${userInput} &cnt=7&units=imperial&APPID= apiKey";
    
function getWeatherData() {
    let headers = new Headers();
  
    return fetch(URL, {
      method: 'GET',
      headers: headers
    }).then(data => {
      return data.json();
    });
  }

  getWeatherData().then(weatherData => {
    let city = weatherData.city.name;
    let dailyForecast = weatherData.list;
  
    renderData(city, dailyForecast);
  });
citySearch.addEventListener("change", searchInput);