class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.desc = document.getElementById('weather-desc');
    this.icon = document.getElementById('icon');
    this.temperature = document.getElementById('temp');
    this.pressure = document.getElementById('pressure');
    this.humidity = document.getElementById('humidity');
    this.feelsLike = document.getElementById('feels-like');
  }

  // Generate the Weather API Results
  // @param {JSON} - the response data
  generateUI(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = `Weather: ${weather.weather[0].description}`;
    this.temperature.textContent = `Temperature: ${weather.main.temp}F`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
  }
}