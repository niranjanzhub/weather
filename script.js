const apiKey = "385065c6518dd61d46c4d85561222055";

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data));
}

function displayWeather(data) {
    const name = data.name;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = `${temp}°C`;
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`;
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
}

document.querySelector(".search button").addEventListener("click", function() {
    const city = document.querySelector(".searchbar").value;
    fetchWeather(city);
});

document.querySelector(".searchbar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const city = document.querySelector(".searchbar").value;
        fetchWeather(city);
    }
});

// Initial fetch for a default city
fetchWeather("bangalore");
