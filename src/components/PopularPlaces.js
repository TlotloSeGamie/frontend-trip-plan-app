import React, { useEffect, useState } from "react";
import './PopularPlaces.css';

const PopularPlaces = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          setLocation(userLocation);
          fetchPlaces(userLocation);
        },
        (err) => {
          setError("Unable to fetch location. Please enable location services.");
          console.error(err);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  const fetchPlaces = async (userLocation) => {
    try {
      const apiKey = "AIzaSyBBHnGb9GoEMRzyPXqafNk4nshyXIIsMf0";
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}&location=${userLocation.lat},${userLocation.lon}&radius=1500&type=tourist_attraction&keyword=adventure+relaxation+accommodation+restaurants`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.results) {
        setPlaces(data.results.map((place) => ({
          name: place.name,
          category: place.types[0],
          location: place.vicinity,
        })));
      } else {
        setError("No places found nearby.");
      }
    } catch (err) {
      setError("Error fetching places. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="popular-main-container">
      <div className="popular-container">
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!error && location && (
          <div className="cards-container">
            {places.map((place, index) => (
              <div key={index} className="place-card">
                <h3>{place.name}</h3>
                <p>Category: {place.category}</p>
                <p>Location: {place.location}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularPlaces;
