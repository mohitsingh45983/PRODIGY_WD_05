const apiKey = "d70a5ead8c7c78760b762aa03b555195";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city)
{
    const res =await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(res.status == 404)
    {
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    }
    else
    {
        var data = await res.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if(data.weather[0].main == "Clouds")
        {
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear")
        {
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain")
        {
            weatherIcon.src = "images/rain.png"
        }   
        else if(data.weather[0].main == "Mist")
        {
            weatherIcon.src = "images/mist.png"
        } 

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value);
});
