import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularDishes from "./components/PopularDishes";
import Partners from "./components/Partner";
import KeyFeatures from "./components/KeyFeatures";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularDishes />
      <Partners />
      <KeyFeatures />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
