import React from "react";
import "./Footer.css"; 

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>We are committed to delivering the best service to our customers with integrity and excellence.</p>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@gmail.com</p>
                    <p>Phone: (+27) 12 345 6789</p>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Subscribe to Our Newsletter</h4>
                    <form className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            aria-label="Email"
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Weather Travel Planner. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
