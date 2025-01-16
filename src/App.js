import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import PopularPlaces from './components/PopularPlaces';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/explore" element={<Explore/>} /> */}
        <Route path="/footer" element={<Footer />} />
        
      </Routes>
    </Router>
  );
}

export default App;

      {/* <PopularPlaces />
      <Explore />
      <Footer />
      <Login />
      <SignUp />*/}
// src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import Home from "./components/Home";
// import Explore from "./components/Explore";
// import About from "./components/About";

// const App = () => {
//     return (
//         <Router>
//             <Navigation />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/explore" element={<Explore />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;
