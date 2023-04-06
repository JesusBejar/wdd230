const weather = 'https://api.openweathermap.org/data/2.5/weather?lat=40.398857&lon=-105.052643&units=imperial&appid=973eba04d00ba87f30bffb82e3aeec3f';

const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=40&lon=-105.052643&units=imperial&appid=973eba04d00ba87f30bffb82e3aeec3f";

let forecastInfo;
// console.log("cool beans man");
// the function below retrieves weathe data from the OpenWeatherAPI
    async function getWeatherData() {
    const response = await fetch(weather);
    const data = await response.json();
    console.log(data);
    displayWeather(data)
    }
getWeatherData();
// the function below retrieves forecast data from the OpenWeatherAPI
    async function getForecastData() {
    const response = await fetch(forecast);
    const data = await response.json();
    console.log(data);
    let forecastData = data.list.filter(hour => hour.dt_txt.includes("12:00:00"))
    displayForecast(forecastData);
    }

getForecastData();
function displayWeather(weatherData) {
    console.log(weatherData);
    let weather = document.querySelector(".weather-cards");
        // create elements and properties
        let card = document.createElement("section");
        let temp = document.createElement("h1")
        let description = document.createElement("h3");
        let humidity = document.createElement("p");

        temp.innerHTML = `Temperature : ${weatherData.main.temp}°F`;
        description.innerHTML = `Description : ${weatherData.weather[0].description}`;
        humidity.innerHTML = `Humidity : ${weatherData.main.humidity}`;

        card.setAttribute("width", "30%");
        card.setAttribute("height", "100%");

        temp.setAttribute("font-size", "27px")

        description.setAttribute("font-size", "27px")

        humidity.setAttribute("font-size", "27px")

        card.append(temp);
        card.append(description);
        card.append(humidity);
        weather.append(card);
}
function displayForecast(forecastData)
{
    console.log(forecastData);
    for (let i=0; i<3; i++)
    {
        console.log(forecastData);
        let weatherforecast = document.querySelector(".weather-forecast");

        let section = document.createElement("section")
        let temp = document.createElement("h1")
        let description = document.createElement("h3");
        let humidity = document.createElement("p");

        temp.innerHTML = `Temperature : ${forecastData[i].main.temp}°F`
        description.innerHTML = `Description : ${forecastData[i].weather[0].description}`
        humidity.innerHTML = `Humidity : ${forecastData[i].main.humidity}`

        section.setAttribute("width", "30%");
        section.setAttribute("height", "100%");
        section.setAttribute("display", "grid");
        section.setAttribute("grid-template-columns", "1fr 1fr 1fr")

        temp.setAttribute("font-size", "27px")
        temp.setAttribute("border", "solid", "var(--color4)", "5px;");

        description.setAttribute("font-size", "27px")

        humidity.setAttribute("font-size", "27px")

        section.append(temp);
        section.append(description);
        section.append(humidity);
        weatherforecast.append(section);
    }
}