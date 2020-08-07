// Initialize UI object
const ui = new UI();

// Initialize Storage Object
const storage = new Storage();

// Get Stored Location Data
const weatherLocation = storage.getLocationData();

// Initialize Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Get weather
const getWeatherOnload = () => {
  weather.getWeather()
    .then(response => ui.generateUI(response))
    .catch(error => console.log(error))
};

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeatherOnload);

// Change Location
document.getElementById('save').addEventListener('click', () => {
  const city = document.getElementById('city-input').value;
  const country = document.getElementById('country-input').value;
  
  // Change location
  weather.changeLocation(city, country);

  // Set new location to local storage
  storage.setLocationData(city, country);

  // Get weather again
  getWeatherOnload();

  // Close modal
  $('#locModal').modal('hide');
});

