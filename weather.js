class Weather {
  constructor(city, country) {
    this.apiKey = '38dd5648930ac0da8d0c6d4d20957fc4';
    this.city = city;
    this.country = country;
  }

  // Fetch Weather API
  // @return {JSON} - resturns JSON from the Weather API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData
  }

  // Changes Weather Location
  // @param {city} - the new city property
  // @param {country} - the new country property
  async changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}