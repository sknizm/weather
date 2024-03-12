const apiKey = "786a6396c64fa07211c438b290f5beef";
const appLink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let button = document.getElementById("search-btn");
const search = document.getElementById("search-bar");
const weatherIcon = document.querySelector(".weather_icon");

button.addEventListener('click',()=>{
    
checkWeather(search.value);
});

async function checkWeather(city){
    const response = await fetch(appLink+city+"&appid="+apiKey)
    var data = await response.json();
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    


    if(data.weather[0].main=="Haze"){
        weatherIcon.src = "images/drizzle.png";
    }
    if(data.weather[0].main=="Clear"){
        weatherIcon.src = "images/clear.png";
    }
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    if(data.weather[0].main=="Mist"){
        weatherIcon.src = "images/mist.png";
    }
    if(data.weather[0].main=="Rain"){
        weatherIcon.src = "images/rain.png";
    }
    if(data.weather[0].main=="Snow"){
        weatherIcon.src = "images/snow.png";
    }
}