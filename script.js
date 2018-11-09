let apiKey = '0ba2a9b4f042b827d0dc4b09c98f99cb';

let citySearch =  document.querySelector("#citySearch");
let getWeatherNow = document.querySelector("#getWeatherNow");
let getWeatherFiveDay = document.querySelector("#getWeatherFiveDay");
let getWeatherIcon = document.querySelector("#getWeatherIcon");

const searchInput = (event) => {
    let element = event.target;
    let userInput = element.value;  

    let URL = 'http://api.openweathermap.org/data/2.5/weather?q=+${userInput} + "&appid=" + apiKey;
    
    fetch(URL)
    .then(  (response) => {return response.json(); } )
    .then(getWeatherNow)
    .then(getWeatherFiveDay)
    .then(getWeatherIcon)
}; 

citySearch.addEventListener("change", searchInput);