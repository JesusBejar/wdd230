const currentTemp = document.querySelector('.windtemp');
const windSpeed = document.querySelector('.windspeed');
const windchill = document.querySelector('.windchill');
const weatherCondition = document.querySelector(".weather-conditon");
const weatherIcon = document.querySelector(".weather-icon");


// key - 973eba04d00ba87f30bffb82e3aeec3f
// 64.8401° N, 147.7200° W
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.398857&lon=-105.052643&units=imperial&appid=973eba04d00ba87f30bffb82e3aeec3f';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call

        // temp
        let temp = data.main.temp;
        // Math.ceil rounds up to the next closet int
        // Math.floor does the opposite
        currentTemp.innerHTML = `Tempature ${Math.ceil(temp)} F°`;

        // wind speed
        let speed = data.wind.speed;
        windSpeed.innerHTML = `Wind speed ${Math.ceil(speed)} mph`;

        // wind chill
        function Windchill() {
            if (temp <= 50 && speed > 3) {
                windchillcalculation = 35.74 + (0.6215*temp) - (35.75 * (speed **.16)) + (0.4275 * temp * (speed**.16))
            }
            else 
            {
                windchillcalculation = "N/A";
            }
            console.log(windchillcalculation);
            windchill.innerHTML = `WindChill ${windchillcalculation}`;
            }
        Windchill()
        // weather icon
        let icon = data.weather[0].icon;
        const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", "weather icon")


      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

