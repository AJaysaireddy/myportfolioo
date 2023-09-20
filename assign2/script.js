const apiKey = "YOUR_API_KEY";

const getWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const updateWeatherData = (data) => {
  const weatherData = document.querySelector(".weather-data");

  weatherData.innerHTML = `
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Condition: ${data.weather[0].main}</p>
  `;
};

const handleSubmit = (event) => {
  event.preventDefault();

  const city = document.querySelector(".city").value;

  getWeatherData(city).then(updateWeatherData);
};

document.querySelector(".submit").addEventListener("click", handleSubmit);
