// get the two input values of temperature and wind speed,
// check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill, and
// either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.
// 🚑  The formula to calculate the wind chill factor is , where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.

let temp = document.querySelector(".windtemp").innerHTML;
let speed = document.querySelector(".windspeed").innerHTML;
let windchill = document.querySelector(".windchill");
console.log(speed);
function Windchill () {
    if (temp <= 50 && speed > 3) {
        windchillcalculation = 35.74 + (0.6215*temp) - (35.75 * (speed **.16)) + (0.4275 * temp * (speed**.16))
    }
    else {
        windchillcalculation = "N/A";
    }
    console.log(windchillcalculation);
    windchill.innerHTML = Math.ceil(windchillcalculation);
}

Windchill(); 
