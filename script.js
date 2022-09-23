let weather = {
    "apiKey": "9512e76ff583b078e2c59c447d85a2cf",
    fetchWeather: function (city) {
// Fetches Weather details from cities from api-"OpenWeatherMap"
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
//     Fetches all the data from api's and feed it to the main file content individually
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        // console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/"
            + icon
            + ".png";
        // all the things in querySelector("...") names was the same names used in "class" in index.HTML so all the details map exactly
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + "Km/hr";
        document.querySelector(".weather").classList.remove("loading")
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
// Searches for the Cities on clicking search button
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

// weather.fetchWeather("Narasaraopet");
