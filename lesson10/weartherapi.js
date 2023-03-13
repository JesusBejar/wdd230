const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// key - 973eba04d00ba87f30bffb82e3aeec3f
// 64.8401° N, 147.7200° W
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=64.835365&lon=-147.776749&units=imperial&appid=973eba04d00ba87f30bffb82e3aeec3f';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);

        let temp = data.main.temp;
        let currentTemp = document.querySelector("#current-temp");
        currentTemp.innerHTML = temp;

        // icon: "04d"
        let icon = data.weather[0].icon;
        let iconPlace = document.querySelector("#weather-icon");
        const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
        iconPlace.setAttribute("src", iconsrc);
        iconPlace.setAttribute("alt", "weather icon")


      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

