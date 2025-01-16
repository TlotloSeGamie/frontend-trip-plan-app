import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PopularPlaces from './components/PopularPlaces';
import Explore from './components/Explore';
import Footer from './components/Footer';
// import SignUp from "./components/SignUp";
import SignUp from "./components/signup";
import Login from './components/Login'; 
import ForgotPassword from './components/ForgotPassword'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          
          <Route path="/popular-places" element={<PopularPlaces />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
