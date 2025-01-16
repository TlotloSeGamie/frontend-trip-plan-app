/* global google */ // Declare google as a global variable for ESLint

import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import FetchWeather from "./FetchWeather";
import "./Home.css";
import Hero from "./Hero";

const Home = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);
  const mapRef = useRef(null); 

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

  useEffect(() => {
    if (location.lat && location.lon) {
      const loader = new Loader({
        apiKey: "AIzaSyBBHnGb9GoEMRzyPXqafNk4nshyXIIsMf0", // Replace with your API key
        libraries: ["places"],
      });

      loader.load().then(() => {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: location.lat, lng: location.lon },
          zoom: 14,
        });

        const service = new google.maps.places.PlacesService(map);

        const request = {
          location: { lat: location.lat, lng: location.lon },
          radius: 5000, // Search within 5 km
          type: ["restaurant", "lodging", "park"], // Add other place types if needed
        };

        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach((place) => {
              const marker = new google.maps.Marker({
                position: place.geometry.location,
                map,
                title: place.name,
              });

              const infoWindow = new google.maps.InfoWindow({
                content: `<div style="text-align: center;">
                            <h3>${place.name}</h3>
                            ${
                              place.photos
                                ? `<img src="${place.photos[0].getUrl({
                                    maxWidth: 150,
                                  })}" alt="${place.name}" style="width: 150px; height: auto;" />`
                                : `<p>No image available</p>`
                            }
                            <p>${place.vicinity}</p>
                          </div>`,
              });

              marker.addListener("mouseover", () => infoWindow.open(map, marker));
              marker.addListener("mouseout", () => infoWindow.close());
            });
          }
        });
      });
    }
  }, [location]);

  return (
    <div className="home-main-container">
    <Hero/>
      <div className="home-container">
        <div className="today-weather">
          <h2>Today's Weather</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!error && location.lat && location.lon && <FetchWeather />}
        </div>
        <div className="maps">
          <h2>Your Location</h2>
          <div
            ref={mapRef}
            style={{ width: "100%", height: "300px", border: "0" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
