const currentYear = new Date().getFullYear();
document.getElementById("copyrightYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return (
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
      ).toFixed(1); 
    } else {
      return "N/A";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    let temperature = 10; // Defina a temperatura
    let windSpeed = 5; // Defina a velocidade do vento
    let windChillElement = document.querySelector(".weather-card-description p:nth-child(4)"); 

    if (windChillElement) {
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${calculateWindChill(temperature, windSpeed)}`;
    }
});


document.addEventListener("DOMContentLoaded", function () {
  let temperature = 10; // Defina a temperatura
  let windSpeed = 5; // Defina a velocidade do vento
  let windChillElement = document.querySelector(".weather-card-description-mobile p:nth-child(4)"); 

  if (windChillElement) {
      windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${calculateWindChill(temperature, windSpeed)}`;
  }
});