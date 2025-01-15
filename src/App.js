import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import PopularPlaces from './components/PopularPlaces';
import Explore from './components/Explore';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Home />
      <PopularPlaces />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;

