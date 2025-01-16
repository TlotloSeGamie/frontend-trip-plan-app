/* global google */
import { useState } from "react";
import React from "react";
import "./Explore.css";
import { Loader } from "@googlemaps/js-api-loader";

const Explore = () => {
    const [formData, setFormData] = useState({
        location: '',
        days: '',
        budget: '',
        features: '',
        people: 1,
    });

    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const loader = new Loader({
            apiKey: "AIzaSyBBHnGb9GoEMRzyPXqafNk4nshyXIIsMf0", // Replace with your API key
            libraries: ["places"],
        });

        loader.load().then(() => {
            const map = new google.maps.Map(document.createElement("div")); // Create an off-screen map

            const service = new google.maps.places.PlacesService(map);

            const request = {
                query: formData.location,
                radius: 5000,
                type: formData.features || "tourist_attraction",
            };

            service.textSearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    setSearchResults(results);
                } else {
                    setError("No results found or an error occurred.");
                }
            });
        });
    };

    return (
        <div>
            <div className="explore-container">
                <h2>Plan Your Perfect Getaway with Us</h2>
                <p>Fill out the form below to start planning your dream trip. Whether you're looking for adventure, relaxation, or unique experiences, we've got you covered!</p>
                <div className="formie">
                    <form className="planner-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="location">Destination:</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Desired destination"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="budget">Days:</label>
                            <input
                                type="number"
                                id="days"
                                name="days"
                                placeholder="Days"
                                value={formData.days}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="budget">Estimated Budget:</label>
                            <input
                                type="number"
                                id="budget"
                                name="budget"
                                placeholder="Enter your budget"
                                value={formData.budget}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="features">Travel Preferences:</label>
                            <select
                                id="features"
                                name="features"
                                value={formData.features}
                                onChange={handleChange}
                                required
                            >
                                <option value="adventure">Adventure</option>
                                <option value="relaxation">Relaxation</option>
                                <option value="accommodation">Accommodation</option>
                                <option value="restaurant">Restaurant</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="people">Number of Travelers:</label>
                            <input
                                type="number"
                                id="people"
                                name="people"
                                min="1"
                                value={formData.people}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="search-btn">
                                Start Planning
                            </button>
                        </div>
                    </form>
                </div>
                <div className="search-results">
                    <h3>Search Results</h3>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {!error && searchResults.length > 0 ? (
                        <ul>
                            {searchResults.map((result, index) => (
                                <li key={index}>
                                    <h4>{result.name}</h4>
                                    <p>{result.formatted_address}</p>
                                    {result.photos && (
                                        <img
                                            src={result.photos[0].getUrl({ maxWidth: 150 })}
                                            alt={result.name}
                                            style={{ width: "150px", height: "auto" }}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        !error && <p>No results to display yet. Start planning your trip!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Explore;
