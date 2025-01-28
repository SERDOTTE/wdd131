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
      ).toFixed(2); 
    } else {
      return "N/A";
    }
  }