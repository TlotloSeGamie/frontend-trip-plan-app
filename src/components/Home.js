import React, { useState, useEffect } from "react";
import "./Home.css";
import FetchWeather from "./FetchWeather"; 
import Hero from "./Hero";

const Home = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          setError(
            "Unable to fetch location. Please enable location services."
          );
          console.error(err);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div className="home-main-container">
    <Hero/>
      <div className="home-container">
        <div className="today-weather">
          <h2>Today's Weather</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!error && location.lat && location.lon && (
            <FetchWeather />
          )}
        </div>

        <div className="maps">
          <h2>Your Location</h2>
          <iframe className="g-map"
  title="Places Near You"
  src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBBHnGb9GoEMRzyPXqafNk4nshyXIIsMf0&q=adventure+relaxation+accommodation+restaurants&center=${location.lat},${location.lon}`}
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
></iframe>

        </div>
      </div>
    </div>
  );
};

export default Home;
