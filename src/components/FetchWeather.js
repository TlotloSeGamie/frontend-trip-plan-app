import React, { useState, useEffect } from 'react';
import './FetchWeather.css';

const FetchWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [tempUnit, setTempUnit] = useState('metric'); 
  const [theme, setTheme] = useState('default'); 
  const [currentLocation, setCurrentLocation] = useState(null); 

  const fetchWeather = async (lat, lon) => {
    try {
      const weatherResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fe9a214daa542ac38cf93efa22dbf3fb&units=${tempUnit}`
      );
      const forecastResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=fe9a214daa542ac38cf93efa22dbf3fb&units=${tempUnit}`
      );
      if (!weatherResponse.ok || !forecastResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();
      setWeatherData(weatherData);
      setForecastData(forecastData);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  const KIMBERLEY_COORDS = { lat: -28.7385, lon: 24.7638 };

  useEffect(() => {
    fetchWeather(KIMBERLEY_COORDS.lat, KIMBERLEY_COORDS.lon);
    setCurrentLocation(KIMBERLEY_COORDS); 
  }, [tempUnit]);

  const formatTemperature = (temp) => {
    return tempUnit === 'metric' ? `${temp}°C` : `${((temp * 9/5) + 32).toFixed(1)}°F`;
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  const handleTempUnitToggle = () => {
    setTempUnit(prevUnit => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  const handleThemeToggle = () => {
    setTheme(prevTheme => (prevTheme === 'default' ? 'dark' : 'default'));
  };

  return (
    <div className='main-container'>
      <div className={`App ${theme}`}>
        <button onClick={handleTempUnitToggle}>
          Switch to {tempUnit === 'metric' ? 'Fahrenheit' : 'Celsius'}
        </button>
        <button onClick={handleThemeToggle}>
          Switch to {theme === 'default' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <div className='weather-forecasts'>
          {weatherData && (
            <div className='weather'>
              <div className='weather-card'>
                <div className='info'>
                  <p><strong>Temperature:</strong> {formatTemperature(weatherData.main.temp)}</p>
                  <p><strong>Feels like:</strong> {formatTemperature(weatherData.main.feels_like)}</p>
                  <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
                  <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
                  <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
                  <p><strong>Sunrise:</strong> {formatTime(weatherData.sys.sunrise)}</p>
                  <p><strong>Sunset:</strong> {formatTime(weatherData.sys.sunset)}</p>
                </div>
              </div>
            </div>
          )}
          {forecastData && (
            <div className='forecast'>
              <h3>5-Day Forecast</h3>
              <div className='forecast-items'>
                {forecastData.list.slice(0, 5).map((item, index) => (
                  <div key={index} className='forecast-item'>
                    <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
                    <p><strong>Temp:</strong> {formatTemperature(item.main.temp)}</p>
                    <p><strong>Weather:</strong> {item.weather[0].description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FetchWeather;
